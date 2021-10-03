<template>
  <v-container class="my-lg-auto">
    <v-row>
      <v-col>
        <v-card max-width="500" class="mx-auto">

          <div class="pa-2 pt-6 pb-6">

            <div class="text-h5 text-center">Приветствую тебя, {{ login }}!</div>
            <v-simple-table class="mt-10">
              <tbody>
              <exercise-comp v-for="item of exercises" :key="item" v-on:sendresult="collectResult" :number="item"
                             :operation="operationType"/>
              </tbody>
            </v-simple-table>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

// [ ] Кнопка, начать с cамого начала
// [ ] Кнопка, начать с начала
// [V] Не давать нажимать кнопку, пока не ввели значение
// [ ] Красиво вывести итого
// [ ] Добавить анимацию
// [ ] Добавить вывод номера больше 10

import ExerciseComp from "@/components/ExerciseComp";

export default {
  name: "QuizComp",
  components: {
    ExerciseComp
  },
  props: {
    login: String,
    operationType: String,
    numberOfExamples: String
  },
  data() {
    return {
      result: 0,
      exercises: [1]
    }
  }
  ,
  methods: {
    collectResult(st) {
      if (st) {
        this.result += 1;
      }
      if (this.exercises.length < Number(this.numberOfExamples)) {
        this.exercises.push(this.exercises.length + 1);
      } else {
        alert(`Правильных ответов ${this.result}`);
      }
    }
  },

}
</script>

<style scoped>

</style>