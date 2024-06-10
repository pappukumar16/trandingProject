import React from 'react'
import "./Product.css"
function Product({post}) {
  return (
    <div className='product'>
      
      <div className="discription">
      <p >{post.source.name}</p>
            <p>Author : {post.author}</p>
            <p>Title : {post.title}</p>
        
      </div>
          
    
        
        <div className='img'>
            <img src={post.urlToImage}/>
        </div>

        
           <div className='discription'>
           <p>discreptions : {post.description}</p>
           <p> constent : {post.content}</p>
           </div>


    



       
    </div>
  )
}

export default Product