export default function Card(props) {
  return (
    <div className="column">
      <p>{props.title}</p>
      <p>{props.count}</p>
      <p>{props.type}</p>
    </div>
  );
}
