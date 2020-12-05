<template>
   <div id="app" class="container">
    <div class="row py-4">
      <agenda-menu />
      <agenda-show />
    </div>
  </div>
</template>

<script>
  import AgendaMenu from './components/AgendaMenu.vue'
  import AgendaShow from './components/AgendaShow.vue'

  export default{
    name: 'app',
    components: {
      AgendaMenu,
      AgendaShow
    }
  }
</script>
