import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        tickets: []
    },
    mutations: {
        sortTicketsByDate(state) {
            state.tickets.sort((a, b) => (a.date < b.date) ? 1 : -1)
        },
        sortTicketsByPriority(state) {
            state.tickets.sort((a, b) => (a.priority < b.priority) ? 1 : -1)
        },
        sortTicketsByState(state) {
            state.tickets.sort((a, b) => (a.state < b.state) ? 1 : -1)
        },
        loadTicketList(state) {
            axios.get('/api/show')
                .then((response) => {
                    state.tickets = response.data;
                })
        }
    }
})