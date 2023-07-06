import { lineupData } from "components/data/lineup";
import { BandCard } from "./BandCard";
import { GalleryWrapper } from "./styled.lineup";

export const BandGallery = () => {


    return (
        <GalleryWrapper>
            {lineupData.bands.map((item, index) => (
                <BandCard data={item} key={index} />
            ))}
        </GalleryWrapper>
    )
}

