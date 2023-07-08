import styled from "styled-components";

export const GalleryWrapper = styled.ul`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  gap: 1rem;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CardWrapper = styled.li`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CardItem = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  width: 100%;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  z-index: 2;
`;

export const ImageOverlay = styled.div`
  z-index: 10;
  height: 100%;
  width: 100%;
  position: absolute;
  transition: 0.3s ease;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;


  &:hover {
    opacity: 1;
    backdrop-filter: blur(0.2rem);
  }
`;

export const ImageOverlayIcon = styled.div`
  color: white;
  font-size: 4rem;
`;

export const CardTitle = styled.h2`
  color: #2e2e2e;
  font-size: 1.1rem;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
`;
