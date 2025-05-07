"use server"


import { cad_drawing } from "@prisma/client"
import { cookies } from "next/headers"
import { auth } from "~/auth"
import { inDevEnvironment } from "~/lib/utils"
import { create_cad_service, get_cad, get_cads } from "~/services/cads-service"
import { ServiceResponse } from "~/types/global"

export async function create_cad(data: {
    name: string
    file_path: string
    file_type: string
}): Promise<ServiceResponse<cad_drawing>> {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return {
                success: false,
                error: "Unauthorized",
                data: null,
            };
        }
        const cad = await create_cad_service({
            name: data.name,
            file_path: data.file_path,
            user_id: session.user.id,
            file_type: data.file_type
        });
        return {
            success: true,
            error: null,
            data: cad,
        };
    } catch (error) {
        console.error("Error creating CAD:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to create CAD",
            data: null,
        };
    }
}

export async function get_cards(): Promise<ServiceResponse<cad_drawing[]>> {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return {
                success: false,
                error: "Unauthorized",
                data: null,
            };
        }
        const cards = await get_cads(session.user.id);
        return {
            success: true,
            error: null,
            data: cards,
        };
    } catch (error) {
        console.error("Error fetching CADs:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch CADs",
            data: null,
        };
    }
}

export async function get_card(id: string): Promise<ServiceResponse<cad_drawing>> {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return {
                success: false,
                error: "Unauthorized",
                data: null,
            };
        }
        const card = await get_cad(id);
        return {
            success: true,
            error: null,
            data: card,
        };
    } catch (error) {
        console.error("Error fetching CAD:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch CAD",
            data: null,
        };
    }
}



export async function set_current_cad(cad_id: string) {
    const cookie = await cookies();
    cookie.set("current_cad", cad_id, {
        httpOnly: true,
        secure: !inDevEnvironment,
        maxAge: 60 * 60 * 24,
        path: "/",
    });
    return cad_id;
}

export async function get_current_cad() {
    const cookie = await cookies();
    const current_cad = cookie.get("current_cad");
    return current_cad?.value;
}