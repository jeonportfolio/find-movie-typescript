import fetch from 'node-fetch'
import { VercelRequest, VercelResponse } from '@vercel/node' 

const { MOVIE } = process.env

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const {title, page, id } = JSON.parse(request.body)
    const url = id 
        ? `http://omdbapi.com?apikey=${MOVIE}&i=${id}&plot=full`
        : `http://omdbapi.com?apikey=${MOVIE}&s=${title}&page=${page}`
    const res = await fetch(url)
    const json = await res.json()
    response
        .status(200)
        .json(json)
}

