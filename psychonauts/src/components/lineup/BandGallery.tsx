import { BandCard } from "./BandCard";
import { GalleryWrapper } from "./styled.lineup";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "database/firebaseConfigSetter";
import { IBandData } from "types";
import { Modal } from "components/modal/Modal";


export const BandGallery = () => {
  const [bands, setBands] = useState<IBandData[] | undefined>();

  const [open, setOpen] = useState<boolean>(false)
  const [active, setActive] = useState<IBandData>()

  //Fetching Band Info from firebase 
  //TODO: Auslagern in eigenen Store
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


  const showModal = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.key === 'Escape') {
        setOpen(false)
        console.log('Close')
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <>
      <GalleryWrapper>
        {bands &&
          bands.map((item, index) => {
            return (
              <BandCard data={item} key={index} showModal={showModal} setActive={setActive} />
            )
          })}
        {open && <Modal showModal={showModal} data={active} />}
      </GalleryWrapper >
    </>
  );
};
