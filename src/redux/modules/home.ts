import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getArticles, getCategorielist, getTaglist } from '@/api'
import {
  ArticlesProps,
  CategoriesProps,
  TagListProps
} from '../../api/dataTypes'
export const fetchArticleAction = createAsyncThunk(
  'home/fetchHomeData',
  (payload, { dispatch }) => {
    dispatch(changeArticlesData(getArticles()))
    dispatch(changeTags(getTaglist()))
    dispatch(changeCategorie(getCategorielist()))
  }
)
const initialState: {
  articles: ArticlesProps[] | null
  tags: TagListProps[] | null
  categories: CategoriesProps[] | null
  loading: boolean | null
  error: Error | null
} = {
  articles: null,
  tags: null,
  categories: null,
  loading: null,
  error: null
}
const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeArticlesData(state, { payload }) {
      state.articles = payload
    },
    changeCategorie(state, { payload }) {
      state.categories = payload
    },
    changeTags(state, { payload }) {
      state.tags = payload
    }
  }
})

export const { changeArticlesData, changeTags, changeCategorie } =
  homeSlice.actions
export default homeSlice.reducer
