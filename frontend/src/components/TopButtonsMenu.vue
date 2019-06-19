<template>
    <div>
        <v-container grid-list-xs>
            <v-layout row wrap>
                <v-flex xs12 md8 lg8>
                    <v-btn
                            color="orange"
                            class="theme--light"
                            @click="$store.commit('sortTicketsByDate')">
                        Newer first
                    </v-btn>
                    <v-btn
                            color="orange"
                            class="theme--light"
                            @click="$store.commit('sortTicketsByPriority')">
                        Important first
                    </v-btn>
                    <v-btn
                            color="orange"
                            class="theme--light"
                            @click="$store.commit('sortTicketsByState')">
                        In progress first
                    </v-btn>
                </v-flex>
                <v-flex xs12 md4 lg4 class="text-md-right">
                    <v-btn
                            color="orange"
                            class="theme--light"
                            @click="createTicket">
                        Create new ticket
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
        <new-ticket :visible="dialog" @close="dialog=false"></new-ticket>
    </div>
</template>

<script>
    import NewTicket from './AddChangeTicketModal.vue'
    export default {
        name: "top-buttons",
        data() {
            return {
                dialog: false
            }
        },
        components: {
            NewTicket
        },
        methods: {
            createTicket() {
                this.$store.commit('resetForm')
                this.dialog = true
            }
        }
    }
</script>

<style scoped>

</style>