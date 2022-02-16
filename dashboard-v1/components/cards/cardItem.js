export default function cardItem(props) {
  return (
    <>
      <div className={"row " + props.isActive}>
        <i className={props.class}></i>
        <span>{props.name}</span>
      </div>
    </>
  );
}
