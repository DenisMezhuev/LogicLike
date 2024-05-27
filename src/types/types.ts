export enum EAction {
  ALL_TOPICS = "ALL_TOPICS",
  LOGIC_AND_THINKING = "LOGIC_AND_THINKING",
  RIDDLES = "RIDDLES",
  TRIPS = "TRIPS",
  GET_DATA = "GET_DATA ",
  TRAVEL = "TRAVEL",
}

export enum EThemesName {
  ALL_TOPICS = "Все темы",
  LOGIC_AND_THINKING = "Логика и мышления",
  RIDDLES = "Загадки",
  TRIPS = "Головоломки",
  TRAVEL = "Путешествия",
}

export interface data {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
}

export interface IresponseData {
  items: data[];
  arrTheme: data[];
  theme: EAction;
}
