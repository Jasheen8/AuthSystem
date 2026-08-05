import { useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        "/auth/forgot-password",
        { email }
      );

      toast.success(
  "Reset email sent"
);

      toast.success(
        "Reset token generated"
      );

    } catch (error) {
      toast.error(
        error.response?.data?.message
      );
    }
  };

  return (
    <div>
      <h1>Forgot Password</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button>
          Generate Reset Token
        </button>
      </form>

      {token && (
        <>
          
        </>
      )}
    </div>
  );
}