import { useEffect, useState } from "react";

import Video from "./components/Video"
import Question from "./components/Question"
import Spinner from "./components/Spinner";

interface Data {
  question: string;
  answers: string[];
  loading: boolean;
}

export default function App() {
  const [data, setData] = useState<Data>({
    question: "",
    answers: [],
    loading: true
  });

  useEffect(() => {
    fetch("/question")
      .then((res) => res.json())
      .then((data) => setData({ ...data, loading: false }));
  }, []);

  return (
    <div>
      <h1 className="text-7xl p-6 font-bold text-center">Video Project</h1>
      <div className="flex flex-row">
        <Video />
        <Question
          question={data.question}
          answers={data.answers}
          loading={data.loading}
        />
      </div>
    </div>
  );
}