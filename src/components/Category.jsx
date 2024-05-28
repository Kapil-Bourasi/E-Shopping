import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const FakeStoreProducts = () => {
  const [product, setproducts] = useState([]);

  const params = useParams();

  function LoadCategory() {
    axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
      .then((res) => {
        setproducts(res.data);
      });
  }

  useEffect(() => {
    LoadCategory();
  }, []);

  return (
    <>
      <div className="container-fluid"  style={{backgroundColor:" rgb(223, 248, 116)",}}>
        <div className="row text-center">
          <h2>Category :-  {params.category.toUpperCase()}</h2>
          {product.map((product) => {
            return (
              <>
               <div className="col-lg-4">
                    <div className="card mt-2" style={{width:'300px', height:'300px'}}>
                      <div className="card-img-top mt-2">
                        <img src={product.image} width={'150px'} height={'200px'} alt="" />
                      </div>
                      <div className="card-title">{product.title}</div>
                      <Link to={`/product/${product.id}`}><button  className='btn btn-primary'>View Product Details</button></Link>
                    </div>
                </div>
              </>
            );
          })}
        </div>
        <Link className="d-flex justify-content-center align-content-center text-decoration-none mt-2" to={'/'} > <button className='btn btn-warning'>Back to Products</button></Link>
      </div>
    </>
  );
};
export default FakeStoreProducts;
