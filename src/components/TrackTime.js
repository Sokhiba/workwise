import React from 'react';
function Track() {
   return(
       <div className="card  pl-0 pr-0">
           <div className="card-body text-center  ">
               <div className="d-flex justify-content-center"><img src="./icons/Logo2.PNG" alt=""/></div>
               <div className="last-active  mt-1">
                   <h5>Track Time on Workwise</h5>
                   <p>Pay only for the Hours worked.</p>
               </div>
               <hr/>
                   <a href="#"><h6 className="mb-0 font-family-bold mt-2">SIGN UP</h6></a>
                   <a href="#" className="red-link font-family-semibold"><p>Learn More</p></a>

           </div>

       </div>
   )
}
export default Track;