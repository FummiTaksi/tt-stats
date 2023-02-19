<script>
export default {
  props: {
    ['players']: { type: Array, required: true },
  },
}
</script>

<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Won matches</th>
      <th>Lost matches</th>
    </tr>
    <tr
      v-for="{ id, name, matchWinner, matchLoser } in players"
      v-bind:key="id"
    >
      <td>{{ name }}</td>
      <td>{{ matchWinner.length }}</td>
      <td>{{ matchLoser.length }}</td>
    </tr>
  </table>
</template>
