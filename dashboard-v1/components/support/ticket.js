export default function ticket(props) {
  return (
    <>
      <div className="ticket-list-item">
        <div className="ticket-list-item-header">
          <div className="ticket-list-item-header-title">{ticket.title}</div>
          <div className="ticket-list-item-header-status">{ticket.status}</div>
        </div>
        <div className="ticket-list-item-body">
          <div className="ticket-list-item-body-description">
            {ticket.description}
          </div>
          <div className="ticket-list-item-body-date">{ticket.date}</div>
        </div>
      </div>
    </>
  );
}
