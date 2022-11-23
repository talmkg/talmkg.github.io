// const images = [
//   "https://i.pinimg.com/564x/88/c2/45/88c2456193cfca4ba3d8ebff24311789.jpg",
//   "https://i.pinimg.com/736x/fd/ad/32/fdad32385d33de321ce87f71a38c226b.jpg",
//   "https://i.pinimg.com/564x/8b/34/01/8b34012d9714c43a26fae887bc571cbe.jpg",
//   "https://i.pinimg.com/564x/8b/34/01/8b34012d9714c43a26fae887bc571cbe.jpg",
// ];

// function randImg() {
//   const size = images.length;
//   const x = Math.floor(size * Math.random());
//   document.getElementById("image").src = images[x];
//   console.log(x);
// }

// randImg();

//try2
function Randomize() {
  const images = new Array(
    "https://i.pinimg.com/564x/88/c2/45/88c2456193cfca4ba3d8ebff24311789.jpg",
    "https://i.pinimg.com/564x/13/46/3a/13463af93e0b39147f2aa78e837bb249.jpg",
    "https://i.pinimg.com/564x/a4/d8/25/a4d825688caac715e8f0a2b0b11e431a.jpg",
    "https://i.pinimg.com/564x/d8/65/92/d86592d0a2dd283c3346da79e30971da.jpg"
  );
  let imageNum = Math.floor(Math.random() * images.length);
  newWallpaper = document.getElementById("navbar").style.backgroundImage =
    "url('" + images[imageNum] + "')";
}

window.onload = Randomize;
