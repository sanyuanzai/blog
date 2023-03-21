import { createSlice } from '@reduxjs/toolkit'
import { CategoriesProps, TagListProps } from '../../api/dataTypes'
const tagSlice = createSlice({
  name: 'tags',
  initialState: { tags: [<TagListProps>{}] },
  reducers: {
    changeTags(state, { payload }) {
      state.tags = payload
    }
  }
})
export const { changeTags } = tagSlice.actions
export default tagSlice.reducer
