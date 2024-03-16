import { storeDataInLocalStorage, getDataFromLocalStorage } from './handleLocalStorage';

class LikedImages {
  constructor() {
    this.all = getDataFromLocalStorage('liked-images') || [];
  }

  addImage(imgData) {
    this.all.push(imgData); // Push the imgData to the array
    storeDataInLocalStorage('liked-images', this.all);
  }

  removeImage(targetedDate) {
    this.all = this.all.filter(image => image.date !== targetedDate);
    storeDataInLocalStorage('liked-images', this.all);
  }
}
export default LikedImages;
