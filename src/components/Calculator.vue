<template>
  <div id="calculator" class="wrapper">
    <div>
      <input type="number" v-model.number="firstInput" class="input-box" />
    </div>

    <b>+</b>
    <div>
      <input type="number" v-model.number="secondInput" class="input-box" />
    </div>
    <b> = </b>
    <input type="number" v-model.number="result" class="input-box" />
  </div>
</template>

<script>
export default {
  name: "calculator",
  data: () => ({
    firstInput: 0,
    secondInput: 0,
    result: 0,
  }),

  updated() {
    this.result = this.firstInput + this.secondInput;
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  justify-content: center;
}

.wrapper .input-box {
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>
