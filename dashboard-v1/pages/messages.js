import Head from "next/head";
import Card_25 from "../components/cards/card_25";
import Card_75 from "../components/cards/card_75";
import UserMessage from "../components/message/user_message";

const DUMMY_DATA = [
  {
    key: 1,
    name: "Acme Gamers",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "2:00 PM",
    URL: "../../../basic design/peakpx.jpg",
  },
  {
    key: 2,
    name: "Acme Gamers",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "2:00 PM",
    URL: "../../../basic design/peakpx.jpg",
  },
  {
    key: 3,
    name: "Acme Gamers",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "2:00 PM",
  },
  {
    key: 4,
    name: "Acme Gamers",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "2:00 PM",
  },
  {
    key: 5,
    name: "Acme Gamers",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "2:00 PM",
  },
];

export default function Messages() {
  return (
    <>
      <Head>
        <title>Messages</title>
      </Head>

      {/* <!-- Body Content --> */}
      <div id="body-content" className="row">
        <Card_25 isActive="messages" />
        <Card_75
          title="Messages"
          noDate="1"
          extraData={
            <button className="btn" style={{ marginLeft: "50px" }}>
              New Message
            </button>
          }
        >
          <div className="inbox">
            {DUMMY_DATA.map((user) => (
              <UserMessage
                key={user.key}
                profile={user.URL}
                name={user.name}
                message={user.message}
                time={user.time}
              />
            ))}
          </div>
          <div className="message"></div>
        </Card_75>
      </div>
    </>
  );
}
