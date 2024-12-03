import fetch from 'node-fetch'
import { VercelRequest, VercelResponse } from '@vercel/node' 

const { OMDB_APIKEY } = process.env

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const {title, page, id } = JSON.parse(request.body)
    const url = id 
        ? `http://omdbapi.com?apikey=${OMDB_APIKEY}&i=${id}&plot=full`
        : `http://omdbapi.com?apikey=${OMDB_APIKEY}&s=${title}&page=${page}`
    const res = await fetch(url)
    const json = await res.json()
    response
        .status(200)
        .json(json)
}

