"use server";

import bcrypt from "bcryptjs";
import { signupSchema } from "schema";
import { ZodError } from "zod";
import { db } from "~/server/db";

export async function register(
  prevSate: string | undefined,
  formData: FormData,
) {
  try {
    const { email, password } = await signupSchema.parseAsync({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return "ユーザーがすでに登録されています。";
    }

    const hash = await bcrypt.hash(password, 10);

    await db.user.create({
      data: {
        email: email,
        password: hash,
      },
    });
  } catch (e) {
    if (e instanceof ZodError) {
      e.errors.map((error) => error.message).join(",");
    }
    return "error";
  }
}
