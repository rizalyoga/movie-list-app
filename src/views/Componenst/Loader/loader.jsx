import "./loader.css";

const Loading = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center pb-6">LIST MOVIES</h2> */}
        <div className=" card mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
          <div className="group relative cards ">
            <div className="w-full min-h-80 bg-gray-500 aspect-w-1 aspect-h-1 rounded-md overflow-hidden  y-900 lg:h-75 lg:aspect-none"></div>
            <div className="mt-4 flex justify-center ">
              <div>
                <h3 className="text-lg text-gray-700 text-center pb-4 cards-text ">
                  <div style={{ height: "10px" }} className="bg-gray-800"></div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
