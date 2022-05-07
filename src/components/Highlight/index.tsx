import { CSSProperties, PropsWithChildren } from "react";

import { Colors } from "@ht6/react-ui/dist/styles";
import { highlight } from "./Highlight.module.scss";

export interface HighlightProps {
  highlightColor: Colors;
}

export default function Highlight({
  highlightColor,
  children,
}: PropsWithChildren<HighlightProps>) {
  return (
    <span
      className={highlight}
      style={
        {
          "--highlight-color": `var(--${highlightColor})`,
        } as CSSProperties
      }
    >
      {children}
    </span>
  );
}
