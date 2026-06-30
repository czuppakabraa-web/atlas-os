import { ReactNode } from "react";

import SystemText from "./SystemText";

type Props = {
  children: ReactNode;
};

export default function SystemStatus({
  children,
}: Props) {
  return (
    <SystemText
      dim
      style={{
        marginTop: 6,
        marginBottom: 40,
        letterSpacing: 2,
      }}
    >
      {children}
    </SystemText>
  );
}