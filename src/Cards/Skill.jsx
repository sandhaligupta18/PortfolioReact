export default function Skill(props){
    return(
        <div className=" flex flex-row gap-5"> 
            <div className="mt-5 bg-[#212529] h-[4rem] flex rounded-md items-center justify-center  w-[23rem] text-4xl text-[#FFC107] font-medium">{props.icon}</div>
            <div className="flex flex-col ">
            <h3 className=" my-3 text-xl text-white font-semibold">{props.skill}</h3>
            <p className="text-justify font-medium text-[#909294]  font-serif">{props.content}</p>
            </div>
        </div>
    )
}