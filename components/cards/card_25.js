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
      <div className="card left-25 column bg-white r1-margin r2-padding px-35-border-radius">
        <div className="main-system">
          <h2>Main System</h2>

          <CardItem
            name="Dashboard"
            class="fa fas dashboard"
            isActive={dashboard}
          />

          <CardItem name="Orders" class="fa fas orders" isActive={orders} />

          <CardItem
            name="Analytics"
            class="fa fas analytics"
            isActive={analytics}
          />

          <CardItem
            name="Messages"
            class="fa fas messages"
            isActive={messages}
          />

          <CardItem name="Support" class="fa fas support" isActive={support} />
        </div>
        <div className="integration">
          <h2>Integration</h2>
          <CardItem name="Google" class="fa fas google" isActive={google} />
          <CardItem
            name="Facebook"
            class="fa fas facebook"
            isActive={facebook}
          />

          <CardItem name="Mailchimp" class="fa fas mail" isActive={mailchimp} />
        </div>
        <Link href="/integration/add" passHref>
          <button className="btn full-width">Add more integration</button>
        </Link>
      </div>
    </>
  );
}
