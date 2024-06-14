import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Products = () => {

    const [products , setProducts] = useState([])
    const [search , setSearch] = useState([]);

    function LoadProducts(){
        axios.get('https://fakestoreapi.com/products')
         .then(res =>{
        setProducts(res.data)
        setSearch(res.data)
        .catch((err)=>{
            console.log(err)
        })
    })
    }

    const FilterChange =(e)=>{
        setSearch(products.filter(f=>f.category.toLowerCase().includes(e.target.value)))
    }

    useEffect(()=>{
        LoadProducts();
    },[])


  return (
    <>
    <div className='container-fluid mt-1 ' style={{backgroundColor:'beige'}} >
       <div className='d-flex justify-content-around'> <h4 className=' w-25 text-center shadow text-bg-info text-white rounded-pill p-2'>All Products</h4>
       <input type="search" onChange={FilterChange} className='rounded-pill p-1 w-25 text-start' placeholder='search your products' /></div>

        <div className='row'>
            {
                search.map((product)=>{
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
