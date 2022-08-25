export default function Video(props: {id: string | null}) {
  return (
    <div className="p-4 w-full">
      {props.id != null ? (
        <video className="aspect-video w-full" controls>
          <source src={props.id} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="aspect-video w-full bg-black">
        </div>
      )}
    </div>
  );
}