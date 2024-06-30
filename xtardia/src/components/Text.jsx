import { brandimg } from "../Store/store"
import Brandindividual from "./Brandindividual"

const Text=()=>{
 return(
 
 <div className="textsection">
    <h3 className="Dailyheading">Recommended Brand</h3>
    <div className="textimg">
        {brandimg.map((item) => <Brandindividual item={item} />)}
    </div>
 </div>
 
 )
}
export default Text
