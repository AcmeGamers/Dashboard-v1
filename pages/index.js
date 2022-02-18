import Head from "next/head";
import Card_25 from "../components/cards/card_25";
import Card_75 from "../components/cards/card_75";
import Card from "../components/dashboard/card";

const DUMMY_DATA = {
  Customers: {
    key: 1,
    count: "91,241",
    type: "Data for this month",
  },
  Orders: {
    key: 2,
    count: "111,241",
    type: "Data for this month",
  },
  Products: {
    key: 3,
    count: "1,241",
    type: "Data for this month",
  },
  Sales: {
    key: 4,
    count: "101,241",
    type: "Data for this month",
  },
};

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
            <div style={{ width: "50%" }}>
              <div className="row">
                <Card
                  title="Customers"
                  count={DUMMY_DATA.Customers.count}
                  type={DUMMY_DATA.Customers.type}
                />
                <Card
                  title="Orders"
                  count={DUMMY_DATA.Orders.count}
                  type={DUMMY_DATA.Orders.type}
                />
              </div>
              <div className="row">
                <Card
                  title="Products"
                  count={DUMMY_DATA.Products.count}
                  type={DUMMY_DATA.Products.type}
                />
                <Card
                  title="Sales"
                  count={DUMMY_DATA.Sales.count}
                  type={DUMMY_DATA.Sales.type}
                />
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <div className="chart">Chart</div>
            </div>
          </div>
        </Card_75>
      </div>
    </>
  );
}
