import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  grid-area: gallery;
  height: 400px;
  color: #ffffff;
  background-color: black;
  display: ${(props) => (props.sectionEnabled === true ? 'block' : 'none')};

  ${media.between('700px', '1024px')`
    height: 300px;
  `}

  ${media.between('520px', '700px')`
    height: 200px;
  `}

  ${media.lessThan('520px')`
    height: 150px;
  `}

  ${media.lessThan('375px')`
    height: 140px;
  `}

  ${media.lessThan('375px')`
    height: 180px;
  `}
`;

export const Image = styled.img`
  height: 400px;

  ${media.between('700px', '1024px')`
    height: 300px;
  `}

  ${media.between('520px', '700px')`
    height: 200px;
  `}

  ${media.lessThan('520px')`
    height: 150px;
  `}

  ${media.lessThan('375px')`
    height: 140px;
  `}

  ${media.lessThan('375px')`
    height: 180px;
  `}
`;

export const Button = styled.button``;

export const Icon = styled.i``;
