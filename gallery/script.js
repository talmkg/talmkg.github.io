// let arrayOfImages = [];

// // Push the URLs to three images to arrayOfImages
// arrayOfImages.push(
//   [
//     "Image 1",
//     "https://images.unsplash.com/photo-1557238687-3f7df758e097?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
//   ],
//   [
//     "Image 2",
//     "https://images.unsplash.com/photo-1570651851409-93d5add773d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   ],
//   [
//     "Image 3",
//     "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   ]
// );
// // Output arrayOfImages to the console
// console.log(arrayOfImages);

// ---------------------------------------------------------------------------- //
const gallery = document.querySelector(".photo-grid");
const popup = document.getElementById("popup");
const selectedImage = document.getElementById("selectedImage");
const imageIndexes = [1, 2, 3, 4, 5, 6];
const selectedIndex = null;

imageIndexes.forEach((i) => {
  const image = document.createElement("img");
  image.src = `../assets/galleryImages/${i}.jpg`;

  image.classList.add("card");
  image.addEventListener("click", () => {
    //popup
  });
  gallery.appendChild(image);
});
