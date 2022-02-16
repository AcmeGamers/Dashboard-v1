import Head from "next/head";
import Card_25 from "../components/cards/card_25";
import Card_75 from "../components/cards/card_75";

export default function Orders() {
  return (
    <>
      <Head>
        <title>Orders</title>
      </Head>

      {/* <!-- Body Content --> */}
      <div id="body-content" className="row">
        <Card_25 isActive="orders" />
        <Card_75 title="Orders">
          <h1>Hello World</h1>
          <h1>Hello World</h1>
        </Card_75>
      </div>
    </>
  );
}
