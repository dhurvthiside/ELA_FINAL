import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from './Title';

const subCategories = [
  { name: 'Faux Polki', image: 'https://res.cloudinary.com/dsihyrpw7/image/upload/v1738452924/Earrings11_jfxfnc.jpg' },
  { name: 'Faux Diamond', image: 'https://res.cloudinary.com/dsihyrpw7/image/upload/v1738452908/Rings_hoyst4.jpg' },
  { name: 'Temple', image: 'https://res.cloudinary.com/dsihyrpw7/image/upload/v1738452923/Bracelet_zdzrlg.jpg' },
  { name: 'Oxidised Silver', image: 'https://res.cloudinary.com/dsihyrpw7/image/upload/v1738452922/Necklace_z2sfjw.jpg' },
];

const SubCategory = () => {
  const navigate = useNavigate();

  const handleSubCategoryClick = (subCategory) => {
    navigate('/collection', { state: { subCategory } });
  };

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our premium subcategories for every occasion.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {subCategories.map((subCategory, index) => (
          <div
            key={index}
            className="cursor-pointer flex flex-col items-center justify-center rounded-2xl overflow-hidden transform hover:scale-105 transition-all"
            onClick={() => handleSubCategoryClick(subCategory.name)}
          >
            <img
              src={subCategory.image}
              alt={subCategory.name}
              className="w-60 h-60 object-cover rounded-full mb-4"
            />
            <span className="text-center text-lg font-semibold text-gray-700">
              {subCategory.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;
