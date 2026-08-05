import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import DashboardLayout from "../layouts/DashboardLayout";
import RoleBadge from "../components/RoleBadge";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <DashboardLayout>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div>
          <h3>Name</h3>
          <p>{user?.name}</p>
        </div>

        <div>
          <h3>Email</h3>
          <p>{user?.email}</p>
        </div>

        <div>
          <h3>Role</h3>
          <RoleBadge role={user?.role} />
        </div>
      </div>
    </DashboardLayout>
  );
}