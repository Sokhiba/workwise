import React from 'react';

function Comment() {
    return(

        <div className={"card card2"}>
            <div className={"card-body mt-0"}>
                <hr/>
                <div className="d-flex justify-content-center">
                    <div className=" pilus d-flex justify-content-center align-items-center mt-5">
                        <a href="#" className="mb-1">+</a>
                    </div>
                </div>

                <div className="last-active mt-5">
                    <h5 className="font-family-bold">John Doe</h5>
                    <p><span className="icon icon-time"></span> 3 min ago</p>
                    <p className="font-family-semibold mt-2 mb-2">Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="reply  font-family-bold">
                    <span className="icon icon-reply icon-red mr-1"></span>
                    Reply
                </div>
                <div className="last-active mt-4 ml-5">
                    <h5 className="font-family-bold">Jon Doe</h5>
                    <p><span className="icon icon-time"></span> 3 min ago</p>
                    <p className="mt-3 font-family-regular">Hi John</p>
                    <div className="reply ml-1 font-family-semibold d-flex align-items-center mt-3 ">
                        <span className="icon icon-reply mr-1 "></span>
                        <p>Reply</p>
                    </div>
                </div>

                <div className="last-active mt-5">
                    <h5 className="font-family-bold">John Doe</h5>
                    <p><span className="icon icon-time"></span> 3 min ago</p>
                    <p className="font-family-semibold mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Consectetur maxime necessitatibus reiciendis vel voluptas? Numquam!</p>
                    <div className="reply ml-1 font-family-semibold d-flex align-items-center mt-3 ">
                        <span className="icon icon-reply mr-1 "></span>
                        <p>Reply</p>
                    </div>
                </div>
                <div className="d-flex align-items-center mt-4">
                    <img className="ava " src="./icons/photo_2020-12-01_17-46-02.jpg" alt=""/>
                    <div className="input-group  w-75 ml-3">
                        <input type="text" className="form-control rounded-0 border-0" placeholder="Post a comment"/>
                        <div className="input-group-append">
                            <button type="submit" className="ml-3 btn btn-danger rounded-0">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export  default Comment;