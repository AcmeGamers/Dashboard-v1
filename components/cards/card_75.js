export default function Card_75(props) {
  return (
    <>
      <div className="card right-75 column bg-white r1-margin r2-r4-padding px-35-border-radius">
        <div className="row">
          <h1>{props.title}</h1>
          {props.noDate ? null : (
            <input className="select-date" style={{ marginLeft: "3rem" }} />
          )}

          {props.extraData || null}
          {/* {parentData.map((item, index) => {})} */}
        </div>
        {props.children}
      </div>
    </>
  );
}
