import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Products = () => {

    const [products , setProducts] = useState([])

    function LoadProducts(){
        axios.get('https://fakestoreapi.com/products')
         .then(res =>{
        setProducts(res.data)
    })
    }

    useEffect(()=>{
        LoadProducts();
    },[])


  return (
    <>
    <div className='container-fluid mt-1 ' style={{backgroundColor:'beige'}} >
        <h4 className='d-flex justify-content-center text-bg-info text-white'>All Products</h4>
        <div className='row'>
            {
                products.map((product)=>{
                    return(<>
                    <div className='col-lg-3 col-md-6 p-2 text-center'>
                        <div className='card' style={{width:'18rem'}}>
                        <Link to={`/product/${product.id}`} style={{ marginRight:'50px',display:'flex',justifyContent:'center',alignItems:'center'}}> 
                        <img src={product.image} style={{width:'200px', height:'200px'}} alt="" className='card-img-top p-2 ms-5'/>
                        </Link>
                        <div className='card-body'>
                            <div className='card-title' style={{ whiteSpace:'nowrap',textOverflow:'ellipsis', width:'250px', overflow:'auto'}}>{product.title}</div>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-primary'>$ { ''}{product.price}</button>
                            <Link to={`/product/${product.id}`}><button  className='btn btn-warning'>Know More</button></Link>
                        </div>
                        </div>
                    </div>
                    </>)
                })
            }
        </div>
    </div>
    </>    
  )
}

export default Products
