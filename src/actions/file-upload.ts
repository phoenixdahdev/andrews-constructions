'use server'


import {
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
    DeleteObjectCommand,
} from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { generateId, formatFileSize } from '~/lib/utils'


const s3Client = new S3Client({
    region: process.env.AWS_S3_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY as string,
        secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY as string,
    },
})

const acceptedMemeTypes = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp',
    'application/pdf',
]
export async function uploadS3File(formData: FormData) {
    if (!formData) return
    const file = formData.get('file') as File

    const file_id = formData.get('file_id') as string
    const file_type = formData.get('file_type') as string
    const folderName = (formData.get('folder_name') as string) || 'images'
    if (!file) return
    try {
        if (!acceptedMemeTypes.includes(file.type)) {
            return {
                status: 'file type error',
                message: 'Please select an image or pdf file to upload',
            }
        }
        if (file.size === 0) {
            return {
                status: 'file error',
                message: 'Please select a file to upload',
            }
        }
        const buffer = Buffer.from(await file.arrayBuffer())
        const Key = `${folderName}/${generateId(20)}`

        const command = new PutObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME!,
            Key,
            Body: buffer,
            ContentType: file.type,
            Metadata: {
                name: file.name,
                type: file_type,
                size: formatFileSize(file.size),
                file_id,
            },
        })

        const signedUrl = await getSignedUrl(s3Client, command, {
            expiresIn: 3600,
        })

        await s3Client.send(command)

        const getCommand = new GetObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME!,
            Key,
        })
        const getResponse = await s3Client.send(getCommand)
        console.log('GET RESPONSE: ', getResponse)

        if (getResponse.$metadata.httpStatusCode == 200) {
            const data_info = {
                name: getResponse.Metadata?.name || '',
                url: signedUrl.split('?')[0],
                type: getResponse.Metadata?.type || '',
                size: getResponse.Metadata?.size || '',
                CID: Key,
                fileId: getResponse.Metadata?.file_id || '',
            }
            console.log(data_info)
            return {
                status: 'success',
                message: 'File uploaded successfully',
                response: data_info,
            }
        }
    } catch (error) {
        console.log(error)
        return {
            status: 'upload error',
            message: `An error occurred while uploading ${file.name}`,
        }
    }
}

export async function deleteS3File(fileId: string) {
    const command = new DeleteObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME!,
        Key: fileId,
    })
    try {
        await s3Client.send(command)
        return { success: 'success', message: 'File deleted successfully' }
    } catch (error) {
        console.error('Error deleting file: ', error)
        return { success: 'failed', message: 'File deletion failed' }
    }
}