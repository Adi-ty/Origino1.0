import type { Metadata } from "next";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Origino | The content originality check API | Home",
  description: "Free and open-source content similarity checker API",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading
            size="lg"
            className="three-d text-black dark:text-light-gold"
          >
            Empower originality <br /> detect content similarity
          </LargeHeading>
          <Paragraph className="max-w-xl lg:text-left">
            Find content similarity effortlessly with Origino API. Get your free{" "}
            <Link
              href="/login"
              className="underline underline=-offset-2 text-black dark:text-light-gold"
            >
              API key
            </Link>{" "}
            and ensure authenticity of a content with ease.
          </Paragraph>

          <div className="relative w-full max-w-[200px] lg:max-w-[300px] lg:left-1/2 aspect-square lg:absolute lg:ml-[260px]">
            <Image
              className="img-shadow"
              quality={100}
              priority
              style={{ objectFit: "contain" }}
              fill
              src="/thirteen.svg"
              alt="main-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
