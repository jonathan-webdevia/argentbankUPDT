import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../features/loginSlice";

const Private = ({ component }) => {
  /**
   * Redirection if token === undefined
   */
  let token = useSelector(selectCurrentToken);
  return token ? component : <Navigate to="/login"></Navigate>;
};

export default Private; 
