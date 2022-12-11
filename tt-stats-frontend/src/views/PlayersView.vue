<template>
  <div class="apollo">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <div v-else>
      <h1>The database contains {{ result.players.length }} players</h1>
      <PlayerList :players="result.players" />
    </div>
  </div>
</template>

<script lang="ts">
import { usePlayersQuery } from '../generated/graphql'
import PlayerList from '../components/PlayerList.vue'

export default {
  setup() {
    const { result, loading, error } = usePlayersQuery()
    return { result, loading, error }
  },
  components: { PlayerList },
}
</script>
