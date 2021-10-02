<template>
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
</template>

<script>
export default {
  name: "ExerciseComp"
}
</script>

<style scoped>

</style>