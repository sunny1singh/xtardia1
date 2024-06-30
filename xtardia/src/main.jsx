import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Xtardiastore from './Store/storea.js'
import {Provider} from "react-redux"
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Fruits from './components/Fruits.jsx'
import Dailyitems from './components/Dailyitems.jsx'
import Index from './routes/Index.jsx'
import Coco from './components/Coco.jsx'

const router = createBrowserRouter([
  {path:"/",element:<App />,
    children:[
        {path:"/",element:<Index />},
        {path:"/DailyItems",element:<Dailyitems />},
        {path:"/Fruits",element:<Fruits />},
        {path:"/Coco",element:<Coco />}
      
    ]

  }])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Provider store={Xtardiastore}>
    <RouterProvider router={router} />
    </Provider>
   
  </React.StrictMode>,
)
