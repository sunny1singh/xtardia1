import { MdPhoneCallback } from "react-icons/md"
import { TbBrandInstagram } from "react-icons/tb";
import { MdFacebook } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerbox">
                <div className="Aboutxtardia">
                    <p className="footerheading xtardiaheading">XTARDIA</p>
                    <nav>
                        <ul className="links">
                            <li><a href="#" className="individualink social"><TbBrandInstagram /></a></li>
                            <li><a href="#" className="individualink social"><MdFacebook /></a></li>
                            <li><a href="#" className="individualink social"><AiOutlineTwitter /></a></li>
                        </ul>
                    </nav>
                    <p className="copyright">
                        copyright &copy; 3000 by xtardia, Inc. All rights reserved
                    </p>
                </div>
                <div className="address">
                    <p className="footerheading">Address</p>
                    .
                    <p > Northzone delhi xtrd 808080</p>
                    <p><a href="tel:7240420908" className="individualink">7240410908</a></p>
                    <p><a href="mailto:fighterborn3@gmail.com" className="individualink">fighterborn3@gmail.com</a></p>

                </div>
                <div className="aboutcompany">
                    <p className="footerheading">About Company</p>
                    <nav>
                        <ul className="navlink">
                            <li><a href="#" className="individualink">About Us</a></li>
                            <li><a href="#" className="individualink">Careers</a></li>
                            <li><a href="#" className="individualink">Press Releases</a></li>
                            <li><a href="#" className="individualink">Sell on Xtardia</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="about">
                    <p className="footerheading">About </p>
                    <nav>
                        <ul className="navlink">
                            <li><a href="#" className="individualink">Privacy</a></li>
                            <li><a href="#" className="individualink">FAQ</a></li>
                            <li><a href="#" className="individualink">T&C</a></li>
                            <li><a href="#" className="individualink">Terms Of Use</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="customer">
                    <p className="footerheading">Customer Policies </p>
                    <nav>
                        <ul className="navlink">
                            <li><a href="#" className="individualink">Returns</a></li>
                            <li><a href="#" className="individualink">Privacy Policy</a></li>
                            <li><a href="#" className="individualink">Take Your Shop</a></li>
                            <li><a href="#" className="individualink">Enjoy</a></li>
                        </ul>
                    </nav>
                </div>
             
            </div>
            <div className="footerdescription">
                    <p>Conditions of Use & Sale &nbsp;
                        Privacy Notice &nbsp;
                        Interest-Based Ads
                        © 1996-3000, Xtardia.com, Inc. or its affiliates</p>
                </div>
        </footer>
    )
}
export default Footer