import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const HeaderContainer = styled.header`
  ${tw`fixed w-full bg-white p-4`};
`

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container mx-auto px-4">
        Hello
      </div>
    </HeaderContainer>
  );
}

export default Header;
