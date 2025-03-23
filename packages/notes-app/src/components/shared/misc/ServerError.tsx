import React from "react";

interface IServerErrorProps {
  message: string | string[];
}

const ServerError = ({ message }: IServerErrorProps) => {
  if (typeof message === "string") {
    return <span className="text-xl"> message </span>;
  }

  return (
    <ol>
      <p className="text-xl mb-2">
        <strong>Errors Occurred:</strong>
      </p>
      {message?.map((msg, index) => (
        <li className="mt-2" key={msg}>{`${index + 1}) ${msg}`}</li>
      ))}
    </ol>
  );
};

export default ServerError;
