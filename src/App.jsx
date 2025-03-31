import React from 'react'
import {CssBaseline} from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProfilePage from './view/ProfilePage'

export default function () {
  return (
    <>
    <CssBaseline />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProfilePage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
