import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import UserCard from "./UserCard";

function UserDetails() {
  const [userData, setUserData] = useState([]);

  let { userId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div style={{ width: 400, margin: "auto", marginTop: 20 }}>
      <UserCard
        userId={userData.id}
        name={userData.name}
        username={userData.username}
        website={userData.website}
        phone={userData.phone}
        address={userData.address}
        email={userData.email}
        company={userData.company}
      />
    </div>
  );
}

export default UserDetails;
