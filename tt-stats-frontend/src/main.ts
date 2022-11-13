import { createApp, h, provide } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";

const httpLink = createHttpLink({
  uri: `${process.env.VUE_APP_BACKEND_HOST}/graphqli`,
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

createApp({
  el: "#app",
  provider: apolloProvider,
  render: () => h(App),
})
  .use(store)
  .use(router)
  .mount("#app");
