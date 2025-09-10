<template>
    <div>
        <h3>{{ counter }}</h3>
        <p>We Do More...</p>
    </div>
</template>

<script>
export default {
     computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    }
  },
}
</script>