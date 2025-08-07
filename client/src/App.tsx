import { Outlet } from "react-router-dom";
import NavBar from './components/NavBar'




function App() {

  return (
    <>
        <NavBar />
        <main className="mt-2 w-full p-4 md:w-3xl xl:w-4xl m-auto">
            <Outlet /> 
        </main>
    </>
  )
}

export default App
