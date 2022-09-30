import { Card, Button } from "react-bootstrap";

function userCard({ name, username, website, userId }) {
  return (
    <Card className="text-center">
      <Card.Img
        variant="top"
        src={require("../assets/images/sample_user.png")}
        alt="User Image"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>@{username}</Card.Subtitle>
      </Card.Body>
      <Card.Body>
        <Card.Link href={`http://${website}`}>{`http://${website}`}</Card.Link>
      </Card.Body>
      <Card.Body>
        <Button href={`https://jsonplaceholder.typicode.com/users/${userId}`}>
          Link
        </Button>
      </Card.Body>
    </Card>
  );
}

export default userCard;
