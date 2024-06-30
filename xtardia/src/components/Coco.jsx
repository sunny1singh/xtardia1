import { Link } from "react-router-dom"
import { cocoitemx } from "../Store/store"
import Individualitem from "./Individualitem"

const Coco = (cocoitem) => {
    return (
        <div className="coco">
              <h3 className="Dailyheading"><Link to={"/Coco"}>Drinks</Link></h3>
            <div className="cocoitem">
               {cocoitemx.map((item) => <Individualitem item={item} />)}
                </div>
            </div>
        
            )
}
            export default Coco




            /*<div className="individualcoco">
            <img className="cocoimg" src="images/mountainpack.jpg" alt="" />
            <p className="cocodescription">Pepsican Black</p>
            <div className="cocoprice">
            <p>Price <span className="actualprice">40</span> <span className="offprice">60</span></p>
            <button className="Buyitem">Buy Now</button>
            </div>
        </div>
        <div className="individualcoco">
            <img className="cocoimg" src="images/cocopack.jpg" alt="" />
            <p className="cocodescription">Cococan Black</p>
            <div className="cocoprice">
            <p>Price <span className="actualprice">40</span> <span className="offprice">60</span></p>
            <button className="Buyitem">Buy Now</button>
            </div>
        </div>
        <div className="individualcoco">
            <img className="cocoimg" src="images/mountain.jpg" alt="" />
            <p className="cocodescription">Mountain Black</p>
            <div className="cocoprice">
            <p>Price <span className="actualprice">40</span> <span className="offprice">60</span></p>
            <button className="Buyitem">Buy Now</button>
            </div>
        </div>
        <div className="individualcoco">
            <img className="cocoimg" src="images/can.jpg" alt="" />
            <p className="cocodescription">Can Black</p>
            <div className="cocoprice">
            <p>Price <span className="actualprice">40</span> <span className="offprice">60</span></p>
            <button className="Buyitem">Buy Now</button>
            </div>
        </div>
        <div className="individualcoco">
            <img className="cocoimg" src="images/coco.jpg" alt="" />
            <p className="cocodescription">Coco Black</p>
            <div className="cocoprice">
            <p>Price <span className="actualprice">40</span> <span className="offprice">60</span></p>
            <button className="Buyitem">Buy Now</button>
            </div>
        </div>
        <div className="individualcoco">
            <img className="cocoimg" src="images/thumps.jpg" alt="" />
            <p className="cocodescription">Thumps Black</p>
            <div className="cocoprice">
            <p>Price <span className="actualprice">40</span> <span className="offprice">60</span></p>
            <button className="Buyitem">Buy Now</button>
            </div>
        </div>*/