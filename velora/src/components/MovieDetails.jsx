import React from "react";

const MovieDetails = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/95 backdrop-blur-sm overflow-auto">
      <div className="relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl max-h-[900vh] overflow-hidden">
        <button
          className="absolute top-4 right-4 z-10 rounded-full bg-neutral-700/80 text-white 
        hover:bg-neutral-600/80 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex items-center justify-center h-96">
          <div className="animate-pulse">
            <div
              className="w-16 h-16 border border-purple-500 border-t transparent rounded-full 
            animate-spin"
            >
              <p>Loading Details......</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.33-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h2 className="text-xl font-bold mt-4">
                Failed to Load Movie Details...
              </h2>
              <p className="mt-2 text-neutral-400">Error.</p>
              <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md">
                Close
              </button>
            </div>
          </div>
          <div>
            <div className="relative h-72 md:h-96 w-full">
              <img src="" alt="" className="w-full h-full object-cover" />
              <div className="w-full h-full bg-neutral-700"></div>
              <div className="absolute inset-0 bg-linear-to-t from-neutral-800 via-neutral-800/70 to-transparent"></div>
            </div>
            <div className="p-6 md:p-8">
              <div className="md:flex gap-8 -mt-32 md:-mt-48 relative">
                <div className="w-32 md:w-64 shrink-0 mb-4 md:mb-0">
                  <div className="rounded-lg overflow-hidden shadow-lg border border-neutral-700">
                    <img src="" alt="" className="w-full h-auto" />
                    <div className="w-full aspect-2/3 bg-neutral-700 flex items-center justify-center">
                      No Poster Available
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    Movies Title
                    <span className="text-neutral-400 font-normal ml-2"></span>
                  </h1>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-sm items-center">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 font-medium">
                        Movies Vote Average
                      </span>
                    </div>
                    <span className="text-neutral-300">Movie Runtime</span>
                    <span className="text-neutral-300">Movie Release Date</span>
                    <span className="bg-red-500/80 text-white text-xs px-2 py-0.5 rounded">
                      18+
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-neutral-400 text-neutral-300 px-3 py-1 rounded-full text-xs">
                      Genre Name
                    </span>
                  </div>
                  <p className="mt-4 text-neutral-400 italic">Movies Tagline</p>
                  <div className="mt-6">
                    <h2 className="text-xl font-semibold text-white mb-2">
                      Overview
                    </h2>
                    <p className="text-neutral-300">Movie Overview</p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 
                    rounded-lg flex items-center gap-2 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                        {""}
                      </svg>
                      Watch Now
                    </button>
                    <div
                      className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 
                    rounded-lg flex items-center gap-2 transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24 "
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      Add To Watchlist
                    </div>
                  </div>
                </div>
                <div className="mt-12 grid grid-cols-1 md:gird-cols-2 gap-8">
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-4">
                      Details
                    </h2>
                    <div calssName="space-y-4">
                      <div className="text-neutral-400 text-sm mb-1">
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Production Companies
                        </h3>
                        <p className="text-white">Movies Production Counties</p>
                      </div>
                      <div className="text-neutral-400 text-sm mb-1">
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Languages
                        </h3>
                        <p className="text-white">Language</p>
                      </div>
                      <div className="text-neutral-400 text-sm mb-1">
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Budget
                        </h3>
                        <p className="text-white">Movie budget</p>
                      </div>
                      <div className="text-neutral-400 text-sm mb-1">
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Revenue
                        </h3>
                        <p className="text-white">Revenue</p>
                      </div>
                      <div className="text-neutral-400 text-sm mb-1">
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Status
                        </h3>
                        <p className="text-white">Status</p>
                      </div>
                      <div className="text-neutral-400 text-sm mb-1">
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Original Language
                        </h3>
                        <p className="text-white">Original Language</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-4">
                      Rating
                    </h2>
                    <div className="flex items-center">
                      <div
                        className="w-24 h-24 rounded-full border-4 border-purple-500 flex 
                        items-center justify-center mr-4"
                      >
                        <span className="text-3xl font-bold">
                          Movie Average
                        </span>
                      </div>
                      <div>
                        <p className="text-neutral-300">Votes</p>
                        <div className="w-full bg-neutral-700 rounded-full h-2.5 mt-2">
                          <div className="bg-purple-600 h-2.5 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-neutral-400">No Ratings Available</p>
                  </div>
                  <div className="mt-8 space-y-4">
                    <a
                      href="#"
                      className="inline-flex items-center bg-neutral-700 
                    hover:bg-neutral-600 text-white px-4 py-2 rounded transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 
                9c1.657 0 3-4.03 3.9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 
                3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                      Official Website
                    </a>
                    <a
                      href=""
                      className="inline-flex items-center bg-yellow-700 hover:bg-yellow-600 
                    text-white px-4 py-2 rounded transition-colors"
                    >
                      <svg
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14.31 9.588v.803c-0.077-.048-.227-.07-.42-.07v4.815c.27 0 .44-.06.5-.165.062-.104.095-.405.095-.885v-2.866c0-.33-.004-.054-.033-.063-.022-.096-.067-.163-.143-.204z" />
                        <path d="M22.416 0H1.62C0.742 0 0.032 0.698 0.032 1.558v20.883c0 0.86 0.71 1.559 1.588 1.559h20.796c0.877 0 1.587-0.698 1.587-1.559V1.558C24.003 0.698 23.293 0 22.416 0zM7.72 13.12c0 0.348-0.023 0.62-0.06 0.767-0.046 0.142-0.133 0.27-0.26 0.37-0.14 0.11-0.297 0.194-0.48 0.252-0.177 0.053-0.412 0.08-0.697 0.08H4.868V8.99h1.376c0.261 0 0.467 0.027 0.632 0.07 0.163 0.045 0.301 0.113 0.413 0.204 0.11 0.09 0.19 0.203 0.24 0.34 0.052 0.134 0.076 0.313 0.076 0.531v0.294c0 0.253-0.038 0.453-0.12 0.6-0.079 0.15-0.21 0.27-0.39 0.364v0.01c0.232 0.1 0.39 0.23 0.48 0.39 0.092 0.154 0.139 0.342 0.139 0.62v0.702zm4.97-0.005c0 0.424-0.11 0.748-0.327 0.982-0.222 0.233-0.488 0.35-0.806 0.35-0.203 0-0.356-0.035-0.48-0.103-0.121-0.068-0.217-0.155-0.297-0.26-0.071-0.11-0.133-0.215-0.156-0.343-0.023-0.126-0.04-0.345-0.04-0.63V9.42c0-0.42 0.077-0.735 0.238-0.955 0.166-0.223 0.433-0.335 0.793-0.335 0.358 0 0.624 0.112 0.79 0.335 0.164 0.22 0.245 0.535 0.245 0.954v3.695zm4.913-3.27c0 0.419-0.113 0.727-0.342 0.918-0.23 0.192-0.56 0.288-0.988 0.288h-0.5v2.212H14.08V8.989h1.683c0.379 0 0.69 0.095 0.922 0.28 0.237 0.185 0.35 0.492 0.35 0.918v0.656z" />
                        <path d="M6.382 10.13c-0.039-0.086-0.1-0.153-0.181-0.193-0.085-0.042-0.21-0.062-0.379-0.062H5.417v1.723h0.392c0.172 0 0.302-0.023 0.384-0.073 0.086-0.047 0.148-0.113 0.193-0.204 0.048-0.09 0.07-0.214 0.07-0.366v-0.448c0-0.15-0.028-0.274-0.074-0.36z" />
                      </svg>
                      View on IMBD
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
