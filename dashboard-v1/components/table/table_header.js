export function TableHeaderStart(props) {
  return (
    <th
      className="bg-main text-white "
      style={{
        margin: "18px 0",
        padding: "20px 30px",
        borderRadius: "35px 0 0 35px",
      }}
      id="table-header-v1"
    >
      {props.children}
    </th>
  );
}

export default function TableHeader(props) {
  return (
    <th
      className="bg-main text-white "
      style={{ margin: "18px 0", padding: "20px 30px" }}
      id="table-header-v1"
    >
      {props.children}
    </th>
  );
}

export function TableHeaderEnd(props) {
  return (
    <th
      className="bg-main text-white "
      style={{
        margin: "18px 0",
        padding: "20px 30px",
        borderRadius: "0 35px 35px 0 ",
      }}
      id="table-header-v1"
    >
      {props.children}
    </th>
  );
}
