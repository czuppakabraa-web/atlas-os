import { ReactNode } from "react";

import SystemDivider from "./SystemDivider";
import SystemText from "./SystemText";

type Props = {
  title: string;
  children: ReactNode;
};

export default function SystemSection({
  title,
  children,
}: Props) {
  return (
    <>
      <SystemDivider />

      <SystemText
        dim
        style={{
          letterSpacing: 2,
          marginBottom: 18,
        }}
      >
        {title}
      </SystemText>

      {children}
    </>
  );
}