import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";

const Navbar = () => {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{
      axios.get('https://fakestoreapi.com/products/categories')
      .then(response=>{
          setCategories(response.data);
      })
  },[]);

  function ReloadCat(){
    window.location.reload();
  }

  return (
    <header className="sticky-top" >
      <div>
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            {" "}
            E-Shopping
          </Link>
          {
            categories.map(category=>{
                return(<>
                <div onClick={ReloadCat}  key={category} className="item">
                <Link style={{textDecoration:'none' , color:'white'}} to={`/products/${category}`}>{category}</Link>
                </div>
                </>)
            })
          }
          <Link to={"/cart"} className="cart">
            JSON PHOTOS 
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
