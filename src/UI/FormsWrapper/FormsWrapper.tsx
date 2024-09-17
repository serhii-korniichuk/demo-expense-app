import Logo from "../Logo";
import cn from "classnames";
import s from "./FormsWrapper.module.scss";

export interface FormsWrapperProps {
  children?: React.ReactNode;
  size: "small" | "big";
}

const FormsWrapper = ({ children, size }: FormsWrapperProps) => {
  const isBig = size === "big";

  return (
    <div
      className={cn(s.FormsWrapper, {
        [s.Big]: isBig,
      })}
    >
      <header>
        <Logo size={size} />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default FormsWrapper;
