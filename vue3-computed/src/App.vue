<template>
  <div>
    <button @click="handler">click me!</button>
    <h1 v-show="isShow">hello ~!</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      count: 0,
    };
  },
  methods: {
    handler() {
      this.isShow = !this.isShow;
      this.count++;
    },
  },
};
</script>

<style></style>
