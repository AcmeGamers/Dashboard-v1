export default function UserMessage(props) {
  return (
    <div className="row">
      <div>{props.URL}</div>
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
