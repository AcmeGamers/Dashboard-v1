export default function UserMessage(props) {
  var message = props.message.slice(0, 33) + " ...";

  return (
    <div className="row" style={{ margin: "20px 15px" }}>
      {/* <Image src={props.URL}></Image> */}
      <div
        style={{
          background: `url(${props.URL})`,
          width: "50px",
          height: "50px",
          borderRadius: "25px",
          backgroundSize: "contain",
          marginRight: "10px",
        }}
      />
      <div className="column horiz-center">
        <div className="row space-between">
          <div>{props.name}</div>
          <div>{props.time}</div>
        </div>
        <div style={{ fontSize: "13px" }}>{message}</div>
      </div>
    </div>
  );
}
