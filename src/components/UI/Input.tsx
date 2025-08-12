import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-marcellus font-bold">{label}</label>
    <input
      {...props}
      className="border p-2 rounded-md focus:outline-none focus:ring-1"
    />
  </div>
);

export default Input;
