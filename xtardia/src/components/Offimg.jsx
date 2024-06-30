import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Off } from "../Store/store";
import Offindividual from "./Offindividual";
const Offimg=()=>{
    return (
    <div className="off">
    {Off.map((item) => <Offindividual item={item} />)}
    <button className="key left"><MdKeyboardArrowLeft  className="arrow"/></button>
  </div>
    )

}
export default Offimg


/*<div className="offimg">
      <img className="epic" src="images/a.jpg" alt="" />
      <p className="offitem"> Off <span className="offspan">60%</span></p>
    </div>
    <div className="offimg">
      <img className="epic" src="images/b.jpg" alt="" />
      <p className="offitem"> Off <span className="offspan">60%</span></p>
    </div>







    <div className="offimg">
      <img className="epic" src="images/c.jpg" alt="" />
      <p className="offitem"> Off <span className="offspan">60%</span></p>
    </div>]




    <div className="offimg">
      <img className="epic" src="images/d.jpg" alt="" />
      <p className="offitem"> Off <span className="offspan">60%</span></p>
    </div>


    <div className="offimg">
      <img className="epic" src="images/e.jpg" alt="" />
      <p className="offitem"> Off <span className="offspan">60%</span></p>
    </div>


    <div className="offimg">
      <img className="epic" src="images/a.jpg" alt="" />
      <p className="offitem"> Off <span className="offspan">60%</span></p>
    </div>



    <div className="offimg">
      <img className="epic" src="images/b.jpg" alt="" />
      <p className="offitem"> Off <span className="offspan">60%</span></p>
    </div>
    <div className="offimg">
      <img className="epic" src="images/c.jpg" alt="" />
      <p className="offitem"> Off <span className="offspan">60%</span></p>
    </div>
    <div className="offimg">
      <img className="epic" src="images/d.jpg" alt="" />
      <p className="offitem"> Off <span className="offspan">60%</span></p>
    </div>
    <div className="offimg">
      <img className="epic" src="images/e.jpg" alt="" />
      <p className="offitem"> Off <span className="offspan">60%</span></p>
    </div>*/


