const wordsDefault = [];

export function wordsReducer(state = wordsDefault, action){
    if(action.type === 'GET_WORD'){
        return action.words;
    }
   
    if(action.type === 'REMOVE_WORD'){
        return state.filter(word => word._id !== action._id);
    }
    if(action.type === 'ADD_WORD'){
        return state.concat(action.word);
    }
    if(action.type === 'TOOGLE_WORD'){
        return state.map(word =>{
            if(word._id !== action._id) return word;
            return {...word, isMemorized: !word.isMemorized}
        })
    }
    return state;
};