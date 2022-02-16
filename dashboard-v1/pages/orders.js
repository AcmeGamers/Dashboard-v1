import Head from "next/head";
import Card_25 from "../components/cards/card_25";
import Card_75 from "../components/cards/card_75";
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
          <TableHeader>
            <span>Customer Name</span>
            <span>Order ID</span>
            <span>Product Name</span>
            <span>Quanitity</span>
            <span>Price</span>
            <span>Address</span>
          </TableHeader>
          <h1>Hello World</h1>
        </Card_75>
      </div>
    </>
  );
}
