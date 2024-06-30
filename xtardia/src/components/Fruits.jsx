import { Link } from "react-router-dom"
import { fruitsitem } from "../Store/store"
import Fruitindividual from "./Fruitindividual"

const Fruits=()=>{
    return (
    <div className="fruits">
        <h3 className="Dailyheading"><Link to={"/Fruits"}>Fruits Item</Link></h3>
        <div className="fruitsitem">
            {fruitsitem.map((item) => <Fruitindividual item={item} />)}
    </div>
    </div>
    )

}
export default Fruits


