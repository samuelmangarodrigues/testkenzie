import styled from "styled-components";



export const ContainerInpList=styled.div`
box-shadow: 0px 0px 12px;
display: flex;
flex-direction: column;
width: 300px;
border: 1px solid none transparent;
background-color: white;
`
export const ContainerMain=styled.div`
display:flex;
flex-direction: column;
align-items: center;
`

export const ContainerShadowEffect=styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 40px;
background-color:#80808038;
border-radius:5px;
`
export const Input=styled.input`
height: 40px;
border: 0 none;
outline: 0;
font-family: "Roboto",sans-serif;
font-style: italic;
font-size: 20px;
`

export const ButtonRegisterTask=styled.button`
background-color: white;
color: lightgray;
border: none;
cursor: pointer;
:hover{
    color: green;
}
`

export const CointainerButtonInput=styled.div`
display: flex;
align-items: center;
`
export const ContainerInputAndErrorMessage=styled.div`
display:flex;
flex-direction:column;
align-items:center;
`


export const ErrorMessage=styled.div`
font-family:sans-serif;
font-size: 13px;
color: red;
margin-top: 10px;
`

export const ButtonEdit=styled.button`
background-color:darkblue;
border: none;
font-family: "Roboto",sans-serif;
width: 100px;
height: 30px;
cursor: pointer;
text-align: center;
border-radius: 4px;
color: lightgray;
margin-top: 4px;
:hover{
    background-color: blue;
    color: white;
    transition: 0.1s;
}

`