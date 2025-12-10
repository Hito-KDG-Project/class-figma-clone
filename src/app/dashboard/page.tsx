"use client";
import signOut from "../actions/auth";

export default function Page() {
  return (
    <div>
      <p>My dashboard</p>
      <button onClick={() => signOut()}>ログアウト</button>
    </div>
  );
}
