export const store = () => ({
    formData: {
        date: null,
        appricantEmail: '',
        approverEmail: '',
        reason: '',
        from: '',
        to: '',
        roundTrip: false,
    }
})

export const mutations = {
    setFormData(state, val) {
        state.formData = val
    },
}

export const actions = {
    resetForm(store) {
        const emptyForm = {
            date: null,
            appricantEmail: '',
            approverEmail: '',
            reason: '',
            from: '',
            to: '',
            roundTrip: false,
        }
        store.commit(setFormData, emptyForm)
    }
}