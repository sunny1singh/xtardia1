import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Main = () => {
  return (
    <>
     

      <div className="main">
     
          <div className="men">
            <h3>daily Needs</h3>
            <div className="kitchen women">
              <img className="dailyitems" src="images/eggs.jpg" alt="" />
              <img className="dailyitems" src="images/frozen.jpg" alt="" />
              <img className="dailyitems" src="images/fruits.jpg" alt="" />
              <img className="dailyitems" src="images/maggie.jpg" alt="" />
              <img className="dailyitems" src="images/eggs.jpg" alt="" />
              <img className="dailyitems" src="images/frozen.jpg" alt="" />
            </div>


          </div>
          <div className="men">
            <h3> Mood Fresher&Party</h3>
            <div className="kitchen">
              <img src="images/king.jpg" alt="" />
              <img src="images/packaged.jpg" alt="" />
              <img src="images/icecream.jpg" alt="" />
              <img src="images/king.jpg" alt="" />


            </div>


          </div>
          <div className="men">
            <h3>Family Needs</h3>
            <div className="kitchen">
              <img src="images/baby.jpg" alt="" />
              <img src="images/baby.jpg" alt="" />
              <img src="images/baby.jpg" alt="" />
              <img src="images/baby.jpg" alt="" />
            </div>

          </div>
          <button className="keynew left"><MdKeyboardArrowLeft  className="arrow"/></button>
        <button className="keynew right"><MdKeyboardArrowRight  className="arrow"/></button>

        </div>
      

    </>
  )
}
export default Main