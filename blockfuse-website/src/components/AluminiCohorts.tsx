// import React from 'react'

// const AluminiCohorts = () => {
//   return (
//     <div>
//         <div className='w-[1169px] h-[89]'>
//             <h1 className='text-[70px] '>Meet graduates of <span className='text-[#BF64E7]'>Blockfuse Labs</span> </h1>
//             <h3 className='text-[70px] '>Cohort 1 alumni- Jan.2024 </h3>
//             <p className='text-xl justify-center items-center w-[819px] flex font-medium leading-[38.28px]'>Here, we celebrate their achievements and share the stories that inspire us.</p>
//         </div>
//     </div>
//   )
// }

// export default AluminiCohorts

import React from 'react';

const AluminiCohorts = () => {
  return (
    <div className="bg-[url('../assets/')] bg-cover bg-center  py-20 px-4">
      <div className="max-w-[1169px] mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Meet graduates of <span className="text-[#BF64E7]">Blockfuse Labs</span>
        </h1>
        <h3 className="text-3xl md:text-4xl lg:text-5xl mt-4">Cohort 1 alumni - Jan. 2024</h3>
        <p className="text-lg md:text-xl  font-medium leading-relaxed mt-4">
          Here, we celebrate their achievements and share the stories that inspire us.
        </p>
      </div>
    </div>
  );
};

export default AluminiCohorts;
