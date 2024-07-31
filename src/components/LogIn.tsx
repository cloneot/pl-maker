import { API_URL } from "../constants";

const LogIn: React.FC = () => {
  return (
    <form action={`${API_URL}/auth/login`} method="POST">
      <input type="submit" value="Log In" />
    </form>
  );
};

export default LogIn;
