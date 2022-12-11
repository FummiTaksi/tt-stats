<script>
export default {
  props: {
    ['players']: { type: Array, required: true },
  },
}
</script>

<template>
  <li v-for="{ name, id } in players" v-bind:key="id">
    {{ name }}
  </li>
</template>
