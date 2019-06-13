<template>
    <v-dialog
            v-model="show"
            width="500">
        <v-card>
            <v-card-text>
                <v-form>
                    <v-text-field
                            v-model="formInputs.title"
                            label="Title"
                    ></v-text-field>
                    <v-text-field
                            v-model="formInputs.email"
                            label="Email"
                    ></v-text-field>
                    <v-textarea
                            v-model="formInputs.description"
                            label="Description"
                    ></v-textarea>
                    <v-switch
                            :input-value="formInputs.state"
                            :label="`In progress`"
                            color="primary"
                            @change="toggle"
                    ></v-switch>
                    <v-layout align-center>
                        <v-flex xs3>
                            Priority: {{formInputs.priority}}
                        </v-flex>
                        <v-flex xs9>
                            <v-btn
                                    v-for="n in 5"
                                    v-bind:key="n"
                                    fab
                                    dark
                                    small
                                    color="primary"
                                    @click="formInputs.priority = n">
                                {{n}}
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        color="primary"
                        flat
                        @click="show = false">
                    Cancel
                </v-btn>
                <v-btn
                        color="primary"
                        @click="submit">
                    {{buttonName}}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import util from '../utils/util.js'
    export default {
        name: "new-ticket",
        data() {
            return {
                formInputs: {
                    title: '',
                    email: '',
                    description: '',
                    priority: 1,
                    id: 0,
                    state: false
                },
                buttonName: 'create',
            }
        },
        mixins: [util],
        methods: {
            submit () {
                let params = this.getParams()
                if (this.formInputs.id > 0) {
                    Object.assign(params, {id: this.formInputs.id});
                }

                axios.post('/api/save', params)
                    .then(() => {
                        this.$store.commit('loadTicketList')
                        this.resetForm()
                        this.show = false
                    })
            },
            toggle() {
                this.formInputs.state = !this.formInputs.state
            }
        },
        props: ['visible'],
        computed: {
            show: {
                get () {
                    return this.visible
                },
                set (value) {
                    if (!value) {
                        this.$emit('close')
                    }
                }
            }
        },
        mounted() {
            this.$root.$on('editTicket', (ticketObj, name) => {
                this.getTicketContent(ticketObj, name)
            })
            this.$root.$on('ticketCreated', () => {
                this.resetForm()
            })
        }
    }
</script>

<style scoped>
</style>