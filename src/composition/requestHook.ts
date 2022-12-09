import { onMounted, ref } from "vue";

type status = "res" | "rej";

export function requestHook(status: status) {
  const data = ref(null);
  const error = ref(null);

  onMounted(() => {
    promise(status)
      .then((res) => (data.value = res))
      .catch((e) => (error.value = e));
  });

  return { data, error };
}

function promise(status: status): Promise<any> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (status === "res") {
        res("ok");
      }
      rej("error");
    }, 3000);
  });
}
