import React from 'react';
import Col from "reactstrap/es/Col";

function PostJob() {
   return(
           <div className="card card1">
               <div className="line"></div>
               <div className="card-body d-flex align-items-center">
                   <img className="ava" src="./icons/Rectangle%20Copy%2028.png" alt=""/>
                       <button type="button" className="btn ml-auto mr-3 rounded-0"> Post a Project</button>
                       <button type="button" className="btn rounded-0">Post a Job</button>
               </div>
           </div>


   );
}
export default PostJob;