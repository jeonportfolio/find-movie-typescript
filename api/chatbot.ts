import { VercelRequest, VercelResponse} from '@vercel/node'
import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.APIKEY1
})

async function sendMessages(messages: OpenAI.ChatCompletionMessageParam[]) {
    const chatCompletion = await openai.chat.completions.create({
        messages,
        model:'gpt-3.5-turbo',
    })
    return chatCompletion.choices[0].message
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const { messages } = JSON.parse(request.body)
    const message = await sendMessages(messages) 
    response.status(200).json(message)
}