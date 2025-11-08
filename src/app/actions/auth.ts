"use server";

import { signupSchema } from "schema";

export async function register(
  prevSate: string | undefined,
  formData: FormData,
) {
  try {
    const { email, password } = await signupSchema.parseAsync({
      email: formData.get("email"),
      password: formData.get("password"),
    });
  } catch (e) {
    return "error";
  }
}
