const initialState = {

}

export default (state = [], { type, payload }) => {
    switch (type) {

        case 'getData':
            return [...state, ...payload]
        case 'Datadlt':
            let d = [...state]
            d.splice(payload, 10)

            return d

        default:
            return state
    }
}
