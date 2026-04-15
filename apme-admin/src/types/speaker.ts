export type SpeakerType = 'speaker' | 'guest' | 'invitee'

export interface Speaker {
  id: number
  name: string
  designation: string | null
  organization: string | null
  bio: string | null
  image: string
  type: SpeakerType
  year: number
  is_featured: boolean
  sort_order: number
  created_at?: string
}
