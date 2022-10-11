import {FcCheckmark} from "react-icons/fc"
import { AlignModal, ButtonCheck, ButtonDelete, ButtonEdit, Checked, CheckWordType, ContainerButtonEditAndDelete, ContainerModal, ContainerTodoList, NonCheckWordType } from "./styles"
import {RiDeleteBin6Fill} from "react-icons/ri"
import {AiFillEdit} from "react-icons/ai"
import {Modal} from "@mui/material"
import { Input } from "../../pages/PageMain/styles"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { Dispatch, SetStateAction, useState } from "react"


interface ITodoProps{
    description:string
    completed:boolean
    handleUpdateClick: (id:number)=> void
    handleDeleteClick: (id:number)=>void
    getOneTask:(id:number)=>void
    id:number
    setOpen:Dispatch<SetStateAction<boolean>>
}

const TodoList=({description,completed,handleUpdateClick,handleDeleteClick,getOneTask,setOpen,id}:ITodoProps)=>{
    

    return (
        <ContainerTodoList>
            <Checked>{completed?<FcCheckmark/>:
                <ButtonCheck onClick={()=> handleUpdateClick(id)}/>
            }</Checked>
            <span>{completed?<CheckWordType>{description}</CheckWordType>:<NonCheckWordType>{description}</NonCheckWordType>}</span>
            <ContainerButtonEditAndDelete>
                <ButtonDelete onClick={()=> handleDeleteClick(id)}>
                    <RiDeleteBin6Fill size={20}/>
                </ButtonDelete>
                {!completed?
                <ButtonEdit onClick={()=>{
                    getOneTask(id)
                    setOpen(true)
                }}>
                    <AiFillEdit size={20}/>
                </ButtonEdit>:
                    false}
            </ContainerButtonEditAndDelete>
        </ContainerTodoList>
    )
}

export default TodoList