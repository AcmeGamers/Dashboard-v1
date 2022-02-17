export default function Card(props) {
  return (
    <div className="column bg-main text-white px-35-border-radius card">
      <p>{props.title}</p>
      <p>{props.count}</p>
      <p>{props.type}</p>
    </div>
  );
}
