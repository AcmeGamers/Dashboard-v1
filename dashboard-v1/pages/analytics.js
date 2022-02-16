import Head from "next/head";
import Card_25 from "../components/cards/card_25";
import Card_75 from "../components/cards/card_75";

export default function Analytics() {
  return (
    <>
      <Head>
        <title>Analytics</title>
      </Head>

      {/* <!-- Body Content --> */}
      <div id="body-content" className="row">
        <Card_25 isActive="analytics" />
        <Card_75 title="Analytics">
          <h1>Hello World</h1>
          <h1>Hello World</h1>
        </Card_75>
      </div>
    </>
  );
}
