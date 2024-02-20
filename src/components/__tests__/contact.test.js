import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"



describe("all test regarding contact us page",()=>{

//test as well as it can be used
it("should load  contact page ",()=>{
// this must render in jsdom
    render(<Contact/>)

   const h= screen.getByRole("heading")

   //assertion
expect(h).toBeInTheDocument();
})

test("should load  button in contact page ",()=>{
    // this must render in jsdom
        render(<Contact/>)
    
       const b= screen.getByText("submit")
    
       //assertion 
    expect(b).toBeInTheDocument();
    })


test("should load by paceholder in contact page ",()=>{
    // this must render in jsdom
        render(<Contact/>)
    
       const p= screen.getByPlaceholderText("name")
    
       //assertion
    expect(p).toBeInTheDocument();
    })


test("should load  two input boxes in contact page ",()=>{
    // this must render in jsdom
        render(<Contact/>)
    
       const i= screen.getAllByRole("textbox")
    
       //assertion
    expect(i.length).not.toBe(29);
    }) 

})