import { API_URL } from "../constants";

const LogOut: React.FC = () => {
  return (
    <form action={`${API_URL}/auth/logout`} method="POST">
      <input type="submit" value="Log Out" />
    </form>
  );
};

export default LogOut;
