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

interface BandCardProps {
  data: {
    name: string;
    img_url: string;
    genre: string;
    description: string;
  };
}

export const BandCard = ({ data }: BandCardProps) => {
  const { name, img_url, genre, description } = data;

  return (
    <CardWrapper>
      <CardItem>
        <Card>
          <CardImageContainer>
            <CardImage src={img_url} alt={name} />
            <ImageOverlay>
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
