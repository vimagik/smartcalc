<template>
  <transition appear name="fade" >
    <tr>
      <td>
        <v-layout justify-center>
          <v-icon class="d-inline" v-if="firstOrdinalNumber" large color="blue darken-1" >mdi-numeric-{{ firstOrdinalNumber }}-box</v-icon>
          <v-icon class="d-inline" large color="blue darken-1" >mdi-numeric-{{ secondOrdinalNumber }}-box</v-icon>
        </v-layout>
      </td>
      <td class="text-h6">{{ firstNumber }}</td>
      <td class="text-h6">{{ operation }}</td>
      <td class="text-h6">{{ secondNumber }}</td>
      <td class="text-h6">=</td>
      <td>
        <v-text-field
            v-model="inputResult"
            class="mt-6"
            label="Ответ"
            outlined
            dense
            :disabled="replyReceived"
            @keydown.enter="processResponse"
            ref="result"
        ></v-text-field>
      </td>
      <td>
        <v-btn v-if="!replyReceived"
               color="primary"
               elevation="2"
               fab
               small
               @click="processResponse"
               :disabled="!inputResult"
        >
          <v-icon>mdi-check-all</v-icon>
        </v-btn>
        <template v-else>
          <v-alert v-if="correctResponse"
                   class="mt-3"
                   type="success"
                   dense
                   width="55"
          ></v-alert>
          <v-alert v-else
                   class="mt-3"
                   type="error"
                   dense
                   width="55"
          ></v-alert>
        </template>
      </td>
    </tr>
  </transition>
</template>

<script>
export default {
  name: "ExerciseComp",
  props: {
    number: String,
    operation: String
  },
  emits: ['sendresult'],
  data() {
    return {
      firstNumber: null,
      secondNumber: null,
      inputResult: null,
      replyReceived: false,
      correctResponse: null
    }
  },
  methods: {

    processResponse() {
      if (this.operation === '*') {
        this.correctResponse = (this.firstNumber * this.secondNumber) === Number(this.inputResult);
      } else {
        this.correctResponse = (this.firstNumber + this.secondNumber) === Number(this.inputResult);
      }
      this.replyReceived = true;
      this.$emit('sendresult', this.correctResponse);
    },

    firstInit() {
      if (this.operation === '*') {
        this.firstNumber = this.getRandomInt(0, 10);
        this.secondNumber = this.getRandomInt(2, 4);
      } else {
        this.firstNumber = this.getRandomInt(0, 15);
        this.secondNumber = this.getRandomInt(0, 15);
      }
    },

    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },

    focusOnResult() {
      this.$refs.result.focus();
    }
  },

  mounted() {
    this.firstInit();
    this.focusOnResult();
  },

  computed: {
    firstOrdinalNumber() {
      const number = Math.trunc(Number(this.number) / 10);
      return number >= 1 & Number(this.number) > 10 ? number : false;
    },
    secondOrdinalNumber() {
      return Number(this.number) <= 10 ? this.number : Number(this.number) % 10;
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>