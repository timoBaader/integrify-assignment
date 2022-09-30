import { Card, Button } from "react-bootstrap";

function userCard({ name, username, website }) {
  return (
    <Card className="text-center">
      <Card.Img variant="top" src={require("./sample.png")} alt="User Image" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>@{username}</Card.Subtitle>
      </Card.Body>
      <Card.Body>
        <Card.Link href={`http://${website}`}>{`http://${website}`}</Card.Link>
      </Card.Body>
      <Card.Body>
        <Button>Link</Button>
      </Card.Body>
    </Card>
  );
}

export default userCard;
