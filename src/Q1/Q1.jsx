import React from "react";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
const Q1 = () => {
  const ref = useRef();
  return (
    <div className="print border-2 rounded-lg border-yellow-500 px-5 py-5">
      <div className="sss">
        <div ref={ref} className="a">
          <h3 className="mb-4 font-serif font-bold">
            Q1:Tell us the differences between uncontrolled and controlled
            components.
          </h3>
          <p className="mx-3 text-gray-600 font-medium">
            Ams:Controlled Components: In controlled components, the form data
            and state are managed by the component itself. The component has
            full control over the values and behavior of the form inputs. It
            typically involves defining and updating the state variables within
            the component's code. Uncontrolled Components: In uncontrolled
            components, the form data is managed by the HTML elements
            themselves, without direct intervention from the component. The
            component does not have explicit control over the input values or
            their behavior.
          </p>
        </div>
      </div>
      <ReactToPrint
        trigger={() => (
          <button className="my-5 mx-3 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Print
            </span>
          </button>
        )}
        content={() => ref.current}
      />
    </div>
  );
};

export default Q1;
