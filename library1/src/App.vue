<template>
  <h1>Hello, {{ name }}!</h1>
</template>

<script>
export default {
  props: {
    name: { type: String, default: 'John' }
  }
}
</script>
