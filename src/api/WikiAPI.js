const url =
  "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=";

export const WikiAPI = {
  getPages: async searchQuery => {
    const request = await fetch(url + searchQuery);
    const jsonData = await request.json();
    return jsonData;
  }
};
