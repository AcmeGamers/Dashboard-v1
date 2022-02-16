export default function CardItem(props) {
  return (
    <>
      <div className={"row " + props.isActive}>
        <i className={props.class}></i>
        <span>{props.name}</span>
      </div>
    </>
  );
}
