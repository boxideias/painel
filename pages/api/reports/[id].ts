import type { NextApiResponse } from 'next'
import { reports } from '../../../data'

export default function personHandler({ query: { id } }:any, res:NextApiResponse) {
  const filtered = reports.filter((r) => r.id === id)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}