import { Link } from "react-router-dom"

const MindMenu=(props)=>{
    const {menuData} =props
   // console.log(props)
    const {text,link}=menuData?.action
    //const {imageId}=menuData?.info?.cloudinaryImageId

    imglink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+menuData?.imageId
   //  console.log(link)
    return(
        <div className='my-5 p-5'>
            <Link to={link}>
            <img className="w-11/12" src={imglink}/>
           
            </Link>
            
            
        </div>
    )
}
export default MindMenu