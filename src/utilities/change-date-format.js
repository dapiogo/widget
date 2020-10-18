import { DateTime } from "luxon";

export const changeDateFormat = (data) => DateTime.local().toISODate(data);
