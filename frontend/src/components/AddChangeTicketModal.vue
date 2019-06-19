<template>
    <v-dialog
            v-model="show"
            width="500">
        <v-card>
            <v-card-text>
                <v-form>
                    <v-text-field
                            v-model="$store.state.formInputs.title"
                            label="Title"
                    ></v-text-field>
                    <v-text-field
                            v-model="$store.state.formInputs.email"
                            label="Email"
                    ></v-text-field>
                    <v-textarea
                            v-model="$store.state.formInputs.description"
                            label="Description"
                    ></v-textarea>
                    <v-switch
                            :input-value="$store.state.formInputs.state"
                            :label="`In progress`"
                            color="primary"
                            @change="toggleState"
                    ></v-switch>
                    <v-layout align-center>
                        <v-flex xs3>
                            Priority: {{$store.state.formInputs.priority}}
                        </v-flex>
                        <v-flex xs9>
                            <v-btn
                                    v-for="n in 5"
                                    v-bind:key="n"
                                    fab
                                    dark
                                    small
                                    color="primary"
                                    @click="$store.state.formInputs.priority = n">
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
                    {{$store.state.buttonName}}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import util from '../utils/util.js'
    export default {
        name: "new-ticket",
        mixins: [util],
        props: ['visible'],
        methods: {
            submit () {
                let params = this.getParams()
                if (this.$store.state.formInputs.id > 0) {
                    Object.assign(params, {id: this.$store.state.formInputs.id});
                }

                axios.post('/api/save', params)
                    .then(() => {
                        this.$store.commit('loadTicketList')
                        this.$store.commit('resetForm')
                        this.show = false
                    })
            },
            toggleState() {
                this.$store.state.formInputs.state = !this.$store.state.formInputs.state
            }
        },
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
        }
    }
</script>

<style scoped>
</style>