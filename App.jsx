// eslint-disable-next-line no-unused-vars
import React from "react";

const Button = (props) => {
  return (
    <button
      // eslint-disable-next-line react/prop-types
      className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-white hover:bg-black`}
      type="submit"
    >
      Belanja
    </button>
  );
};

export default function App() {
  return (
    <div className="text-2xl flex justify-center bg-gray-200 min-h-screen items-center">
      <div className="flex gap-x-4">
        <Button variant="bg-red-500" />
        <Button variant="bg-blue-500" />
        <Button variant="bg-green-500" />
        <Button variant="bg-yellow-500" />
        <Button variant="bg-slate-500" />
      </div>
    </div>
  );
}

