import React from 'react';
import Container from "reactstrap/es/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
function Nav() {
    return(
            <nav className={"navbar navbar-expand-md"}>
                <Container>
                <a href="#" className="navbar-brand">
                    <img src="../icons/logo.PNG" alt=""/>
                </a>
                <div className="input-group w-25">
                    <input type="text" className=" border-0 form-control shadow-none " placeholder="Search..."/>
                    <div className="input-group-append">
                        <button type="submit" className="btn shadow-none"><img src="./icons/search.svg" alt="" className="icon"/>
                        </button>
                    </div>
                </div>
                <ul className="navbar-nav flex-row mt-2 text-center">
                    <li className="navbar-item mr-3 "><a href="#"><img src="./icons/home.svg" alt="" className="icon"/>
                        <p>Home</p></a></li>
                    <li className="navbar-item mr-3 "><a href="#"><img className={"icon"} src="./icons/companies.svg" alt=""/>
                        <p>Companies</p></a></li>
                    <li className="navbar-item mr-3"><a href="#"><img src="./icons/puzzle-piece.svg" alt="" className="icon"/>
                        <p>Projects</p></a></li>
                    <li className="navbar-item mr-3"><a href="#"><img src="./icons/users.svg" alt="" className="icon"/>
                        <p>Profiles</p></a></li>
                    <li className="navbar-item mr-3"><a href="#"><img src="./icons/suitcase.svg" alt="" className="icon"/>

                        <p>Jobs</p></a></li>
                    <li className="navbar-item mr-3"><a href="#"><img src="./icons/email.svg" alt="" className="icon"/>
                        <p>Massages</p></a></li>
                    <li className="navbar-item mr-3"><a href="#"><img src="./icons/notification.svg" alt="" className="icon"/>
                        <p>Notifications</p></a></li>
                </ul>

                <div className="dropdown border-left border-right  ml-4">
                    <button type="button" className="btn  rounded-0 dropdown-toggle" data-toggle="dropdown">
                        <img className="ava mr-1 " src="./icons/Rectangle%20Copy%2028.png" alt=""/>John</button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>
                        <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>
                </Container>
            </nav>


    )
}

export default Nav;