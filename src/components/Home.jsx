import { useNavigate } from "react-router-dom";
const Home =()=>{
    const navigate = useNavigate();
    return(
        <div>
            This is Home 
            <br />
            <button onClick={()=>{navigate('/login')}}>Login Page</button>
        </div>
    );
}
export default Home;