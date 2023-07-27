import { BandCard } from "./BandCard";
import { GalleryWrapper } from "./styled.lineup";
import { useEffect, useState } from "react";
import { IBandData } from "types";
import { Modal } from "components/modal/Modal";
import { useBandStore } from "store/store.db";

export const BandGallery = () => {
  const { bands } = useBandStore();
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<IBandData>();

  const showModal = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.key === "Escape") {
        setOpen(false);
        console.log("Close");
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <GalleryWrapper>
        {bands &&
          bands.map((item, index) => {
            return (
              <BandCard
                data={item}
                key={index}
                showModal={showModal}
                setActive={setActive}
              />
            );
          })}
        {open && <Modal showModal={showModal} data={active} />}
      </GalleryWrapper>
    </>
  );
};
