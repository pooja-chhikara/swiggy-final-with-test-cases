 import Header from '../Header'
import {fireEvent,screen,render} from "@testing-library/react"
import { Provider, useSelector } from 'react-redux'
import appStore from "../../utils/appStore"
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom"

it("should load header componenet with login button",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )

    const login=screen.getByRole("button")
    expect(login).toBeInTheDocument()
})

it("should load header componenet with login button",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )

    const loginB=screen.getByRole("button",{name:"Login"})
fireEvent.click(loginB)


const logout=screen.getByRole("button",{name:"Logout"})

    expect(logout).toBeInTheDocument()
})

// it("should render if cart is empty",()=>{
//     render(
//         <BrowserRouter>
//     <Provider store={appStore}>
//     <Header/>
//     </Provider>
//     </BrowserRouter>
//     )


//     const login=screen.getByText(/Cart/)
//     expect(login).toBeInTheDocument()
// })