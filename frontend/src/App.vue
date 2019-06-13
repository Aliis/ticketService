<template>
  <v-app>
    <v-content>
      <TopButtons></TopButtons>
      <NewTicket></NewTicket>
      <Ticket></Ticket>
    </v-content>
  </v-app>
</template>

<script>
import Ticket from './components/TicketCard.vue'
import NewTicket from './components/AddChangeTicketModal.vue'
import TopButtons from './components/TopButtonsMenu.vue'

export default {
  name: 'app',
  components: {
      TopButtons,
      Ticket,
      NewTicket
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background:#2c3e50!important;
}
  .v-content__wrap {
    padding-top: 10px;
  }
</style>
