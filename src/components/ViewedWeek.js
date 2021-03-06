import React from "react";
import Jobs from "./Jobs";
function ViewedWeek() {

    return(
        <div className="card card2 mt-3 pl-0 pr-0">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h6 className="font-family-bold">Most Viewed This Week </h6>
                    <a href="#">
                        <div className="more"></div>
                        <div className="more"></div>
                        <div className="more"></div>
                    </a>
                </div>
                <hr/>
                    <Jobs/>
                    <Jobs/>
                    <Jobs/>
            </div>
        </div>
    )
}
export default ViewedWeek;