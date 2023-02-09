import React from "react";
import { Collapse } from "react-collapse";

const Accordion = ({ open, toggle, title, desc }) => {
  console.log(toggle);
  return (
    <div
      className="flex flex-col cursor-pointer mb-7 sm:ml-4 sm:mb-4"
      onClick={toggle}
    >
      <div className=" flex flex-row sm:w-80">
        <div className="pt-1">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </div>
        <h1 className="text-2xl font-bold pl-5 sm:text-lg ">{title}</h1>
      </div>

      <Collapse isOpened={open}>
        <div className="text-[#858585] pl-11 pt-6 pb-6 text-xl sm:text-sm sm:w-80 sm:pb-0">
          {desc}
        </div>
      </Collapse>
      <hr className="mt-4 sm:w-80" />
    </div>
  );
};
export default Accordion;
