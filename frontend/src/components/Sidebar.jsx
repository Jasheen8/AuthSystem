import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import { FaHome, FaUser, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  const navigate = useNavigate();

  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("token");

    setUser(null);

    navigate("/");
  };

  return (
    <div
      style={{
        width: "250px",
        background: "#1e293b",
        padding: "30px",
      }}
    >
      <h2>Auth System</h2>

      <br />

      <Link to="/dashboard">
        <FaHome /> Dashboard
      </Link>

      <br />
      <br />

      <Link to="/profile">Edit Profile</Link>
      <br />
      <br />

      <Link to="/profile">
        <FaUser /> Profile
      </Link>

      <br />
      <br />

      <Link to="/change-password">Change Password</Link>

      {user?.role === "admin" && (
        <>
          <Link to="/admin">Admin Panel</Link>

          <br />
          <br />
        </>
      )}

      <button
        onClick={logout}
        style={{
          width: "100%",
          padding: "10px",
          border: "none",
          borderRadius: "10px",
        }}
      >
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
}
