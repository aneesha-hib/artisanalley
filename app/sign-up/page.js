import Link from "next/link";
import { link } from "../lib/links";

const Signup = () => {
    return (
      <main id="main">
        <section
          className="contact bg-login bg-cover bg-opacity-50 bg-black  bg-no-repeat  lg:h-screen"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
        >
          <div className="container ">
            <div className="row w-full flex items-center justify-center">
              <div className="w-full flex items-center justify-center ">
                <form
                  method="post"
                  role="form"
                  className="php-email-form bg-slate-50 shadow w-full md:w-1/2 lg:w-5/12"
                >
                  <div className="flex flex-col">
                    <label className="form-label font-bold">Join our community !</label>
                    <span className="text-xs text-slate-400">
                      Sign up to explore your arts to world...
                    </span>
                  </div>
                  <div className="form-group mt-3 ">
                    <input
                      type="text"
                      className="form-control bg-transparent"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group mt-3 ">
                    <input
                      type="text"
                      className="form-control bg-transparent"
                      name="designation"
                      id="designation"
                      placeholder="Designation by career"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group mt-3 ">
                    <input
                      type="email"
                      className="form-control bg-transparent"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group mt-3 ">
                    <input
                      type="text"
                      className="form-control bg-transparent"
                      name="mobile"
                      id="mobile"
                      placeholder="Mobile"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group mt-3 col-md-12">
                    <input
                      type="password"
                      className="form-control bg-transparent"
                      name="password"
                      id="password"
                      placeholder="Password"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group mt-3 col-md-12">
                    <input
                      type="password"
                      className="form-control bg-transparent"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Create an account</button>
                  </div>
                  <div className="flex flex-row gap-2 my-4 justify-center">
                    <span className="text-xs">Already have an account?</span>
                    <Link href={link.SIGNIN} className="text-xs cursor-pointer text-blue-400 hover:underline">Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };
  export default Signup;