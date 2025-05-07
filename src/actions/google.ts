import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { getgoogleapikey } from "./getapikeys";
export const google = createGoogleGenerativeAI({
    apiKey: await getgoogleapikey(),
})


