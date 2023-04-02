<template>
  <div
    class="apollo"
    style="display: flex; justify-content: center; align-items: center"
  >
    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <div v-else>
      <input v-model="name" />
      <button @click="submit(name)">Create player</button>
      <PlayerList :players="result.players" />
    </div>
  </div>
</template>

<script lang="ts">
import { usePlayersQuery, useCreatePlayerMutation } from '../generated/graphql'
import PlayerList from '../components/PlayerList.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const { result, loading, error } = usePlayersQuery()
    const { mutate: createPlayer } = useCreatePlayerMutation({})

    return { result, loading, error, createPlayer }
  },
  data() {
    return {
      name: '',
    }
  },
  methods: {
    async submit(name: string) {
      const { mutate: createPlayer } = useCreatePlayerMutation({})
      await createPlayer({ name })
    },
  },
  components: { PlayerList },
})
</script>
