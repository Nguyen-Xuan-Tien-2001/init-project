/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

export const AuthControl = ({ children }) => {
  return true ? <>{children}</> : <Navigate to="/login" replace />;
};

// export const AuthControl = ({ children }) => {
//   return <StompSessionProvider>{children}</StompSessionProvider>;
// };
