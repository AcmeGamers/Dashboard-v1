import Head from "next/head";
import Card_25 from "../components/cards/card_25";
import Card_75 from "../components/cards/card_75";
import TableCell from "../components/table/table_cell";
import TableHeader from "../components/table/table_header";
export default function Orders() {
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
            "A Search Filter that filres the table to find the specifc order. Check Readme"
          }
        >
          <table className="px-35-border-radius">
            <TableCell>
              <TableHeader>Customer Name</TableHeader>
              <TableHeader>Order ID</TableHeader>
              <TableHeader>Product Name</TableHeader>
              <TableHeader>Quanitity</TableHeader>
              <TableHeader>Price</TableHeader>
              <TableHeader>Address</TableHeader>
            </TableCell>

            <TableCell>
              <td>Hello</td>
              <td>Hi</td>
              <td>How'cha Doing</td>
              <td>How'cha Doing</td>
              <td>How'cha Doing</td>
              <td>How'cha Doing</td>
            </TableCell>
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
