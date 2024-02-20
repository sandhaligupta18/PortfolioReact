export default function Skill(props){
    return(
        <div className=" flex flex-row   gap-5 mx-6 "> 
            <div className=" mt-5  bg-[#212529] h-[4rem] p-4 flex rounded-md items-center justify-center   text-4xl text-[#FFC107] font-medium">
                <p>{props.icon}</p>
            </div>
            <div className="flex flex-col  ">
            <h3 className=" my-3 text-xl text-white font-semibold">{props.skill}</h3>
            <p className="  font-medium text-[#909294]  font-serif">{props.content}</p>
            </div>
        </div>
    )
}