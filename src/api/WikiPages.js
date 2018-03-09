import { WikiAPI } from "./WikiAPI";

export const WikiPages = {
  getPages: async => {
    const request = await fetch(WikiAPI.url);
    const jsonData = await request.json();
    return jsonData;
  }
};
