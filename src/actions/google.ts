import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { getEnvVariables } from "./getenv";
export const google = createGoogleGenerativeAI({
    apiKey: await getEnvVariables("GOOGLE_GENERATIVE_AI_API_KEY").then((res) => res.GOOGLE_GENERATIVE_AI_API_KEY),
})


