import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import circle from "./circleIcon";
import { motion } from "framer-motion"

const answers = ["Answer 1", "Answer 2", "Answer 3"];

export default function Question() {
  const [selected, setSelected] = useState(-1);
  
  return (
    <div>
      <div className="rounded shadow-md p-6 m-4 ml-0 w-80 bg-white">
        <h2 className="font-bold text-xl">Question here</h2>
        <div className="py-4 flex flex-col">
          {answers.map((item, index) => (
            <button
              className="text-left rounded bg-white hover:bg-zinc-100 active:bg-zinc-200 pr-4 py-2 my-1 transition duration-100 relative"
              key={item}
              onClick={() => setSelected(index)}
            >
              <FontAwesomeIcon className="px-2" icon={faCircle} />
              {selected == index ? (
                <motion.div
                  className="absolute top-3 left-3 z-40"
                  layoutId="selector"
                >
                  <FontAwesomeIcon className="w-2 absolute z-50" icon={circle} />
                </motion.div>
              ) : (
                ""
              )}
              item
            </button>
          ))}
        </div>
        <button className="bg-blue-500 p-2 px-6 rounded text-white shadow-md hover:shadow active:shadow-sm transition-all duration-100 outline outline-blue-400/50 outline-offset-0 outline-0 active:outline-[3px]">
          Submit
        </button>
      </div>
    </div>
  );
}
