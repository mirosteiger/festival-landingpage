import { Card, CardItem, CardTitle, CardWrapper } from "./styled.lineup";
import images from "assets/images/bands/images"


interface BandCardProps {
    data: {
        name: string;
        image_url: string;
        genre: string;
        description: string;
    };
}
export const BandCard = ({ data }: BandCardProps) => {

    const { name, image_url, genre, description } = data;
    console.log(images)
    return (
        <CardWrapper>
            <CardItem>
                <Card>
                    <img src={"images[name]"} width={"100%"} height={"100%"} alt={image_url} />
                    <CardTitle>{name}</CardTitle>
                </Card>
            </CardItem>
        </CardWrapper>
    )
};
