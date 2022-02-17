import Head from "next/head";
import Card_25 from "../components/cards/card_25";
import Card_75 from "../components/cards/card_75";

export default function Home() {
  return (
    <>
      <Head>
        <title>Analytica | Your Custom Dashboard</title>
      </Head>

      {/* <!-- Body Content --> */}
      <div id="body-content" className="row">
        <Card_25 isActive="dashboard" />
        <Card_75 title="Dashboard">
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div></div>
          </div>
        </Card_75>
      </div>
    </>
  );
}
