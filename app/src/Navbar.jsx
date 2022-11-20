import React, { useState, useEffect } from 'react'
import './Navbar.css';
import axios from 'axios';

const Navbar = () => {
  let api = "https://inshorts.deta.dev/news?category=science";
  let [product, setproduct] = useState([]);

  async function fetchData() {
    let response = await axios(
      api
    );
    let user = await response.data;
    setproduct(user.data);
  }
  
  useEffect(() => {
    fetchData();
  },[])
  
  console.log(product)




  return (
    <>
   
      <nav className='navbar'>
        <div className="navbar_item1">
          <h4></h4>
        </div>
        <div className="navbar_item2">
          <div className="navbar_items">sports </div>
          <div className="navbar_items">entertianment</div>
          <div className="navbar_items">fitnes</div>
          <div className="navbar_items">business</div>
          <div className="navbar_items">startup</div>
          <div className="navbar_items">science</div>
        </div>
        <div className="navbar_item3">++</div>
      </nav>

    
      <div className='main'>
      {
      product.map((result)=>{
        return(
          <>
          <div className='main_items' >
            <img src={result.imageUrl} alt="" width="220px"/>
          <h3>{result.title}</h3>
          <p>{result.content}</p>

        </div>
          </>
        )
      })
    }
        
      </div>
    </>
  )
}

export default Navbar