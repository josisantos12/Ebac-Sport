import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Produto} from '../../App'

type CarrinhoState = {
    itens: Produto[]
}
const initialState: CarrinhoState = {
    itens: []
}

const CarrinhoSlice = createSlice({
    name: 'carrinho', 
    initialState,
    reducers:{
      adicionar:(state: { itens: any[] }, action:PayloadAction<Produto>) => {
        const produto = action.payload;
        if(state.itens.find((item: { id: any }) => item.id === produto.id)){
          alert('item ja adicionado')
        }else{
          state.itens.push(produto)
        }
      }
    }
  })



export const {adicionar} = CarrinhoSlice.actions
export default CarrinhoSlice.reducer