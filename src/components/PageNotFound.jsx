import { Button } from "react-bootstrap";

function PageNotFound() {
  return (
    <div
      style={{
        margin: "auto",
        maxWidth: 800,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={require("../assets/images/pageNotFound.jpg")}
        alt="Page Not Found"
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button href="/"> Go Back </Button>
      </div>
    </div>
  );
}

export default PageNotFound;
