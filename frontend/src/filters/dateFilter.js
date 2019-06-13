export default (value) => {
    const date = new Date(value)
    return date.toLocaleDateString(['et-EE'], {month: '2-digit', day: '2-digit', year: 'numeric'})
}