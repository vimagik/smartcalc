<template>
  <v-container class="my-lg-auto">
    <v-card max-width="500" class="mx-auto">
      <v-img
          height="250"
          src="https://ichef.bbci.co.uk/news/640/cpsprodpb/164EE/production/_109347319_gettyimages-611195980.jpg"
      ></v-img>
      <div class="pa-2 pt-6 pb-6">

        <div class="text-h5 text-center">Приветствую тебя, мой дорогой друг</div>

        <v-form ref="form" class="pl-10 pr-10">
          <v-text-field
              v-model="login"
              label="Твое имя"
              required
          ></v-text-field>

          <v-radio-group v-model="operationType" row>
            <v-radio label="Сложение" value="+"></v-radio>
            <v-radio label="Умножение" value="*"></v-radio>
          </v-radio-group>

          <v-text-field
              v-model="numberOfExamples"
              label="Сколько примеров ты хочешь решить?"
              type="number"
              required
          ></v-text-field>

          <v-btn :disabled="statusButton" color="success"
                 @click="GoToCalcPage">
            Поехали
          </v-btn>
        </v-form>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      login: '',
      operationType: '',
      numberOfExamples: 0
    }
  },
  methods: {

    GoToCalcPage() {
      this.$router.push({
        name: 'Quiz',
        query: {
          login: this.login,
          operationType: this.operationType,
          numberOfExamples: this.numberOfExamples
        }
      });
    }
  },
  computed: {
    statusButton() {
      return this.login === '' || this.operationType === '' || this.numberOfExamples === 0;
    }
  }
}
</script>

<style scoped>

</style>