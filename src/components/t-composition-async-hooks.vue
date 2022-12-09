<template>
  <div class="composition-async">
    <pre>request 1: = {{ d1 || e1 }}</pre>
    <pre>request 2: = {{ d2 || e2 }}</pre>
  </div>
</template>

<script setup lang="ts">
import { requestHook } from "@/composition/requestHook";
const { data: d1, error: e1 } = requestHook("res");
const { data: d2, error: e2 } = requestHook("rej");
</script>
