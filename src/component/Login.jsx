import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    alert("Login form submitted");
  }

  return (
    <main className="auth-overlay">
      <div className="auth-card">
        <span className="auth-eyebrow">WELCOME BACK</span>

        <h1>
          Login to <span>Capsule Pro</span>
        </h1>
        <p className="auth-description">
          Sign in to continue shopping with us.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="auth-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="auth-error">{errors.email.message}</p>
            )}
          </div>

          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="auth-error">{errors.password.message}</p>
            )}
          </div>

          <button className="auth-button" type="submit">
            Log In
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </main>
  );
}
