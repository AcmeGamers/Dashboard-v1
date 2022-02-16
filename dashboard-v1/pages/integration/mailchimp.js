import Head from "next/head";
import Card_25 from "../../components/cards/card_25";
import Card_75 from "../../components/cards/card_75";

export default function Mailchimp() {
  return (
    <>
      <Head>
        <title>Mailchimp</title>
      </Head>

      {/* <!-- Body Content --> */}
      <div id="body-content" className="row">
        <Card_25 isActive="mailchimp" />
        <Card_75>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
        </Card_75>
      </div>
    </>
  );
}
