import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SubCourse() {
  const [qr, setqr] = useState("");
  const params = useParams();
  function downloadQR(qrCodeUrl) {
    // Create a new anchor element to download the image
    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = "qr-code.png";
    link.click();
  }
  useEffect(() => {
    const fetchDetails = async () => {
      const resp = await axios
        .get(
          "http://65.2.30.68:8000/getsubCoursesById?subcourses_id=" + params.id
        )
        .then(async (res) => {
          const respQr = await axios
            .get(
              `http://65.2.30.68:8000/instituteQr?institute_id=${res.data.data[0].InstituteId}&subcourses_id=${params.id}`
            )
            .then((res) => res.data.data);
          console.log("resQr", respQr);
          setqr(respQr);
          return res.data.data;
        });
      console.log("resp", resp);
    };
    fetchDetails();
  }, []);

  return (
    <div className="flex flex-col justify-center bg-slate-300 p-10 items-center">
      <div class="p-10 md:space-x-16 space-y-10 items-center md:space-y-0 flex flex-col md:flex-row overflow-hidden">
        <div class="px-6 py-4 text-center shadow-blue-300 border-4 rounded-lg">
          <div class="font-bold text-3xl mb-2">Sub Course Details</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <div class="flex flex-col items-center justify-center m-10 space-y-10 md:space-y-0 md:flex-row md:space-x-20">
            <img src={qr} alt="QR Code" />
            {localStorage.getItem("role") === "principal" && (
              <button onClick={() => downloadQR(qr)}>Download QR Code</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
