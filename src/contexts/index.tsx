import { ReactNode } from "react"
import TodoProvider from "./TodoContext"

interface IChildren{
    children:ReactNode
}


const AppProvider=({children}:IChildren)=>{
return (
    <>
        <TodoProvider>{children}</TodoProvider>
    </>
)
}
export default AppProvider