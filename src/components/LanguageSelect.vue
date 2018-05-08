<template>
  <q-select
    type="radio"
    v-model="selectedLanguage"
    :options="languagesOption"
  ></q-select>
</template>

<script>
  import {QSelect} from 'quasar'

  export default {
    components: {
      QSelect
    },
    data() {
      return {
        selectedLanguage: "cpp",
        languagesOption: [
          {label: 'C++', value: 'cpp'},
          {label: 'Java', value: 'java'},
          {label: 'Python', value: 'python'},
        ]
      };
    },
    methods: {}
  };
</script>

<style>

</style>
