import React, { useEffect, useState } from 'react'

const ReadMore = ({cart}) => {
    const [CART, setCART] =useState([])
  
  useEffect(() =>{
      setCART(cart)
  },[cart])



   return (   
    <div className='cart'>
    hello
        <div className='cartContainer'>
        {
          CART?.map((cartItem)=>{
            return(
              <div>
                <div className="cartSms">
                  <div className="cartdetails">
                    <img width={'150px'} src={require("../../../assets/" + cartItem.pictures + `.png`)}  alt="" />
                      <div className="cartdetail">
                      <div className="name">
                        <span>{cartItem.name}</span>
                      </div>
                    </div>
                    </div>                     
                </div>  
                <hr /> 
                </div> 
                )   
              } ) 
            }    
          </div> 
    </div>
  )
}

export default ReadMore