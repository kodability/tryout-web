<template>
  <div class="column">
    <q-tabs
      class="col-auto full-width"
      v-model="selectedTab"
      align="center"
      @select="onTabSelect">
      <q-tab slot="title" name="q1" label="Question1" icon="code"/>
      <q-tab slot="title" name="q2" label="Question2" icon="code"/>
      <q-tab slot="title" name="q3" label="Question3" icon="done"/>

      <!--</div>-->
      <!--<q-tab-pane name="q1">Tab One</q-tab-pane>-->
      <!--<q-tab-pane name="q2">Tab Two</q-tab-pane>-->
      <!--<q-tab-pane name="q3">Tab Three</q-tab-pane>-->
    </q-tabs>
    <q-scroll-area class="col">
      <div v-for="n in 50">
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
  import {QLayout, QScrollArea, QSelect, QTabs, QTab, QTabPane, QBtn} from 'quasar'

  export default {
    components: {
      QLayout,
      QScrollArea,
      QSelect,
      QTabs,
      QTab,
      QTabPane,
      QBtn
    },
    data() {
      return {
        selectedTab: "q1",
      };
    },
    methods: {
      onTabSelect() {
        console.log(this.selectedTab);
      }
    }
  };
</script>

<style>

</style>
