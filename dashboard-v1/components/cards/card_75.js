export default function Card_75(props) {
  return (
    <>
      <div className="card right-75 column bg-white r1-margin r2-r4-padding px-35-border-radius">
        <div>
          <h1>{props.title}</h1>
          <input className="select-date" />
          {/* {parentData.map((item, index) => {})} */}
        </div>
      </div>
    </>
  );
}
