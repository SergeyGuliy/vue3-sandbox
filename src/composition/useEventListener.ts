import { onMounted, onUnmounted, ref, watch } from "vue";

type MyElement = {
  value: Element | null
};

interface useEventListener {
  mountEventListener: () => void;
  unMountEventListener: () => void;
}

export function useEventListener(
  selector: MyElement,
  eventName: string,
  callback: EventListenerOrEventListenerObject
): useEventListener {
  onMounted(mountEventListener);
  onUnmounted(unMountEventListener);

  function mountEventListener() {
    selector?.value?.addEventListener(eventName, callback);
  }
  function unMountEventListener() {
    selector?.value?.removeEventListener(eventName, callback);
  }

  return {
    mountEventListener,
    unMountEventListener,
  };
}
