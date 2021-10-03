<template>
  <tr>
    <td>
      <v-icon large color="blue darken-1">mdi-numeric-{{ number }}-box</v-icon>
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
        this.correctResponse = this.firstNumber * this.secondNumber === Number(this.inputResult) ? true : false;
      } else {
        this.correctResponse = this.firstNumber + this.secondNumber === Number(this.inputResult) ? true : false;
      }
      this.replyReceived = true;
      this.$emit('sendresult', this.correctResponse);
    },

    firstInit() {
      if (this.operation === '*') {
        this.firstNumber = this.getRandomInt(0, 10);
        this.secondNumber = 2;
      } else {
        this.firstNumber = this.getRandomInt(0, 15);
        this.secondNumber = this.getRandomInt(0, 15);
      }
    },

    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  },
  mounted() {
    this.firstInit();
  }
}
</script>

<style scoped>

</style>