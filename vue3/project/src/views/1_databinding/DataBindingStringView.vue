<template>
  <div>
    <h1>Hello {{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "John Doe",
      messgae: "Welcome 개발자의 품격",
      arr: [],
      obj: {}
    }
  }
}
</script>
<style scoped></style>
