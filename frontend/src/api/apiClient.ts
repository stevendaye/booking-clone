import { RegisterFormData } from "../pages/Register";
import { SignInFormData } from "../pages/Signin";
import routes from "../routes";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const register = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}${routes.api.register}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const res = await response.json();

  if (!response.ok) throw new Error(res.message);
};

export const signIn = async (formData: SignInFormData) => {
  const response = await fetch(`${API_BASE_URL}${routes.api.signIn}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const res = await response.json();

  if (!response.ok) throw new Error(res.message);
  return res;
};

export const signOut = async () => {
  const response = await fetch(`${API_BASE_URL}${routes.api.signOut}`, {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) throw new Error("Error during sign out");
};

export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}${routes.api.validateToken}`, {
    credentials: "include",
  });

  if (!response.ok) throw new Error("Token Invalid");
  return response.json();
};

export const createHotel = async (data: FormData) => {
  const response = await fetch(`${API_BASE_URL}${routes.api.createHotel}`, {
    method: "POST",
    credentials: "include",
    body: data,
  });

  if (!response.ok) throw new Error("Error while creating hotel!");

  return response.json();
};
