import React from 'react';
import Logo from '../../img/LOGO.jpg';
import menuIcn from '../../img/menu-icn.png'




const Navbar = () => {
    return ( 
    <nav>
        <div className="container nav-container justify-content-between justify-content-lg-center">
            <div className="nav-logo ml-2 ml-lg-0">
                <img src={Logo} alt="logo" />
            </div>
            <div className="nav-logo mr-2 mr-lg-0 d-sm-none">
                <label htmlFor="expand-toggle" id="expand-btn" className="mb-0 d-flex">
                    <img src={menuIcn} alt="menu-bar" />
                </label>
            </div>
            <div id='myhiddenmenu'>
            <input type="checkbox" id="expand-toggle" className="d-none"/>
                <ul id='hidden-menu' className="nav-list p-0 mb-0">
                    <Navlist link="/#" text="Beranda" />
                    <Navlist link="/#midsection" text="Tentang Kami" />
                    <Navlist link="/#secondsection" text="Menu" />
                    <Navlist link="/#thirdsection" text="Kemitraan"/>
                    <Navlist link="/#fourthsection" text="Outlet"/>
                    <Navlist link="/#lastsection" text="Kontak" />
                </ul>
            </div>
        </div>
    </nav> 
    );
}

const Navlist = (props) => {
    return ( 
        <li className="nav-item mx-4 my-auto">
            <a href={props.link}>{props.text}</a>
        </li>
    );
}
 
export default Navbar;