import { Link } from "react-router-dom"
import { dailyitems } from "../Store/store"
import Dailyitemsindividual from "./Dailyitemsindividual"

const Dailyitems=({handlecart,handlebuyitem,handlecartitemx})=>{
    return (
    <section>
        <h1 className="Dailyheading"><Link to="/DailyItems">Today Best Deals</Link></h1>
        <div className="dealsitem">
            {dailyitems.map((item) => <Dailyitemsindividual key={item.id} item={item} handlecart={handlecart} handlebuyitem={handlebuyitem} handlecartitemx={handlecartitemx}/>)}
        </div>
    </section>
    )
}
export default Dailyitems



/*<div className="deals">
                <img className="dailyitem" src="images/a.jpg" alt="" />
                <p className="nameofitem">Diaper for babies</p>
                <div className="price">
                <p className="pricevalue">Price: <span className="text">$30</span></p>
                <p className="pricevalue">Off: <span className="text">60%</span></p>
                </div>
                <div className="buy">
                    <button className="buyitem">Buy</button>
                    <span>4.5</span>
                </div>
            </div>
            <div className="deals">
                <img className="dailyitem" src="images/b.jpg" alt="" />
                <p className="nameofitem">Curd Item</p>
                <div className="price">
                <p className="pricevalue">Price: <span className="text">$60</span></p>
                <p className="pricevalue">Off: <span className="text">10%</span></p>
                </div>
                <div className="buy">
                    <button className="buyitem">Buy</button>
                    <span>4.5</span>
                </div>
            </div>
            <div className="deals">
                <img className="dailyitem" src="images/c.jpg" alt="" />
                <p className="nameofitem">xyzsw for babies</p>
                <div className="price">
                <p className="pricevalue">Price: <span className="text">$40</span></p>
                <p className="pricevalue">Off: <span className="text">30%</span></p>
                </div>
                <div className="buy">
                    <button className="buyitem">Buy</button>
                    <span>4.5</span>
                </div>
            </div>
            <div className="deals">
                <img className="dailyitem" src="images/d.jpg" alt="" />
                <p className="nameofitem">Dark $ Fantasy buscit</p>
                <div className="price">
                <p className="pricevalue">Price: <span className="text">$10</span></p>
                <p className="pricevalue">Off: <span className="text">90%</span></p>
                </div>
                <div className="buy">
                    <button className="buyitem">Buy</button>
                    <span>4.5</span>
                </div>
            </div>
            <div className="deals">
                <img className="dailyitem" src="images/e.jpg" alt="" />
                <p className="nameofitem">Eggs</p>
                <div className="price">
                <p className="pricevalue">Price: <span className="text">$100</span></p>
                <p className="pricevalue">Off: <span className="text">10%</span></p>
                </div>
                <div className="buy">
                    <button className="buyitem">Buy</button>
                    <span>4.5</span>
                </div>
            </div>
            <div className="deals">
                <img className="dailyitem" src="images/a.jpg" alt="" />
                <p className="nameofitem">Diaper for babies</p>
                <div className="price">
                <p className="pricevalue">Price: <span className="text">$30</span></p>
                <p className="pricevalue">Off: <span className="text">60%</span></p>
                </div>
                <div className="buy">
                    <button className="buyitem">Buy</button>
                    <span>4.5</span>
                </div>
            </div>
            <div className="deals">
                <img className="dailyitem" src="images/b.jpg" alt="" />
                <p className="nameofitem">Curd Item</p>
                <div className="price">
                <p className="pricevalue">Price: <span className="text">$60</span></p>
                <p className="pricevalue">Off: <span className="text">10%</span></p>
                </div>
                <div className="buy">
                    <button className="buyitem">Buy</button>
                    <span>4.5</span>
                </div>
            </div>
            <div className="deals">
                <img className="dailyitem" src="images/c.jpg" alt="" />
                <p className="nameofitem">xyzsw for babies</p>
                <div className="price">
                <p className="pricevalue">Price: <span className="text">$40</span></p>
                <p className="pricevalue">Off: <span className="text">30%</span></p>
                </div>
                <div className="buy">
                    <button className="buyitem">Buy</button>
                    <span>4.5</span>
                </div>
            </div>
            <div className="deals">
                <img className="dailyitem" src="images/d.jpg" alt="" />
                <p className="nameofitem">Dark $ Fantasy buscit</p>
                <div className="price">
                <p className="pricevalue">Price: <span className="text">$10</span></p>
                <p className="pricevalue">Off: <span className="text">90%</span></p>
                </div>
                <div className="buy">
                    <button className="buyitem">Buy</button>
                    <span>4.5</span>
                </div>
            </div>
            <div className="deals">
                <img className="dailyitem" src="images/e.jpg" alt="" />
                <p className="nameofitem">Eggs</p>
                <div className="price">
                <p className="pricevalue">Price: <span className="text">$100</span></p>
                <p className="pricevalue">Off: <span className="text">10%</span></p>
                </div>
                <div className="buy">
                    <button className="buyitem">Buy</button>
                    <span>4.5</span>
                </div>
            </div>*/
          