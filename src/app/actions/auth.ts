"use server";

import bcrypt from "bcryptjs";
import { redirect, RedirectType } from "next/navigation";
import { signUpSchema } from "schema";
import { ZodError } from "zod";
import { signIn } from "~/server/auth";
import { db } from "~/server/db";

export async function authenticate(
  prevSate: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
    // redirect("/dashboard");
  } catch (e) {
    if (e instanceof ZodError) {
      switch (e.type) {
        case "CredentialsSignin":
          return "無効なアカウントです。";
        default:
          return "エラーが発生しました。";
      }
    }
  }
  redirect("/dashboard");
}

export async function register(
  prevSate: string | undefined,
  formData: FormData,
) {
  try {
    const { email, password } = await signUpSchema.parseAsync({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
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
  }
  redirect("/redirect-to", RedirectType.replace);
}
