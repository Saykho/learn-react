import { LoadingSlot } from "@enums/loadingSlot";
import { createReducer } from "@reduxjs/toolkit";
import { clearLoadingAction, setLoadingAction } from "@store/actions/loading";

type LoadingState = {
  [slot in keyof Partial<typeof LoadingSlot>]: boolean;
};
type WithLoadingState = {
  loading: LoadingState;
};

const initialLoadingState: LoadingState = {};

export const loadingReducer = createReducer(initialLoadingState, (builder) =>
  builder
    .addCase(clearLoadingAction, () => initialLoadingState)
    .addCase(setLoadingAction, (state, { payload }) => ({
      ...state,
      [payload.slot]: payload.loading,
    })),
);

export const loadingStateSelector = (state: WithLoadingState): LoadingState =>
  state.loading;
