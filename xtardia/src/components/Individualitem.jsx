const Individualitem=({item})=>{
    return (
    <div className="individualcoco">
            <img className="cocoimg" src={item.itemimg} alt="" />
            <p className="cocodescription">{item.itemdescription}</p>
            <div className="cocoprice">
            <p>Price <span className="actualprice">{item.itemprice}</span> <span className="offprice">{item.offprice}</span></p>
            <button className="Buyitem">Buy Now</button>
            </div>
        </div>
    )
}
export default Individualitem