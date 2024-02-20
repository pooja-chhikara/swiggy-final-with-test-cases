import {fireEvent,screen,render} from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom"
import RestCard from "../Res"
import MOCK_DATA from "../mocks/restCardmock.json"


it("should render props data in rescard",()=>{
    //console.log(MOCK_DATA)
    render(
        <RestCard resData={MOCK_DATA}/>
    )


    const name=screen.getByText("Burger King")

   expect(name).toBeInTheDocument()
})

it("should render with promoted label",()=>{

})