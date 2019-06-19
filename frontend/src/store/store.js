import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        tickets: [],
        buttonName: 'create',
        modalVisible: false,
        formInputs: {
            title: '',
            email: '',
            description: '',
            priority: 1,
            id: 0,
            state: false
        },
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
        },
        resetForm (state) {
            state.formInputs.title = ''
            state.formInputs.email = ''
            state.formInputs.description = ''
            state.formInputs.priority = 1
            state.formInputs.id = 0
            state.formInputs.state = false
            state.buttonName = 'create'
        },
        editTicket(state, ticketObj) {
            state.formInputs.title = ticketObj.title
            state.formInputs.email = ticketObj.email
            state.formInputs.description = ticketObj.description
            state.formInputs.priority = ticketObj.priority
            state.formInputs.id = ticketObj.id
            state.formInputs.state = ticketObj.state
        },
        openModal(state) {
            state.modalVisible = true
        },
        closeModal(state) {
            state.modalVisible = false
        }
    }
})