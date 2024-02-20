import React,{lazy,Suspense} from 'react';
import  ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter ,RouterProvider,Outlet} from 'react-router-dom';
import ResMenu from './components/ResMenu';
import { Shimmer } from './components/shimmer';
import UserContext from './utils/UserContext';
import { useState,useEffect } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
//import Grocery from './components/Grocery';
// import Header1 from './components/H';

const Grocery=lazy(()=>import("./components/Grocery"))
const AppLayout=()=>{

    const [userInfo,setUserInfo]=useState()
//auth code
    useEffect(()=>{
//make api call and fetch and send user details

const data={
    name:"POOJA",
    pass:"1234"
}
setUserInfo(data.name)
    },[])
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
        <div className='app'>

       <Header/>
       {/* if "/" then body componant if "/about" than ABOUT componanat same for contact */}
       
       <Outlet />
       {/* <Body/> */}
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter=createBrowserRouter([
{
    path:"/",
    element:<AppLayout/>,
    children:[
        {path:"/",
        element:<Body/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        } ,
        {
            path:"/grocery",
            element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
        },
        {
            path:"/restaurants/:resId",
            element:<ResMenu />
        } ,
        {
            path:"/cart",
            element:<Cart/>
        } 

    ],
    errorElement:<Error/>
},

]);

const root=ReactDOM.createRoot(document.getElementById("root"))
//console.log(root)

root.render(<RouterProvider router={appRouter} />)
//render replace the data not append


