import { Link } from "react-router-dom";
import Rlogo from "../assets/Rlogo.png";
function Navigation({setShowmodel}) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-16 bg-black z-50 shadow-md text-white py-3 lg:px-60 md:px-30 px-7 flex items-center justify-between ">


        <div className="bg-white rounded-full flex items-center justify-center ">
          <img src={Rlogo} alt="Logo" className="h-12 w-12" />
        </div>


        <div className=" hidden lg:flex   h-full w-1/3  items-center justify-evenly  ">
            <Link to={"/"} className=" hover:text-gray-300">Home</Link>
            <Link to={"/about"} className=" hover:text-gray-300">About</Link>
            <Link to={"/project"} className=" hover:text-gray-300">Projects</Link>
            <Link to={"/blog"} className=" hover:text-gray-300">Blog</Link>
        </div> 


        <div className=" h-full w-auto flex items-center justify-center ">
            <i onClick={()=>setShowmodel(true)} className="ri-command-line text-4xl cursor-pointer"></i>
        </div>
      </div>

     
    </>
  );
}

export default Navigation;
