import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import propertyData from "../pages/RentHouse/data"
import { useParams } from 'react-router-dom';
const Checkout = () => {
  const { id } = useParams();
  const property = propertyData.find((e)=>e.id===+id)
  console.log(property)
  const handleFormSubmit = (e) => {
    e.preventDefault();

  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 
    return () => clearInterval(interval);
  }, [property.images]);

  return (
    <StyledPropertyCard>
        <ImageContainer>
          <PropertyImage
            src={property.images[currentImageIndex]}
            alt={`Property Image ${currentImageIndex}`}
          />
        </ImageContainer>
        <PropertyInfo>
          <h3 style={{ fontSize: 'large', fontWeight: 'bold', marginBottom: '15px' }}>{property.name}</h3>
          <p>Price: ${property.price}</p>
          <p>Bedrooms: {property.bedrooms} BHK</p>
          <p>Area: {property.livingArea} sqft</p>
          <AddressInfo>
            Address: {property.streetAddress}, {property.location}, {property.state}, {property.zipcode}, {property.country}
          </AddressInfo>
          <p>Listed By: {property.listedBy}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, minima necessitatibus eaque natus rerum officiis corrupti, sit et, magni deleniti fugiat architecto enim ipsum vel accusamus totam dignissimos beatae ut praesentium. Minus ea quos consectetur debitis cum autem laborum explicabo mollitia ducimus atque ex tempora, officiis ut modi quis asperiores.</p>
          <button style={{padding:"10px 40px", backgroundColor:"skyblue", borderRadius:"5px", marginTop:' 5%'}}>Buy Now</button>
        </PropertyInfo>
    </StyledPropertyCard>
  );
};

export default Checkout;

const StyledPropertyCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 45px;
  border: 1px solid #ccc;
  padding: 5px;
  margin: 5px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  max-width: 100%;
`;

const ImageContainer = styled.div`
  width: 50%;
  max-width: 45%;
  height: 400px;
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 400px;
  display: block;
  max-width: 100%;
`;

const PropertyInfo = styled.div`
  width: 50%;
  padding: 10px;
  text-align: start;
`;

const AddressInfo = styled.p`
  font-style: italic;
  margin: 0;
  color: #777;
  font-size: 14px;
`;