<template>
  <q-page>
    <div class="row absolute-full">
      <div class="col column">
        <question-tab class="col"></question-tab>
        <custom-test-case-input class="col-auto"></custom-test-case-input>
      </div>
      <div class="col">
        <div class="row justify-end">
          <language-select></language-select>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  import {QInput} from 'quasar'
  import CustomTestCaseInput from '../components/CustomTestCaseInput'
  import QuestionTab from '../components/QuestionTab'
  import LanguageSelect from '../components/LanguageSelect'

  export default {
    components: {
      CustomTestCaseInput,
      LanguageSelect,
      QInput,
      QuestionTab
    },

    mounted() {
      console.log(this);
    },

    methods: {

    }
    // name: 'PageName',
  }
</script>

<style>
</style>
