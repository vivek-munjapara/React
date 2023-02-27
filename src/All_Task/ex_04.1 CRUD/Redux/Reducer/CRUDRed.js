const initialState = {
    myData: {}
}

export default (state = [], { type, payload }) => {
    switch (type) {

        case 'addData':
            return [...state, { ...payload }]

        case 'deleteData':
            let dlt = [...state];
            console.log(dlt)
            dlt.splice(payload, 1);
            return dlt;

        case 'editData':
            
            return state=payload;
       

        default:
            return state
    }
}
