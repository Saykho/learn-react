import { LoadingSlot } from "@enums/loadingSlot";
import { loadingStateSelector } from "@store/reducers";
import { useSelector } from "react-redux";

export function useLoadingSlot(slot: LoadingSlot): boolean {
  const state = useSelector(loadingStateSelector);
  return state[slot] || false;
}

export function useLoadingSlots(slots: LoadingSlot[]): boolean {
  const state = useSelector(loadingStateSelector);
  return slots.reduce((prev, currentSlot) => {
    return prev || !!state[currentSlot];
  }, false);
}
