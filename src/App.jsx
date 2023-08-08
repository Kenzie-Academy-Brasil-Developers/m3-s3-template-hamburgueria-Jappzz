import { HomePage } from "./pages/HomePage"
import './styles/index.scss'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

function App() {
  return (
    <>
      <HomePage />
      <ToastContainer autoClose={1.5 * 1000} position="bottom-right"/>
    </>
  )
}

export default App
