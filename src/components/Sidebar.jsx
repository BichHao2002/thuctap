import React, { useState } from "react";
import {FaRegChartBar, FaTh,FaBars, FaUserAlt} from 'react-icons/fa';
import { NavLink } from "react-router-dom";
//import { useState } from "react/cjs/react.production.min";


const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem = [
        {
            path:"/home",
            name:"Home",
            icon:<FaTh/>
        },

        {
            path:"/country",
            name:"Country",
            icon:<FaRegChartBar/>
        },
    ]
    return (
        <div style={{paddingLeft: "0px"}} className="container">
            <div style={{width: isOpen ? "300px" : "60px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="admin">ADMIN</h1>
                    <div style={{marginLeft: isOpen ? "30px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                    
                </div>
                <div style={{marginLeft: isOpen ? "50px" : "10px", width: isOpen ? "130px" : "40px", height: isOpen ? "120px" : "35px", fontSize: isOpen ? "78px" : "25px", paddingTop: isOpen ? "0px" : "0px"}}  className="logo">
                    <FaUserAlt/>
                </div>

                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassname = "active">
                            <div style={{fontSize:20}} className="icon">{item.icon}</div>
                            <div style={{fontSize:20 ,display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }


            </div>
            <main>{children}</main>
        </div>
    );
};


export default Sidebar;