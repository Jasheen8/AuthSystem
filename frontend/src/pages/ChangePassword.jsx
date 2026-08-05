import { useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

export default function ChangePassword() {

  const [form, setForm] =
    useState({
      currentPassword: "",
      newPassword: "",
    });

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await api.put(
          "/auth/change-password",
          form
        );

        toast.success(
          "Password Updated"
        );

        setForm({
          currentPassword: "",
          newPassword: "",
        });

      } catch (error) {

        toast.error(
          error.response?.data?.message
        );

      }
    };

  return (
    <div>
      <h1>
        Change Password
      </h1>

      <form
        onSubmit={handleSubmit}
      >
        <input
          type="password"
          placeholder="Current Password"
          value={form.currentPassword}
          onChange={(e)=>
            setForm({
              ...form,
              currentPassword:
                e.target.value
            })
          }
        />

        <br /><br />

        <input
          type="password"
          placeholder="New Password"
          value={form.newPassword}
          onChange={(e)=>
            setForm({
              ...form,
              newPassword:
                e.target.value
            })
          }
        />

        <br /><br />

        <button>
          Update Password
        </button>

      </form>
    </div>
  );
}