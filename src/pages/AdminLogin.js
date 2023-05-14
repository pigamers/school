import { BsFillPersonFill } from "react-icons/bs";


export default function AdminLogin() {
    return(
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <BsFillPersonFill className='mx-auto h-30 w-auto border-4' size={"100"}/>
            <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
              Login as Admin
            </h2>
          </div> 
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
                {/* Username */}
              <div>
              <div className="flex items-center justify-between">
                  <label htmlFor="userName" className="block text-lg font-medium leading-6 text-gray-900">
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
                  <label htmlFor="password" className="block text-lg font-medium leading-6 text-gray-900">
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
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-5 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
              </div>
              <p className="mt-10 text-center text-sm text-gray-500">
              Not an Admin?{' '}
              <a href="/principal-login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Login Here
              </a>
            </p>
            </form>
          </div>
        </div>
        </div>
    )
}