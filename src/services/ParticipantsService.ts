import axios from 'axios'

const API_URL = 'http://localhost:3333/api'

export interface Pronostic {
  id: number
}
export interface Participant {
  id: number
  nom: string
  prenom: string
  prSquat: number
  prBench: number
  prDeadlift: number
  createdAt: string
  updatedAt: string
  pronostics?: Pronostic[]
}

export default {
  /**
   * Récupère tous les participants.
   */
  async getAll(): Promise<Participant[]> {
    const response = await axios.get(`${API_URL}/participants`)
    return response.data
  },

  /**
   * Récupère un participant spécifique par son ID.
   * @param id - L'ID du participant.
   */
  async getById(id: number | string): Promise<Participant> {
    const response = await axios.get(`${API_URL}/participants/${id}`)
    return response.data
  },

  /**
   * Crée un nouveau participant.
   * Nécessite une authentification et des droits admin.
   * @param participantData - Les données du participant à créer.
   * Note: createdAt et updatedAt sont gérés par le backend.
   * pronostics n'est généralement pas envoyé lors de la création.
   */
  async create(
    participantData: Omit<Participant, 'id' | 'createdAt' | 'updatedAt' | 'pronostics'>,
  ): Promise<Participant> {
    // Assure-toi que ton instance axios est configurée pour envoyer
    // le token d'authentification pour les routes protégées.
    const response = await axios.post(`${API_URL}/participants`, participantData)
    return response.data
  },

  /**
   * Met à jour un participant existant.
   * Nécessite une authentification et des droits admin.
   * @param id - L'ID du participant à mettre à jour.
   * @param participantData - Les données à mettre à jour pour le participant.
   * Note: createdAt et updatedAt sont gérés par le backend.
   * pronostics n'est généralement pas envoyé lors de la mise à jour directe du participant.
   */
  async update(
    id: number | string,
    participantData: Partial<Omit<Participant, 'id' | 'createdAt' | 'updatedAt' | 'pronostics'>>,
  ): Promise<Participant> {
    // Assure-toi que ton instance axios est configurée pour envoyer
    // le token d'authentification pour les routes protégées.
    const response = await axios.put(`${API_URL}/participants/${id}`, participantData)
    return response.data
  },

  /**
   * Supprime un participant.
   * Nécessite une authentification et des droits admin.
   * @param id - L'ID du participant à supprimer.
   */
  async delete(id: number | string): Promise<void> {
    // Assure-toi que ton instance axios est configurée pour envoyer
    // le token d'authentification pour les routes protégées.
    await axios.delete(`${API_URL}/participants/${id}`)
  },
}
