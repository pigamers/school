import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import Principal from "../components/Principal";
import Institute from "../components/Institute";
import { Link, useNavigate } from "react-router-dom/dist";
import { Navigate } from "react-router-dom/dist";
import Courses from "../components/Courses";

export default function AdminDashboard() {
  return (
    <div>
      <div className="flex flex-col justify-center bg-slate-300 p-10 items-center">
        <div className="p-5 mt-10 md:mt-0 shadow-xl w-60 shadow-blue-300 border-4 rounded-lg">
          <h1 className="text-center font-bold text-2xl">Welcome</h1>
        </div>
        <div className="p-2 bg-slate-300">
          <div class="p-5 md:space-x-16 space-y-10 items-center md:space-y-0 flex flex-col md:flex-row overflow-hidden">
            <div class="px-6 py-4 text-center shadow-blue-300 border-4 rounded-lg">
              <div class="font-bold text-xl mb-2">Teachers</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 py-4 text-center shadow-blue-300 border-4 rounded-lg">
              <div class="font-bold text-xl mb-2">Students</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 py-4 text-center shadow-blue-300 border-4 rounded-lg">
              <div class="font-bold text-xl mb-2">Courses</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-600 h-[1px]"></div>
      <div className="flex flex-col justify-center bg-slate-300 p-10 items-center">
        <div class="p-5 md:space-x-16 space-y-10 items-center md:space-y-0 flex flex-col md:flex-row overflow-hidden">
          <div class="px-6 py-4 text-center shadow-blue-300 border-4 rounded-lg">
            <div class="font-bold text-3xl mb-2">Principal Details</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-gray-600 h-[1px]"></div>
      <Institute />

      <div className=" bg-gray-600 h-[1px]"></div>
      <Courses/>
      <div className="p-5 bg-slate-500"></div>
    </div>
  );
}
