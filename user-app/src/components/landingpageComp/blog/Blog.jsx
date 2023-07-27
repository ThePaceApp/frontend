import React from 'react'
import "./blog.css"

const Blog = ({BlogDatas,addToCart,handleShowCart}) => {
  return (
    <div className='blog'>
        <div className="blogDetails">
            <h3>Latest blog post</h3>
            <p>Article you will love</p>
        </div>
        {BlogDatas.map((BlogData) => (
        <div className="blogDetail" key={BlogData.id}>
            <div className="blogImg">
            <img src={require("../../../assets/" + BlogData.pictures + `.png`)}  alt="BlogImg"  />
            </div>
            <div className="bloginfo">
                <div className="date">
                  <p>{BlogData.date}</p>
                  <h3>1O  tips to get prepared for resumption after COVID-19 holiday.</h3>
                  <p style={{fontSize:'0.8rem'}}>After 100 years of lock down, the Nigerian goverment as finally lifted the restriction on secondary schools. The was announed at the ...</p>
                  <button className='readBtn' onClick={() => addToCart(BlogData)}> <strong onClick={()=>handleShowCart(true)}>Read more</strong></button>            
                </div>
              </div>
            </div>
        ))}
        <button  className='readBtn' style={{marginTop:"30px",width:'200px'}}><strong>Read more amazing articles</strong></button>
    </div>
  )
}

export default Blog