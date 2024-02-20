
//react element "namste react 🛰️ "
const heading=React.createElement("div",{id:"one",className:"title"},[
    React.createElement("h1",{id:"a1"},[
        React.createElement("h2",{id:"a11"},"hi namste react 🛰️"),
        React.createElement("h3",{id:"a12"},"bye")
    ]),
    React.createElement("h1",{id:"a2"},[
        React.createElement("h2",{id:"a21"},"hello react"),
        React.createElement("h3",{id:"a22"},"bye boredom")
    ])
    ]
    )
    const jheading=<div className='title'>
        <h1 id ="j1">hi this is msg with jsx</h1>
        <h2 id ="j2">another way to write with jsx</h2>
        <h3 id ="j3">html like syntax</h3>
    
    </div>
    
    
    const Jsxh=()=>(
        <div className='functCom'>
            <h1 id="j4">functional component
            {jheading}
            </h1>
            <h2 id="j5">another way to add data</h2>
            {heading}
            <h3 id="j6">react is amazing</h3>
           
        </div>
        
    )
    
    //console.log(heading)