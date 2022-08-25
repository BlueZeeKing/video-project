import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import circle from "./circleIcon";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import Spinner from "./Spinner";

export default function Question(props:{question:string, answers:string[], loading:boolean, videoID:string, onSubmit: () => void}) {
  const [selected, setSelected] = useState(-1);
  
  return (
    <div>
      <div className="rounded shadow-md p-6 m-4 ml-0 w-80 bg-white">
        {props.loading ? (
          <Skeleton />
        ) : (
          <h2 className="font-bold text-xl">{props.question}</h2>
        )}
        <div className="py-4 flex flex-col">
          {props.loading ? (
            <div className="w-full flex flex-row place-content-center py-10">
              <Spinner />
            </div>
          ) : (
            props.answers.map((item, index) => (
              <Individual
                item={item}
                index={index}
                selected={selected}
                setSelected={setSelected}
                key={item}
              />
            ))
          )}
        </div>
        <button
          className="bg-blue-500 p-2 px-6 rounded text-white shadow-md hover:shadow active:shadow-sm transition-all duration-100 outline outline-blue-400/50 outline-offset-0 outline-0 active:outline-[3px]"
          onClick={() => {
            fetch(`${import.meta.env.VITE_HOST_URL}submit`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                videoID: props.videoID,
                selectedIndex: selected,
              }),
            })
            props.onSubmit()
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

function Individual(props: {item: string; index: number; selected: number; setSelected: (n: number) => void}) {
  return (
    <button
      className="text-left rounded bg-white hover:bg-zinc-100 active:bg-zinc-200 pr-4 py-2 my-1 transition duration-100 relative"
      onClick={() => props.setSelected(props.index)}
    >
      <FontAwesomeIcon className="px-2" icon={faCircle} />
      {props.selected == props.index ? (
        <motion.div className="absolute top-3 left-3 z-40" layoutId="selector">
          <FontAwesomeIcon className="w-2 absolute z-50" icon={circle} />
        </motion.div>
      ) : (
        ""
      )}
      {props.item}
    </button>
  );
}