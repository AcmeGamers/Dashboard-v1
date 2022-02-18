import TableCell from "./table_cell";
import TableHeader from "./table_header";

const DUMMY_ORDERS = [
  {
    key: 1,
    Customer_Name: "Johan Doe",
    Order_ID: "123",
    Product_Name: "Hello World",
    Quanitity: "123",
    Price: "$12412",
    Address: "13 Main Street, New York, NY",
  },

  {
    key: 2,
    Customer_Name: "Johan Doe",
    Order_ID: "123",
    Product_Name: "Hello World",
    Quanitity: "123",
    Price: "$12412",
    Address: "13 Main Street, New York, NY",
  },
  {
    key: 3,
    Customer_Name: "Johan Doe",
    Order_ID: "123",
    Product_Name: "Hello World",
    Quanitity: "123",
    Price: "$12412",
    Address: "13 Main Street, New York, NY",
  },
  {
    key: 4,
    Customer_Name: "Johan Doe",
    Order_ID: "123",
    Product_Name: "Hello World",
    Quanitity: "123",
    Price: "$12412",
    Address: "13 Main Street, New York, NY",
  },
  {
    key: 5,
    Customer_Name: "Johan Doe",
    Order_ID: "123",
    Product_Name: "Hello World",
    Quanitity: "123",
    Price: "$12412",
    Address: "13 Main Street, New York, NY",
  },
  {
    key: 6,
    Customer_Name: "Johan Doe",
    Order_ID: "123",
    Product_Name: "Hello World",
    Quanitity: "123",
    Price: "$12412",
    Address: "13 Main Street, New York, NY",
  },
];

export default function CustomerOrderTable() {
  return (
    <table className="px-35-border-radius" id="myTable">
      <TableCell className="bg-main">
        <TableHeader>Customer Name</TableHeader>
        <TableHeader>Order ID</TableHeader>
        <TableHeader>Product Name</TableHeader>
        <TableHeader>Quanitity</TableHeader>
        <TableHeader>Price</TableHeader>
        <TableHeader>Address</TableHeader>
      </TableCell>

      {DUMMY_ORDERS.map((order) => (
        <TableCell key={order.key}>
          <td>{order.Customer_Name}</td>
          <td>{order.Order_ID}</td>
          <td>{order.Product_Name}</td>
          <td>{order.Quanitity}</td>
          <td>{order.Price}</td>
          <td>{order.Address}</td>
        </TableCell>
      ))}
    </table>
  );
}
