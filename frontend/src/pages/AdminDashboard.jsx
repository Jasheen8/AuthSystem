import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import DashboardLayout from "../layouts/DashboardLayout";

export default function AdminDashboard() {
  const { user } = useContext(AuthContext);

  return (
    <DashboardLayout>
      <h1>Admin Dashboard</h1>

      <br />

      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <h2>
          Welcome Admin {user?.name}
        </h2>

        <p>
          You have administrator access.
        </p>
      </div>
    </DashboardLayout>
  );
}