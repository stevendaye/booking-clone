import { useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { OAuthProvider } from "../components";
import routes from "../routes";
import * as apiClient from "../api/apiClient";
import { useAppContext } from "../hooks/useAppContext";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type PasswordProps = {
  togglePassword: boolean;
  setTogglePassword: (value: boolean) => void;
  toggleConfirm: boolean;
  setToggleConfirm: (value: boolean) => void;
};

const Register = () => {
  const { isAuthenticated, showToast } = useAppContext();
  const navigate = useNavigate();
  const query = useQueryClient();

  const formMethods = useForm<RegisterFormData>();
  const { handleSubmit } = formMethods;

  const [togglePassword, setTogglePassword] = useState<boolean>(false);
  const [toggleConfirm, setToggleConfirm] = useState<boolean>(false);
  const [step1, setStep1] = useState<boolean>(true);
  const [isSubumitted, setIsSubumitted] = useState<boolean>(false);

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({
        title: "Success",
        message: "Registration Successful",
        type: "SUCCESS",
      });
      await query.invalidateQueries("validateToken");
      navigate(routes.home);
    },
    onError: (error: Error) => {
      setIsSubumitted(false);
      showToast({ title: "Error", message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    setStep1(false);
    if (!step1) {
      setIsSubumitted(true);
      mutation.mutate(data);
    }
  });

  if (isAuthenticated) {
    return <Navigate to={routes.home} />;
  }

  return (
    <div className="container w-[375px] mx-auto">
      <FormProvider {...formMethods}>
        <form className=" flex flex-col" onSubmit={onSubmit}>
          {step1 && <EmailStepper />}

          {!step1 && (
            <PasswordStepper
              togglePassword={togglePassword}
              setTogglePassword={setTogglePassword}
              toggleConfirm={toggleConfirm}
              setToggleConfirm={setToggleConfirm}
            />
          )}

          <button
            type="submit"
            disabled={isSubumitted || false}
            className={`${
              isSubumitted ? " bg-blue-400" : "bg-light-blue"
            } text-white w-full text-center rounded py-3 mt-4`}
          >
            {step1 ? "Continue with email" : "Create account"}
          </button>
        </form>
      </FormProvider>

      {step1 ? (
        <>
          <div className="flex gap-2 items-center justify-center mt-5">
            <hr className="w-[75px] border-none h-[1px] bg-main-gray" />
            <p className="text-sm">or use one of these options</p>
            <hr className="w-[75px] border-none h-[1px] bg-main-gray" />
          </div>
          <OAuthProvider />
        </>
      ) : (
        <hr className="w-full border-none h-[1px] bg-main-gray mt-5 mb-0" />
      )}

      <div className="text-xs text-center mt-4">
        <p className="pb-4">
          By signing in or creating an account, you agree with our{" "}
          <Link to={routes.termsConditions} className=" text-light-blue">
            Terms & Conditions{" "}
          </Link>
          and{" "}
          <Link to={routes.privacy} className=" text-light-blue">
            Privacy Statement
          </Link>
        </p>

        <p>All rights reserved.</p>
        <p>Copyright (2006-2024) - Booking.com™</p>
      </div>
    </div>
  );
};

/* Stepper 1: Email & Full Name */
const EmailStepper = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<RegisterFormData>();

  return (
    <>
      <h1 className="font-bookingExtraBold text-xl">Create an account</h1>
      <div className="mt-5 flex flex-col gap-3">
        <label htmlFor="firstName">
          <span className="text-sm">Firstname</span>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your firstname"
            className={`w-full border-solid border-[1px] border-secondary-gray rounded py-[7px] px-2
            text-sm mt-1 focus:outline-none focus:border-[1px] focus:border-light-blue ${
              errors.firstName && "border-red-500"
            }`}
            {...register("firstName", { required: "Enter your firstname" })}
          />

          {errors.firstName && (
            <span className="text-red-500 text-sm">
              {errors.firstName.message}
            </span>
          )}
        </label>

        <label htmlFor="lastName">
          <span className="text-sm">Lastname</span>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your lastname"
            className={`w-full border-solid border-[1px] border-secondary-gray rounded py-[7px] px-2
            text-sm mt-1 focus:outline-none focus:border-[1px] focus:border-light-blue ${
              errors.lastName && "border-red-500"
            }`}
            {...register("lastName", { required: "Enter your lastname" })}
          />

          {errors.lastName && (
            <span className="text-red-500 text-sm">
              {errors.lastName.message}
            </span>
          )}
        </label>

        <label htmlFor="email">
          <span className="text-sm">Email address</span>
          <input
            type="email"
            placeholder="Enter your email address"
            className={`w-full border-solid border-[1px] border-secondary-gray rounded py-[7px] px-2
            text-sm mt-1 focus:outline-none focus:border-[1px] focus:border-light-blue ${
              errors.email && "border-red-500"
            }`}
            {...register("email", { required: "Enter your email address" })}
          />

          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </label>
      </div>
    </>
  );
};

/* Stepper 2: Password */
const PasswordStepper = ({
  togglePassword,
  setTogglePassword,
  toggleConfirm,
  setToggleConfirm,
}: PasswordProps) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<RegisterFormData>();

  return (
    <>
      <h1 className="font-bookingExtraBold text-xl">Create password</h1>
      <div className="mt-5 flex flex-col gap-3">
        <p className="mt-4">
          Use a minimum of 10 characters, including uppercase letters, lowercase
          letters, and numbers.
        </p>

        <label htmlFor="password">
          <span className="text-sm">Password</span>
          <div className="w-full relative">
            <input
              type={`${!togglePassword ? "password" : "text"}`}
              placeholder="Enter a password"
              className={`w-full border-solid border-[1px] border-secondary-gray rounded py-[7px] px-2
              text-sm mt-1 focus:outline-none focus:border-[1px] focus:border-light-blue ${
                errors.password && "border-red-500"
              }`}
              {...register("password", {
                required: "Please enter your new password",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 character long",
                },
              })}
            />
            {!togglePassword ? (
              <AiOutlineEye
                className="absolute top-3.5 right-3 cursor-pointer"
                size={15}
                onClick={() => setTogglePassword(!togglePassword)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute top-3.5 right-3 cursor-pointer"
                size={15}
                onClick={() => setTogglePassword(!togglePassword)}
              />
            )}

            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
        </label>

        <label htmlFor="confirmPassword">
          <span className="text-sm">Confirm password</span>
          <div className="w-full relative">
            <input
              type={`${!toggleConfirm ? "password" : "text"}`}
              placeholder="Confirm your password"
              className={`w-full border-solid border-[1px] border-secondary-gray rounded py-[7px] px-2
              text-sm mt-1 focus:outline-none focus:border-[1px] focus:border-light-blue ${
                errors.confirmPassword && "border-red-500"
              }`}
              {...register("confirmPassword", {
                validate: (val: string) => {
                  if (!val) {
                    return "Confirm your password";
                  } else if (watch("password") !== val) {
                    return "The passwords you entered didn't match -- try again";
                  }
                },
              })}
            />
            {!toggleConfirm ? (
              <AiOutlineEye
                className="absolute top-3.5 right-3 cursor-pointer"
                size={15}
                onClick={() => setToggleConfirm(!toggleConfirm)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute top-3.5 right-3 cursor-pointer"
                size={15}
                onClick={() => setToggleConfirm(!toggleConfirm)}
              />
            )}

            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
        </label>
      </div>
    </>
  );
};

export default Register;
