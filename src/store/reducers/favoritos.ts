import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Produto } from '../../App';

type FavoritosSliceState = {
  itens: Produto[];
};

const initialState: FavoritosSliceState = {
  itens: [],
};

const FavoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavorito(state, action: PayloadAction<Produto>) {
      state.itens.push(action.payload);
    },
    removerFavorito(state, action: PayloadAction<Produto>) {
      state.itens = state.itens.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { adicionarFavorito, removerFavorito } = FavoritosSlice.actions;
export default FavoritosSlice.reducer;