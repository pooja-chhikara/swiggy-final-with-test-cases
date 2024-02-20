//integration testing 
import {fireEvent,render,screen} from "@testing-library/react"
import Body from "../Body"
import DATA from "../mocks/bodymock.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


 
global.fetch=jest.fn(()=>{
    console.log("h")
    return Promise.resolve({
    
        json:()=>{
            return Promise.resolve(DATA) }  
        
    })
})

it("should render body componant with search",async()=>{
    //act function return a promise
    //console.log(DATA.data)

    await act(async()=>

         render(
        <BrowserRouter>
        {/* <Body/> */}
        </BrowserRouter>
        )

    )
    
   //expect(global.fetch).toHaveBeenCalled();    

//     const search=screen.getByRole("button",{name:"Search"})
//    // const searchInput=screen.getByTextId("")
//      //const searchInput=screen.getByPlaceholderText("enter restaurant name here")
//      const searchInput=screen.getByTestId("searchInput")
    
//      fireEvent.change(searchInput,{target:{value:"burger"}})
// fireEvent.click(search)

// const cards=screen.getAllByTestId("res-card")
   

   
})





//(e)=>{setSearchData(e.target.value) ,console.log(searchData)} is equal to searchInput,{target:{value:"burger"}