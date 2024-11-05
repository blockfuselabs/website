import React from 'react'

const AboutBootcamp = () => {
  return (
    <div className="dark:text-white px-6 py-36 h-full gap-8 mb-[900px] sm:px-8 md:px-16 lg:px-24">
        <div className='w-[1040px] h-auto absolute top-[209px] mb-8 gap-8'>
            <h1 className='h-[178px] font-space-grotesk text-[70px] font-normal leading-[89.32px] text-center'>Where Future <span className='font-space-grotesk text-[70px] font-bold leading-[89.32px] text-center'>Blockchain</span> Leaders Are Made</h1>
            <p className='w-[819px] h-[114px] font-space-grotesk text-[30px] ml-[100px] font-light leading-[38.28px] text-center'>Unlock the skills to lead in Web2 and Web3 development through hands-on training, mentorship, and real-world projects.</p>
        </div>
        {/* <div className='w-[1440px] h-[866px] absolute top-[571px] p-[86px_8px_86px_8px] mb-16 gap-[72px] text-center'>
            <h3 className='h-[51px] font-space-grotesk text-[40px] font-normal leading-[51.04px]'>Our Bootcamps</h3>
            <div className='flex w-[1424px] h-[571px] gap-[26px]'>
                <div className='w-[574px] h-[472px] gap-[61px] border-t-2'>
                    <div>Web2 For Web3</div>
                    <p className='w-[558px] h-[156px] font-space-grotesk text-20px font-light leading-[25.52px] text-center'>Learn the essentials of modern web development in HTML, CSS, Tailwind css, JavaScript and React/Nodejs. This program guides you through creating interactive, responsive websites, providing the skills and confidence to start building real-world projects. Perfect for beginners ready to launch their web journey!</p>
                    <button>Apply now</button>
                    
                </div>
                <div className='w-[574px] h-[507px]  gap-[61px] border-t-2'>
                    <div>Web3</div>
                    <p className='w-[558px] h-[156px] font-space-grotesk text-[20px] font-light leading-[25.52px] text-center'>Unlock the future of the internet with our Web3 Bootcamp! Learn blockchain fundamentals, smart contracts, and dApps to build decentralized applications. Ideal for beginners eager to explore Web3 technology and launch into the world of blockchain development!</p>
                    <button>Apply now</button>
                </div>
            </div>
        </div> */}

        <div className="text-center text-white pt-20 mt-[230px] max-w-5xl px-4">
            <h2 className="text-2xl text-black font-normal mb-10">Our Bootcamps</h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center">

                <div className="bg-[#1d1d1d] border-2 border-custom-purple-2 rounded-lg p-6 max-w-sm flex flex-col items-center">
                    <div className='bg-[url("/blockfuse-website/src/assets/images/web2 bg.jpeg")] w-full h-16'>
                        <h3 className="text-xl font-bold mt-4 mb-2">Web 2 for Web 3</h3>
                    </div>
                    <p className="text-sm font-light leading-relaxed mb-6 text-center">
                    Learn the essentials of modern web development in HTML, CSS, Tailwind CSS, JavaScript, and Node.js/React. This program guides you through creating interactive, responsive websites, providing the skills and confidence to start building real-world projects. Perfect for beginners ready to launch their web journey!
                    </p>
                    <button className="text-white py-2 px-4 bg-gradient-to-r from-[#bf64e7] to-[#4e2ef5] rounded font-normal">
                    Apply now →
                    </button>
                </div>

                <div className="bg-[#1d1d1d] border-2 border-custom-purple-2 rounded-lg p-6 max-w-sm flex flex-col items-center">
                    <h3 className="text-xl font-bold mt-4 mb-2">Web 3</h3>
                    <p className="text-sm font-light leading-relaxed mb-6 text-center">
                    Unlock the future of the internet with our Web3 Bootcamp! Learn blockchain fundamentals, smart contracts, and dApps to build decentralized applications. Ideal for beginners eager to explore Web3 technology and launch into the world of blockchain development!
                    </p>
                    <button className="text-white py-2 px-4 bg-gradient-to-r from-[#bf64e7] to-[#4e2ef5] rounded font-normal ">
                    Apply now →
                    </button>
                </div>
            </div>
        </div>

        <div className="text-center max-w-5xl mt-16 px-4">
            <h2 className="text-3xl font-medium mb-12">More Than Just the Basics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
                <div className="flex flex-col items-center text-center">
                    <div className='flex gap-4'>
                        <img src="path/to/icon1.png" alt="" className="w-[30px] h-[35px] mt-4" />
                        <div className="w-full h-full text-left mb-4">
                            <h3 className="text-lg font-bold mb-2">REAL WORLD EXPERIENCE</h3>
                            <p className="text-sm font-light leading-relaxed">
                            Apply your skills to solve real-world problems and see immediate results.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-0.5 bg-gradient-to-r from-custom-purple-1 to-custom-purple-2 mt-4"></div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className='flex gap-4'>
                        <img src="path/to/icon2.png" alt="" className="w-[30px] h-[35px] mt-4" />   
                        <div className='text-left'>
                            <h3 className="text-lg font-bold mb-2">HANDS-ON LEARNING</h3>
                            <p className="text-sm font-light leading-relaxed">
                            Dive into projects and learn by doing, transforming theory into practice.
                            </p>
                        </div> 
                    </div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className='flex gap-4'>
                        <img src="path/to/icon2.png" alt="" className="w-[30px] h-[35px] mt-4" />   
                        <div className='text-left'>
                            <h3 className="text-lg font-bold mb-2">INTERACTIVE LEARNING</h3>
                            <p className="text-sm font-light leading-relaxed">
                            Engage actively with hands-on activities that bring concepts to life.
                            </p>
                        </div> 
                    </div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className='flex gap-4'>
                        <img src="path/to/icon2.png" alt="" className="w-[35px] h-[35px] mt-4" />   
                        <div className='text-left'>
                            <h3 className="text-lg font-bold mb-2">COLLABORATIVE LEARNING</h3>
                            <p className="text-sm font-light leading-relaxed">
                            Collaborate with peers to share insights, tackle challenges, and grow together.
                            </p>
                        </div> 
                    </div>
                </div>

            </div>
        </div>

        <div className="text-center text-white mt-16 max-w-6xl px-4">
            <h2 className="text-black text-3xl font-medium mb-12">Our Journey</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            <div className="flex flex-col bg-[#2b2b2b] p-8 border border-[#4e2ef5] rounded-lg items-center">
                <div className="flex w-full h-12 mb-4">
                    <img src="path/to/icon1.png" alt="" className="w-[35px] h-[35px]" />
                    <h3 className="text-xl font-semibold mb-4">The Leap</h3>
                </div>
                <p className="text-sm font-light leading-relaxed">
                Blockfuse Labs was established with a mission to empower developers through both remote and onsite training. Our primary agenda is to build a sustainable blockchain economy by fostering innovation, technical expertise, and community development across Africa and beyond.
                </p>
            </div>

            <div className="flex flex-col bg-[#2b2b2b] p-8 border border-[#4e2ef5] rounded-lg items-center">
                <div className="flex w-full h-12 mb-4">
                    <img src="path/to/icon2.png" alt="" className="w-[35px] h-[35px]" />
                    <h3 className="text-xl font-semibold mb-4">Our today</h3>
                </div>
                <p className="text-sm font-light leading-relaxed">
                Today, Blockfuse Labs stands as a beacon of blockchain education, offering cutting-edge courses that cover everything from basic blockchain principles to advanced cryptography and smart contract development, helping learners master the future of technology.
                </p>
            </div>

            <div className="flex flex-col bg-[#2b2b2b] p-8 border border-[#4e2ef5] rounded-lg items-center">
                <div className="flex w-full h-12 mb-4">
                    <img src="path/to/icon3.png" alt="" className="w-[35px] h-[35px]" />
                    <h3 className="text-xl font-semibold mb-4">Our tomorrow</h3>
                </div>
                <p className="text-sm font-light leading-relaxed">
                As we look to the future, we aim to expand our reach and impact, continually adapting to the evolving needs of the blockchain ecosystem. Our commitment is to provide unmatched training and comprehensive support across blockchain enthusiasts across Africa and beyond.
                </p>
            </div>

            </div>

            <p className="text-black text-sm mb-4">Start Your Journey Today</p>
            <a href="#" className="inline-block px-6 py-3 text-white font-medium bg-gradient-to-r from-[#bf64e7] to-[#4e2ef5] rounded-md">
            Join our Community →
            </a>
        </div>
    </div>
  )
}

export default AboutBootcamp
