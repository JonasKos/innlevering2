<template>
  <div class="calc-display">
    <div class="calc">
      <h1>{{ title }}</h1>
      <p class="display">{{ calculation }}</p>
      <div class="calcbuttons">
        <button
          class="calcbtn"
          v-for="variant in variants"
          :style="{ backgroundColor: variant.color }"
          @click="updateCalculation(variant.sign)"
          :key="variant.id"
        >
          {{ variant.sign }}
        </button>
      </div>
    </div>
    <div class="log">
      <h1>Log</h1>
      <ul>
        <li></li>
        <li v-for="log in logs" :key="log.id">{{ log }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      title: "Calculator",
      calculation: "",
      calculationLog: "",
      answer: "0",
      logs: [],
      variants: [
        { id: 1, sign: "C" },
        { id: 2, sign: "ANS" },
        { id: 3, sign: "DEL" },
        { id: 4, sign: "+" },
        { id: 5, sign: "1" },
        { id: 6, sign: "2" },
        { id: 7, sign: "3" },
        { id: 8, sign: "-" },
        { id: 9, sign: "4" },
        { id: 10, sign: "5" },
        { id: 11, sign: "6" },
        { id: 12, sign: "*" },
        { id: 13, sign: "7" },
        { id: 14, sign: "8" },
        { id: 15, sign: "9" },
        { id: 16, sign: "/" },
        { id: 17, sign: " " },
        { id: 18, sign: "0" },
        { id: 19, sign: "." },
        { id: 20, sign: "=", color: "orange" },
      ],
    };
  },
  methods: {
    updateCalculation(sign) {
      if (sign === "=") {
        this.calculationLog = this.calculation;
        this.calculation = eval(this.calculation);
        this.logs.push(this.calculationLog + " = " + this.calculation);
        this.answer = this.calculation;
        this.answerTest = this.calculation;
      } else if (sign === "C") {
        this.calculation = "";
      } else if (sign === "DEL") {
        this.calculation = this.calculation.slice(0, -1);
      } else if (sign === "ANS") {
        this.calculation += this.answer;
      } else if (this.calculation == this.answerTest) {
        this.calculation = "";
        this.calculation += sign;
        this.answerTest = "0";
      } else this.calculation += sign;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: "digital-clock-font";
  src: url("../assets/digital-7.ttf");
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: square;
  padding: 0;
  margin: 0;
}
li {
  min-width: 242px;
  list-style: none;
  padding: 5px;
  margin: 5px;
}
a {
  color: #42b983;
}
.calc-display {
  display: grid;
  justify-content: center;
}
.display {
  font-family: "digital-clock-font";
  font-size: xx-large;
  min-height: 1.25em;
  text-align: right;
  background-color: grey;
  color: white;
  padding: 10px;
  margin: 2px;
}
.calcbuttons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  align-content: center;
  background-color: #ffffff;
}
.calcbtn {
  background-color: grey;
  color: white;
  margin: 2px;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  border-radius: 8px;
}
.log {
  margin-top: 10px;
  border: 1px solid black;
  padding-top: 25px;
  min-height: 300px;
  max-height: 300px;
  scroll-behavior: smooth;
  overflow: auto;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-family: sans-serif;
  padding: 10px;
}
</style>
