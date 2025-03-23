import { format } from "date-fns";

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

const Utilities = {
  getUserFriendlyDateTime,
};
export default Utilities;
