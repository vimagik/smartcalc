<template>
  <v-container class="my-lg-auto">
    <v-row>
      <v-col>
        <v-card max-width="500" class="mx-auto">

          <div class="pa-2 pt-6 pb-6">

            <div class="text-h5 text-center">Приветствую тебя, {{ login }}!</div>
            <v-simple-table class="mt-10">
              <tbody>
              <exercise-comp v-for="item of exercises" :key="item.id" v-on:sendresult="collectResult"
                             :number="item.number"
                             :operation="operationType"/>
              </tbody>
            </v-simple-table>

            <div class="pt-5" v-if="testIsFinished">
              <v-btn @click="startQuiz">
                Начать заново
              </v-btn>

              <v-btn class="ml-5" color="primary" @click="returnToMain">
                Вернуться на главный экран
              </v-btn>
            </div>

          </div>
        </v-card>
      </v-col>
    </v-row>


    <v-row justify="center">
      <v-dialog
          v-model="dialog"
          persistent
          max-width="350"
      >
        <v-card>
          <v-card-title class="text-h5">
            Поздравляю, {{ login }}!
          </v-card-title>
          <v-card-text>
            Правильных ответов {{ result }} из {{ numberOfExamples }}.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
            >
              Спасибо
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>

// [V] Кнопка, начать с cамого начала
// [V] Кнопка, начать с начала
// [V] Не давать нажимать кнопку, пока не ввели значение
// [V] Красиво вывести итого
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
      exercises: [
        {
          id: 0,
          number: 1
        }
      ],
      testIsFinished: false,
      dialog: null
    }
  }
  ,
  methods: {
    returnToMain() {
      this.$router.push({
        name: 'Main'
      });
    },
    startQuiz() {
      this.exercises.push({
        id: this.exercises[this.exercises.length - 1].id + 1,
        number: 1
      });

      this.exercises = this.exercises.slice(this.exercises.length - 1);
      this.testIsFinished = false;
      this.result = 0;
    },
    collectResult(st) {
      if (st) {
        this.result += 1;
      }
      if (this.exercises.length < Number(this.numberOfExamples)) {
        this.exercises.push({
          id: this.exercises[this.exercises.length - 1].id + 1,
          number: this.exercises.length + 1
        });
      } else {
        this.testIsFinished = true;
        this.dialog = true;
      }
    }
  },

}
</script>

<style scoped>

</style>