import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "./Component/Services/Action/auth.services";
import Loading from "./Shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
    } else {
      setLoading(false);
    }
  }, [navigate]);

  if (loading) {
    return <Loading />;
  }

  return children;
};

export default PrivateRoute;
