<template>
  <div class="apollo">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <h1 v-else>{{ result.hello }}</h1>
  </div>
</template>

<script lang="ts">
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

const HELLO_QUERY = gql`
  query Hello {
    hello
  }
`;

export default {
  setup() {
    const { result, loading, error } = useQuery(HELLO_QUERY);
    return { result, loading, error };
  },
  apollo: {
    hello: gql`
      query Hello {
        hello
      }
    `,
  },
};
</script>
