import Head from "next/head";
import Card_25 from "../components/cards/card_25";
import Card_75 from "../components/cards/card_75";
import TableCell from "../components/table/table_cell";
import TableHeader from "../components/table/table_header";

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

export default function Orders() {
  function searchName() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("TableCell");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  return (
    <>
      <Head>
        <title>Orders</title>
      </Head>

      {/* <!-- Body Content --> */}
      <div id="body-content" className="row">
        <Card_25 isActive="orders" />
        <Card_75
          title="Orders"
          extraData={
            <input
              type="text"
              id="myInput"
              onKeyUp={searchName}
              placeholder="Search for Customer Name"
            />
          }
        >
          <table className="px-35-border-radius" id="myTable">
            <TableCell>
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

            <TableCell>
              <td>Hello</td>
              <td>Hi</td>
              <td>How'cha Doing</td>
              <td>How'cha Doing</td>
              <td>How'cha Doing</td>
              <td>How'cha Doing</td>
            </TableCell>
          </table>
        </Card_75>
      </div>
    </>
  );
}
