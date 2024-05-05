import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import axios from "axios";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        //using axios

        axios
          .patch(
            "https://0121-coffee-store-espresso-emporium-server-module-56-5.vercel.app/user",
            user,
          )
          .then((data) => {
            console.log(data.data);
          });

        //using fetch

        // //update last logged in Time
        // fetch(
        //   "https://0121-coffee-store-espresso-emporium-server-module-56-5.vercel.app/user",
        //   {
        //     method: "PATCH",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(user),
        //   },
        // )
        // .then((res) => res.json())
        // .then((data) => {
        //   console.log(data);
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign In now!</h1>
        </div>
        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="link-hover link label-text-alt">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
