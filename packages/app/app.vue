<template>
  <div>{{ user.name }}</div>
  <div>{{ moin }}</div>
  <div>{{ number }}</div>
</template>

<script lang="ts" setup>
  import type { AppType } from '@honobun/api/src'
  import { hc } from 'hono/client'

  const client = hc<AppType>('http://localhost:4200/')
  const userResponse = await client.user[':name'].$get({ param: { name: 'Kurt' } })
  const user = await userResponse.json()

  const moinResponse = await client.moin.$get()
  const moin = await moinResponse.text()

  const numberResponse = await client.number.$get()
  const number = await numberResponse.json()
</script>
