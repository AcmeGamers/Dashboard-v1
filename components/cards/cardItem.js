// Purpose, It is just used to pass links to the left navigation bar.

import Link from "next/link";
export default function CardItem(props) {
  var data;

  switch (props.name) {
    case "Dashboard":
      data = "/";
      break;
    case "Orders":
      data = "/orders";
      break;
    case "Analytics":
      data = "/analytics";
      break;
    case "Messages":
      data = "/messages";
      break;
    case "Support":
      data = "/support";
      break;
    case "Google":
      data = "/integration/google";
      break;
    case "Facebook":
      data = "/integration/facebook";
      break;
    case "Mailchimp":
      data = "/integration/mailchimp";
      break;
    default:
      data = "/hello";
      break;
  }
  return (
    <>
      <Link href={data} passHref>
        <div className={"row verti-center " + props.isActive}>
          <div
            style={{
              background: `url(${props.image})`,
              backgroundSize: "contain",
              margin: 0,
              marginRight: "10px",
              backgroundRepeat: "no-repeat",
              width: "35px",
            }}
          ></div>
          <span>{props.name}</span>
        </div>
      </Link>
    </>
  );
}
