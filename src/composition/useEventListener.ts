import { onMounted, onUnmounted } from "vue";

type MyElement = Element | null;

interface useEventListener {
  mountEventListener: () => void;
  unMountEventListener: () => void;
}

export function useEventListener(
  selector: string,
  eventName: string,
  callback: EventListenerOrEventListenerObject
): useEventListener {
  onMounted(mountEventListener);
  onUnmounted(unMountEventListener);

  const element: MyElement = document.querySelector(selector);

  function mountEventListener() {
    element?.addEventListener(eventName, callback);
  }
  function unMountEventListener() {
    element?.removeEventListener(eventName, callback);
  }

  return {
    mountEventListener,
    unMountEventListener,
  };
}
