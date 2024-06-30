import { useReducer, useState } from 'react'
import './App.css'
import Categories from '../components/Categories'
import Coco from '../components/Coco'
import Dailyitems from '../components/Dailyitems'
import Footer from '../components/Footer'
import Fruits from '../components/Fruits'
import Header from '../components/Header'
import Main from '../components/Main'
import Offimg from '../components/Offimg'
import Text from '../components/Text'
import { useStore } from 'react-redux'
import Allelement from '../components/Allelement'
import Login from '../components/Login'
import { Outlet } from 'react-router'

    const Index = () => {
    const [initialname,setinitialname]=useState("")
  
    const [initialvalue,setinitialvalue] = useState(0)
    const [active,setactive]=useState(false)
    const [cartitem,setcartitem]=useState([])
    const handleuser=()=>{
       setactive(true)
      
    }
    const handledelete=()=>{
       setactive(false)
    }
    
    const handlebuyitem=()=>{
  
    }
    const handlecart=(value)=>{
     
      let newinitialvalue = initialvalue + 1
       setinitialvalue(newinitialvalue)
    }
    const handlecarty=(value)=>{
     
      let newinitialvalue = initialvalue - 1
       setinitialvalue(newinitialvalue)
    }
    const handlenamea=(USERNAME)=>{
       setinitialname("Hi "+USERNAME)
    }
    
    const handlecartitemx=(id)=>{
       let newcartitem=[...cartitem,id]
       setcartitem(newcartitem)
      
    }
    return (
        <>
            <Offimg />
            <Main />
            <Dailyitems handlecart={handlecart} handlebuyitem={handlebuyitem} handlecartitemx={handlecartitemx} />
            <Text />
            <Fruits />
            <Coco />
        </>
    )
}
export default Index