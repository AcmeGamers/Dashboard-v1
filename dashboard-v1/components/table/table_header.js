export default function TableHeader(props) {
  return (
    <>
      <div
        className="row bg-main text-white px-35-border-radius"
        style={{ margin: "18px 0", padding: "20px 35px" }}
        id="table-header-v1"
      >
        {props.children}
      </div>
    </>
  );
}
