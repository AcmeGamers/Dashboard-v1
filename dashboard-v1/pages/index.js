import Head from "next/head";
import Card_25 from "../components/cards/card_25";
import Card_75 from "../components/cards/card_75";
import Card from "../components/dashboard/card";

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
          <div className="row">
            <div>
              <div className="row">
                <Card
                  title="Customers"
                  count="91,231"
                  type="Data for this month"
                />
                <Card
                  title="Customers"
                  count="91,231"
                  type="Data for this month"
                />
              </div>
              <div className="row">
                <Card
                  title="Customers"
                  count="91,231"
                  type="Data for this month"
                />
                <Card
                  title="Customers"
                  count="91,231"
                  type="Data for this month"
                />
              </div>
            </div>
            <div>
              <div className="chart">Chart</div>
            </div>
          </div>
        </Card_75>
      </div>
    </>
  );
}
