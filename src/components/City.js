
 const City=(props)=>{
    const cityText=props.cityData.text
    const citylink=props.cityData.link
    //console.log(props)
    return(
        
            <div className="border-2 border-teal-600 m-1 p-2 rounded-lg text-center w-72">
               <a href={citylink}>
                <h5 className="value">
        
                {cityText}
                </h5>
               </a>

            </div>
        
    )
}
export default City
