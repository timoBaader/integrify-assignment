import { Card, Button } from "react-bootstrap";

function userCard({
  name,
  username,
  website,
  userId,
  phone,
  address,
  email,
  company,
}) {
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

      {phone && <Card.Body>Phone: {phone}</Card.Body>}
      {email && <Card.Body>Email: {email}</Card.Body>}
      {company && <Card.Body>Company: {company.name}</Card.Body>}
      {address && (
        <Card.Body>
          <Card.Title>Address: </Card.Title>
          <Card.Text>Street: {address.street}</Card.Text>
          <Card.Text>Suite: {address.suite}</Card.Text>
          <Card.Text>City: {address.city}</Card.Text>
          <Card.Text>Zip code: {address.zipcode}</Card.Text>
        </Card.Body>
      )}

      <Card.Body>
        <Button href={`/userdetails/${userId}`}>More Details</Button>
      </Card.Body>
    </Card>
  );
}

export default userCard;
