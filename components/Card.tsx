import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div {...props} className={`rounded-[21px] p-5 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
