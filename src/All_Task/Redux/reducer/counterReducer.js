
export default (state = 0, { type, payload }) => {
    switch (type) {

        case 'incre':
            return state +1;
        
        case 'decre':
            return state - 1;

        default:
            return state
    }
}

