import { FaRegCircleUser } from "react-icons/fa6";
import { RiMapPinUserLine } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = ({handleuser,initialname}) => {
    const [active,setactive]=useState(false)
    const handleuserx=()=>{
        handleuser()
    }
    return (
        <header id="header">
            <div className="categoryheader">
            <div className="a">
              {initialname}
            </div>
            <h1><Link to={"/"}>XTARDIA</Link></h1>
            <div className="a">
                <FaRegCircleUser className="cart-icons" onClick={handleuserx}/>
                <RiMapPinUserLine className="cart-icons" />
            </div>
            </div>
        </header>
    )
    
}
export default Header