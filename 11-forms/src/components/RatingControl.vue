<!-- src/components/RatingControl.vue -->
<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  // computed: {
  //   activeOption() {
  //     return this.modelValue;
  //   }
  // },
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: blueviolet;
}
.active button {
  color: blueviolet;
}
ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0.5rem 0;
}
li {
  margin: 0 1rem;
  border: 2px solid gray;
  padding: 1rem;
}
button {
  font: inherit;
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
