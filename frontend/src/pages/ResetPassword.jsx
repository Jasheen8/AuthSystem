import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";
import {
  useNavigate,
} from "react-router-dom";

export default function ResetPassword() {

  const { token } = useParams();

  const navigate = useNavigate();

  const [password, setPassword] =
    useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.put(
        `/auth/reset-password/${token}`,
        { password }
      );

      toast.success(
  "Password Reset Successful"
);

setTimeout(() => {
  navigate("/");
}, 1500);

    } catch (error) {

      toast.error(
        error.response?.data?.message
      );

    }
  };

  return (
    <div>
      <h1>Reset Password</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button>
          Reset Password
        </button>
      </form>
    </div>
  );
}