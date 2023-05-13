import {TextField} from "@mui/material"
import {Link} from "react-router-dom"
import {useState} from "react"
import axios from "axios"

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const registerUser = (e) => {
        e.preventDefault()
        axios.post("http://localhost:4000/register", {
            username: username,
            password: password
        }).then((res) => {
            console.log(res)
        }).catch(err => console.log(err))
    }
    return (
        <div className="h-screen w-full flex items-center align-center justify-center">
           <form className=" p-10 shadow-lg rounded text-center" onSubmit={registerUser}>
            <img className="w-full h-[200px]" src="https://th.bing.com/th/id/OIP.Kdo4pzMFCZ5bHw5lk3_ehwAAAA?pid=ImgDet&rs=1" alt="/"/>
            <p className="m-3"><TextField className="" variant="outlined" label="Username"
             onChange={e => setUsername(e.target.value)}
            /><br/>
                </p>
                <p className="m-3"><TextField className="m-2" variant="outlined" label="Password"
                 onChange={e => setPassword(e.target.value)}
                /><br/>
                
                </p>
                <p className="m-3"><TextField className="m-2" variant="outlined" label="Confirm password"/><br/>
                
                </p>
            <button className="bg-blue-400 text-white p-2 w-[100%]  rounded hover:bg-blue-500">Register</button>
            <p className="text-sm mt-5">Already have an account? <Link to="/login" className="text-blue-600 underline">Login</Link></p>

           </form>
        </div>
    )
}

export default Register