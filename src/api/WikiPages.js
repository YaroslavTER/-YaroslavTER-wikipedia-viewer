import { WikiAPI } from "./WikiAPI";

export const WikiPages = {
  getPages: async searchQuery => {
    const request = await fetch(WikiAPI.url + searchQuery);
    const jsonData = await request.json();
    return jsonData;
  }
};
