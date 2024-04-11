import { useRef } from "react"
import { useDispatch } from "react-redux"
import ActionTypes from "../reducers/actionTypes"
import api from "../utils/api"
import { updateTodo } from "../reducers/actionss/todoActions"

const Modal = ({ close, todo }) => {
    const dispatch = useDispatch()

    const inputRef = useRef(
    const handleClick = (e) => {
        const newText = inputRef.current.value

        const updatedTodo = { ...todo, text: newText, creared_at: new Date().toLocaleDateString };
        api.put(`/todos/${todo.id}`, updatedTodo).then(() => { dispatch(updateTodo(updatedTodo)) }).catch((err) => alert(err))
        dispatch({
            type: ActionTypes.UPDATE,
            payload: updatedTodo,
        });
        close();

    }
    return (
        <div>
            <div className="modal bg-black bg-opacity-75 d-block text-dark " s>
                <div className="modal-dialog modal-dialog-centered d-flex justify-content-center align-items-center  w-50 ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Görev Düzenle</h5>
                            <button type="button" className="btn-close" onClick={close} ></button>
                        </div>
                        <div className="modal-body">
                            <label>Görev İsmi</label>
                            <input defaultValue={todo.text} ref={inputRef} type="text" className="form-control shadow  mt-3" />
                        </div>
                        <div className="modal-footer">
                            <button onClick={close} type="button" className="btn btn-secondary" >İptal Et</button>
                            <button onClick={handleClick} type="button" className="btn btn-primary">Kaydet</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
