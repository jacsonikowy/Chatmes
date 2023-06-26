import format from "date-fns/format";

export const formatTime = (time: number) => {
  const actualDate = Date.now() / 1000;
  if (actualDate - time > 24 * 3600) {
    return format(time, "dd-MM-yyyy HH:mm");
  }

  return format(time, "HH:mm");
};
