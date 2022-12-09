import type { Ref } from "vue";
import { ref } from "vue";
import { useEventListener } from "@/composition/useEventListener";

export function useMouse(selector: Ref) {
  const x = ref(0);
  const y = ref(0);

  const { mountEventListener, unMountEventListener } = useEventListener(
    selector,
    "mousemove",
    (e): void => {
      const mouseEvent = e as MouseEvent;

      x.value = mouseEvent.pageX;
      y.value = mouseEvent.pageY;
    }
  );

  return { x, y, mountEventListener, unMountEventListener };
}
