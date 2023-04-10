<template>
  <div class="apollo">
    <p v-if="error">Something went wrong...</p>
    <p v-else-if="loading">Loading...</p>
    <p v-else-if="creatingMatch">Creating match...</p>
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
        @click="submit(winningPlayer.id, losingPlayer.id)"
        v-if="losingPlayer !== null && winningPlayer !== null"
      >
        Submit
      </button>
    </div>
    <div v-if="createdMatch">
      <p>Created match successfully</p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  usePlayersQuery,
  useCreateMatchMutation,
  PlayerFragment,
} from '../generated/graphql'
import { defineComponent } from 'vue'

interface CreateMatchData {
  winningPlayer: PlayerFragment | null
  losingPlayer: PlayerFragment | null
  createdMatch: boolean
}

export default defineComponent({
  setup() {
    const { result, loading, error } = usePlayersQuery()
    const {
      mutate: createMatch,
      loading: creatingMatch,
      error: createMatchError,
    } = useCreateMatchMutation({})
    return {
      result,
      loading,
      error,
      createMatch,
      creatingMatch,
      createMatchError,
    }
  },
  data(): CreateMatchData {
    return {
      winningPlayer: null,
      losingPlayer: null,
      createdMatch: false,
    }
  },
  methods: {
    async submit(winnerId: string, loserId: string) {
      try {
        await this.createMatch({ winnerId, loserId })
        this.createdMatch = true
      } catch (error) {
        this.createdMatch = false
      }
    },
  },
})
</script>
