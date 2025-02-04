<script setup lang="ts">
import { ref } from 'vue'
import type { Concept } from '../../shared/src/models/concept'

// サンプルの概念データ
const concept = ref<Concept>({
  id: "sample-service",
  type: "service",
  metadata: {
    name: "Sample Service",
    description: "This is a sample service concept"
  },
  spec: {
    port: 3000,
    env: "development"
  }
})
</script>

<template>
  <div>
    <h1>{{ concept.metadata.name }}</h1>
    <p>{{ concept.metadata.description }}</p>
    <pre>{{ JSON.stringify(concept.spec, null, 2) }}</pre>
  </div>
</template>
