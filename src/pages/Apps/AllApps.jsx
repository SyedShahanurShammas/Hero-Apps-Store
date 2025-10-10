import React from "react";
import useLoaderApps from "../../Hooks/useLoaderApps";
import AppCard from "../../components/AppCard/AppCard";
import { useState } from "react";
import NoApps from "../../components/NoApps/NoApps";
import SkeletonLoader from "../../components/loader/SkeletonLoader";

const AllApps = () => {
  const { allApps, loading } = useLoaderApps();
  const [search, setSearch] = useState("");
  // console.log(allApps);
  // if (loading) return <h1>Loading...</h1>;
  const term = search.trim().toLocaleLowerCase();
  const searchApps = term
    ? allApps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : allApps;

  return (
    <div className="container px-5 lg:px-0 mx-auto my-5 md:my-10 lg:my-20">
      <div className="text-center mb-12">
        <h1 className="lg:text-5xl text-2xl font-bold">Our All Applications</h1>
        <p className="text-[#627382] text-[20px]  mt-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between mb-2">
        <h1 className="text-[#001931] lg:text-2xl text-xl font-semibold">
          ({searchApps.length}) Apps Found
        </h1>
        <label className="input  w-4/12">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>

      {loading ? (
        <SkeletonLoader count={"28"}></SkeletonLoader>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {searchApps.map((app) => (
            <AppCard app={app} key={app.id}></AppCard>
          ))}
        </div>
      )}
      {/* error page:no app found */}
      {searchApps.length === 0 && <NoApps></NoApps>}
    </div>
  );
};

export default AllApps;
