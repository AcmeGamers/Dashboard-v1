// import List from "";
import CardItem from "./cardItem";
import Link from "next/link";
export default function Card_25(props) {
  var dashboard = props.isActive == "dashboard" ? "active" : "",
    orders = props.isActive == "orders" ? "active" : "",
    analytics = props.isActive == "analytics" ? "active" : "",
    messages = props.isActive == "messages" ? "active" : "",
    support = props.isActive == "support" ? "active" : "",
    google = props.isActive == "google" ? "active" : "",
    facebook = props.isActive == "facebook" ? "active" : "",
    mailchimp = props.isActive == "mailchimp" ? "active" : "";

  return (
    <>
      <div className="card left-25 column bg-white r1-margin r2-padding px-35-border-radius verti-space">
        <div className="column">
          <div className="main-system">
            <h2>Main System</h2>

            <CardItem
              name="Dashboard"
              image="icons/dashboard.png"
              isActive={dashboard}
            />

            <CardItem
              name="Orders"
              image="icons/shopping_bag.png"
              isActive={orders}
            />

            <CardItem
              name="Analytics"
              image="icons/analysis.png"
              isActive={analytics}
            />

            <CardItem
              name="Messages"
              image="icons/messages.png"
              isActive={messages}
            />

            <CardItem
              name="Support"
              image="icons/support.png"
              isActive={support}
            />
          </div>
          <div className="integration">
            <h2>Integration</h2>
            <CardItem
              name="Google"
              image="icons/google.png"
              isActive={google}
            />
            <CardItem
              name="Facebook"
              image="icons/facebook.png"
              isActive={facebook}
            />

            <CardItem
              name="Mailchimp"
              image="icons/mailchimp.png"
              isActive={mailchimp}
            />
          </div>
        </div>
        <Link href="/integration/add" passHref>
          <button className="btn full-width">Add more integration</button>
        </Link>
      </div>
    </>
  );
}
