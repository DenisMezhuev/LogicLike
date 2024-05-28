import { EAction, IresponseData, data, Action } from "../types/types";

export const stateReducer = (
  state: IresponseData,
  action: Action,
): IresponseData => {
  switch (action.type) {
    case EAction.GET_DATA:
      return { ...state, items: action.payload! };
    case EAction.ALL_TOPICS:
      return { ...state, arrTheme: state.items, theme: EAction.ALL_TOPICS };
    case EAction.LOGIC_AND_THINKING:
      return {
        ...state,
        arrTheme: state.items.filter((elem) =>
          elem.tags.includes("Логика и мышление"),
        ),
        theme: EAction.LOGIC_AND_THINKING,
      };
    case EAction.RIDDLES:
      return {
        ...state,
        arrTheme: state.items.filter((elem) => elem.tags.includes("Загадки")),
        theme: EAction.RIDDLES,
      };
    case EAction.TRIPS:
      return {
        ...state,
        arrTheme: state.items.filter((elem) =>
          elem.tags.includes("Головоломки"),
        ),
        theme: EAction.TRIPS,
      };
    case EAction.TRAVEL:
      return {
        ...state,
        arrTheme: state.items.filter((elem) =>
          elem.tags.includes("Страны и столицы"),
        ),
        theme: EAction.TRAVEL,
      };
    default:
      throw new Error("Unknown action");
  }
};
