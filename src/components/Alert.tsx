import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
