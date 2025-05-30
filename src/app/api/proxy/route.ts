import { type NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const requestUrl = new URL(req.url)
  const fileUrl = requestUrl.searchParams.get('url')

  if (!fileUrl) {
    return new NextResponse('Missing url parameter', { status: 400 })
  }

  try {
    if (!fileUrl.includes('andrew-construction.s3.us-east-1.amazonaws.com')) {
      return new NextResponse('Invalid URL', { status: 403 })
    }

    const response = await fetch(fileUrl, {
      headers: {
        Accept: '*/*',
      },
    })

    if (!response.ok) {
      return new NextResponse(`Failed to fetch file: ${response.statusText}`, {
        status: response.status,
      })
    }

    const arrayBuffer = await response.arrayBuffer()

    const newResponse = new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type':
          response.headers.get('Content-Type') || 'application/octet-stream',
        'Content-Length': response.headers.get('Content-Length') || '',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    })

    return newResponse
  } catch (error) {
    console.error('Proxy error:', error)
    return new NextResponse(
      `Error fetching file: ${error instanceof Error ? error.message : 'Unknown error'}`,
      {
        status: 500,
      }
    )
  }
}
