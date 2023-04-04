import { getApi, postApi } from "../../utils/api";

export const saveGuest = async (guest: any, wedding_id: string, guest_id: string) => {
  try {
    return await postApi(`wedding/${wedding_id}/guest/${guest_id}`, guest)
  } catch (error) {
    console.log('Error saving guest:', error);
  }
}

export const getGuestList = async <T>(wedding_id: string)  => {
  try {
    const guests  = await getApi(`wedding/${wedding_id}/guests`);
    return guests;
  } catch (error) {
    console.log('Error saving guest:', error);
  }
}