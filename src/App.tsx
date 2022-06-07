import Video from "../src/components/Video"
import Question from "../src/components/Question"

export default function App() {
  return (
    <div>
      <h1 className="text-7xl p-6 font-bold text-center">Video Project</h1>
      <div className="flex flex-row">
        <Video />
        <Question />
      </div>
    </div>
  )
}