const Offindividual=({item})=>{
return (
<div className="offimg">
<img className="epic" src={item.itemimg} alt="" />
<p className="offitem"> Off <span className="offspan">{item.itemoff}</span></p>
</div>

)
}
export default Offindividual