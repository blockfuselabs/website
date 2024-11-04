// import React from 'react'
// import item1 from "../assets/images/Rectangle2.png";
// import item2 from "../assets/images/Rectangle1.png";
// import item3 from "../assets/images/Rectangle4.png";
// import item4 from "../assets/images/Rectangle3.png";

// const Gallery = () => {
//   const Images = [
//     {
//       src: item1, alt: "item1", 
//     },
//     {
//       src: item2, alt: "item1", 
//     },
//     {
//       src: item3, alt: "item1", 
//     },

//     {
//       src: item4, alt: "item1", 
//     },
//     {
//       src: item1, alt: "item1", 
//     },
//     {
//       src: item2, alt: "item1", 
//     },
//     {
//       src: item3, alt: "item1", 
//     },
   
//     {
//       src: item4, alt: "item1", 
//     }
  

//   ]
//   return (
//     <div className='mt-20'>
//         <div className=' grid grid-cols-4 gap-8 mx-6 w-full'>
//           {Images.map((image, index) =>(
//               <div key={index}>
//                 <img src={image.src} 
//                     alt={image.alt}
//                 />
//                 <div className='border px-6 py-6 mt-1  h-[31px]  bg-white'>
//                   <button className='cursor-pointer' >Logo here</button>
//                 </div>
//               </div>
            
//             ))}       
//         </div>
//     </div>
//   )
// }

// export default Gallery


import React from 'react';
import item1 from "../assets/images/Rectangle2.png";
import item2 from "../assets/images/Rectangle1.png";
import item3 from "../assets/images/Rectangle4.png";
import item4 from "../assets/images/Rectangle3.png";

const Gallery = () => {
  const images = [
    { src: item1, alt: "item1" },
    { src: item2, alt: "item2" },
    { src: item3, alt: "item3" },
    { src: item4, alt: "item4" },
    { src: item1, alt: "item1" },
    { src: item2, alt: "item2" },
    { src: item3, alt: "item3" },
    { src: item4, alt: "item4" },
  ];

  return (
    <div className="mt-20 mx-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={image.src} alt={image.alt} className="w-full object-cover" />
            <div className="border px-6 py-1 mt-2 h-[31px] w-full bg-white flex justify-center items-center">
              <button className="cursor-pointer">Logo here</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
