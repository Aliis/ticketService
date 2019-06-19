export default {
    methods: {
        getParams() {
            return {
                title: this.$store.state.formInputs.title,
                email: this.$store.state.formInputs.email,
                description: this.$store.state.formInputs.description,
                priority: this.$store.state.formInputs.priority,
                state: this.$store.state.formInputs.state
            }
        }
    }
}