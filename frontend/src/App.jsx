import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotesPage from './pages/NotesPage'
import Register from './pages/Register'
import LoginPage from './pages/LoginPage'
import ServicesPage from './pages/ServicesPage'
import ChapterPage from './pages/ChapterPage'
import TopicPage from './pages/TopicPage'
import ErrorPage from './pages/ErrorPage'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/notes' element={<NotesPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route  path ="/mainNotes/:subjectId"   element = {<ChapterPage />}/>
        <Route path='/topic/:subjectId/:chapterId' element = {<TopicPage />} />
        <Route path='*' element={<ErrorPage />} />
     </Routes>
    </div>
  )
}

export default App