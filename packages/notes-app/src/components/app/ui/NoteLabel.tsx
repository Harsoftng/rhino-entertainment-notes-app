import React from "react";

const NoteLabel = ({
  label,
  value,
}: {
  label: string;
  value?: string;
}): React.ReactElement => {
  return (
    <div className="text-left w-full pr-3 mt-3 container">
      <div className="font-extrabold text-gray-600">{label}</div>
      <p className="text-gray-900 text-sm text-pretty">{value || "-N/A-"}</p>
      <div className="border-b-accent border-b-2 border-dotted mt-1 w-full"></div>
    </div>
  );
};

export default NoteLabel;
