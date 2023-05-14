import {BsFillPersonFill} from 'react-icons/bs';

export default function TeacherCreation() {
    return(
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <BsFillPersonFill className='mx-auto h-30 w-auto border-4' size={"100"}/>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Teacher Creation
            </h2>
          </div> 
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
                {/* First Name */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                    First Name
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
                {/* Last Name */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                    Last Name
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
                {/* Gender */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                    Gender
                  </label>
                </div>
                <div className=" flex flex-row justify-center space-x-20 mt-2">
                <input type="radio" name="gender" value="male" className="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> Male
                <input type="radio" name="gender" value="female" className="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> Female
                <input type="radio" name="gender" value="others" className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> Others
                </div>
              </div>
                {/* Dob */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                    Date Of Birth
                  </label>
                </div>
                <div className="flex justify-center mt-2">
                <input type="date" name="dob" value="dob" className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
                {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
                {/* Phone Number */}
                <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
                {/* Address */}
              <div>
              <div className="flex items-center justify-between">
                  <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                    Address
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
                {/* Emp ID */}
              <div>
              <div className="flex items-center justify-between">
                  <label htmlFor="empId" className="block text-sm font-medium leading-6 text-gray-900">
                    Employee ID
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="empId"
                    name="empId"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>                
              </div>
                {/* Department */}
              <div>
              <div className="flex items-center justify-between">
                  <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900">
                    Department
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="department"
                    name="department"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
                {/* Role */}
              <div>
              <div className="flex items-center justify-between">
                  <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                    Role
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="role"
                    name="role"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
                {/* Year */}
              <div>
              <div className="flex items-center justify-between">
                  <label htmlFor="year" className="block text-sm font-medium leading-6 text-gray-900">
                    Year
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="year"
                    name="year"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
                {/* Username */}
              <div>
              <div className="flex items-center justify-between">
                  <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="userName"
                    name="userName"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
                {/* Password */}
              <div>
              <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
              </div>
              <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
                {/* Degree */}
              <div>
              <div className="flex items-center justify-between">
                  <label htmlFor="degree" className="block text-sm font-medium leading-6 text-gray-900">
                    Highest Degree
                  </label>
              </div>
              <div className="mt-2">
                  <input
                    id="degree"
                    name="degree"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
                {/* Study */}
              <div>
              <div className="flex items-center justify-between">
                  <label htmlFor="study" className="block text-sm font-medium leading-6 text-gray-900">
                    Fields of Study
                  </label>
              </div>
              <div className="mt-2">
                  <input
                    id="study"
                    name="study"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
                {/* Certifications */}
              <div>
              <div className="flex items-center justify-between">
                  <label htmlFor="study" className="block text-sm font-medium leading-6 text-gray-900">
                    Professional Certifications
                  </label>
              </div>
              <div className="mt-2">
                  <input
                    id="study"
                    name="study"
                    type="text"
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
                {/* Course Code */}
              <div>
              <div className="flex items-center justify-between">
                  <label htmlFor="code" className="block text-sm font-medium leading-6 text-gray-900">
                    Course Code
                  </label>
              </div>
              <div className="mt-2">
                  <input
                    id="code"
                    name="code"
                    type="text"
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
    )
}