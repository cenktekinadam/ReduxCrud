import { useDispatch } from 'react-redux'
import { v4 } from 'uuid';
import { addTodo } from '../reducers/actionss/todoActions';
import api from '../utils/api';
import { toast } from 'react-toastify';


const AddForm = () => {
    //Bu bileşen içeriisnde Dispatch metodunu kullanmamızı sağlar useDispatch hooksu
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: v4(),
            text: e.target[0].value,
            is_done: false,
            created_at: new Date().toLocaleDateString(),
        }

        const promise = api.post('/todos', newTodo).then(() => dispatch(addTodo(newTodo)))
            .catch((err) => {
                throw new Error();
            })

        toast.promise(
            promise,
            {
                pending: 'Veritabanı Yanıtı Bekleniyor',
                success: 'Veridabanına veri eklendi 👌',
                error: 'Veritabanı güncellenirken Hata oluştu 🤯'
            })
        toast.promise(resolveAfter3Sec)
        //! Veriyi Store kaydet
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit} className='d-flex  gap-3 my-5'>
            <input type="text" className='form-control' placeholder='örn: Typescript Projesi' />
            <button className='btn btn-warning '>Send</button>
        </form>
    )
}

export default AddForm
