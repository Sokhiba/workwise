import React from 'react';
function Footer() {
    return(
        <div className="footer mb-3 d-flex justify-content-end align-items-center">
            <a href="#"><img className="ava mr-3" src="./icons/Rectangle%20Copy%2028.png" alt=""/></a>
            <div className="howmuch howmuch-1 d-flex justify-content-center align-items-center">3</div>
            <a href="#"><img className="ava mr-3" src="./icons/Rectangle%20Copy%2028.png" alt=""/></a>
            <a href="#" className="spinner d-flex justify-content-center align-items-center">
                <span className="icon icon-comments icon-red "></span>
            </a>
            <div className="howmuch d-flex justify-content-center align-items-center">3</div>

        </div>
    )
}export default Footer;