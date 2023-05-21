import React, { useEffect } from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import AOS from 'aos';
import 'aos/dist/aos.css';
const GallerySection = () => {

  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: 'ease-in-out', 
      delay: 200, 
    });
  }, []);
const images=[
 'https://cdn.pixabay.com/photo/2023/04/24/10/37/car-7947765_1280.jpg',
 'https://cdn.pixabay.com/photo/2016/11/06/05/33/miniature-1802333_1280.jpg',
 'https://i.pinimg.com/736x/b4/d4/37/b4d437bf32dc0ea8f8a2e12422b91545--hack-sport.jpg',
 'https://cdn.pixabay.com/photo/2014/08/29/23/08/toy-car-431356_1280.jpg',
 'https://cdn.pixabay.com/photo/2017/08/05/12/36/auto-2583230_1280.jpg',
 'https://cdn.pixabay.com/photo/2023/04/24/10/37/car-7947765_1280.jpg',
 'https://cdn.pixabay.com/photo/2015/11/16/15/57/fire-1045906_1280.jpg',
 'https://cdn.pixabay.com/photo/2020/04/24/12/54/model-car-5086785_1280.jpg',
 'https://cdn.pixabay.com/photo/2020/04/24/11/45/model-car-5086548_1280.jpg',
 'https://cdn.pixabay.com/photo/2017/03/08/20/56/toys-2127789_1280.jpg',
 'https://cdn.pixabay.com/photo/2014/10/02/20/37/model-car-470644_1280.jpg',
 'https://cdn.pixabay.com/photo/2017/02/12/16/19/autos-2060420_1280.jpg',
]

  return (
    <div className="my-6">
      <h1 className="text-2xl font-mono font-extrabold text-center text-gray-700 mb-8">
  Explore the Magical Car Gallery
</h1>
   <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 3, 900: 3}}
            >
                <Masonry >
                {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt=""
                className={index % 2 === 0 ? 'aos-animate p-2' : 'aos-animate p-2'}
                data-aos={index % 2 === 0 ? 'fade-down' : 'fade-up'}
              />
            </div>
          ))}
                </Masonry>
            </ResponsiveMasonry>
    </div>
  );
};

export default GallerySection;
// hover:scale-105 transform transition-transform duration-300 