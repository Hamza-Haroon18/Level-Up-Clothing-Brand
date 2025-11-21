// import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ element }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:3000/check-auth", {
//       credentials: "include"
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log("Auth check:", data);
//         setIsAuthenticated(data.authenticated);
//       })
//       .catch(err => {
//         console.error("Auth check failed", err);
//         setIsAuthenticated(false);
//       });
//   }, []);

//   if (isAuthenticated === null) return <div>Loading...</div>;

//   return isAuthenticated ? element : <Navigate to="/login" />;
// };

// export default PrivateRoute;
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, allowedRoles }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/check-auth", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {
        setIsAuthenticated(data.authenticated);
        setUserRole(data.role); // e.g., 'admin' or 'user'
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>;

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return element;
};

export default PrivateRoute;
