import React, { useState } from "react"
import axios from "axios"

export default function Teacher(props) {
    const [myData, setData] = useState([])

    const fetchTeacherData = () => {
        axios.get("http://65.2.30.68:8000/getUser")
        .then((response) => setData(response.data))
    }

return(
    <div className="p-5 md:ml-44 bg-slate-300">
        <div class="p-5 shadow-xl  flex flex-col items-center overflow-hidden shadow-blue-300 border-4 rounded-lg">
            <div class="px-6 py-4 text-center">
            <div class="font-bold text-3xl mb-5">Teachers Details</div>
            </div>
        {
            myData.map((value) => {
                const { fname, lname, username } = value;
                return(
                    <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    value.user_id
                </th>
                <th scope="col" class="px-6 py-3">
                    value.email
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
                    </div>
                )
            })
        }
        <div>                
            <div class="flex md:flex-row space-x-20" >
            <button type="button" class="px-4 py-2 text-lg rounded-lg  font-semibold bg-blue-600 hover:bg-blue-700 text-white" onClick={fetchTeacherData}>Get Teacher</button>                <button type="button" class="px-4 py-2 text-lg rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white"><a href="/teacher-creation">Add Teacher</a>
            </button>
            </div>        
        </div>      
    </div>
    </div>
    )
}