"use client";

import { signIn } from "next-auth/react";
import { GithubIcon } from "./github-icon";

export function GithubAuthButton() {
  async function handleSignIn() {
    await signIn("github");
  }

  return (
    <button
      className="tw-rounded-lg tw-flex tw-items-center tw-gap-5 tw-w-full tw-text-lg tw-leading-base tw-text-gray-200 tw-bg-gray-600 tw-px-6 tw-py-5 hover:tw-bg-gray-500 hover:tw-text-white"
      onClick={handleSignIn}
    >
      <GithubIcon />
      Entrar com GitHub
    </button>
  );
}
