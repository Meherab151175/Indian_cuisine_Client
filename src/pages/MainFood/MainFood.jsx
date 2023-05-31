import React from 'react';
import diff from '../../assets/img/diff_menu.jpg'
import dal from '../../assets/img/dal.jpg'
import khicuri from '../../assets/img/khicuri.jpg'
import misti from '../../assets/img/misti.jpg'
import parate from '../../assets/img/parata.png'
import rice from '../../assets/img/rice.jpg'
import sobji from '../../assets/img/sobji.jpg'
import fish from '../../assets/img/fish.jpg'
const MainFood = () => {
    return (
        <div className='container mx-auto my-10'>
            <h2 className='text-[#131313] font-bold text-[40px] text-center my-5'>Main Food IN Indian People</h2>
            <p className='text-[#727272] text-[20px] font-medium my-5'> Rice and wheat are the staple grains in Indian cuisine. Lentils and legumes, such as chickpeas , red lentils, black lentils, and split yellow peas, are integral parts of Indian meals.A wide variety of vegetables are used in Indian cooking, including potatoes, tomatoes, onions, spinach, cauliflower, eggplant, and okra.Milk and milk-based products are widely consumed in India. Paneer (cottage cheese) is a popular ingredient in vegetarian dishes, while ghee (clarified butter) is used for cooking and flavoring.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center my-8'>
                <img className='w-fit h-60 border-1 rounded-md p-1' src={diff} alt="" srcset="" />
                <img className='w-fit h-60 border-1 rounded-md p-1' src={dal} alt="" srcset="" />
                <img className='w-fit h-60 border-1 rounded-md p-1' src={khicuri} alt="" srcset="" />
                <img className='w-fit h-60 border-1 rounded-md p-1' src={misti} alt="" srcset="" />
                <img className='w-fit h-60 border-1 rounded-md p-1' src={parate} alt="" srcset="" />
                <img className='w-fit h-60 border-1 rounded-md p-1' src={rice} alt="" srcset="" />
                <img className='w-fit h-60 border-1 rounded-md p-1' src={sobji} alt="" srcset="" />
                <img className='w-fit h-60 border-1 rounded-md p-1' src={fish} alt="" srcset="" />
            </div>
        </div>
    );
};

export default MainFood;