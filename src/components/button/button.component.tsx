import React from "react";

import { twMerge } from "tailwind-merge";
import { ButtonProps, ShadcnButton } from "../ui/button";
import { Spinner } from "../ui/spinner";

interface Props extends ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

const Button = ({
  children,
  icon,
  className,
  isLoading = false,
  ...rest
}: Props) => {
  const buttonContent = (
    <ShadcnButton
      className={twMerge("flex items-center justify-center gap-3", className)}
      {...rest}
    >
      {isLoading && (
        <div className="flex w-full items-center justify-center">
          <Spinner />
        </div>
      )}
      {!isLoading && (
        <div className="flex w-full items-center justify-center gap-2">
          {icon}
          {children}
        </div>
      )}
    </ShadcnButton>
  );

  return buttonContent;
};

export { Button };
