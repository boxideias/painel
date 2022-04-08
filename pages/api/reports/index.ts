import type { NextApiRequest, NextApiResponse } from 'next'
import { reports } from '../../../data'

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  res.status(200).json(reports)
}