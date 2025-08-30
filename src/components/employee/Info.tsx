import type { ReactNode } from "react";

interface InfoProps {
  children: ReactNode;
}

const Info = ({ children }: InfoProps) => {
  return (
    <div className="rounded-full bg-blue-default text-white px-6 py-1">
      {children}
    </div>
  );
};

export default Info;
