import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  margin-top: 53px;
  background-color: #dae1e7;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

const Hero = () => {
  return (
    <HeroContainer>
    <Canvas />
      <div className="container mx-auto px-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsum autem numquam ea nemo quo sit minima nobis
          eligendi, officia accusantium dolorem harum ducimus repellat magni recusandae temporibus quisquam ad sint. Iusto
          consequatur aperiam cum accusantium non alias eaque voluptatibus nobis expedita sequi, nostrum voluptas nesciunt
          voluptatem mollitia sapiente dolore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsum autem numquam ea nemo quo sit minima nobis
          eligendi, officia accusantium dolorem harum ducimus repellat magni recusandae temporibus quisquam ad sint. Iusto
          consequatur aperiam cum accusantium non alias eaque voluptatibus nobis expedita sequi, nostrum voluptas nesciunt
          voluptatem mollitia sapiente dolore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsum autem numquam ea nemo quo sit minima nobis
          eligendi, officia accusantium dolorem harum ducimus repellat magni recusandae temporibus quisquam ad sint. Iusto
          consequatur aperiam cum accusantium non alias eaque voluptatibus nobis expedita sequi, nostrum voluptas nesciunt
          voluptatem mollitia sapiente dolore.
        </p>
      </div>
    </HeroContainer>
  );
};

export default Hero;
