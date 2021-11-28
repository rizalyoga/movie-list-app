import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./detail-movie.css";
import { useParams } from "react-router-dom";
import allStore from "../../store/actions/";

const DetailMovie = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = useParams();
  const loading = useSelector(({ loading }) => loading);

  const details = useSelector(({ detail }) => detail);

  useEffect(() => {
    dispatch(allStore.fetchDetail(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log("INI DETAILS DARI DETAILS", details);
  }, [details]);
  // =====================================================

  const posts = useSelector(({ listPost }) => listPost);

  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const findDetail = posts.find((el) => el.id === +params.id);
    // console.log(findDetail);
    setDetail(findDetail);
  }, [params, posts]);

  if (!detail) {
    return <></>;
  }

  if (loading) {
    return (
      <div className="bg-gray-700 flex justify-center items-center" style={{ height: "100vh" }}>
        <h1 className="text-center text-white" style={{ margin: "auto" }}>
          PLEASE WAIT ...
        </h1>
        ;
      </div>
    );
  }

  return (
    <div className="bg-gray-200 ">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8  ">
        {/* <h2 className="text-2xl font-extrabold tracking-tight text-white text-center pb-6">.</h2> */}

        <div className="content ">
          <div className="cover-movie flex justify-center items-center">
            <img className="rounded pb-5" src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`} alt="Title" />
          </div>
          <div className="details ">
            {/* <h2 className="text-2xl font-extrabold tracking-tight text-white text-center pb-6">DETAILS</h2> */}
            <div className="table-details flex justify-start">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td className="row-span-2 row-start-1 row-start-2 col-span-2 col-start-1 col-end-2 border-0 border-white px-3 text-gray-800 pt-3 pb-5 title">{detail.title} </td>
                    <td className="border-0 border-white px-3 text-white pt-3 pb-5 title"></td>
                  </tr>
                  <tr className="bg-emerald-200 text-desc ">
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Original title</td>
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">{detail.original_title}</td>
                  </tr>
                  <tr className="bg-emerald-200 text-desc ">
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Release </td>
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">{detail.release_date}</td>
                  </tr>
                  <tr className="bg-emerald-200 text-desc ">
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Genre</td>
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">
                      {details.genres.map((el) => {
                        return el.name + ", ";
                      })}
                    </td>
                  </tr>
                  <tr className="bg-emerald-200 text-desc ">
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Production Companies</td>
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">
                      {details.production_companies.map((el) => {
                        return el.name + ", ";
                      })}
                    </td>
                  </tr>
                  <tr className="bg-emerald-200 text-desc ">
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Budget</td>
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">{details.budget}</td>
                  </tr>
                  <tr className="bg-emerald-200 text-desc ">
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Popularity</td>
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">{detail.popularity}</td>
                  </tr>
                  <tr className="bg-emerald-200 text-desc ">
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Vote Average</td>
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">{detail.vote_average}</td>
                  </tr>
                  <tr className="bg-emerald-200 text-desc ">
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Vote Count</td>
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">{detail.vote_count}</td>
                  </tr>
                  <tr className="bg-emerald-200 text-desc ">
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">Original Language</td>
                    <td className="border-0 border-b-2 border-gray-100 px-3 text-gray-800 pt-3 pb-3">{detail.original_language}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="synopsis mt-6">
          <h2 className="text-synopsis text-gray-800">Synopsis</h2>
          <p className="text-gray-800">{detail.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
