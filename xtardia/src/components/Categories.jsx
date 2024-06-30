import { BsCart3 } from "react-icons/bs";
import { useState } from "react";
import { useSelector } from "react-redux";
import Brandcategory from "./Brandcategory";
import Header from "./Header";
import Mouseh1 from "./Mouseh1";
import { RiH1 } from "react-icons/ri";
import Cartitemprint from "./Cartitemprint";
import Cartitem from "./Cartitem";
import { Link } from "react-router-dom";
const Categories = ({mouseEvent,initialvalue}) => {
  const {itema}=useSelector((store)=>store.cartitem)
  const [active, setactive] = useState(false)
  const [cartactive, setcartactive] = useState(false)
  const handlecart = () => {
    setcartactive(!cartactive)
  }
  const handleCart = () => {
    setcartactive(false)
  }
  const handlemouse = () => {
    setactive(!active)
  }
  const handleMouse = () => {
    setactive(false)
  }


  return (
    <>
      <div className="maincontainer">
        <div className="categories dk">
          <p onMouseEnter={handlemouse} >Categories</p>
          {active ? <div className="categoryitem" onMouseLeave={handleMouse}>
            <div className="categoryindividualitem">
              <p>items</p>
              <div className="itemcategory">
                <ul className="itema">
                  <li><Link className="Aboutus" to={"/Fruits"}>Fruits $ Vegetables</Link></li>
                  <li><a className="Aboutus" href=" ">Atta, Rice</a></li>
                  <li><a className="Aboutus" href=" ">Masala & Dry Fruits</a></li>
                  <li><a className="Aboutus" href=" ">Sweet Cravings</a></li>
                  <li><a className="Aboutus" href=" ">Toys & Games</a></li>
                </ul>
                <ul className="itema">
                  <li><a className="Aboutus" href="king">Dairy, Bread & Eggs</a></li>
                  <li><a className="Aboutus" href="king">Cold Drinks & Juices</a></li>
                  <li><a className="Aboutus" href="king">Baby Care</a></li>
                  <li><a className="Aboutus" href="king">Pet Care</a></li>
                </ul>
                <ul className="itema">
                  <li><a className="Aboutus" href="king">Dairy, Bread & Eggs</a></li>
                  <li><a className="Aboutus" href="king">Cold Drinks & Juices</a></li>
                  <li><a className="Aboutus" href="king">Baby Care</a></li>
                  <li><a className="Aboutus" href="king">Pet Care</a></li>
                </ul>
              </div>
            </div>

          </div> : null}
        </div>

        <div className="categories"> <input type="text" name="" id="" placeholder="Please Search Your Items" /></div>


        <div className="new"   >
          <BsCart3 className="cart-icons  " onMouseEnter={handlecart} />

          {cartactive ? <div className="cartz" onMouseLeave={handleCart} >
            <div className="cartindividualz">
              <div className="buyitemk">
            <Cartitemprint /> 
            </div>
            <div className="cartitemtl">
              <div className="cartprice">
                <ul className="listofcart">
                  <li className="pricea">total amount</li>
                  <li className="pricea">vat</li>
                  <li className="pricea">delivery fee</li>
                  <li className="pricea">total price</li>
                </ul>
              </div>
              <div className="payment">
               <p>phonepay</p>
              </div>
            </div>
            </div>
          

          </div> : null}



          <div className="categories iconscategory " >
            {itema > 0 ? <p className="cartx" >{itema} </p> : null}




          </div>
        </div>
      </div>
    </>
  )
}



export default Categories


/*<p onMouseEnter={handlemouse} onMouseLeave={handleMouse}>Categories</p>
{active ? <div className="categoryitem">
 <div className="categoryindividualitem">
  <p>items</p>
  <div className="itemcategory">
    <ul className="itema">
      <li><a className="Aboutus" href=" ">Fruits $ Vegetables</a></li>
      <li><a className="Aboutus" href=" ">Atta, Rice</a></li>
      <li><a className="Aboutus" href=" ">Masala & Dry Fruits</a></li>
      <li><a className="Aboutus" href=" ">Sweet Cravings</a></li>
      <li><a className="Aboutus" href=" ">Toys & Games</a></li>
    </ul>
    <ul className="itema">
      <li><a className="Aboutus" href="king">Dairy, Bread & Eggs</a></li>
      <li><a className="Aboutus" href="king">Cold Drinks & Juices</a></li>
      <li><a className="Aboutus" href="king">Baby Care</a></li>
      <li><a className="Aboutus" href="king">Pet Care</a></li>
    </ul>
    <ul className="itema">
      <li><a className="Aboutus" href="king">Dairy, Bread & Eggs</a></li>
      <li><a className="Aboutus" href="king">Cold Drinks & Juices</a></li>
      <li><a className="Aboutus" href="king">Baby Care</a></li>
      <li><a className="Aboutus" href="king">Pet Care</a></li>
    </ul>*/





