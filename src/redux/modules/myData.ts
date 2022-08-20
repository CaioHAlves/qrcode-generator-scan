import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IMyData {
  avatar_url: string;
  name: string
  company: string
  githubUrl: string
  linkedinUrl: string,
  instagramUrl: string,
  whatsappUrl: string
}

const initialState: IMyData = {
  avatar_url: '',
  name: '',
  company: '',
  githubUrl: 'https://github.com/CaioHalves',
  linkedinUrl: 'https://www.linkedin.com/in/caio-henrique-alves/',
  instagramUrl: 'https://www.instagram.com/caio_damiao/',
  whatsappUrl: 'https://api.whatsapp.com/send?phone=5519999672886'
}

export const myData = createSlice({
  name: 'myData',
  initialState: initialState,
  reducers: {
    setData: (state, action: PayloadAction<{name: string, company: string, avatar_url: string}>) => ({
      ...state,
      name: action.payload.name,
      company: action.payload.company,
      avatar_url: action.payload.avatar_url,
    })
  }
})

export const {
  setData
} = myData.actions

export default myData.reducer