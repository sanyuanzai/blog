import { getArticleById } from '@/api'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ArticlesProps } from '../dataTypes'
export const fetchArticleAction = createAsyncThunk(
  'article/fetchArticleById',
  (id: string, { dispatch }) => {
    const { loading, result } = getArticleById(id)
    dispatch(changeArticle({ loading, result }))
  }
)
const initialState: {
  article: ArticlesProps | null
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
} = {
  article: null,
  loading: 'idle'
}
const ArticleDetailSlice = createSlice({
  name: 'articleDetail',
  initialState,
  reducers: {
    changeArticle(state, { payload }) {
      state.article = payload
    }
  }
})
export const { changeArticle } = ArticleDetailSlice.actions
export default ArticleDetailSlice.reducer
