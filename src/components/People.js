import React from 'react';

function People() {
    return(
        <div className=" mb-4 d-flex ">
            <img className="ava" src="./icons/Rectangle%20Copy%2028.png" alt=""/>
                <div className="last-active ml-2">
                    <h6 className="font-family-semibold mb-0">John Doe</h6>
                    <p>Graphic Designer</p>
                </div>
                <button type="button" className="btn border ml-auto pb-1 pt-1"> +</button>

        </div>
    )
}
export default People;