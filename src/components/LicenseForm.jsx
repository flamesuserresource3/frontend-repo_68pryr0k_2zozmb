import React from 'react'

const Input = ({ label, ...props }) => (
  <label className="block">
    <span className="block text-sm font-medium text-gray-700 mb-1">{label}</span>
    <input
      {...props}
      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </label>
)

const Select = ({ label, children, ...props }) => (
  <label className="block">
    <span className="block text-sm font-medium text-gray-700 mb-1">{label}</span>
    <select
      {...props}
      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
    >
      {children}
    </select>
  </label>
)

export default function LicenseForm({ data, onChange }) {
  const update = (field) => (e) => onChange({ ...data, [field]: e.target.value })

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="No. SIM" value={data.licenseNumber} onChange={update('licenseNumber')} placeholder="1234567890" />
        <Input label="NIK" value={data.nik} onChange={update('nik')} placeholder="3271XXXXXXXXXXXX" />
        <Input label="Nama" value={data.name} onChange={update('name')} placeholder="Nama lengkap" />
        <Input label="Tempat Lahir" value={data.birthplace} onChange={update('birthplace')} placeholder="Kota/Kabupaten" />
        <Input label="Tanggal Lahir" type="date" value={data.birthdate} onChange={update('birthdate')} />
        <Select label="Jenis Kelamin" value={data.gender} onChange={update('gender')}>
          <option value="">Pilih</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </Select>
        <Select label="Golongan Darah" value={data.bloodType} onChange={update('bloodType')}>
          <option value="">Pilih</option>
          <option>O</option>
          <option>A</option>
          <option>B</option>
          <option>AB</option>
        </Select>
        <Select label="Kewarganegaraan" value={data.nationality} onChange={update('nationality')}>
          <option>WNI</option>
          <option>WNA</option>
        </Select>
        <Select label="Kelas SIM" value={data.classType} onChange={update('classType')}>
          <option value="C">C</option>
          <option value="A">A</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
        </Select>
        <Input label="Berlaku s/d" type="date" value={data.validUntil} onChange={update('validUntil')} />
      </div>

      <Input label="Alamat" value={data.address} onChange={update('address')} placeholder="Nama jalan, RT/RW, Kel/Desa" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Provinsi" value={data.province} onChange={update('province')} placeholder="Jawa Barat" />
        <Input label="Kota/Kabupaten" value={data.city} onChange={update('city')} placeholder="Kota Bandung" />
      </div>
    </div>
  )
}
