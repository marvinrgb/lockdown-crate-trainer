<script setup lang="ts">
import { ref, watchEffect, type Ref } from 'vue';
import { getRandomCode } from './functions';
const code = getRandomCode();
console.log(code);

const displayNumbers: Ref<Array<number|'-'>> = ref(['-','-','-','-']);
const typingNumbers: Ref<Array<number|'-'>> = ref(['-','-','-','-']);
const bars: Ref<Array<boolean>> = ref([false,false,false,false,false,false,false,false,false]);
function tryCode() {
  if (!typingNumbers.value.includes('-')) {
    displayNumbers.value = JSON.parse(JSON.stringify(typingNumbers.value)) as Array<number>;
    typingNumbers.value = ['-','-','-','-'];
    if (displayNumbers.value == code) {
      alert("won");
    } else {
      bars.value[bars.value.indexOf(false)] = true;
      if (!bars.value.includes(false)) {
        alert("lost");
      }
    }
  }
}
function buttonClick(num: number) {
  typingNumbers.value[typingNumbers.value.indexOf('-')] = num;
  tryCode();
}

const buttons: Ref<Array<Array<number|null>>> = ref([
  [null,7,8,9],
  [null,4,5,6],
  [0,1,2,3]
])
</script>

<template>
  <div class="vh-100 vw-100">
    <div class="w-25 mx-auto bg-secondary p-3">
      <div class="bg-dark border p-3">
        <div class="d-flex">
          <div :class="`text-${code[index] == num ? 'lightblue' : code.includes(num as number) ? 'yellow' : 'secondary'} w-25 text-center`" :style="`font-size: 80px`" v-for="(num, index) in displayNumbers">{{ num }}</div>
        </div>
        <div class="d-flex">
          <div class="text-light w-25 text-center" :style="`font-size: 80px`" v-for="num in typingNumbers">{{ num }}</div>
        </div>
        <div class="line"></div>
        <div class="d-flex mx-4 my-3">
          <div :class="`bar bg-${bar ? 'danger':'secondary'} m-1`" v-for="bar in bars"></div>
        </div>
      </div>
    </div>
    <div class="w-25 mx-auto bg-secondary p-3">
      <div class="bg-dark border p-3">
        <div class="d-flex" v-for="row in buttons">
          <div @click="buttonClick(button as number)" class="pointer w-25 text-center text-light border m-1 rounded py-3" v-for="button in row" >{{ button }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-lightblue {
  color: rgb(21, 137, 245);
}
.text-yellow {
  color: rgb(204, 186, 24)
}

.pointer {
  cursor: pointer;
}
.bar {
  height: 80px;
  width: 40px;
}
.line {

}
</style>
