export const ProcessJSON = {
  makePrettyer: json => {
    let previews = [];
    json.map((subArray, index) => {
      switch (index) {
        case 1:
          subArray.map(name => {
            previews.push({
              name: name
            });
          });
          break;
        case 2:
          subArray.map((description, index) => {
            previews[index].description = description;
          });
          break;
        case 3:
          subArray.map((link, index) => {
            previews[index].link = link;
          });
          break;
      }
    });
    return previews;
  }
};
