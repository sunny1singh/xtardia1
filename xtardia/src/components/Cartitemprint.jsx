import { useDispatch, useSelector } from "react-redux"
import { dailyitems } from "../Store/store"
import Cartitem from "./Cartitem"
import { cartactions } from "../Store/Cart"
import { useState } from "react"

const Cartitemprint = () => {
    const dispatch=useDispatch()
    const { cart } = useSelector(store => store.cartitem)
    const handleadd = (id) => {
        dispatch(cartactions.Increment())
    }
    const handlesubtract = (id) => {
        dispatch(cartactions.Decrement())
    }
    return (

        <>

            {cart.map((item) => (<div className="pokanall">
                <div className=" pokan dk">
                    <img className="" src={item.itemimg} alt="" />

                </div>
                <div className="flexbutton" >
                    <button className="buyitem newbuyitem newbutton">
                        <p className="span" onClick={() => handlesubtract(item.id)} >-</p>
                        <p>1</p>
                        <span className="span" onClick={() => handleadd(item.id)} >+</span>
                    </button>
                    <p className="priceall">price</p>
                </div>
            </div>



            )


            )}



        </>


    )
}


    export default Cartitemprint


