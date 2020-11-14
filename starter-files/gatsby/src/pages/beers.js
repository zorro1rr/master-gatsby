import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const BeerGridStyle = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleBeerStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: block;
    display: grid;
    align-items: center;
    font-size: 10px;
  }
`;

export default function Beers({ data }) {
  return (
    <>
    <SEO title={`Beers! We have ${data.beers.edges.length} in stock`} />
      <h2 className="center">
        We have {data.beers.edges.length} Beers Available. Dine in Only!
      </h2>
      <BeerGridStyle>
        {data.beers.edges.map((beer) => {
          const rating = Math.round(beer.node.rating.average);

          return (
            <SingleBeerStyles key={beer.node.id}>
              <img src={beer.node.image} alt={beer.node.name} />
              <h3>{beer.node.name}</h3>
              {beer.node.price}
              <p>
                rating: {rating} Stars
                <span>({beer.node.rating.reviews})</span>
              </p>
            </SingleBeerStyles>
          );
        })}
      </BeerGridStyle>
    </>
  );
}

export const query = graphql`
  query BeerQuery {
    beers: allBeer {
      edges {
        node {
          id
          image
          name
          price
          rating {
            average
            reviews
          }
        }
      }
    }
  }
`;
