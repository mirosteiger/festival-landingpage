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
  currentUser: User | null;
  register: (cred: ICredentials) => void;
  login: (cred: ICredentials) => void;
  logout: () => void;
}

export interface BandCardProps {
  data: IBandData;
  showModal: () => void;
  setActive: (data: IBandData) => void;
}

export interface ICartStore {
  total: number;
  tickets: ITicket[];
  userId?: string;
  add: (data: ITicket, userId?: string) => void;
  remove: (data: ITicket, userId?: string) => void;
  dropCart: () => void;
}

export interface ITicket {
  category: TicketCategory;
  amount: number;
  price: number;
}

export enum TicketCategory {
  WEEKEND = 1,
  SATURDAY,
  SUNDAY,
  CAMPING,
}

export interface IBandStore {
  bands: IBandData[];
  fetchBandData: () => void;
}
