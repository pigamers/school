export default function Student() {
    const fetchStudentData = () => {

    }

    return(
        <div className="p-5 md:ml-44 bg-slate-300">
        <div class="p-5 shadow-xl  flex flex-col items-center overflow-hidden shadow-blue-300 border-4 rounded-lg">
            <div class="px-6 py-4 text-center">
            <div class="font-bold text-3xl mb-5">Student Details</div>
            </div>
        <div>                
            <div class="flex md:flex-row space-x-20" >
            <button type="button" class="px-4 py-2 text-lg rounded-lg  font-semibold bg-blue-600 hover:bg-blue-700 text-white" onClick={fetchStudentData}>Get Student</button>
            <button type="button" class="px-4 py-2 text-lg rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white"><a href="/student-creation">Add Student</a>
            </button>
            </div>        
        </div>      
    </div>
    </div>
    )
}