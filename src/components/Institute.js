export default function Institute() {
    const fetchInstitute = () => {

    }
    
    return(
        <div className="flex flex-col justify-center bg-slate-300 p-10 md:pl-36 items-center">
        <div class="p-5 md:ml-44 md:space-x-16 space-y-10 items-center md:space-y-0 flex flex-col md:flex-row overflow-hidden">
          <div class="px-6 py-4 text-center shadow-blue-300 border-4 rounded-lg">
            <div class="font-bold text-3xl mb-2">Institute Details</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <div class="flex flex-col items-center justify-center m-10 space-y-10 md:space-y-0 md:flex-row md:space-x-20" >
              <button type="button" class="px-4 py-2 text-lg rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white" onClick={fetchInstitute}>Get Institute</button>
              <button type="button" class="px-4 py-2 text-lg rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white">
                <a href="/institute-creation">Add Institute</a></button>
              </div>
          </div>  
        </div>
      </div>
    )
}