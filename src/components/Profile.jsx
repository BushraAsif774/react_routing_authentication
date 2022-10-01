import { useNavigate } from "react-router-dom";
import {Auth} from "./auth"
const Profile = (props) => {
    const auth= Auth();
    const navigate= useNavigate();

    // const handleLogout=()=>{
    //     auth.logout();
    //     navigate('/');
    // }
    console.log(props.listarr);
    
    return ( 
        <div>
            Welcome {auth.user}
            <br />
            <button onClick={()=>{navigate('/form')}} >Add New Todo</button>
            {props.listarr.map((item)=>{
                
                return <li>{item.name}</li>
            }) }
            {/* <button onClick={handleLogout}>Logout</button> */}
        </div>
      );
}
 
export default Profile;