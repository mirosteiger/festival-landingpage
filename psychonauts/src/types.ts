import { User } from "firebase/auth";

export interface IBandData {
  name?: string;
  genre?: string;
  description?: string;
  img_url?: string;
  embedId?: string;
}

export interface ICredentials {
  email: string;
  password: string;
}

export interface IAuthStore {
  isLoggedIn: boolean;
  currentUser: User | null | undefined;
  register: (cred: ICredentials) => void;
  login: (cred: ICredentials) => void;
  logout: () => void;
}

export interface BandCardProps {
  data: IBandData;
  showModal: () => void;
  setActive: (data: IBandData) => void;
}
