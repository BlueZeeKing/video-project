import { useEffect, useState } from "react";

import Video from "./components/Video"
import Question from "./components/Question"
import Spinner from "./components/Spinner";

interface Data {
  question: string;
  answers: string[];
  loading: boolean;
  videoID: string;
  videoPath: string | null;
}

export default function App() {
  const [data, setData] = useState<Data>({
    question: "",
    answers: [],
    loading: true,
    videoID: "",
    videoPath: null
  });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/question")
      .then((res) => res.json())
      .then((data) => setData({ ...data, loading: false }));
  }, []);

  return (
    <div>
      <h1 className="text-7xl p-6 font-bold text-center">Video Project</h1>
      <div className="flex flex-row">
        <Video id={data.videoPath} />
        <Question
          question={data.question}
          answers={data.answers}
          loading={data.loading}
          videoID={data.videoID}
        />
      </div>
    </div>
  );
}