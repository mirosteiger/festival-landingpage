import { BandCardProps } from "types";
import {
  Card,
  CardImage,
  CardImageContainer,
  CardItem,
  CardTitle,
  CardWrapper,
  ImageOverlay,
  ImageOverlayIcon,
} from "./styled.lineup";
import { IoIosAdd } from "react-icons/io";



export const BandCard = ({ data, showModal, setActive }: BandCardProps) => {
  const { name, img_url} = data;
  
  const handleClick = () => {
    setActive(data);
    showModal()
  }
  return (
    <CardWrapper>
      <CardItem>
        <Card>
          <CardImageContainer>
            <CardImage src={img_url} alt={name} />
            <ImageOverlay onClick={handleClick}>
              <ImageOverlayIcon>
                <IoIosAdd />
              </ImageOverlayIcon>
            </ImageOverlay>
          </CardImageContainer>
          <CardTitle>{name}</CardTitle>
        </Card>
      </CardItem>
    </CardWrapper>
  );
};
