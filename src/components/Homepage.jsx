import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import UserCard from "./UserCard";

function Homepage() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div
      style={{
        padding: 10,
        maxWidth: 1200,
        margin: "auto",
      }}
    >
      <Row xs={1} md={2} lg={4}>
        {userData.map((user) => {
          return (
            <Col key={user.id} style={{ paddingBottom: 20 }}>
              <UserCard
                name={user.name}
                username={user.username}
                website={user.website}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Homepage;
