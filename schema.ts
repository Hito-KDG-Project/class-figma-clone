import { object, string } from "zod";

export const signupSchema = object({
  email: string({ required_error: "メールアドレスを入力してください。" }).email(
    "正しいメールアドレスの形式で入力してください。",
  ),
  password: string({ required_error: "パスワードを入力してください。" })
    .min(8, "パスワードは8文字以上で設定してください。")
    .max(32, "パスワードは32文字以内で設定してください。"),
});

export const signinSchema = object({
  email: string({ required_error: "メールアドレスを入力してください。" }).email(
    "正しいメールアドレスの形式で入力してください。",
  ),
  password: string({ required_error: "パスワードを入力してください。" }),
});
