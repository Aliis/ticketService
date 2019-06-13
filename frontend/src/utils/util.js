export default {
    methods: {
        resetForm () {
            this.formInputs.title = ''
            this.formInputs.email = ''
            this.formInputs.description = ''
            this.formInputs.priority = 1
            this.formInputs.id = 0
            this.formInputs.state = false
            this.buttonName = 'create'
        },
        getParams() {
            return {
                title: this.formInputs.title,
                email: this.formInputs.email,
                description: this.formInputs.description,
                priority: this.formInputs.priority,
                state: this.formInputs.state
            }
        },
        getTicketContent(ticketObj, name) {
            this.formInputs.title = ticketObj.title
            this.formInputs.email = ticketObj.email
            this.formInputs.description = ticketObj.description
            this.formInputs.priority = ticketObj.priority
            this.formInputs.id = ticketObj.id
            this.formInputs.state = ticketObj.state
            this.buttonName = name
        }
    }
}