
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const BrandCard = ({brands}) => {

   
    const {brand,image} = brands || {};

// console.log(brand)
    return (
        <div    className='container mx-auto '>
            
			<Link to={`/brandProducts/${brand}`}>

           


            <div className=" overflow-hidden  bg-black   rounded-lg shadow-lg dark:bg-gray-800">


    <img data-aos="flip-down" className="object-cover w-full h-48 mt-2" src={image} alt="NIKE AIR"/>

    <div className="flex car items-center justify-between px-4 py-2 bg-gray-900">
        {/* <h1 className="text-lg font-bold text-white">$129</h1> */}
        <h3 className="px-2 py-1 text-xs text-white  border-[2px solid inset-5] border  hover:bg-red-600 focus:outline-none">{brand}</h3>
    </div>
</div>

            </Link>

        </div>
    );
};




BrandCard.propTypes = {

    brands:PropTypes.object
}


export default BrandCard;