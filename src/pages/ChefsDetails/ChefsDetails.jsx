/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
// import ReceipeTable from "../ReceipeTable/ReceipeTable";
import ReceipeTable from './../ReceipeTable/ReceipeTable';
import NavBar from "../NavBar/NavBar";
import Footer from './../Footer/Footer';

const ChefsDetails = () => {
  const chef = useLoaderData();
  //   console.log(chef);
  const {
    id,
    likes,
    recipe_num,
    experience,
    chef_name,
    chef_pic,
    recipe_info,
    desc,
  } = chef;
  
  // console.log('ch',recipe_num)

  return (
    <div>
    <NavBar />
      <div className="">
        <div className="block mx-auto items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-5">
            <img
              className="w-2/4 h-[500px]  my-3  shadow-lg"
              src={chef_pic}
              alt="Bonnie image"
            />
            <h5 className="my-3 text-xl font-medium text-gray-900 dark:text-white">
              {chef_name}
            </h5>
            
          </div>
          <div className="mx-40">
          <div className="mx-auto grid md:grid-cols-2 justify-center items-center mt-4 px-auto md:mt-6 md:gap-5">
            <span className="text-justify text-lg px-10 py-5 text-gray-700 dark:text-gray-400">
                {desc}
                </span>
                <div className="text-center md:text-left">
                    <div className="mb-3 text-lg font-semibold text-gray-900">
                        Number of Likes: {likes}
                    </div>
                    <div className="mb-3 text-lg font-semibold text-gray-900">
                        Number of Receipe: {recipe_num}
                    </div>
                    <div className="mb-3 text-lg font-semibold text-gray-900">
                        Years of experience: {experience}
                    </div>
                </div>
          </div>
          </div>

          {/* table */}
           

            {
                recipe_info.map(receipe=><ReceipeTable key={receipe.recipe_id} receipe={receipe} />)  
            }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChefsDetails;
