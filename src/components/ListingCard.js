// Import Dependencies
import React from 'react';
import styled from 'styled-components';

// Styled Components
const Card = styled.div`
padding: 20px 0;
border-bottom: 1px solid #ebebeb;
display: flex;
max-width: 800px;
justify-content: space-between;

@media (max-width: 800px) {
  width: 100%;
  display: block;
}
`;

const CardImg = styled.img`
width: 40%;
border-radius: 10px;
margin-right: 25px;

@media (max-width: 800px) {
  width: 100%;
  height: auto;
}
`;

const CardInfo = styled.div`
position: relative;
width: 58%;

@media (max-width: 800px) {
  width: 100%;
}
`;

const CardHeading = styled.p`
font-style: italic;
color: #929292;
`;

const CardTitle = styled.h3`
font-weight: normal;
font-size: 20px;
`;

const TitleSeparator = styled.hr`
width: 50px;
margin: 15px 0;
height: 1px;
background-color: #ebebeb;
border: none;
`;

const CardMeta = styled.p`
font-style: italic;
color: #49beb7;
`;

const CardPrice = styled.p`
position: absolute;
bottom: 0;
right: 0;

@media (max-width: 800px) {
  position: static;
  margin-top: 25px;
  margin-bottom: 10px;
}
`;

const CardButtons = styled.div`
position: absolute;
bottom: 0;
left: 0;
display: flex;

@media (max-width: 800px) {
  position: static
}
`;

const CardButton = styled.button`
width: 100px;
cursor: pointer;
background: #49beb7;
color: white;
border: none;
text-align: center;
padding: 5px 10px;
margin-right: 5px;

&:hover {
  background: #ff8a5c;
}
`;


export default function ListingCard(props) {

  return (
    <Card>
      <CardImg src={props.listing.featuredImg} alt={props.listing.title} />
      
      <CardInfo>
        <CardHeading>{props.listing.type} in {props.listing.location}</CardHeading>
        <CardTitle>{props.listing.title}</CardTitle>

        <TitleSeparator />

        <CardMeta>
          {props.listing.guests} guests . {props.listing.bedrooms} bedrooms . {props.listing.beds} beds . {props.listing.baths} baths
        </CardMeta>

        <CardMeta>
          {props.listing.amenities.map((amenity, index) => {
            return <span key={index}>{(index ? ' . ' : '')} {amenity}</span>;
          })}
        </CardMeta>
        
        {props.listing.salePrice !== 0 && 
          <CardPrice>
            <del style={{color: "#ccc"}}>${props.listing.price}</del> <span style={{fontWeight: "bold"}}>${props.listing.salePrice}</span> / night
          </CardPrice>
        }

        {props.listing.salePrice === 0 && 
          <CardPrice>
            <span style={{fontWeight: "bold"}}>${props.listing.price}</span> / night
          </CardPrice>
        }

        <CardButtons>
          <CardButton>Edit</CardButton>
          <CardButton>Remove</CardButton>
        </CardButtons>
      </CardInfo>
    </Card>
  )
}
