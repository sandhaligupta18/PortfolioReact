import { Link } from "react-scroll";

export default function Footer(){
    return(
        <div className="bg-[#343A40] lg:w-[80%] py-16 lg:ml-[16.9rem]">
            <div className="  text-white text-center font-normal grid grid-cols-1 lg:grid-cols-2 align-items-center ">
                <div className="px-3 mb-2 lg:mb-0">
                    <p className=" text-center text-lg font-semibold ">Copyright &copy; 2023 <span className=" text-[#F7B900] text-lg"><Link className="cursor-pointer" to="home" spy={true} smooth={true} offset={-100} duration={500} >Sandhali</Link></span>. All Rights Reserved.</p>
                </div>
                <div className="px-3">
                    <p className="font-normal text-lg">Designed by <span className=" text-[#F7B900] text-lg"><Link className="cursor-pointer" to="home" spy={true} smooth={true} offset={-100} duration={500} >Sandhali Gupta</Link></span></p>
                </div>
            </div>
        </div>
    )
}