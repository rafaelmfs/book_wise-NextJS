import { GithubAuthButton } from "@/components/github-auth-button";
import { GoogleAuthButton } from "@/components/google-auth-button";
import { Logo } from "@/components/logo";
import { RocketLaunchIcon } from "@/components/rocket-launch-icon";
import Image from "next/image";
import cover from "../../public/cover.png";

export default function Home() {
  return (
    <div className="tw-bg-gray-800 tw-w-full tw-h-screen tw-grid tw-grid-cols-8 tw-p-5">
      <div className="tw-col-span-3 tw-relative tw-overflow-hidden tw-flex tw-items-center tw-justify-center tw-rounded-xl">
        <Logo className="tw-h-16 tw-absolute" />
        <Image
          src={cover.src}
          width={598}
          height={912}
          quality={100}
          alt=""
          className="tw-object-cover tw-min-w-full"
        />
      </div>
      <div className="tw-col-span-5 tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-10">
        <div className="tw-flex tw-flex-col tw-gap-2 tw-w-full tw-max-w-[372px]">
          <strong className="tw-text-heading-lg tw-leading-short tw-text-gray-100">
            Boas vindas!
          </strong>
          <span className="tw-text-md tw-leading-base tw-text-gray-200">
            Faça seu login ou acesse como visitante.
          </span>
        </div>

        <div className="tw-w-full tw-space-y-4 tw-max-w-[372px]">
          <GoogleAuthButton />
          <GithubAuthButton />
          <button className="tw-rounded-lg tw-flex tw-items-center tw-gap-5 tw-w-full tw-text-lg tw-leading-base tw-text-gray-200 tw-bg-gray-600 tw-px-6 tw-py-5 hover:tw-bg-gray-500 hover:tw-text-white">
            <RocketLaunchIcon />
            Entrar como Visitante
          </button>
        </div>
      </div>
    </div>
  );
}
