import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { Auth } from "./auth";

const Login=()=>{
    const navigate = useNavigate();
    const [user, setUser]=useState('');
    const auth= Auth();

    const handleLogin=()=>{
        auth.login(user);
        navigate('/profile');

    }
    return(
        <div>
            <form action="">
            <input type="text" onChange={(e)=>{setUser(e.target.value)}} placeholder="Enter Name" />
            <br />
            <input type="password"  placeholder="Enter Passwod" />
            <br />
            <button onClick={handleLogin} >Login</button>
            <br />
            <button onClick={()=>{navigate(-1)}}>Go back</button>
            </form>
        </div>
    );
}
export default Login;