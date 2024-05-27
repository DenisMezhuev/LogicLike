import { EAction, data } from "../types/types";

export const actionCreaterGetData = (payload: data[]) => ({
  type: EAction.GET_DATA,
  payload,
});

export const actionCreaterLogicAndThinking = () => ({
  type: EAction.LOGIC_AND_THINKING,
});
export const actionCreaterRiddles = () => ({
  type: EAction.RIDDLES,
});
export const actionCreaterTrips = () => ({
  type: EAction.TRIPS,
});
export const actionCreaterTravel = () => ({
  type: EAction.TRAVEL,
});

export const actionCreaterAllTopics = () => ({
  type: EAction.ALL_TOPICS,
});
