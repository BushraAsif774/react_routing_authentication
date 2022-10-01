import { Navigate, useNavigate } from 'react-router-dom';
import { Auth } from './auth'

const RequireAuth = ({children}) => {
    const auth= Auth();

    if (!auth.user){
        return <Navigate to='/login'></Navigate>
    }
  return children
}

export default RequireAuth;