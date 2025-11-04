import React, { useState } from 'react'
import DriverLicenseCard from './components/DriverLicenseCard'
import LicenseForm from './components/LicenseForm'
import PhotoSignatureUploader from './components/PhotoSignatureUploader'

export default function App() {
  const [form, setForm] = useState({
    nik: '',
    licenseNumber: '',
    name: '',
    address: '',
    birthplace: '',
    birthdate: '',
    gender: '',
    bloodType: '',
    nationality: 'WNI',
    validUntil: '',
    province: '',
    city: '',
    classType: 'C',
    photoUrl: '',
    signatureUrl: '',
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Kartu SIM Indonesia – Form & Pratinjau</h1>
          <p className="text-gray-600 mt-2">Isi data seperti pada Surat Izin Mengemudi (SIM) Indonesia dan lihat pratinjau kartunya secara langsung.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-amber-100">
            <div className="space-y-6">
              <LicenseForm data={form} onChange={setForm} />
              <PhotoSignatureUploader
                photoUrl={form.photoUrl}
                signatureUrl={form.signatureUrl}
                onPhotoChange={(url) => setForm((f) => ({ ...f, photoUrl: url }))}
                onSignatureChange={(url) => setForm((f) => ({ ...f, signatureUrl: url }))}
              />
            </div>
          </div>

          {/* Right: Preview */}
          <div className="flex items-start lg:items-center justify-center">
            <div className="w-full">
              <DriverLicenseCard data={form} />
              <p className="text-xs text-gray-500 text-center mt-3">Desain ini hanya untuk keperluan demonstrasi UI dan bukan merupakan dokumen resmi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
