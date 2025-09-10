<template>
  <section>
    <h3>Final Counter: {{ finalCounter }}</h3>
    <h3>Main Counter: {{ mainCounter }}</h3>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['mainCounter', 'finalCounter']) // ✅ both values mapped
  }
};
</script>
