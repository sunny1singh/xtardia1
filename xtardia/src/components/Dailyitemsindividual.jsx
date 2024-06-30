import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { cartitemactions } from "../Store/Cartitem"

const Dailyitemsindividual = ({item}) => {
   const dispatch=useDispatch()
   
     const {id,itemimg,itemrecord,itemprice,offprice,qty}=item
     const [active, setactive]=useState(false)
    
     
    
     const handlebuy=(item)=>{
         setactive(true)
         dispatch(cartitemactions.additem(item))
     }
 
    
   
 


    return (
        <div className="deals">
            <img className="dailyitem" src={itemimg} alt="" />
            <p className="nameofitem">{itemrecord}</p>
            <div className="price">
                <p className="pricevalue">Price: <span className="text">{itemprice}</span></p>
                <p className="pricevalue">Off: <span className="text">{offprice}</span></p>
            </div>
            <div className="buy">
            {!active ? <button className="buyitem" onClick={()=>handlebuy(item)}>Buy</button>: <button className="buyitem newbuyitem"><p className="span"
                >-</p><p>1</p><span className="span">+</span></button>}
                <span>{item.rating}</span>
            </div>
        </div>
    )
}

export default Dailyitemsindividual