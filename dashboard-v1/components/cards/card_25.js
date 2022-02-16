export default function Card_25() {
  return (
    <>
      <div className="card left-25 column bg-white r1-margin r2-padding px-35-border-radius">
        <div className="main-system">
          <h2>Main System</h2>
          <div className="row active">
            <i className="fa fas dashboard"></i>
            <span>Dashboard</span>
          </div>
          <div className="row">
            <i className="fa fas orders"></i>
            <span>Orders</span>
          </div>
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
