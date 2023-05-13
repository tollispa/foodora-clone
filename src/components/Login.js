import {TextField} from "@mui/material"
import {Link} from "react-router-dom"
import {useState} from "react"
import axios from "axios"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const registerUser = () => {
        console.log(password, username)
    }

    return (
        <div className="h-screen w-full flex items-center align-center justify-center">
           <form className=" p-10 shadow-lg rounded text-center" onSubmit={registerUser}>
            <img className="w-full h-[200px]" src="https://th.bing.com/th/id/OIP.7MefJ2De5UvL-GLzfp5gtAHaHa?pid=ImgDet&rs=1" alt="/"/>
            <p className="m-3"><TextField className="" variant="outlined" label="Username"
            onChange={e => setUsername(e.target.value)}
            /><br/>
                </p>
                <p className="m-3"><TextField className="m-2" variant="outlined" label="Password"
                onChange={e => setPassword(e.target.value)}
                /><br/>
                </p>
            <button className="bg-blue-400 text-white p-2 w-[100%]  rounded hover:bg-blue-500">Login</button>
            <p className="text-sm mt-5">Don't have an account? Go to <Link to="/register" className="text-blue-600 underline">Sign Up</Link></p>

           </form>
        </div>
    )
}

export default Login