import { useState } from 'react';
import { useDispatch } from 'react-redux'
import Modal from './Modal';
import { deleteTodo, updateTodo } from '../reducers/actionss/todoActions';
import api from '../utils/api';
import { toast } from 'react-toastify';

const TodoCard = ({ todo }) => {

    const [isOpen, setIsOpen] = useState(false)
    //? Sİlme Fonksiyonunu Reducera iletmemiz gerekli bunun için dispatche ihtiyacımız var 
    const dispatch = useDispatch();
    const handleDelete = () => {
        const promise = api.delete(`/todos/${todo.id}`).then(() => dispatch(deleteTodo(todo.id))).catch((err) => {
            throw new Error();
        })

        toast.promise(
            promise,
            {
                pending: 'Veritabanı Yanıtı Bekleniyor',
                success: 'Veritabanından silindi 👌',
                error: 'Veritabanı güncellenirken Hata oluştu🤯'
            })
        toast.promise(resolveAfter3Sec)
    }
    const setSituation = () => {
        const updated = { ...todo, is_done: !todo.is_done }
        const promise = api.put(`/todos/${todo.id}`, updated).then(() => {
            dispatch(updateTodo(updated))
        }).catch((err) => {
            throw new Error();
        })

        toast.promise(
            promise,
            {
                pending: 'Veritabanı Yanıtı Bekleniyor',
                success: 'Veritabanı Güncellendi👌',
                error: 'Veritabanı güncellenirken Hata oluştu 🤯'
            })
        toast.promise(resolveAfter3Sec)
    }



    return (
        <div className="border shadow-lg p-4 my-5 ">
            <h5>{todo.text}</h5>
            <h6>{todo.is_done ? 'Tamamlandı' : 'Devam Ediyor'}</h6>
            <p>{todo.created_at}</p>
            <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">Düzenle</button>
            <button onClick={setSituation} className="btn btn-success mx-3">{todo.is_done ? 'Revize' : 'Tamamla'}</button>
            <button onClick={handleDelete} className="btn btn-danger">Silme</button>
            {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
        </div>
    )
}

export default TodoCard;
