import { useState } from "react"
import {GrClose} from "react-icons/gr";
import {GiHamburgerMenu} from "react-icons/gi";
import {RxDashboard} from "react-icons/rx";
import Teacher from "../components/Teacher";
import Student from '../components/Student';
import Courses from "../components/Courses";
import SubCourse from "../components/SubCourse";

export default function PrincipalDashboard() {
        const [close,setClose] = useState(false);
        function closeSideBar() {
            setClose(!close)
        }
    return(
        <div>
            <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer" onClick={closeSideBar}>
                <i className="rounded-md text-black">
                <GiHamburgerMenu className="px-2 border rounded-md" size={"50"}/>
                </i>
            </span>
            <div className={`${close ? "hidden ": "block "} fixed top-0 bottom-0 lg:left-0 z-50 p-2 w-4/5 md:w-auto text-center bg-gray-900`}>
                <div className="text-gray-100 text-xl">
                    <div className="my-5 flex items-center">
                        <i className="ml-5 px-2 py-1 rounded-md bg-blue-600">
                            <RxDashboard size={"30"} />
                        </i>
                        <h1 className="font-bold text-gray-200 px-10 md:px-5 ">Principal Dashboard</h1>
                        <i className="cursor-pointer lg:hidden" onClick={closeSideBar}>
                            <GrClose className="bg-white" size={"25"}/>
                        </i>
                    </div>
                    <div className="my-2 bg-gray-600 h-[1px]"></div>
                </div>
                <div className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-center">
                    <i className=" text-sm"></i>
                    <span className="text-xl ml-4 text-gray-200 font-bold">Home</span>
                </div>
                <div className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-center">
                    <i className=" text-sm"></i>
                    <span className="text-xl ml-4 text-gray-200 font-bold">Teacher</span>
                </div>
                <div className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-center">
                    <i className=" text-sm"></i>
                    <span className="text-xl ml-4 text-gray-200 font-bold">Student</span>
                </div>
                <div className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-center">
                    <i className=" text-sm"></i>
                    <span className="text-xl ml-4 text-gray-200 font-bold">Courses</span>
                </div>
                <div className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-center">
                    <i className=" text-sm"></i>
                    <span className="text-xl ml-4 text-gray-200 font-bold">Sub Courses</span>
                </div>
                <div className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-center">
                    <i className=" text-sm"></i>
                    <span className="text-xl ml-4 text-gray-200 font-bold">Logout</span>
                </div>
            </div>
            <div className="flex flex-col justify-center bg-slate-300 p-10 md:pl-36 items-center">
                <div className="p-5 mt-10 md:mt-0 md:ml-44  shadow-xl w-60 shadow-blue-300 border-4 rounded-lg">
                    <h1 className="text-center font-bold text-2xl">Welcome</h1>
                </div>
                <div className="p-2 bg-slate-300">
                <div class="p-5 md:ml-44 md:space-x-16 space-y-10 items-center md:space-y-0 flex flex-col md:flex-row overflow-hidden">
                <div class="px-6 py-4 text-center shadow-blue-300 border-4 rounded-lg">
                <div class="font-bold text-xl mb-2">Teachers</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
                </div>
                <div class="px-6 py-4 text-center shadow-blue-300 border-4 rounded-lg">
                <div class="font-bold text-xl mb-2">Students</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
                </div>
                <div class="px-6 py-4 text-center shadow-blue-300 border-4 rounded-lg">
                <div class="font-bold text-xl mb-2">Courses</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
                </div>
                
                </div>
            </div>
            </div>
            <div className=" bg-gray-600 h-[1px]"></div>
            <Teacher />
            <div className=" bg-gray-600 h-[1px]"></div>
            <Student />
            <div className=" bg-gray-600 h-[1px]"></div>
            <Courses />
            <div className=" bg-gray-600 h-[1px]"></div>
            <SubCourse />
            <div className=" bg-gray-600 h-[1px]"></div>
            <div className="p-5 bg-slate-500"></div>
    </div>
    )
}