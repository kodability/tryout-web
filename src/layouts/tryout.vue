<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar>
        <q-toolbar-title>
          Kodability
          <span slot="subtitle">Tryout</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-page-container class="full-height">
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
  import {QToolbar, QToolbarTitle} from 'quasar'

  export default {
    components: {
      QToolbar,
      QToolbarTitle
    },
    data() {
      return {}
    }
  }
</script>

<style>
</style>
