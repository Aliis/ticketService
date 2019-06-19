<template>
    <div>
        <v-container grid-list-xs dark>
            <v-layout row wrap>
                <v-flex
                        xs12
                        v-for="(ticket, index) in $store.state.tickets"
                        v-bind:key="index">
                    <v-card
                            color="blue-grey darken-2 theme--dark"
                            class="text-sm-left">
                        <v-card-title>
                            <div class="headline">{{ ticket.title }}</div>
                        </v-card-title>
                        <v-card-text>
                            <div>ID: {{ticket.id}}</div>
                            <div>Description: {{ticket.description}}</div>
                            <div>Email: {{ticket.email}}</div>
                            <div>Date: {{ticket.date | date}}</div>
                            <div>Priority: {{ticket.priority}}</div>
                            <div v-if="ticket.state">Status: In progress</div>
                            <div v-else>Status: Not started</div>
                        </v-card-text>
                        <v-card-actions>
                            <div class="button-wrapper">
                                <v-btn
                                        @click="changeTicket(ticket)"
                                        flat
                                        color="orange">
                                    Change
                                </v-btn>
                                <v-btn
                                        @click="deleteTicket(ticket)"
                                        flat
                                        color="orange">
                                    Delete
                                </v-btn>
                            </div>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <new-ticket :visible="dialog" @close="dialog=false"></new-ticket>
    </div>
</template>

<script>
    import NewTicket from './AddChangeTicketModal.vue'
    export default {
        name: "ticket",
        data() {
            return {
                dialog: false
            }
        },
        components: {
            NewTicket
        },
        methods: {
            changeTicket(ticketObj) {
                let findTicketById = what => this.$store.state.tickets.find(element => element.id === what)
                let currentTicket = findTicketById(ticketObj.id)
                this.$store.state.buttonName = 'change'
                this.$store.commit('editTicket', currentTicket)
                this.dialog = true
            },
            deleteTicket(ticketObj){
                axios.delete('/api/delete/' +  ticketObj.id)
                    .then(() => {
                        this.$store.commit('loadTicketList')
                })
            }
        },
        created() {
            this.$store.commit('loadTicketList')
        }
    }
</script>

<style scoped>
    .button-wrapper {
        text-align: right;
        width: 100%;
    }
</style>