import Head from "next/head";
import Header from "../components/navbar/header";
import Card_25 from "../components/cards/card_25";
import Card_75 from "../components/cards/card_75";

export default function Home() {
  return (
    <>
      <Head>
        <title>Basic HTML</title>
      </Head>

      {/* Header */}
      <Header />
      <hr />

      {/* <!-- Body Content --> */}
      <div id="body-content" className="row">
        <Card_25 isActive="dashboard" />
        <Card_75></Card_75>
      </div>
    </>
  );
}
