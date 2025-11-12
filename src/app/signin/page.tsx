"use client";

import Link from "next/link";
import { useActionState } from "react";
import { authenticate } from "../actions/auth";

export default function Page() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm space-y-8 rounded-2xl border border-gray-300 px-6 py-14 pb-20">
        <h1 className="text-2xl font-bold text-gray-700">ログイン</h1>
        <form action={formAction} className="space-y-4">
          <input type="hidden" name="redirectTo" value="/dashboard" />
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
          <button className="disabled:bg-gray300 w-full cursor-pointer rounded-md bg-blue-600 py-3 text-white transition-colors duration-300 ease-in-out hover:bg-blue-700 disabled:cursor-not-allowed">
            {isPending ? "ログイン中" : "ログイン"}
          </button>
          <p className="text-xs text-gray-500">
            アカウントをお持ちでないですか？ {""}
            <Link href="/signup" className="text-blue-600 underline">
              登録
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
