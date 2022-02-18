export default function UserMessage(props) {
  var message = props.message.slice(0, 25) + " ...";

  return (
    <div className="row">
      {/* <Image src={props.URL}></Image> */}
      <div
        style={{
          background: `url(${props.URL})`,
          width: "50px",
          height: "50px",
          borderRadius: "25px",
          backgroundSize: "contain",
        }}
      />
      <div className="column">
        <div className="row space-between">
          <div>{props.name}</div>
          <div>{props.time}</div>
        </div>
        <div>{message}</div>
      </div>
    </div>
  );
}
