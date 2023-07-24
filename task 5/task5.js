const imageList = [
    "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
  ];

  // 1. display the image at that index from the array
   const displayRandomImage = () => {
      const randomIndex = getRandomIndex(imageList.length);
      const randomImage = imageList[randomIndex];
      document.getElementById('randomImage').src = randomImage     
  }

   //  generate a random index between 0 and max

  const getRandomIndex = (max) => {
    return Math.floor(Math.random() * max);
  };