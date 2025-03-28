import { useState } from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Basic validation for password confirmation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to sign up. Please try again.");
      }

      alert("Sign up successful!");
      navigate("/signin"); // Redirect to Sign In after successful signup
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      {/* Main Content */}
      <div className="flex flex-col items-center w-full max-w-md px-4 py-8 sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        {/* Logo */}
        <div className="text-5xl mb-2 sm:text-6xl">LOGO</div>

        {/* Welcome Text */}
        <h1 className="m-7 mb-8 sm:text-4xl">Welcome to the hub.</h1>
        <h2 className="text-neon mb-6 sm:text-2xl">Sign up</h2>

        {/* Form */}
        <form onSubmit={handleSignUp} className="w-full space-y-4">
          {error && <p className="text-error text-center text-sm">{error}</p>}

          {/* Username Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full bg-primary text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-text font-medium">E-Mail</span>
            </label>
            <input
              type="email"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full bg-primary text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
              required
            />
          </div>

          {/* Password Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-text font-medium">Password</span>
            </label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full bg-primary text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-text font-medium">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input input-bordered w-full bg-primary text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
              required
            />
          </div>

          {/* Sign Up Button */}
          <div className="mt-6 text-right">
            <button
              type="submit"
              className="btn btn-secondary w-32 self-end mt-4 mb-8"
            >
              sign up
            </button>
          </div>
        </form>

        {/* Sign In Link */}
        <div className="mt-6 mb-6 text-center bg-primary w-full rounded-xl p-6">
          <h2 className=" mb-8">Already have an account?</h2>
          <button
            onClick={() => navigate("/signin")}
            className="btn bg-ultramarine text-base w-32 hover:bg-[#4536FF] border-none"
          >
            sign in
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-info text-white text-center py-10">
        <h2 className="text-white py-25">Placeholder Footer</h2>
      </footer>
    </div>
  );
};

export default SignUp;
