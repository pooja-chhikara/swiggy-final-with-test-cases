import { act } from "react-dom/test-utils"
import {fireEvent, render, screen } from "@testing-library/react"
import ResMenu from "../ResMenu"
import MOCK_DATA from "../mocks/mockres.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Cart from "../Cart"

global.fetch=jest.fn(()=>
Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA)
    })
)

it("should load res menu",async()=>{
    await act( async()=>
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
        <ResMenu/>
        <Cart/>
        </Provider>
        </BrowserRouter>
        )
    )
const accHeader=screen.getByText("Recommended (20)")
fireEvent.click(accHeader)

const foodItems=screen.getAllByTestId("foodItems")
 const addBtn=screen.getAllByRole("button",{name:"Add+"})
fireEvent.click(addBtn[0])
fireEvent.click(addBtn[1])
fireEvent.click(addBtn[2])

const cartItems=screen.getByTestId("Shopping")
console.log(cartItems.textContent)
expect(cartItems.textContent).toBe("🛒3")
expect(foodItems.length).toBe(20)
expect(screen.getAllByTestId("foodItems").length).toBe(20)
const clrBtn=screen.getByRole("button",{name:"Clear Cart"})

fireEvent.click(clrBtn)
expect(screen.getAllByTestId("foodItems").length).toBe(20)

expect(screen.getByText("your cart is empty plz add items to your cart")).toBeInTheDocument()


})