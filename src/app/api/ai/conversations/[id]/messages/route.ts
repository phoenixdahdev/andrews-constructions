import type { MessageRole } from "@prisma/client"
import { type NextRequest, NextResponse } from "next/server"
import { ConversationService } from "~/services/conversation.service"

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    try {
        const { role, content, imageUrl, imageFilename } = await request.json()
        const message = await ConversationService.addMessage(
            id,
            role as MessageRole,
            content,
            imageUrl,
            imageFilename,
        )
        return NextResponse.json(message)
    } catch (error) {
        console.error("Error adding message:", error)
        return NextResponse.json({ error: "Failed to add message" }, { status: 500 })
    }
}
