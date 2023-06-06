// Dog API
const getDogImages = async () => {
    try {
      //getting the data from the api - generating 3 random dog images 
      const response = await fetch('https://dog.ceo/api/breeds/image/random/3');
      const data = await response.json();
  
      const dogContainer = document.querySelector('.dogs-container');
      data.message.forEach((imageUrl) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.className = 'img-fluid';
        dogContainer.appendChild(img);
      });
    } catch (error) {
      console.error('Error fetching dog images:', error);
    }
  };
  //calling the api function
  getDogImages();
  
  
  