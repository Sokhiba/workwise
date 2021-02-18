
import React from 'react';
import People from "./People";

function MostViewed() {
    return(

            <div className="card card2 mt-3 pl-0 pr-0">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h6 className="font-family-bold">Most Viewed People </h6>
                        <a href="#">
                            <div className="more"></div>
                            <div className="more"></div>
                            <div className="more"></div>
                        </a>
                    </div>
                    <hr/>
                     <People/>
                     <People/>
                     <People/>
                     <People/>
                     <People/>
                     <People/>
                    <div className="text-center">
                        <a href="#" className="red-link font-family-semibold ">View More</a>
                    </div>
                </div>
            </div>

        )


}
export default MostViewed;