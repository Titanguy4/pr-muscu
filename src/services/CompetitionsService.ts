import axios from 'axios'

// Base URL (tu peux la stocker dans un fichier config)
const API_URL = 'http://localhost:3333/api'

export interface Competition {
  id: number
  name: string
  date: string
  lieu: string
}

export default {
  async getAll(): Promise<Competition[]> {
    const response = await axios.get(`${API_URL}/competitions`)
    return response.data
  },

  async getNext(): Promise<Competition> {
    const response = await axios.get(`${API_URL}/competitions/next`)
    return response.data
  },
}
