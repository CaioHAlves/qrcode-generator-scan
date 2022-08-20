import React from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import { GeneratorPage, ScannerPage } from './pages'
import { useHooks } from './hooks/useHooks'
import { setData } from './redux/modules/myData'

export function Router() {

  const { dispatch } = useHooks()

  React.useEffect(() => {
    axios.get("https://api.github.com/users/CaioHAlves")
    .then((response) => {
      const { data } = response
      dispatch(setData({
        name: data.name,
        avatar_url: data.avatar_url,
        company: data.company
      }))
    })
    .catch((error) => {
      console.log(error)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
      <Routes>
        <Route path="/" element={<GeneratorPage/>} />
        <Route path="/scanner" element={<ScannerPage/>} />
      </Routes>
  )
}