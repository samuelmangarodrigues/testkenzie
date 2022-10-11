import styled from "styled-components";

export const ContainerTodoList=styled.div`
display:flex;
/* box-shadow: 0px 0px 27px; */
justify-content: space-between;
align-items: center;
font-family:'Roboto', sans-serif;
font-size: 20px;
border:1px solid lightgray;
`

export const Checked=styled.span`
margin:5px 5px 0 5px;
border: 1px solid black;
border-radius: 48%;
border-color: lightgray;
padding: 4px;
`

export const NonCheckWordType=styled.p`
word-break: break-all;
`
export const CheckWordType=styled.p`
word-break: break-all;
text-decoration: line-through;
color: #80808059;
`

export const ButtonCheck=styled.button`
width:20px;
height:20px;
border: none;
background-color: white;
cursor: pointer;
`
export const ButtonDelete=styled.button`
border: none;
display: flex;
background-color: white;
color: gray;
cursor: pointer;
align-items: center;
justify-content: center;
margin: 5px 1px 5px 1px;
:hover{
    color: red;
}
`
export const ButtonEdit=styled.button`
border: none;
display: flex;
background-color: white;
color: gray;
cursor: pointer;
align-items: center;
justify-content: center;
margin:5px 1px 5px 1px;
:hover{
    color: yellow;
}
`

export const ContainerButtonEditAndDelete=styled.div`
display:flex;
align-items:center;`


export const ContainerModal=styled.div`
display: flex;
flex-direction: column;
background-color: white;
align-items: center;
padding: 10px;
border-radius: 10px;
font-family: "Roboto",sans-serif;
text-align: center;
width: 300px;
height: 200px;
`
export const AlignModal=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 50px 0 0 0;
`