import React from 'react'

const Field = ({ label, value }) => (
  <div className="text-[10px] leading-tight">
    <span className="font-semibold text-gray-800">{label}: </span>
    <span className="text-gray-700">{value || '-'}</span>
  </div>
)

export default function DriverLicenseCard({ data }) {
  const {
    nik,
    licenseNumber,
    name,
    address,
    birthplace,
    birthdate,
    gender,
    bloodType,
    nationality,
    validUntil,
    province,
    city,
    classType,
    photoUrl,
    signatureUrl,
  } = data

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative rounded-xl overflow-hidden shadow-2xl border border-yellow-200 bg-white">
        {/* Header band resembling Indonesian SIM */}
        <div className="relative">
          <div className="h-8 bg-[#d50000]" />
          <div className="h-10 bg-[#f7d20a] flex items-center justify-between px-3">
            <div className="text-[10px] font-semibold text-gray-900">
              KEPOLISIAN NEGARA REPUBLIK INDONESIA
            </div>
            <div className="text-[10px] font-bold text-gray-900">SIM {classType || 'C'}</div>
          </div>
          <div className="absolute top-1 left-2 text-[9px] text-white/90 font-semibold tracking-wide">
            SURAT IZIN MENGEMUDI
          </div>
        </div>

        {/* Card body with aspect ratio roughly credit card */}
        <div className="p-3 bg-white">
          <div className="grid grid-cols-3 gap-2">
            {/* Photo */}
            <div className="col-span-1 flex flex-col items-center">
              <div className="w-full aspect-[3/4] bg-blue-50 border border-blue-200 rounded-md overflow-hidden flex items-center justify-center">
                {photoUrl ? (
                  <img src={photoUrl} alt="Foto pemegang" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-[10px] text-blue-400">Foto</div>
                )}
              </div>
              <div className="mt-2 w-full">
                <Field label="Gol. Darah" value={bloodType} />
                <Field label="Kewarganegaraan" value={nationality || 'WNI'} />
              </div>
            </div>

            {/* Details */}
            <div className="col-span-2 space-y-1">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-bold text-gray-900 truncate pr-2">{name || 'Nama Lengkap'}</div>
                <div className="text-[10px] text-gray-700">No. SIM: <span className="font-semibold">{licenseNumber || '—'}</span></div>
              </div>

              <Field label="NIK" value={nik} />
              <Field label="Tempat/Tgl Lahir" value={[birthplace, birthdate].filter(Boolean).join(', ')} />
              <Field label="Jenis Kelamin" value={gender} />
              <Field label="Alamat" value={address} />
              <Field label="Berlaku s/d" value={validUntil} />
              <div className="grid grid-cols-2 gap-2">
                <Field label="Provinsi" value={province} />
                <Field label="Kota/Kab." value={city} />
              </div>

              {/* Signature */}
              <div className="pt-2 flex items-end justify-end">
                <div className="text-right">
                  <div className="text-[9px] text-gray-500">Tanda Tangan</div>
                  <div className="h-10 w-28 border-b border-gray-300 flex items-center justify-center">
                    {signatureUrl ? (
                      <img src={signatureUrl} alt="Tanda tangan" className="max-h-8 object-contain" />
                    ) : (
                      <span className="text-[8px] text-gray-400">—</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom band with city and QR placeholder */}
          <div className="mt-2 flex items-center justify-between">
            <div className="text-[10px] text-gray-700">{city || 'Kota'}</div>
            <div className="h-8 w-8 bg-gray-100 border border-gray-200 rounded grid place-items-center text-[8px] text-gray-400">
              QR
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
