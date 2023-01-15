<template>
  <div class="apollo">
    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <p v-if="creatingMatch">Creating match...</p>
    <div v-else>
      <div>
        Select winner
        <select v-model="winningPlayer">
          <option
            v-for="player in result.players"
            v-bind:key="player.id"
            v-bind:value="{ id: player.id, name: player.name }"
          >
            {{ player.name }}
          </option>
        </select>
      </div>
      <div>
        Select loser
        <select v-model="losingPlayer">
          <option
            v-for="player in result.players"
            v-bind:key="player.id"
            v-bind:value="{ id: player.id, name: player.name }"
          >
            {{ player.name }}
          </option>
        </select>
      </div>
      <button
        @click="
          createMatch({
            winnerId: winningPlayer.id,
            loserId: losingPlayer.id,
          })
        "
        v-if="losingPlayer !== null && winningPlayer !== null"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { usePlayersQuery, useCreateMatchMutation } from '../generated/graphql'

export default {
  setup() {
    const { result, loading, error } = usePlayersQuery()
    const {
      mutate: createMatch,
      loading: creatingMatch,
      error: createMatchError,
    } = useCreateMatchMutation()
    return {
      result,
      loading,
      error,
      createMatch,
      creatingMatch,
      createMatchError,
    }
  },
  data() {
    return {
      winningPlayer: null,
      losingPlayer: null,
    }
  },
}
</script>
