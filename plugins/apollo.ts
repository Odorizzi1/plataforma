import { ApolloClient } from "@apollo/client";
import { provideApolloClients } from "@vue/apollo-composable";

export default defineNuxtPlugin(() => {
  const { clients } = useApollo();
  provideApolloClients({
    default: (clients as Record<string, ApolloClient<any>>).default,
    local: (clients as Record<string, ApolloClient<any>>).local
  })
})