import axios from "axios";
import { useEffect, useState } from "react"


const Cart = () => {
   
  const [photos , setPhotos] = useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(res=>{
      setPhotos(res.data);
    })
  },[])

  return (
    <div className="container-fluid" style={{backgroundColor:'mediumaquamarine'}}>
      <h4 className="d-flex justify-content-center align-content-center mt-2 fw-bold text-bg-secondary">JSON API PHOTOS</h4>
     <div className="row">
     {
        photos.map(photo=>{
          return(<>
          <div className="col-lg-3">
          <div className="card text-center mt-4 p-2">
              <div className="card-text">
                <p style={{fontWeight:'bold'}}>Photo id :- {photo.id}</p>
              </div>
              <div className="card-title">
                {photo.title}
              </div>
              <div className="card-img">
                <img src={photo.url} width={'150'} height={'150'}  alt="" />
              </div>
          </div>
          </div>
          </>)
        })
      }
     </div>
    </div>
  )
}

export default Cart
