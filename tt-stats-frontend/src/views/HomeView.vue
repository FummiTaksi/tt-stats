<template>
  <div class="apollo">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ hello }}</h1>
  </div>
</template>

<script lang="ts">
import gql from "graphql-tag";
//import { useQuery } from "@vue/apollo-composable";
export default {
  apollo: {
    hello: gql`
      {
        hello
      }
    `,
  },
  data() {
    return {
      testi: "Testi!",
      hello: "Hello from placeholder. I am not from backend.",
    };
  },
};
</script>
