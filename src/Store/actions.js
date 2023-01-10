import { createSlice,current } from '@reduxjs/toolkit'
export const cardsSlice = createSlice({
    name: 'Cards',
    initialState:{
      cards: []
  },
    reducers: {
      cardAdded(state=[], action) {
        // "Mutate" the existing state, no return value needed
        state.cards.push(action.payload)
        //console.log(current(state.cards))
      },
      EditCard(state, action) {
        for(var i = 0;i<state.cards.length;i++){
          if(action.payload.id===state.cards[i].id){
        state.cards[i].name = action.payload.name
        state.cards[i].url = action.payload.url
        state.cards[i].bucketName = action.payload.bucketName
          }
        }
      },
      cardDeleted(state, action){
        // Construct a new result array immutably and return it
        console.log(action.payload)
        const s =  current(state.cards).filter(card => card.id !== action.payload)
        console.log(s)
        return s
      }
      },
     
    }
  )
  export const { cardAdded, cardDeleted,EditCard} = cardsSlice.actions
  export default cardsSlice.reducer
  export const selectCards = (state) => state.cards
