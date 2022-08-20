import { Routes, Route } from 'react-router-dom'
import { GeneratorPage } from './pages'

export function Router() {
  return (
      <Routes>
        <Route path="/" element={<GeneratorPage/>} />
      </Routes>
  )
}