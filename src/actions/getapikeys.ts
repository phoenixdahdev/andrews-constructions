"use server";

export const getgoogleapikey = async (): Promise<string> => {
    const key = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!key) {
        throw new Error("API_URL environment variable is not defined");
    }
    return key;
};