"use client";

import { signIn } from "next-auth/react";
import { GoogleIcon } from "./google-icon";

export function GoogleAuthButton() {
  async function handleSignIn() {
    await signIn("google");
  }

  return (
    <button
      onClick={handleSignIn}
      className="tw-rounded-lg tw-flex tw-items-center tw-gap-5 tw-w-full tw-text-lg tw-leading-base tw-text-gray-200 tw-bg-gray-600 tw-px-6 tw-py-5 hover:tw-bg-gray-500 hover:tw-text-white tw-transition-colors tw-border tw-border-gray-600"
    >
      <GoogleIcon />
      Entrar com Google
    </button>
  );
}
