import React from 'react'



const Scroll = (props) =>{

 return  (
 <div style={{overflowY: 'Scroll', border:'5px solid #5795C4', height:'600px'}}>
 {props.children}
 </div>

)
}

export default Scroll