import { useSelector } from 'react-redux'
import TodoCard from './TodoCard';
const List = () => {
    //! Storedaki verilere abone olma 
    //! Direk store'u return edersek uyarı verir(hem performans yogunluğu hemde  her state değişiminde render olma durumu olur ).
    const storeState = useSelector((store) => store.todoReducer)
    console.log(storeState.todos);
    return (
        <div>{storeState.todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)}</div>
    )
}

export default List
