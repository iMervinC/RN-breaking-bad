import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Tabs } from './components/Navigations/Tabs'
import { QueryClientProvider, QueryClient } from 'react-query'

const client = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </QueryClientProvider>
  )
}
