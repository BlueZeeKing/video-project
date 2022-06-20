import video from "../example.mp4"

export default function Video() {
  return (
    <div className="p-4 w-full">
      <video className="aspect-video w-full" controls>
        <source src={video} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
  )
}