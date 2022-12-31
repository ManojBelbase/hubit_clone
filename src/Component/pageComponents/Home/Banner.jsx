// import React,{useEffect, useState} from 'react'

// function Banner() {
//     const [Index, setIndex] = useState(0)
//     const [first, setfirst] = useState([
//         {title:"kisan"},
//         {title:"kisan mahat"},
//         {title:"kisan m"},
//         {title:"kis"},

//     ])
//     useEffect(() => {
//       let interval=setTimeout(() => {
//         if(first.length-1===Index){
// setIndex(0)
//         }else{
//             setIndex(pre=>{
//                 return pre+1
//             })
//         }
//       }, 3000);
    
//       return () => {
//         clearTimeout(interval)
//       }
//     }, [Index])
    
//   return (
//     <div>
//         {
//             first.map((val,i)=>{
//                 return <div key={i} className={`bg-green-400 h-44 w-screen transition-all flex items-center justify-center absolute top-20 left-10 right-10 duration-1000 delay-75 
//                 ${i===Index?'translate-x-0 z-20 opacity-100':'-translate-x-full -z-20 opacity-0'}
//                 `}>
//         <div>{val.title}</div>
//                 </div>
//             })
//         }
      
//     </div>
//   )
// }

// export default Banner
