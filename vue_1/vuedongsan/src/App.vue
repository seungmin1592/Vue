
<template>
<div>

    <div class="menu">
      
      <a v-for="(a,i) in 메뉴들" :key="i">{{a }}</a>
    </div>

    <div v-for="(product, i) in product" :key="i">
      <img src="./assets/logo.png">
      <h4 class="red" :style="스타일">{{product}}</h4>
      <p>{{price1}} 만원</p>
    </div>



    <div>
      <h4>{{product[1]}}</h4>
      <p>{{ price2}} 만원</p>
      <button @click="신고수++">허위매물신고</button>
      <button @mouseover="increase">허위매물신고</button>
      <span> 신고 수 : {{신고수}}</span>
      <span> 마우스오버 수 : {{마우스오버}}</span>
    </div>
</div>  
</template>


<script>





export default {
  name: 'App',
  data() {
    return {
      price1 : 60,
      price2 : 100,
      스타일 : 'color: blue',
      product : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      메뉴들 : ['Home', 'Products', 'About'],
      신고수 : 0,
      마우스오버 : 0
    }
  },
  methods : {
    increase(){
      this.마우스오버++
    },
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.menu {
  background: darkslateblue;
  padding:15px;
  border-radius: 5px;
}
.menu a {
  color:#fff;
  padding:10px;
}
</style>
