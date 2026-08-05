import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import UserAvatar from "./UserAvatar";

export default function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "25px",
      }}
    >
      <h2>Authentication System</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <UserAvatar name={user?.name} />

        <div>
          <div>{user?.name}</div>

          <small>{user?.email}</small>
        </div>
      </div>
    </div>
  );
}
