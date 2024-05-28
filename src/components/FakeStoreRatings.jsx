import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const FakeStoreRatings = () => {
     
    const[product,setProduct]= useState({id:0,title:'',price:0,description:'',category:'',image:'',rating:{rate:0,count:0}});

    const params = useParams();

    useEffect(()=>{
       fetch(`https://fakestoreapi.com/products/${params.id}`)
       .then(res => res.json())
       .then(data=>{
        setProduct(data)
       })
    },[params.id]);

  return (
    <>
        <div>
            <h3 className='mt-2'>Ratings & Description </h3>
            <p style={{color:'blue', fontWeight:'bold'}}>Product Id {params.id}</p>
            <span className="badge bg-success rounded p-2">{product.rating.rate}<span className="bi bi-star-fill text-white"></span></span>
            <div className="mt-3">
                <h4>Description</h4>
                <textarea rows='6' cols='60' value={product.description}></textarea>
            </div>
        </div>
    </>
  )
}

export default FakeStoreRatings
