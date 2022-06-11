import {useState} from 'react'

function User(){

    const [registerUserName, setRegisterUserName] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const url = "http://localhost:3001/"

    const login = async () =>{
        const sendData = {
            email:loginEmail,
            password: loginPassword,
        }

        let response = await fetch(`${url}login`,{
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },    
            body:JSON.stringify(sendData)
        })

        const data = await response.json()
        console.log(data)
        return data
    }

    const register = async () =>{
        const sendData = {
            name:registerUserName,
            email: registerEmail,
            password: registerPassword,
            password_confirmation: registerPasswordConfirm
        }

        let response = await fetch(`${url}register`,{
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },    
            body:JSON.stringify(sendData)
        })

        const data = await response.json()
        console.log(data)
        return data
    }

    const getUser = async () =>{
        let response = await fetch(`${url}user`)
        const data = await response.json()
        console.log(data)
        return data
    }
    return (
        <>
        <div>
            <h1>Register</h1>
            <input placeholder="Nombre" onChange={e => setRegisterUserName(e.target.value)} ></input>
            <input placeholder="Correo"  onChange={e => setRegisterEmail(e.target.value)} ></input>
            <input placeholder="Contraseña"  onChange={e => setRegisterPassword(e.target.value)} ></input>
            <input placeholder="Contraseña"  onChange={e => setRegisterPasswordConfirm(e.target.value)}></input>
            <button onClick={register}>submit</button>
        </div>
        <div>
            <h1>Login</h1>
            <input placeholder="Correo"  onChange={e => setLoginEmail(e.target.value)}></input>
            <input placeholder="Contraseña"  onChange={e => setLoginPassword(e.target.value)}></input>
            <button onClick={login}>submit</button>

        </div>

        <div>
            <h1>Obtener usuario</h1>
            <button onClick={getUser}>submit</button>
        </div>
        </>
    )
}

export {User}