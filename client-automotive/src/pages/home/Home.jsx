
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Marquee from "react-fast-marquee";
import {    FaCar,FaRocketchat,FaKey,FaMoneyCheckAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useLoaderData, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BrandCard from '../../components/brandCard/BrandCard';

AOS.init();




const Home = () => {
    
    const [productData,setProductData] = useState();
    // data load 
    const loaderData =  useLoaderData()



    useEffect(()=>{
 setProductData(loaderData)
          
    },[loaderData])

    // set name 

    const loc = useLocation();

    console.log('loca', loc.pathname)

   document.title = loc.pathname;
    return (
        <div className=''>
           {/* banner section  */}

      <div className='z-0   '>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  md:h-[100vh]   object-center  "
      >
        <SwiperSlide >

   <div
    className='bgHome1    '>
   {/* <img src="cool-background.svg" className='w-full  relative' alt="" /> */}
             <div className='flex flex-col md:flex-row    md:justify-between min-h-screen  md:items-center container mx-auto  px-4 md:px-0  '>


             <div  data-aos="fade-right" className='md:space-y-4'>
            <h1 className='text-2xl md:text-4xl '>BUY YOUR CAR<br/> FILL <span className='text-green-800 font-bold'>YOUR DREAM</span> </h1>
             <h1 className='md:text-right underline my-4 text-[20px]  md:text-2xl text-green-800  md:font-bold'>LAMBORGHINI</h1>
             <button className='btn bg-green-800 text-white btn-sm'>Explore</button>
         </div>


 <img   src="https://i.ibb.co/hVJy1tw/Dream-Shaper-v7-lamborghini-car-0-11zon-prev-ui.png" className='w-1/2  opacity-0  md:opacity-100  ' alt="" /> 


        
             </div>
   </div>
        </SwiperSlide>
        <SwiperSlide>

        <div
    className='bgHome2'>
   {/* <img src="cool-background.svg" className='w-full  relative' alt="" /> */}
             <div className='flex flex-col-reverse md:flex-row justify-center   md:justify-between min-h-screen  md:items-center container mx-auto px-4 md:px-0  '>


             <div data-aos="fade-right" className='md:space-y-4'>
            <h1 className='text-2xl md:text-4xl '>Discover the Road Less <br/> Traveled with  <span className='text-orange-600 font-bold'>Our<br/> Latest Models</span> </h1>
             <h1 className='text-left underline text-[20px]  md:text-2xl text-orange-600  md:font-bold'>JEEP</h1>
             <button className='btn bg-orange-600 text-white btn-sm'>Explore</button>
         </div>

 <img  src="https://i.ibb.co/DVk8FWw/Dream-Shaper-v7-jeep-car-2-11zon-prev-ui.png" className='w-1/2  opacity-0  md:opacity-100  ' alt="" /> 

        
             </div>
   </div>
        </SwiperSlide>
        <SwiperSlide>

     
        <div
    className='bgHome3'>
   {/* <img src="cool-background.svg" className='w-full  relative' alt="" /> */}
             <div className='flex flex-col-reverse md:flex-row justify-center   md:justify-between min-h-screen  md:items-center container mx-auto  px-4 md:px-0  '>


             <div className='space-y-4 '>
            <h1 className='text-2xl md:text-4xl space-x-5 '>Quality &  <span className='text-red-600'> Performance </span>  <span className='text-red-600 font-bold'><br/>  All in One Place </span> </h1>
             <h1 className='text-left underline text-[20px]  md:text-2xl text-red-600  md:font-bold'>FERRARI</h1>
             <button className='btn bg-red-600 text-white btn-sm'>Explore</button>
         </div>

 <img src="https://i.ibb.co/0jr7mpY/Dream-Shaper-v7-ferrari-car-0-11zon-prev-ui.png" className='w-1/2  opacity-0  md:opacity-100   ' alt="" /> 

        
             </div>
   </div>

        </SwiperSlide>

        <SwiperSlide>

     
        <div
    className='bgHome4'>
   {/* <img src="cool-background.svg" className='w-full  relative' alt="" /> */}
             <div className='flex flex-col-reverse md:flex-row justify-center   md:justify-between min-h-screen  md:items-center container mx-auto   px-4 md:px-0 '>

       
      

             <div className='space-y-4 '>
            <h1 className='text-2xl md:text-4xl space-x-5 '>Quality &  <span className='text-red-600'> Performance </span>  <span className='text-sky-600 font-bold'><br/>  All in One Place </span> </h1>
             <h1 className='text-left underline text-[20px]  md:text-2xl text-sky-600  md:font-bold'>MERCEDES-BENZ</h1>
             <button className='btn bg-sky-600 text-white btn-sm'>Explore</button>
         </div>

 <img src="https://i.ibb.co/dDRZmhV/Dream-Shaper-v7-Mercedes-Benz-car-1-11zon-prev-ui.png" className='w-1/2  opacity-0  md:opacity-100   ' alt="" /> 

        
             </div>
   </div>

        </SwiperSlide>


  
      </Swiper>
     </div> 



{/* main section brand name */}

{/* About Car Delivery section */}

 <div className='container mx-auto '>

 <section className=" px-4 md:px-0   ">
    <div className="">
     
    <h1 className="text-[20px] font-semibold dark:text-gray-800 capitalize md:text-3xl ">ABOUT <br/>  <span className='text-red-600 md:pl-20 text-[20px]  md:text-3xl'>CAR</span> </h1>

<div className="mt-2">
    <span className="inline-block w-24 h-1 bg-black rounded-full"></span>
    <span className="inline-block w-10 h-1 ml-1 bg-red-600 rounded-full"></span>
    <span className="inline-block w-3 h-1 ml-1 bg-red-600 rounded-full"></span>
</div>

 <p className='w-full md:w-1/2 mb-0' data-aos-delay ="500"  data-aos="fade-left"><span className='text-red-600 text-2xl md:text-7xl text-justify'>10</span> Award-winning, family owned dealership of new and pre-owned vehicles with several locations across the city. Lowest prices and the best customer service guaranteed.
 Award-winning, family owned dealership of new and pre-owned vehicles with several locations across the city. Lowest prices and the best customer service guaranteed.</p>
        <div className="mt-0 xl:mt-12 lg:flex ">
            
            <div className="grid w-full place-content-center place-items-center mt-12 md:mt-0 grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                <div data-aos="fade-in"  className="space-y-3 flex  flex-col justify-center">

                    <span className=" flex justify-center   p-3  rounded-full  hover:bg-red-600 hover:text-white   ">

                     
                       <FaCar className='text-5xl'></FaCar>

                    </span>

                    <h1 className="text-xl font-semibold  capitalize dark:text-white">ALL BRANDS</h1>

                    <p className=" dark:text-gray-300">
                    More than 100 brands
                    </p>
                </div>

                <div className="space-y-3  ">
                    <span className="p-3 flex justify-center     hover:bg-red-600 hover:text-white  ">
                     
                   <FaRocketchat className='text-5xl'></FaRocketchat>

                    </span>

                    <h1 className="text-xl font-semibold  capitalize dark:text-white">FREE SUPPORT</h1>

                    <p className=" dark:text-gray-300">
                    Premium and 24/7
                    </p>
                </div>

                <div className="space-y-3">
                    <span className="flex justify-center  p-3  rounded-full  hover:bg-red-600 hover:text-white  ">
                     
                       <FaKey className='text-5xl'></FaKey>
                    </span>

                    <h1 className="text-xl font-semibold  capitalize dark:text-white">DEALERSHIP</h1>

                    <p className=" dark:text-gray-300">
                    Single or multiple
                    </p>
                </div>

                <div className="space-y-3">
                <span className="flex justify-center p-3  rounded-full  hover:bg-red-600 hover:text-white  ">
                     
                     <FaMoneyCheckAlt className='text-5xl'></FaMoneyCheckAlt>
                   </span>

                    <h1 className="text-xl font-semibold  capitalize dark:text-white">AFFORDABLE</h1>

                    <p className=" dark:text-gray-300">
                    Single or multiple
                    </p>
                </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
                <img data-aos-delay ="500"  data-aos="fade-down" className="w-1/2 border-8 border-red-600 object-cover rounded-full" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
            </div>
        </div>
    </div>
</section>
 </div>

{/* dark and light mode */}



{/* our brand section  */}



 <div className='container mx-auto '>
 <section className="py-6 px-4 md:px-0 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
	<div className="space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-xl md:text-3xl font-bold">OUR BRANDS COLLECTION</h2>
			<p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
		</div>
		<div className="grid w-full grid-cols-1 md:gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

    
     {
         productData?.map(brands=> <BrandCard
             key={brands?._id}  brands={brands}  ></BrandCard>)
     }

	


		</div>
	</div>
</section>
 </div>



{/* our TEAM SECTION */}


 <div className='container mx-auto  '>
 <section className="py-6 px-4 md:px-0 dark:bg-gray-800 dark:text-gray-100">
	<div className="flex flex-col items-center justify-center p-4space-y-8 sm:p-10">
		<h1 className="text-4xl font-bold leadi text-center sm:text-5xl">Our Talented team</h1>
		<p className="max-w-2xl text-center dark:text-gray-400">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
		<div className="container items-center mx-auto flex flex-row flex-wrap-reverse justify-center">


  <div  className='  flex  items-center justify-center  overflow-hidden '>
  <Marquee  pauseOnHover className=' grid md:gap-6 grid-cols-1    overflow-hidden  h-[300px]   max-w-[100%]    ' >
 
 <div className="flex flex-col border   mx-4   p-10  border-red-600 hover:text-white  hover:bg-red-700 justify-center   text-center">
     <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
     <p className="text-3xl font-semibold leadi">Leroy Jenkins</p>
     <p className="dark:text-gray-400">Assistant Manger</p>
 </div>
 
{/* 2nd */}

 
<div className="flex flex-col border   mx-4   p-10  border-red-600 hover:text-white  hover:bg-red-700 justify-center   text-center">
<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
     <p className="text-3xl font-semibold leadi">Leroy Jenkins</p>
     <p className="dark:text-gray-400">Senior Manger</p>
 </div>
 {/* 3d */}
<div className="flex flex-col border   mx-4   p-10  border-red-600 hover:text-white  hover:bg-red-700 justify-center   text-center">
<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
     <p className="text-3xl font-semibold leadi">Leroy Jenkins</p>
     <p className="dark:text-gray-400">import Officer</p>
 </div>

</Marquee>
 



 {/* */}













  </div>





		</div>
	</div>
</section>
 </div>


        </div>
    );
};

export default Home;