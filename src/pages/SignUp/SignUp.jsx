/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [updateProfile, updating, profileError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);

    await updateProfile(data.name);
    const success = await sendEmailVerification(data.email);
    if (success) {
      alert("Please check your email to verify your updated email address");
    }
    await navigate("/appointment");
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Your Name Please",
                    },
                  })}
                />
                {errors.name?.type === "required" && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value:
                        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                      message: "Proper Email is required",
                    },
                  })}
                />
                {errors.email?.type === "required" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Required more word", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              {error?.message || gError?.message ? (
                <p className="text-red-500 mb-5">{error.message}</p>
              ) : null}
              <div className="mt-10">
                {user ? (
                  <Link
                    to="/login"
                    className="w-full text-white bg-green-500 uppercase hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
                  >
                    Now Login
                  </Link>
                ) : (
                  <button
                    type="submit"
                    className="w-full text-white bg-secondary uppercase hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    {loading ? "Loading ..." : "Sign Up"}
                  </button>
                )}
              </div>
              <div className="divider text-secondary">OR</div>
            </form>

            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline btn-secondary w-full"
            >
              {gLoading ? "Loading ..." : " CONTINUE WITH GOOGLE"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
