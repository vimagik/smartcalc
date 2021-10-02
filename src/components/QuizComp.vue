<template>
  <v-container class="my-lg-auto">
    <v-row>
      <v-col>
        <v-card max-width="500" class="mx-auto">

          <div class="pa-2 pt-6 pb-6">

            <div class="text-h5 text-center">Приветствую тебя, {{ login }}!</div>
            <v-simple-table class="mt-10">
              <tbody>
              <exercise-comp/>
              <exercise-comp/>
              <exercise-comp/>
              <tr>
                <td>1)</td>
                <td>5</td>
                <td>*</td>
                <td>5</td>
                <td>=</td>
                <td>
                  <v-text-field
                      class="mt-6"
                      label="Ответ"
                      outlined
                      dense
                      disabled
                  ></v-text-field>
                </td>


                <td>
                  <v-alert
                      class="mt-3"
                      type="error"
                      dense
                      width="55"
                  ></v-alert>
                </td>
              </tr>
              <tr>
                <td>2)</td>
                <td>2</td>
                <td>*</td>
                <td>2</td>
                <td>=</td>
                <td>
                  <v-text-field
                      class="mt-6"
                      label="Ответ"
                      outlined
                      dense
                  ></v-text-field>
                </td>
                <td>
                  <v-btn
                      color="primary"
                      elevation="2"
                      fab
                      small
                      dark
                  >
                    <v-icon>mdi-check-all</v-icon>
                  </v-btn>
                </td>
              </tr>
              </tbody>
            </v-simple-table>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
  methods: {},

}
</script>

<style scoped>

</style>