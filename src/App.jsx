import "./App.css";
import {Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Nomatch from "./components/Nomatch";
import Product from "./components/Product";
import Feature from "./components/Feature";
import New from "./components/New";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/auth";
import RequireAuth from "./components/RequireAuth";
import { Register } from "./components/Register";
import Form from './components/Form'
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  const [input, setInput] = useState("")
  const [listarr, setListarr] = useState([]);
 
  const onAdd= (todo)=>{
      const AllInputData = {
          name: todo,
          completeadded: false,
        };
        setListarr([...listarr, AllInputData]);
        setInput("");
        navigate('/profile');

  }
  return (
    <div className="App">
      <AuthProvider>
     
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register/>} />
          <Route path="login" element={<Login />} />
          <Route path="form" element={<Form input={input} setInput={setInput} onAdd={onAdd} />} />
          {/* <Route path="product" element={<Product />}>
            <Route index element={<Feature />} />
            <Route path="feature" element={<Feature />} />
            <Route path="new" element={<New />} />
          </Route> */}
          <Route path="profile" element={ <RequireAuth> <Profile listarr={listarr}/></RequireAuth>} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
      </AuthProvider>
    
    </div>
  );
}

export default App;
