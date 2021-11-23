import React from "react";

const DetailMovie = () => {
  return (
    <div className="bg-gray-500 ">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8  ">
        <h2 className="text-2xl font-extrabold tracking-tight text-white text-center pb-6">DETAIL MOVIE</h2>

        <div className="flex flex-col">
          <div className="cover-movie w-80 flex justify-center items-center mx-auto">
            <img className="pb-5" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flifestyle.inquirer.net%2Ffiles%2F2017%2F08%2F91wIh4z3u8L.jpg&f=1&nofb=1" alt="Title" />
          </div>
          <div className="details py-5">
            <h2 className="text-2xl font-extrabold tracking-tight text-white text-center pb-6">DETAILS</h2>
            <div className="table-details flex justify-start">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td className="border-0 border-b-2 border-white px-3 text-white">Title</td>
                    <td className="border-0 border-b-2 border-white px-3 text-white">Samuri X</td>
                  </tr>
                  <tr className="bg-emerald-200">
                    <td className="border-0 border-b-2 border-white px-3 text-white">Release</td>
                    <td className="border-0 border-b-2 border-white px-3 text-white">1999</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
