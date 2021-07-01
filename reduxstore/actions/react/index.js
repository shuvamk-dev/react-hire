import { ADD_TO_SAVE, DELETE_FROM_SAVE } from "../../actionTypes/react";

export const addToSave = (data) => {
  return {
    type: ADD_TO_SAVE,
    data,
  };
};

export const deleteFromSave = (data) => {
  return {
    type: DELETE_FROM_SAVE,
    data,
  };
};
