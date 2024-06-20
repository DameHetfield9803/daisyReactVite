import { Suspense } from 'react'
import Fallback from './Fallback'
import Index from './Index'
import Landing from './Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
export default function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/index" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}