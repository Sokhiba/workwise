import React from 'react';
function TopProfile() {
    return(
        <div className="card card3 mt-3">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="font-family-semiboldbold">Top Profiles</h4>
                <a href="#">
                    <div className="more"></div>
                    <div className="more"></div>
                    <div className="more"></div>
                </a>
            </div>
            <div className="card-body  ">
                     <div className={"d-flex tree "}>
                         <div className="card mr-3 ">
                             <div className="card-body text-center bg-white ">
                                 <div className="d-flex  justify-content-center">
                                     <img className="ava " src="./icons/Rectangle%20Copy%2028.png" alt=""/>
                                 </div>
                                 <div className="last-active">
                                     <h5 className="mt-4 ">John Doe</h5>
                                     <p>Graphic Designer</p>
                                     <button type="button" className="btn greenBt mr-1 ">Follow</button>
                                     <button type="button" className="btn redBt mr-1"><span
                                         className="icon icon-email icon-white"></span></button>
                                     <button type="button" className="btn blueBt ">Hire</button>
                                     <hr/>
                                     <a href="#" className="font-family-semibold">View Profile</a>
                                 </div>
                             </div>
                         </div>
                         <div className="card mr-3 ">
                             <div className="card-body text-center bg-white ">
                                 <div className="d-flex  justify-content-center">
                                     <img className="ava " src="./icons/Rectangle%20Copy%2028.png" alt=""/>
                                 </div>
                                 <div className="last-active">
                                     <h5 className="mt-4 ">John Doe</h5>
                                     <p>Graphic Designer</p>
                                     <button type="button" className="btn greenBt mr-1">Follow</button>
                                     <button type="button" className="btn redBt mr-1"><span
                                         className="icon icon-email icon-white "></span></button>
                                     <button type="button" className="btn blueBt">Hire</button>
                                     <hr/>
                                     <a href="#" className="font-family-semibold">View Profile</a>
                                 </div>
                             </div>
                         </div>
                         <div className="card ">
                             <div className="card-body text-center bg-white ">
                                 <div className="d-flex  justify-content-center">
                                     <img className="ava " src="./icons/Rectangle%20Copy%2028.png" alt=""/>
                                 </div>
                                 <div className="last-active">
                                     <h5 className="mt-4 ">John Doe</h5>
                                     <p>Graphic Designer</p>
                                     <button type="button" className="btn greenBt mr-1">Follow</button>
                                     <button type="button" className="btn redBt mr-1"><span
                                         className="icon icon-email icon-white"></span></button>
                                     <button type="button" className="btn blueBt">Hire</button>
                                     <hr/>
                                     <a href="#" className="font-family-semibold">View Profile</a>
                                 </div>
                             </div>
                         </div>

                     </div>


            </div>
        </div>
    );
}
export default TopProfile;