import { useParams } from "react-router-dom";

function UserDetails() {
  let { userId } = useParams();
  return <p>Hello {userId}</p>;
}

export default UserDetails;
