// import List from "";
// import cardItem from "../components/cards/cardItem.js";
export default function Card_25(props) {
  function checkActive() {
    props.isActive === true ? "active" : "";
  }
  return (
    <>
      <div className="card left-25 column bg-white r1-margin r2-padding px-35-border-radius">
        <div className="main-system">
          <h2>Main System</h2>
          <cardItem
            name="Dashboard"
            class="fa fas dashboard"
            isActive={checkActive()}
          />
          <cardItem name="Orders" class="fa fas orders" isActive="" />
          <cardItem name="Orders" class="fa fas orders" isActive="" />

          <div className="row">
            <i className="fa fas analytics"></i>
            <span>Analytics</span>
          </div>
          <div className="row">
            <i className="fa fas messages"></i>
            <span>Messages</span>
          </div>
          <div className="row">
            <i className="fa fas support"></i>
            <span>Support</span>
          </div>
        </div>
        <div className="integration">
          <h2>Integration</h2>
          <div className="row">
            <i className="fa fas google"></i>
            <span>Google Analytics</span>
          </div>
          <div className="row">
            <i className="fa fas facebook"></i>
            <span>Facebook</span>
          </div>
          <div className="row">
            <i className="fa fas Mailchimp"></i>
            <span>Mailchimp</span>
          </div>
        </div>
        <button className="btn full-width">Add more integration</button>
      </div>
    </>
  );
}
