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
    <Card className="text-center shadow p-3 mb-5 bg-white rounded">
      {/* Generating random avatars via robohash.com api */}
      <Card.Img
        variant="top"
        src={`https://robohash.org/${name}.png`}
        alt={require("../assets/images/sample_user.png")}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>@{username}</Card.Subtitle>
      </Card.Body>
      <Card.Body>
        <Card.Link href={`http://${website}`}>{`http://${website}`}</Card.Link>
        {phone && <Card.Body>Phone: {phone}</Card.Body>}
        {email && <Card.Body>Email: {email}</Card.Body>}
        {company && <Card.Body>Company: {company.name}</Card.Body>}
      </Card.Body>
      {address && (
        <Card.Body>
          <Card.Title>Address: </Card.Title>
          <Card.Text>Street: {address.street}</Card.Text>
          <Card.Text>Suite: {address.suite}</Card.Text>
          <Card.Text>City: {address.city}</Card.Text>
          <Card.Text>Zip code: {address.zipcode}</Card.Text>
        </Card.Body>
      )}

      {/* Checking if an address has been passed. If yes, then we must be in the details page and the button should 
        therefore take the user back. If no, then we are in the homepage and the button should take the user to the details page.
        Due to this implementation I chose not to make the Button a separate component */}
      <Card.Body>
        {address ? (
          <Button href="/">Go Back</Button>
        ) : (
          <Button href={`/userdetails/${userId}`}>More Details</Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default userCard;
