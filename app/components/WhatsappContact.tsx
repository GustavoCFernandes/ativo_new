'use client'

import { formatPhoneNumber } from '@/utils/formatPhoneNumber'

interface Contact {
  phone: string
  foreigner: boolean
}

interface WhatsappContactProps {
  contacts: Contact[]
}

export default function WhatsappContact({ contacts }: WhatsappContactProps) {
  const filtered = contacts.filter(contact => contact.phone)

  return (
    <div
      className="flex items-center p-4 rounded-lg transition-colors"
      style={{
        backgroundColor: 'rgba(20, 15, 15, 0.95)',
        border: '1px solid rgba(254, 254, 254, 0.1)',
      }}
    >
      <div className="w-6 h-6 mr-4">
        <img width={25} src="/assets/icons/whatsapp.png" alt="Image Whatsapp" />
      </div>

      <div style={{ color: '#D2D2D2' }}>
        {filtered.map((contact, idx) => {
          const formatted = formatPhoneNumber(contact.phone)
          const link = `https://wa.me/${contact.phone.replace(/\D/g, '')}`
          const flag = contact.foreigner ? '🌍' : '🇧🇷'

          return (
            <div key={idx}>
              {flag}{' '}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline', color: '#D2D2D2' }}
              >
                {formatted}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
