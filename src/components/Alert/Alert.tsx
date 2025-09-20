import { X } from "lucide-react";
import "./index.scss";
import type { ReactNode } from "react";
import type { AlertTypes } from "../../Types";

interface IProps {
  type: AlertTypes,
  icon: ReactNode,
  title: string,
  describtion?: string,
  children?: ReactNode,
}

const Alert = ({type, icon, title, describtion, children}: IProps) => {
  return (
    <>
      <div className={type}>
        <div className="alert_header">
          <div className="left">
            {icon}
            <h4>{title}</h4>
          </div>
          <X className="right" />
        </div>
        {children ? <p>{children}</p> : <p>{describtion}</p>}
      </div>
    </>
  );
};

export default Alert;
