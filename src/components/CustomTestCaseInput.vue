<template>
  <div>
    <q-input
      v-model="value"
      placeholder="Type your custom testcase here"
      :after="[{
              icon: 'add'
            }]"
    >
    </q-input>
  </div>
</template>

<script>
  import {QInput} from 'quasar'

  export default {
    components: {
      QInput
    },
    data() {
      return {
      value: 'foo'
    };
  }
  ,
  name: "CustomTestCaseInput"
  }
</script>

<style scoped>

</style>
