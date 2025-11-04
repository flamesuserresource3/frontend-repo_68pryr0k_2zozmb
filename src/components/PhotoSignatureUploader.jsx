import React, { useRef, useEffect } from 'react'

export default function PhotoSignatureUploader({ photoUrl, signatureUrl, onPhotoChange, onSignatureChange }) {
  const prevPhoto = useRef(null)
  const prevSign = useRef(null)

  useEffect(() => {
    return () => {
      if (prevPhoto.current) URL.revokeObjectURL(prevPhoto.current)
      if (prevSign.current) URL.revokeObjectURL(prevSign.current)
    }
  }, [])

  const handleImage = (e, type) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    if (type === 'photo') {
      if (prevPhoto.current) URL.revokeObjectURL(prevPhoto.current)
      prevPhoto.current = url
      onPhotoChange(url)
    } else {
      if (prevSign.current) URL.revokeObjectURL(prevSign.current)
      prevSign.current = url
      onSignatureChange(url)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Foto</label>
        <div className="flex items-center gap-3">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImage(e, 'photo')}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
          />
          {photoUrl && (
            <img src={photoUrl} alt="Preview foto" className="w-12 h-12 rounded object-cover border" />
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tanda Tangan</label>
        <div className="flex items-center gap-3">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImage(e, 'sign')}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
          />
          {signatureUrl && (
            <img src={signatureUrl} alt="Preview tanda tangan" className="h-12 object-contain border bg-white px-2" />
          )}
        </div>
      </div>
    </div>
  )
}
