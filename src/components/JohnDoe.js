
import React from 'react';
import Col from "reactstrap/es/Col";


function JohnDoe() {
    return(

            <div className="card card0">
                <div className="card-header ">
                </div>
                <div className="card-body  text-center">
                    <div className="avatar">
                        <img className="ava ava-pro" src="./icons/Rectangle%20Copy%2028.png" alt=""/>
                    </div>
                    <div className="info">
                        <h3 className="mt-4 ">John Doe</h3>
                        <p>Graphic Designer at Self Employed</p>
                    </div>
                    <hr/>
                        <div className="following font-family-semibold">
                            <p>Following</p><span>34</span>
                        </div>
                        <hr/>
                            <div className="following font-family-semibold">
                                <p>Followers</p> <span>155</span>
                            </div>
                            <hr/>
                                <a href="#" className="font-family-semibold red-link">View Profile</a>
                </div>
            </div>

    )
}
export default JohnDoe;