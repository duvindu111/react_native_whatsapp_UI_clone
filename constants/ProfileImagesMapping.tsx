interface ImageMapping {
    [key: string]: any; // or specify the exact type of images
}
  
const images: ImageMapping = {
aliena_smith: require('@/assets/images/profile-pic/aliena smith.jpg'),
darren_till: require('@/assets/images/profile-pic/darren till.jpg'),
ethan_two: require('@/assets/images/profile-pic/ethan(2).jpg'),
jorge_dawson: require('@/assets/images/profile-pic/jorge dawson.jpg'),
michael: require('@/assets/images/profile-pic/michael.jpg'),
rose: require('@/assets/images/profile-pic/rose.jpg'),
selena: require('@/assets/images/profile-pic/selena.jpg'),
wade: require('@/assets/images/profile-pic/wade.jpg'),
};

export default images;