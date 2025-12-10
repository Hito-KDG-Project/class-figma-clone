"use client";

import Link from "next/link";
import { useActionState } from "react";
import { register } from "../actions/auth";

export default function Page() {
  const [errorMessage, formAction, isPending] = useActionState(
    register,
    undefined,
  );
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm space-y-8 rounded-2xl bg-white px-6 py-14 pb-20">
        <h1 className="text-2xl font-bold text-gray-700">アカウントの登録</h1>
        <form action={formAction} className="space-y-4">
          <div className="relative flex h-full flex-col space-y-2">
            <label
              htmlFor="email"
              className="absolute top-2 left-4 text-[12px] text-gray-600"
            >
              メールアドレス
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="h-16 rounded-md border border-gray-300 px-4 pt-4 focus:border-blue-600 focus:ring"
              required
            />
          </div>
          <div className="relative flex h-full flex-col space-y-2">
            <label
              htmlFor="password"
              className="absolute top-2 left-4 text-[12px] text-gray-600"
            >
              パスワード
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="h-16 rounded-md border border-gray-300 px-4 pt-4 focus:border-blue-600 focus:ring"
              required
            />
          </div>
          <button
            disabled={isPending}
            className="disabled:bg-gray300 w-full cursor-pointer rounded-md bg-blue-600 py-3 text-white transition-colors duration-300 ease-in-out hover:bg-blue-700 disabled:cursor-not-allowed"
          >
            {isPending ? "登録中" : "登録"}
          </button>
          <p className="text-xs text-gray-500">
            アカウントをお持ちの方へ {""}
            <Link href="/signin" className="text-blue-600 underline">
              ログイン
            </Link>
          </p>
          {errorMessage && (
            <p className="text-red500 text-sm">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
