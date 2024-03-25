import { useEffect, useState } from 'react'

function Coursel({demo}){
 const [imglist,setimglist]=useState(demo)
 const [count,setcount]=useState(0)
 
 function Next(){
   if(count===imglist.length-1){
     setcount(0)
   }else{
     setcount((count)=>count+1)
    }
 }

 function Previous(){
   if(count===0){
     setcount(imglist.length-1)
   }else{
   setcount((count)=>count-1)
   }
 }

 useEffect(function(){
   const timer= window.setInterval(()=>{
     Next()
   },1000)

   return ()=> window.clearInterval(timer)
 },[count])
 
 
 return <div className="container">
   <div className="imgdiv">
     <img src={imglist[count].imageUrl} alt="imgpicture" className="img"/>
     <div>{imglist[count].title}</div>
   </div>
   
   <div>{imglist[count].description}</div>

   <div className="btn-div">
     <button onClick={Previous} className="btn">Previous</button>
     <button onClick={Next} className="btn">Next</button>
   </div>
 </div>
  
}

export default Coursel