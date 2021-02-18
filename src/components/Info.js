import React from 'react';

function Info() {
    return(
        <div className="card card2 mt-3 mb-0">
            <div className="card-body ">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img className="ava" src="./icons/Rectangle%20Copy%2028.png" alt=""/>
                            <div className="last-active ml-3">
                                <h5 className="font-family-bold">John Doe</h5>
                                <p><span className="icon icon-time"></span> 3 min ago</p>
                            </div>
                    </div>
                    <a href="#">
                        <div className="more"></div>
                        <div className="more"></div>
                        <div className="more"></div>
                    </a>
                </div>
                <div className="d-flex last-active align-items-center mt-1">
                    <p>Epic Coder</p>
                    <p><span className="icon icon-telegram ml-3 mr-1"></span>India</p>
                    <button type="button" className="btn greenBt ml-auto mr-1"><span
                        className="icon icon-bookmark icon-white"></span></button>
                    <button type="button" className="btn redBt email"><span
                        className="icon icon-email icon-white"></span></button>

                </div>

                <h6 className="font-family-bold mt-3 mb-3">Senior Wordpress Developer</h6>
                <button type="button" className="btn blueBt">Full Time</button>
                <span className="font-family-semibold ml-2">$30/hr</span>

                <div className="last-active mt-3">
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ipsam laudantium maiores repellat velit? Aliquid, fuga, omnis! Earum!</p>
                    <a href="#" className="font-family-semibold">view more</a>
                </div>

                <div className="subjects mt-3">
                    <button type="button" className="btn">HTML</button>
                    <button type="button" className="btn">CSS</button>
                    <button type="button" className="btn">PHP</button>
                    <button type="button" className="btn">JavaScript</button>
                    <button type="button" className="btn">Wordpress</button>
                </div>
                <hr/>

                    <div className="bot-sec d-flex last-active align-items-center font-family-regular ">

                        <p className="mr-2"><span className="icon icon-heart mr-1"></span>Like</p>
                        <div>
                            <img className="ava humans" src="./icons/photo_2020-12-01_17-46-02.jpg" alt=""/>
                                <img className="ava humans" src="./icons/Rectangle%20Copy%2028.png" alt=""/>
                                    <img className="ava humans" src="./icons/photo_2020-12-01_17-46-02.jpg" alt=""/>
                                        <img className="ava humans" src="./icons/Rectangle%20Copy%2028.png" alt=""/>
                                            <img className="ava humans" src="./icons/photo_2020-12-01_17-46-02.jpg"
                                                 alt=""/>
                        </div>
                        <p><span className="icon icon-comment ml-5 mr-1"></span>Comment 15</p>
                        <p className="ml-auto"><span className="icon icon-view mr-1"></span>Views 50</p>
                    </div>
            </div>
        </div>
    );
}
export default Info;