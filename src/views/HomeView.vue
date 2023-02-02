<template>
  <div class="home">
    <img alt="Calculator" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Calculator from "@/components/Calculator.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld: Calculator,
  },
};
</script>
