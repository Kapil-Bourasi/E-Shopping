import { useEffect, useState } from 'react'
import { Link,Outlet, useParams } from 'react-router-dom';



const ProductDetails = () => {
  const [ product, setProducts] = useState({});
    
  const params = useParams();

  useEffect(()=>{
          fetch(`https://fakestoreapi.com/products/${params.id}`)
          .then(res => res.json())
          .then(data =>{
            setProducts(data)
          });
  },[params]);

  return (
    <>
    <div className='container-fluid d-flex justify-content-center align-items-center' >
      <div className='row'>
          <div className='col text-center p-2'>
            <div style={{width:'400px', height:'400px'}}>
            <h4 className='mt-3'>Product Details</h4>
            <dt>Title</dt>
            <dd style={{color:'darkcyan', fontWeight:'bold'}}>{product.title}</dd>
            <dt>Price</dt>
            <dd style={{fontFamily:'algerian', fontWeight:'bold', color:'red'}}>$ { ''}{product.price}</dd>
            <dt>Category</dt>
            <dd>{'★' } {product.category}</dd>
            <dt>Preview</dt>
            <dd><img src={product.image} className='p-2' width={'150'} height={'150'} alt="" /></dd>
            <div className='d-flex justify-content-between mt-5'>
            <Link to={'/'} > <button className='btn btn-warning'>Back to Products</button></Link>
            <Link className='text-decoration-none' to={`ratings/${product.id}`}><button className='btn btn-success'>Ratings & Description</button></Link>
            </div>
            </div>

          </div>
          <div className='col'>
          <Outlet></Outlet>
          </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetails
