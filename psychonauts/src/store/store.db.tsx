import { IBandData, IBandStore } from "types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { db } from "database/firebase.configSetter";
import { collection, getDocs } from "firebase/firestore";

export const useBandStore = create<IBandStore>()(
  devtools(
    persist(
      (set) => ({
        bands: [],
        fetchBandData: async () => {
          const lineupRef = collection(db, "lineup");
          const querySnapshot = await getDocs(lineupRef);

          //store bandData
          const bandData: IBandData[] = [];

          //fetching Lineup-Data from firebase.
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            bandData.push(doc.data() as IBandData);
          });
          set({ bands: bandData });
        },
      }),
      { name: "bands" }
    )
  )
);

