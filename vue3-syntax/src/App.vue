<template>
  <div>
    <h1 :[attr]="'active'" @[event]="add">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'active',
      attr: 'class',
      event: 'click',
    };
  },
  methods: {
    add() {
      this.msg += '!';
    },
  },
};
</script>

<style>
.active {
  color: royalblue;
  font-size: 100px;
}
</style>
