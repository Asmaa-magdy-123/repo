const imageUrls1 = [
    { src: "al (1).jpeg" },
    { src: "al (2).jpeg" },
    { src: "al (3).jpeg"},
    { src: "al (4).jpeg"}
  ];

  const imageUrls2 = [
    { src: "b3 (1).jpeg"},
    { src: "b3 (2).jpeg" },
    { src: "b3 (3).jpeg" },
    { src: "b3 (4).jpeg" }

  ];

 
  const imageUrls3 = [
    { src: "c (1).jpeg" },
    { src: "c (2).jpeg" },
    { src: "c (3).jpeg"},
    { src: "c (4).jpeg"}
  ];
  
  const imageUrls4 = [
    { src: "d (1).jpeg" },
    { src: "d (2).jpeg" },
    { src: "d (3).jpeg"},
    { src: "d (4).jpeg"}
  ];
  

  const imageUrls5 = [
    { src: "e.jpeg" },
    { src: "e2.jpeg" },
    { src: "e3.jpeg"},
    { src: "e4.jpeg"}
  ];
  
  const imageUrls6 = [
    { src: "f1 (1).jpeg" },
    { src: "f1 (2).jpeg" },
    { src: "f1 (3).jpeg"},
    { src: "f1 (4).jpeg"}
  ];
  
  const imageUrls7= [
    { src: "g1.jpg" },
    { src: "g2.jpg" },
    { src: "g3.jpg"},
    { src: "g4.jpg"}
  ];
  
  

 
  localStorage.setItem("recent-images1", JSON.stringify(imageUrls1));
  localStorage.setItem("recent-images2", JSON.stringify(imageUrls2));
  localStorage.setItem("recent-images3", JSON.stringify(imageUrls3));
  localStorage.setItem("recent-images4", JSON.stringify(imageUrls4));
  localStorage.setItem("recent-images5", JSON.stringify(imageUrls5));
  localStorage.setItem("recent-images6", JSON.stringify(imageUrls6));
  localStorage.setItem("recent-images7", JSON.stringify(imageUrls7));


 
  document.addEventListener("DOMContentLoaded", () => {
    const galleries = [
      "imageGallery1",
      "imageGallery2",
      "imageGallery3",
      "imageGallery4",
      "imageGallery5",
      "imageGallery6",
      "imageGallery7"
      
    ];

    galleries.forEach((galleryId, index) => {
      const recentImageUrls = JSON.parse(localStorage.getItem(`recent-images${index + 1}`));
      if (recentImageUrls) {
        const imageGallery = document.querySelector(`#${galleryId}`);
        recentImageUrls.forEach(imageInfo => {
          const imgElement = document.createElement("img");
          imgElement.src = imageInfo.src;

          imageGallery.appendChild(imgElement);

          
        });
      }
    });
  });