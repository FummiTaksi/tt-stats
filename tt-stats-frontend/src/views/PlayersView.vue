<template>
  <div
    class="apollo"
    style="display: flex; justify-content: center; align-items: center"
  >
    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <div v-else>
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
