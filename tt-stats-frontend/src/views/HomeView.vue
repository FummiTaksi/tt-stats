<template>
  <div class="apollo">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <h1 v-else>{{ result.hello }}</h1>
  </div>
</template>

<script lang="ts">
import { useHelloQuery } from '../generated/graphql'

export default {
  setup() {
    const { result, loading, error } = useHelloQuery()
    return { result, loading, error }
  },
}
</script>
