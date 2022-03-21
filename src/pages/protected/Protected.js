import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  //const { user } = useAppContext();
  const user = true;
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Protected;
