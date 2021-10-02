<template>
  <v-container class="my-lg-auto">
    <v-row>
      <v-col>
        <v-card max-width="500" class="mx-auto">

          <div class="pa-2 pt-6 pb-6">

            <div class="text-h5 text-center">Приветствую тебя, {{ login }}!</div>


          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "QuizComp",
  props: {
    login: String,
    operationType: String,
    numberOfExamples: String
  },
  methods: {
    execute() {
      const abc = this.$router;
      console.log(abc);
      console.log(this.login);
      console.log(this.operationType);
      console.log(this.numberOfExamples);
    }
  },
  mounted() {
    this.execute();
  }
}
</script>

<style scoped>

</style>