import { PropsWithChildren, useState } from "react";

import { FaMinus } from "@react-icons/all-files/fa/FaMinus";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import IconButton from "../IconButton";
import { titleRow } from "./Accordion.module.scss";

interface AccordionProps {
  title: string | JSX.Element;
}

export default function Accordion({
  title,
  children,
}: PropsWithChildren<AccordionProps>) {
  const [open, setOpen] = useState(false);
  return (
    <div id="faq">
      <a className={titleRow} onClick={() => setOpen(!open)}>
        {title}
        <IconButton icon={open ? FaMinus : FaPlus} />
      </a>
      {open && children}
    </div>
  );
}
