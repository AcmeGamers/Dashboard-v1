import Image from "next/image";

export default function UserMessage(props) {
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
        <div className="row">
          <div>{props.name}</div>
          <div>{props.time}</div>
        </div>
        <div>{props.message}</div>
      </div>
    </div>
  );
}
