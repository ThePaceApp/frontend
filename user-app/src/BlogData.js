import React, { useState } from 'react'
import Blog from './components/landingpageComp/blog/Blog'
import ReadMore from './components/landingpageComp/readmore/ReadMore'

const BlogData = () => {

    const [BlogDatas] =useState([
        {
            id:"1",
            pictures:"Mask",
            date:'Posted by:Olayinka | August 21,2023',
            name:"1O tips to get prepared for resumption after COVID-19 holiday.",
            readmore:"After 100 years of lock down, the Nigerian goverment as finally lifted the restriction on secondary schools. The was announed at the ..."
        },
        {   
            id:"2",
            pictures:"Mask_2",
            name:"Chicken strips",
            price:"1500"
        },
        {
            id:"3",
            pictures:"Mask_3",
            name:"Chicken strips",
            price:"1500"
        },     
    ])
    const [cart,setCart ] = useState([])
      const [showCart, setShowCart]=useState(false)
      const addToCart =(data) =>{
         setCart([...cart, {...data, quantity:1}])
      }
       const handleShowCart=(value)=>{
          setShowCart(value)
      }
  return (
    <div>
    {
        showCart ?
        <ReadMore cart={cart}/> 
        :
        <Blog BlogDatas={BlogDatas} addToCart={addToCart} handleShowCart={handleShowCart}/>
      }
    </div>
  )
}
export default BlogData

