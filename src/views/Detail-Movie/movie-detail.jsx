import React from "react";
import "./detail-movie.css";

const DetailMovie = () => {
  return (
    <div className="bg-gray-200 ">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8  ">
        {/* <h2 className="text-2xl font-extrabold tracking-tight text-white text-center pb-6">.</h2> */}

        <div className="content ">
          <div className="cover-movie flex justify-center items-center">
            <img className="rounded pb-5" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flifestyle.inquirer.net%2Ffiles%2F2017%2F08%2F91wIh4z3u8L.jpg&f=1&nofb=1" alt="Title" />
          </div>
          <div className="details ">
            {/* <h2 className="text-2xl font-extrabold tracking-tight text-white text-center pb-6">DETAILS</h2> */}
            <div className="table-details flex justify-start">
              <table className="table-auto">
                <tbody>
                  <tr>
                    {/* <td className="border-0 border-white px-3 text-white pt-3 pb-5 title">Title</td> */}
                    <td className="border-0 border-white px-3 text-gray-800 pt-3 pb-5 title">Samuri X </td>
                  </tr>
                  <tr className="bg-emerald-200 text-desc ">
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Release Date</td>
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">1999</td>
                  </tr>
                  <tr className="bg-emerald-200 text-desc ">
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Genre</td>
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Action</td>
                  </tr>
                  <tr className="bg-emerald-200 text-desc ">
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Duration</td>
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">2 jam</td>
                  </tr>
                  <tr className="bg-emerald-200 text-desc ">
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Popularity</td>
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">8.000.000</td>
                  </tr>
                  <tr className="bg-emerald-200 text-desc ">
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Production Companies</td>
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">MAPA Studios</td>
                  </tr>
                  <tr className="bg-emerald-200 text-desc ">
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Status</td>
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Released</td>
                  </tr>
                  <tr className="bg-emerald-200 text-desc ">
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Original Language</td>
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">English</td>
                  </tr>
                  <tr className="bg-emerald-200 text-desc ">
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Budget</td>
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">1.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="synopsis mt-6">
          <h2 className="text-synopsis text-gray-800">Synopsis</h2>
          <p className="text-gray-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, libero velit modi dolorum deleniti dolores explicabo architecto eveniet animi ratione, tempore nemo sunt vitae quidem dolorem. Perferendis quam repudiandae
            quae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
