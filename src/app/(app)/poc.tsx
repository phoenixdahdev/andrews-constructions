// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client'
import { useState } from 'react'
import { uploadS3File } from '~/actions/file-upload'

export default function FileUploadForm() {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
    setError('')
    setResult(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) {
      setError('Please select a file')
      return
    }

    try {
      setUploading(true)
      setError('')

      // Create form data for the upload
      const formData = new FormData()
      formData.append('file', file)
      formData.append('file_id', `file_${Date.now()}`) // Generate a file ID
      formData.append('file_type', file.type)
      formData.append('folder_name', 'uploads') // You can customize this

      const response = await uploadS3File(formData)

      if (response?.status === 'success') {
        setResult(response.response)
      } else {
        setError(response.message || 'Upload failed')
      }
    } catch (err) {
      setError('An unexpected error occurred')
      console.error(err)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-bold">Upload File to S3</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Select File (Images or PDF)
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
            accept="image/jpeg,image/png,image/gif,image/webp,application/pdf"
          />
          {file && (
            <p className="mt-1 text-sm text-gray-500">
              Selected: {file.name} ({(file.size / 1024).toFixed(2)} KB)
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={uploading || !file}
          className={`w-full rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm ${!file || uploading ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'} focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none`}
        >
          {uploading ? 'Uploading...' : 'Upload to S3'}
        </button>
      </form>

      {error && (
        <div className="mt-4 rounded-md bg-red-50 p-3 text-red-700">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-4 rounded-md bg-green-50 p-4 text-green-800">
          <h3 className="mb-2 font-bold">Upload Successful!</h3>
          <div className="text-sm">
            <p>
              <strong>Name:</strong> {result.name}
            </p>
            <p>
              <strong>Type:</strong> {result.type}
            </p>
            <p>
              <strong>Size:</strong> {result.size}
            </p>
            <p className="truncate">
              <strong>URL:</strong> {result.url}
            </p>
            <p className="truncate">
              <strong>CID:</strong> {result.CID}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
