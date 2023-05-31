import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";

export default function DeptCreation() {
  const [data, setData] = useState({
    depName: "",
  });
  const navigate = useNavigate();
  const handleInput = (e) => {
    setData({ ...data, "depName": e.target.value });
    console.log('data', data)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://65.2.30.68:8000/insertDepartment", {
        departmentName: data.depName,
      })
      .then((res) => {
        console.log(res);
        // localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
      <div className="flex flex-col justify-center px-6 py-12 bg-slate-300 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Department Creation
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="depName"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Department Name
                </label>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="depName"
                name="fname"
                type="text"
                required
                onChange={handleInput}
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-5 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
  );
}
