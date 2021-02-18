import React from 'react';

function Help() {
 return(
     <div className="card card4 mt-3">
         <div className="card-body">
             <ul className="nav">
                 <li className="nav-item"><a href="#" className="nav-link">Help Center</a></li>
                 <span className=" mt-2">|</span>
                 <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                 <span className=" mt-2">|</span>
                 <li className="nav-item"><a href="#" className="nav-link">Privacy Policy</a></li>
                 <span className=" mt-2">|</span>
                 <li className="nav-item"><a href="#" className="nav-link">Community Guidelines</a></li>
                 <span className=" mt-2">|</span>
                 <li className="nav-item"><a href="#" className="nav-link">Cookies Policy</a></li>
                 <span className=" mt-2">|</span>
                 <li className="nav-item"><a href="#" className="nav-link">Career</a></li>
                 <span className=" mt-2">|</span>
                 <li className="nav-item"><a href="#" className="nav-link">Language</a></li>
                 <span className=" mt-2">|</span>
                 <li className="nav-item"><a href="#" className="nav-link">Copyright Policy</a></li>
             </ul>
             <div className="d-flex justify-content-between align-items-center">
                 <div className="logo w-50 font-family-bold">
                     <span><img className="w-25" src="./icons/Logo2.PNG" alt=""/></span> Workwise
                 </div>
                 <div className="copyright font-family-semibold">
                     <span className="icon icon-copyright"></span> Copyright 2020
                 </div>
             </div>


         </div>

     </div>
 )
}
export default Help;