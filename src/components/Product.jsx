import { Link, Outlet } from "react-router-dom"
const Product = ()=>{
    return(
        <div>
           <p>This is Product Page</p> 
              <nav>
                <Link to="feature">Featured Products</Link>
                <Link to="new">New Products</Link>
              </nav>
              <Outlet/>
        </div>
    )
}
export default Product;