import { format } from "date-fns";
import React from "react";
import ServerError from "@/components/shared/misc/ServerError";

export function getUserFriendlyDateTime(date: string): string {
  if (date) {
    return format(
      Date.parse(date || new Date().toDateString()),
      "MMM dd, yyyy @ hh:mm a",
    );
  } else {
    return "-N/A-";
  }
}

export function processResponse(
  message: string | string[],
): React.ReactElement {
  return <ServerError message={message} />;
}

const Utilities = {
  getUserFriendlyDateTime,
  processResponse,
};
export default Utilities;
