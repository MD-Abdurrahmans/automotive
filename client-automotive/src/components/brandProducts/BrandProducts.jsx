import { useLoaderData, useParams } from "react-router-dom";
// import BrandCard from "../brandCard/BrandCard";
import Brands from "../brands/Brands";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const BrandProducts = () => {

    const brandData = useLoaderData();
    const pId = useParams();

    // console.log('all data', brandData)
    // console.log('brand',pId)


// console.log('branddata', brandData,pId)

    const aBrand =  brandData?.filter(brands =>  brands.brand.toUpperCase().trim() === pId.id.toUpperCase().trim()  )





  


    return (
<>


<div className="container mx-auto ">

  
{/* slider */}


<div className="">
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
        
        navigation= {false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper   md:h-[100vh]     object-center  "
      >
        <SwiperSlide>

      <div className="relative ">
      <img src={brandData[14].image} className='w-full  h-[100vh] md:h-fit   relative  ' alt="" />

         <div  data-aos="flip-down" className="absolute    top-[100px] left-[50px] text-justify    ">
         <h1 className="text-2xl  md:4xl lg:text-5xl text-slate-100 hidden  md:block  z-10 font-extrabold " >WE HAVE EVERYTHING<br/> YOUR CAR NEEDS!</h1>
         <br/>
           <span  className="text-2xl md:4xl lg:text-5xl text-pink-900  z-10 font-extrabold p-1 px-2  hero-overlay hidden  md:block     ">{brandData[14].name}</span>
         
         </div>
      </div>


        </SwiperSlide>
        <SwiperSlide>

        <div className="relative">
      <img src={brandData[13].image} className='w-full  h-[100vh] md:h-fit  relative   ' alt="" />

      <div data-aos="fade-right"  className="absolute    top-[300px] left-[200px] text-center    ">
         <h1 className="text-2xl  md:4xl lg:text-5xl text-gray-400 hidden  md:block  z-10 font-extrabold " >THE WIND IS  NOT EVEN<br/> CLOSE TO US</h1>
         <br/>
           <span  className="text-2xl md:4xl lg:text-5xl text-red-600 z-10 font-extrabold p-1 px-2  hero-overlay  hidden  md:block    ">{brandData[13].name}</span>
         
         </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="relative">
      <img src={brandData[10].image} className='w-full h-[100vh]  md:h-fit  relative   ' alt="" />

      <div     className="absolute    top-[100px] right-[50px] text-center    ">
         <h1 className="text-2xl  md:4xl lg:text-5xl text-slate-100 hidden  md:block  z-10 font-extrabold " >WE HAVE EVERYTHING<br/> YOUR CAR NEEDS!</h1>
         <br/>
           <span  className="text-2xl md:4xl lg:text-5xl text-slate-300  z-10 font-extrabold p-1 px-2  hero-overlay   hidden  md:block   ">{brandData[10].name}</span>
         
         </div>
      </div>
        </SwiperSlide>

        <SwiperSlide>

        <div className="relative">
      <img src={brandData[8].image} className='w-full h-[100vh] md:h-fit relative   ' alt="" />

      <div className="absolute    top-[100px] left-[80px] text-justify    ">
         <h1 className="text-2xl  md:4xl lg:text-5xl text-gray-600 hidden  md:block  z-10 font-extrabold " >WE HAVE EVERYTHING<br/> YOUR CAR NEEDS!</h1>
         <br/>
           <span  className="text-2xl md:4xl lg:text-5xl text-yellow-500  z-10 font-extrabold p-1 px-2  hero-overlay   hidden  md:block   ">{brandData[8].name}</span>
         
         </div>
      </div>

        </SwiperSlide>


  
      </Swiper>
     </div>

     <div className=" px-4 md:px-0">
{/* product */}
<div className=" md:px-0  my-24">
             

    <h1 className="text-center text-3xl md:6xl  py-8 font-black ">{aBrand[0].brand}</h1>

             <div className='grid  gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
 
             {
                 aBrand?.map(brands => <Brands key={brands._id}   brands={brands}  ></Brands>)
             }
             </div>
 
         </div>
     </div>
</div>


     
</>
    );
};

export default BrandProducts;