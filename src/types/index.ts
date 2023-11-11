import { Url } from 'url'

export type Experience = {
  jobTitle: string
  company: string
  startDate: string
  endDate: string
  description: string
}

export type Education = {
  school: string
  degree: string
  startDate: string
  endDate: string
  description: string
}

export type Work = {
  title: string
  thumbnailUrl: string
  previewUrl: string
}
