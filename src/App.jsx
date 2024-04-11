import { useEffect } from "react"
import AddForm from "./components/AddForm"
import List from "./components/List"
import { useDispatch } from "react-redux"
import { setTodos } from "./reducers/actionss/todoActions"
import api from "./utils/api"
const App = () => {
  const dispatch = useDispatch()
  // Kullanıcı Sayfa girince apidaki verileri alve reducera Aktar
  useEffect(() => {
    api.get('/todos').then((res) => dispatch(setTodos(res.data))).catch((err) => console.log(err))
  }, [])


  return (
    <div className="min-vh-100    vw-100  bg-dark text-white">
      <div className="container  p-5">
        <h2 className="text-center ">REDUX <span className="text-warning">CRUD</span></h2>
        <AddForm />
        <List />
      </div>
    </div>
  )
}

export default App
