<template>
  <h1>
    {{ count }}
  </h1>
</template>

<script>
export default {
  data() {
    return {
      count: 2,
    };
  },
  beforeCreate() {
    console.log('Before create!', this.count);
  },
  created() {
    console.log('create !', this.count);
    console.log(document.querySelector('h1'));
  },
  beforeMount() {
    console.log('before create!');
    console.log(document.querySelector('h1'));
  },
  mounted() {
    console.log('mounted!');
    console.log(document.querySelector('h1'));
  },
};
</script>
