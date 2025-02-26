import { useEffect, useState } from "react";
import { useLoginQuery } from "../../app/services/userApi/userApi";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../app/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [triggerLogin, setTriggerLogin] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const {
    data,
    error: loginError,
    isLoading,
    isSuccess,
  } = useLoginQuery(formData, { skip: !triggerLogin });

  useEffect(() => {
    if (isSuccess && data?.is_success) {
      dispatch(setUser(data?.data));
      navigate("/dashboard");
    }
  }, [isSuccess, data, dispatch, navigate]);
  useEffect(() => {
    // navigate("/dashboard");
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    setTriggerLogin(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <div className="w-full max-w-md p-6 bg-secondary rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-neutral text-center mb-6">
          Sign In
        </h2>
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}
        {loginError && (
          <p className="text-red-500 text-sm text-center mb-4">
            Login failed. Please check your credentials.
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-neutral mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-primary text-neutral outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label className="block text-neutral mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-primary text-neutral outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 mt-4 bg-accent text-primary font-semibold rounded hover:bg-[#b5a192] transition"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
