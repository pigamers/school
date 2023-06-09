import axios from "axios";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function InstituteById() {
  const params = useParams();
  const [Name, setName] = useState("");
  const [currId, setcurrId] = useState(null);
  const [first, setfirst] = useState(null);
  const [stud, setstud] = useState(null);
  const [princi, setprinci] = useState(null);
  const [courses, setcourses] = useState(null);
  const [teacher, setteacher] = useState(null);
  const navigate = useNavigate();
  console.log("params", params.id);
  const handleClick = () => {
    navigate("create-principal/" + params.id);
  };
  useEffect(() => {
    setcurrId(params.id);
    const fetchInstitute = async () => {
      const response = await axios
        .get(
          `http://65.2.30.68:8000/getInstituteById?institute_id=${params.id}`
        )
        .then((res) => {
          console.log("res", res);
          setName(res.data.data.InstituteName);
          console.log("Name", Name);
        });
    };
    const fetchPrincipal = async () => {
      const resp = await axios
        .get("http://65.2.30.68:8000/principalAllData")
        .then((res) => {
          return res.data.data;
        });
      console.log("currId", currId);
      const newArr = resp.filter(
        (x) => x.institutionId === parseInt(params.id)
      );
      console.log("princ", newArr, resp);
      setprinci(newArr);
    };
    const fetchStudent = async () => {
      const resp = await axios
        .get("http://65.2.30.68:8000/getDataAllSt")
        .then((res) => {
          return res.data.data;
        });
      console.log("currId", currId);
      const newArr = resp.filter(
        (x) => x.institutionId === parseInt(params.id)
      );
      console.log("stud", newArr, resp);
      setstud(newArr);
    };
    const fetchCourses = async () => {
      const resp = await axios
        .get(`http://65.2.30.68:8000/getCourses?Institute=${params.id}`)
        .then((res) => {
          return res.data.data;
        });
      console.log("currId", currId);

      console.log("courses", resp);
      setcourses(resp);
    };
    const fetchTeachers = async () => {
      const resp = await axios
        .get(`http://65.2.30.68:8000/getAllTeacher`)
        .then((res) => {
          return res.data.data;
        });
      const newArr = resp.filter(
        (x) => x.institutionId === parseInt(params.id)
      );
      console.log("teacher", newArr, resp);

      console.log("teacher", resp);
      // setcourses(resp);
      setteacher(newArr);
    };
    fetchTeachers();
    fetchStudent();
    fetchCourses();
    fetchPrincipal();
    fetchInstitute();
  }, []);

  const handleTeacherClick = () => {
    navigate("create-teacher/" + params.id);
  };
  const handleStudentClick = () => {
    navigate("create-student/" + params.id);
  };

  return (
    <div className="flex flex-col justify-center p-10 items-center bg-slate-300">
      <div class="font-bold text-3xl mb-2">{Name}</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
      {princi && princi.length > 0
        ? princi.map((x) => {
            return (
              <div className="mt-4 max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-48 bg-gray-100">
                  <img
                    className="h-32 w-32 rounded-full object-cover border"
                    src={x.profilePhoto}
                    alt={`Profile of ${x.name}`}
                  />
                </div>
                <div className="px-4 py-2 mt-2">
                  <h1 className="text-xl font-medium text-gray-800">
                    {x.name}
                  </h1>
                  <p className="text-gray-600">Principal</p>
                  <p className="mt-2 text-gray-600">{x.Additional}</p>
                </div>
              </div>
            );
          })
        : localStorage.getItem("role") === "admin" && (
            <button className="flex w-full justify-center   mb-5 rounded-md bg-indigo-600 px-5 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <div onClick={() => handleClick()}>Create Principal</div>
            </button>
          )}
      {localStorage.getItem("role") === "principal" ? (
        <>
          <button className="flex w-full justify-center mb-5 rounded-md bg-indigo-600 px-5 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <div onClick={() => handleTeacherClick()}>Create Teacher</div>
          </button>
          <button className="flex w-full justify-center rounded-md bg-indigo-600 px-5 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <div onClick={() => handleStudentClick()}>Create Student</div>
          </button>
        </>
      ) : (
        <></>
      )}
      {stud && stud.length > 0 && (
        <h1 className="text-4xl">Students Enrolled</h1>
      )}

      <div className="mt-4 flex justify-around w-full">
        {stud &&
          stud.length > 0 &&
          stud.map((x) => {
            return (
              <div>
                <div className="mt-4  mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
                  <div className="flex items-center justify-center h-48 bg-gray-100">
                    <img
                      className="h-32 w-32 rounded-full object-cover"
                      src={x.profilePhoto}
                      alt={`Profile of ${x.name}`}
                    />
                  </div>
                  <div className="px-4 py-2 mt-2">
                    <h1 className="text-xl font-medium text-gray-800">
                      {x.name}
                    </h1>
                    <p className="text-gray-600">Student</p>
                    <p className="mt-2 text-gray-600">{x.Additional}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {courses && courses.length > 0 && <h1 className="text-4xl">Courses</h1>}

      <div className="mt-4 flex justify-around w-full">
        {courses &&
          courses.length > 0 &&
          courses.map((x) => {
            return (
              <div
                className="bg-white shadow-lg rounded-lg p-6 mt-4"
                onClick={() => {
                  navigate(`/course/${currId}`);
                }}
              >
                <h2 className="text-lg font-bold text-gray-900 ">{x.course}</h2>
                <p className="font-medium">
                  {x.startTime} - {x.endTime}
                </p>
              </div>
            );
          })}
      </div>
      {teacher && teacher.length > 0 && <h1 className="text-4xl">Teacher</h1>}

      <div className="mt-4 flex justify-around w-full">
        {teacher &&
          teacher.length > 0 &&
          teacher.map((x) => {
            return (
              <div className="mt-4 max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-48 bg-gray-100">
                  <img
                    className="h-32 w-32 rounded-full object-cover"
                    src={x.profilePhoto}
                    alt={`Profile of ${x.name}`}
                  />
                </div>
                <div className="px-4 py-2 mt-2">
                  <h1 className="text-xl font-medium text-gray-800">
                    {x.name}
                  </h1>
                  <p className="text-gray-600">Teacher</p>
                  <p className="mt-2 text-gray-600">{x.Additional}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
