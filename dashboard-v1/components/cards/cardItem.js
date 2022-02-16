import Link from "next/link";
export default function CardItem(props) {
  var data;
  console.log(props.name);
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
        <div className={"row " + props.isActive}>
          <i className={props.class}></i>
          <span>{props.name}</span>
        </div>
      </Link>
    </>
  );
}
