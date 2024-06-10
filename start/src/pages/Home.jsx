import React, { useEffect, useState } from 'react'
import Spinner from "../component/Spinner"
import Product from '../component/Product';
function Home() {
    const [loading ,setLoadig] = useState(false);
    const [posts,setPosts] = useState([]);
    const Api_key='a1dc8d7012464cafbc0733a5f8cec196';
    //const Url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${Api_key}`;
     const Url = `https://newsapi.org/v2/everything?q=tesla&from=2024-05-10&sortBy=publishedAt&apiKey=${Api_key}`
  
 async function fetchData(){
    setLoadig(true);
    try {

        const response = await fetch(Url);
        const ans =await response.json();
     
        setPosts(ans.articles)
        
        console.log(ans.articles)
        
    } catch (error) {
        console.error(error);
    }
   setLoadig(false)
 }



 useEffect( ()=>{
    fetchData();
 },[]);




    return (
    <div>
      {
        loading ? <Spinner/> :
        posts.length > 0 ?
        <div>
        {

         posts.map( (post)=>(<Product key={post.id}   post={post} /> ))

        }
        </div>
        :<div>
        {

         <div>You went wrong way</div>

       }
        </div>

      }
    </div>
  )
}

export default Home