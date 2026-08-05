import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";
import toast from "react-hot-toast";

export default function Profile() {

  const {
    user,
    setUser,
  } = useContext(AuthContext);

  const [form, setForm] =
    useState({
      name: user?.name || "",
      email: user?.email || "",
    });

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const res =
          await api.put(
            "/auth/profile",
            form
          );

        setUser(
          res.data.user
        );

        toast.success(
          "Profile Updated"
        );

      } catch {

        toast.error(
          "Update Failed"
        );

      }
    };

  return (
    <DashboardLayout>

      <h1>Profile</h1>

      <br />

      <form
        onSubmit={handleSubmit}
        style={{
          background:"#1e293b",
          padding:"20px",
          borderRadius:"15px"
        }}
      >

        <label>Name</label>

        <br />

        <input
          value={form.name}
          onChange={(e)=>
            setForm({
              ...form,
              name:e.target.value
            })
          }
        />

        <br />
        <br />

        <label>Email</label>

        <br />

        <input
          value={form.email}
          onChange={(e)=>
            setForm({
              ...form,
              email:e.target.value
            })
          }
        />

        <br />
        <br />

        <p>
          Role:
          <strong>
            {" "}
            {user?.role}
          </strong>
        </p>

        <br />

        <button>
          Save Changes
        </button>

      </form>

    </DashboardLayout>
  );
}