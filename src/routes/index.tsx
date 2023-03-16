import React from 'react'
import { Navigate } from 'react-router-dom'
const About = React.lazy(() => import('../pages/About'))
const ArticleCategories = React.lazy(() => import('../pages/ArticleCategories'))
const ArticleTags = React.lazy(() => import('../pages/ArticleTags'))
const Home = React.lazy(() => import('../pages/Home'))
const MessageBoard = React.lazy(() => import('../pages/MessageBoard'))
const Say = React.lazy(() => import('../pages/Say'))
const Timeline = React.lazy(() => import('../pages/Timeline'))
const Article = React.lazy(() => import('../pages/Article'))
const routes = [
  {
    path: '/',
    element: <Navigate to={'/home'} />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/tags',
    element: <ArticleTags />
  },
  {
    path: '/categories',
    element: <ArticleCategories />
  },
  {
    path: '/timeline',
    element: <Timeline />
  },
  {
    path: '/say',
    element: <Say />
  },
  {
    path: '/messageboard',
    element: <MessageBoard />
  },
  { path: '/post/:id', element: <Article /> }
]
export default routes
