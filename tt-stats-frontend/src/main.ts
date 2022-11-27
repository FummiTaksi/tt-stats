import { createApp, h, provide } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { DefaultApolloClient } from '@vue/apollo-composable'
const httpLink = createHttpLink({
  uri: `${process.env.VUE_APP_BACKEND_HOST}/graphql/`,
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

createApp({
  el: '#app',
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})
  .use(store)
  .use(router)
  .mount('#app')
