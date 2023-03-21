import { createSlice } from '@reduxjs/toolkit'
import { CategoriesProps } from '../../api/dataTypes'
const categorieSlice = createSlice({
  name: 'categorie',
  initialState: { categories: [<CategoriesProps>{}] },
  reducers: {
    changeCategorie(state, { payload }) {
      state.categories = payload
    }
  }
})
export const { changeCategorie } = categorieSlice.actions
export default categorieSlice.reducer
