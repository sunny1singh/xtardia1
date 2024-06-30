const Allelement=({children,active})=>{
    return (
    <div className={`"all" ${active && "carty"}`}>
        {children}
    </div>
    )
}
export default Allelement