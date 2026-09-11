import "./Styles/LoginSignup.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const LoginSignup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);

    toast.success(`Submitted by: ${data.UserName}`);

    reset();
  };

  return (
    <>
      <ToastContainer />

      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="loginsignup">

          <div className="loginsignup-container">

            {/* ================= LEFT SIDE ================= */}

            <div className="loginsignup-left">
              <div className="left-content">
                <h1>Welcome to TrendWear</h1>

                <p>
                  Discover the latest fashion trends and find
                  your perfect style.
                </p>

                <div className="left-features">
                  <div>
                    <span>✓</span>
                    <p>Latest fashion collections</p>
                  </div>

                  <div>
                    <span>✓</span>
                    <p>Exclusive offers & discounts</p>
                  </div>

                  <div>
                    <span>✓</span>
                    <p>Fast & secure shopping</p>
                  </div>
                </div>
              </div>
            </div>


            {/* ================= RIGHT SIDE ================= */}

            <div className="loginsignup-right">

              <div className="signup-header">
                <h1>Create Account</h1>

                <p>
                  Sign up to get started with TrendWear
                </p>
              </div>


              {/* User Name */}
              <div className="input-group">
                <label htmlFor="username">
                  User Name
                </label>

                <input
                  id="username"
                  type="text"
                  placeholder="Enter your user name"
                  {...register("UserName", {
                    required: "User name is required.",
                  })}
                />

                {errors.UserName && (
                  <span className="error-msg">
                    {errors.UserName.message}
                  </span>
                )}
              </div>


              {/* Email */}
              <div className="input-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("Email", {
                    required: "Email is required.",
                  })}
                />

                {errors.Email && (
                  <span className="error-msg">
                    {errors.Email.message}
                  </span>
                )}
              </div>


              {/* Password */}
              <div className="input-group">
                <label htmlFor="password">
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  {...register("Password", {
                    required: "Password is required.",
                    minLength: {
                      value: 6,
                      message:
                        "Password must be at least 6 characters.",
                    },
                    maxLength: {
                      value: 12,
                      message:
                        "Password must be at most 12 characters.",
                    },
                  })}
                />

                {errors.Password && (
                  <span className="error-msg">
                    {errors.Password.message}
                  </span>
                )}
              </div>


              {/* Terms */}
              <div className="loginsignup-agree">
                <input
                  type="checkbox"
                  id="terms"
                  required
                />

                <label htmlFor="terms">
                  By continuing, I agree to the{" "}
                  <span>Terms of Use</span> and{" "}
                  <span>Privacy Policy</span>.
                </label>
              </div>


              {/* Button */}
              <button
                type="submit"
                className="signup-btn"
              >
                Create Account
              </button>


              {/* Login */}
              <p className="loginsignup-login">
                Already have an account?
                <span> Login here</span>
              </p>

            </div>
          </div>

        </div>
      </form>
    </>
  );
};

export default LoginSignup;

