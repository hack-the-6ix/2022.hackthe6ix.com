import { PropsWithChildren, ReactNode, useState } from "react";
import cx from "classnames";

import { ComponentWithAs } from "@ht6/react-ui";
import { FaMinus } from "@react-icons/all-files/fa/FaMinus";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import IconButton from "../IconButton";
import {
  titleRow,
  titleRowContent,
  titleRowIcon,
  plusIconHidden,
  content,
  contentHidden,
} from "./Accordion.module.scss";

type AccordionProps = ComponentWithAs<{
  title: string | ReactNode;
}>;

export default function Accordion({
  title,
  children,
  as: Component = "div",
  ...props
}: PropsWithChildren<AccordionProps>) {
  const [open, setOpen] = useState(false);
  return (
    <Component {...props}>
      <button className={titleRow} onClick={() => setOpen(!open)}>
        <div className={titleRowContent}>{title}</div>
        <IconButton className={titleRowIcon} icon={FaMinus} />
        <div className={cx(titleRowIcon, open && plusIconHidden)}>
          <IconButton icon={FaPlus} />
        </div>
      </button>
      <div className={cx(content, !open && contentHidden)}>{children}</div>
    </Component>
  );
}
