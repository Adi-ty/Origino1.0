"use client";

import { FC, useState } from "react";
import Button from "@/ui/Button";
import { signIn } from "next-auth/react";
import { toast } from "@/ui/Toast";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error sign in",
        message: "Please try again later",
        type: "error",
      });
    }
  };

  return (
    <Button className="mx-2" onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignInButton;
