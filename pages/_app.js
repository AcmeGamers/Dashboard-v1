import "../styles/globals.css";
import "../../basic design/basic.css";
import "../../basic design/custom-styles.css";

// Custom Components
import Header from "../components/navbar/header";
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Header */}
      <Header />
      <hr />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
