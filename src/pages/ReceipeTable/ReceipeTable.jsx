import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ReceipeTable = ({ receipe }) => {
    const [isDisable,setDisable] = useState(false)
    const notify = () => toast("Item is added Successfully!");
    const handleButtonClick = () => {
        notify();
        setDisable(!isDisable)
      };
  const {
    rating,
    receipe_id,
    recipe_name,
    receipe_pic,
    ingredients,
    cooking_method,
  } = receipe;
//   console.log("chef", receipe);
  
  return (
    <div className="relative w-full  overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-[80%] mx-auto text-sm text-center text-gray-500 dark:text-gray-400">
        {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    Product
                </th>
                <th scope="col" className="px-6 py-3">
                    Qty
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead> */}
        <tbody cl>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-32 p-4">
              <img src={receipe_pic} alt="Apple Watch" />
            </td>
            <td className="px-6 text-xl  py-4 font-semibold text-gray-900 dark:text-white">
              {recipe_name}
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              <h2 className="underline text-emerald-700">Element</h2>
              <ul>
                {ingredients.map((element) => (
                  <li className="text-slate-700">{element}</li>
                ))}
              </ul>
            </td>
            <td className="px-6 text-justify w-[30%] text-gray-600 py-4 font-semibold  dark:text-white">
              {cooking_method}
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {rating}
            </td>
            <td className="px-6 py-4">
            <button type="button"  disabled={isDisable} 
              onClick={handleButtonClick}  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Favourite</button>
            </td>
          </tr>
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default ReceipeTable;
