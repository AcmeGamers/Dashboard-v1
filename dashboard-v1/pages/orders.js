import Head from "next/head";
import Card_25 from "../components/cards/card_25";
import Card_75 from "../components/cards/card_75";
import TableCell from "../components/table/table_cell";
import TableHeader, {
  TableHeaderEnd,
  TableHeaderStart,
} from "../components/table/table_header";
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
            <tr>
              <TableHeaderStart>Customer Name</TableHeaderStart>
              <TableHeader>Order ID</TableHeader>
              <TableHeader>Product Name</TableHeader>
              <TableHeader>Quanitity</TableHeader>
              <TableHeader>Price</TableHeader>
              <TableHeaderEnd>Address</TableHeaderEnd>
            </tr>
            <TableCell>
              <td>Hello</td>
              <td>Hi</td>
              <td>How'cha Doing</td>
            </TableCell>
          </table>

          <br />
          <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
          </table>

          <h1>Hello World</h1>
        </Card_75>
      </div>
    </>
  );
}
