import { BandCard } from "./BandCard";
import { GalleryWrapper } from "./styled.lineup";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "database/firebaseConfigSetter";
import { IBandData } from "types";


export const BandGallery = () => {
  const [bands, setBands] = useState<IBandData[] | undefined>();

  useEffect(() => {
    const getLineup = async () => {
      //getting a reference to the corresponding doc-collection in firebase
      const lineupRef = collection(db, "lineup");
      const querySnapshot = await getDocs(lineupRef);

      //store bandData
      const bandData: IBandData[] = [];

      //fetching Lineup-Data from firebase.
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        bandData.push(doc.data() as IBandData);
      });
      setBands(bandData);
    };

    getLineup();
  }, []);

  return (
    <GalleryWrapper>
      {bands &&
        bands.map((item, index) => {
          return <BandCard data={item} key={index} />;
        })}
    </GalleryWrapper>
  );
};
