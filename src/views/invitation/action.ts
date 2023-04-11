import { Guest } from "../../types";
import { getApi } from "../../utils/api";

const weddingId = process.env.WEDDING_ID

export const getGuest = async (guestId: string) => {
  try {
    const url: string = `wedding/${weddingId}/guest/${guestId}`
    const guest: Guest = await getApi(url);
    return guest;
  }
  catch(error) {
    console.error('Error in getting guest data', error);
    return {} as Guest;
  }
}