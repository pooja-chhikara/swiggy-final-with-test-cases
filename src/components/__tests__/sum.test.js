
//test is func name with 2 args ist is string(description of function) and 2nd is call back func

import { sum } from "../sum"

test("calc the sum of two numbers",()=>{
    const result=sum(3,4);

    //assertion(expect line means here we testing some method)
     expect(result).toBe(7);
})


// import { fireEvent, render, screen } from "@testing-library/react";
// import Body from "../Body";
// import { MOCK_DATA } from "../mocks/bodymock.json";
// import { act } from "react-dom/test-utils";
// import { BrowserRouter } from "react-router-dom";

// // Mocking fetch globally
// global.fetch = jest.fn(() => {
//   console.log("fetch mock called");
//   return Promise.resolve({
//     json: () => Promise.resolve(MOCK_DATA)
//   });
// });

// it("should render Body component with search sample", async () => {
//   // Act: Render the component
//   await act(async () => {
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     );
//   });

//   // Assert: Check if fetch has been called
//   expect(global.fetch).toHaveBeenCalled();
// });

