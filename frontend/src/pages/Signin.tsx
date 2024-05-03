import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, FieldError, UseFormRegister } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import routes from "../routes";
import { OAuthProvider } from "../components";
import * as apiClient from "../api/apiClient";
import { useAppContext } from "../hooks/useAppContext";

export type SignInFormData = {
  email: string;
  password: string;
};

type StepperProps = {
  register: UseFormRegister<SignInFormData>;
  togglePassword: boolean;
  setTogglePassword: (value: boolean) => void;
  value: SignInFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: ErrorsProps;
};

type ErrorsProps = {
  email?: FieldError;
  password?: FieldError;
};

const Signin = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const query = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const [togglePassword, setTogglePassword] = useState<boolean>(false);
  const [step1, setStep1] = useState<boolean>(true);
  const [isSubumitted, setIsSubumitted] = useState<boolean>(false);
  const [value, setValue] = useState<SignInFormData>({
    email: "",
    password: "",
  });

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({
        title: "Success",
        message: "Signed In!",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = handleSubmit((data) => {
    setStep1(false);
    if (value.password) {
      setIsSubumitted(true);
      mutation.mutate(data);
    }
  });

  return (
    <div className="container w-[375px] mx-auto">
      <form className=" flex flex-col" onSubmit={onSubmit}>
        {step1 && (
          <EmailStepper
            register={register}
            handleChange={handleChange}
            value={value}
            errors={errors}
          />
        )}

        {!step1 && (
          <PasswordStepper
            register={register}
            togglePassword={togglePassword}
            setTogglePassword={setTogglePassword}
            handleChange={handleChange}
            value={value}
            errors={errors}
          />
        )}

        <button
          type="submit"
          disabled={isSubumitted || false}
          className={`${
            isSubumitted ? " bg-blue-400" : "bg-light-blue"
          } text-white w-full text-center rounded py-3 mt-4`}
        >
          {step1 ? "Continue with email" : "Sign in"}
        </button>
      </form>

      <div className="mt-4 mb-4 flex gap-2 items-center justify-center">
        <hr className="flex-1 border-none h-[1px] bg-main-gray" />
        <p className="flex-2 text-sm">
          or {step1 && "use one of these options"}
        </p>
        <hr className="flex-1 border-none h-[1px] bg-main-gray" />
      </div>

      {step1 ? (
        <OAuthProvider />
      ) : (
        <div className="flex flex-col gap-3">
          <button
            className="w-full border-solid border-[1px] border-light-blue
           text-light-blue rounded px-3 py-2 hover:bg-blue-800/5"
          >
            Try with a verification link
          </button>

          <Link
            to={routes.forgetPassword}
            className="w-full py-2 text-center text-light-blue text-sm flex-1 hover:bg-blue-800/10"
          >
            Forgot your password?
          </Link>

          <hr className="w-full border-none h-[1px] bg-main-gray mt-2 mb-2" />
        </div>
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
const EmailStepper = ({
  register,
  value,
  handleChange,
  errors,
}: {
  register: StepperProps["register"];
  handleChange: StepperProps["handleChange"];
  value: StepperProps["value"];
  errors: StepperProps["errors"];
}) => {
  return (
    <>
      <h1 className="font-bookingExtraBold text-xl">Sign into your account</h1>
      <div className="mt-5 flex flex-col gap-3">
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
            value={value.email}
            onChange={handleChange}
          />

          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </label>
      </div>
    </>
  );
};

const PasswordStepper = ({
  register,
  togglePassword,
  setTogglePassword,
  value,
  handleChange,
  errors,
}: StepperProps) => {
  return (
    <>
      <h1 className="font-bookingExtraBold text-xl">Enter your password</h1>
      <div className="mt-5 flex flex-col gap-3">
        <p className="mt-4">
          Enter your Booking.com password for {value.email}
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
              value={value.password}
              onChange={handleChange}
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
      </div>
    </>
  );
};

export default Signin;
