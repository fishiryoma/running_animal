import { useState } from 'react'
import { Card } from '../Card'
import Modal from '../Modal'
import uxCertification from '../../assets/ux_certification.jpg'

const certifications = [
  {
    id: 1,
    title: 'Google UX Design',
    img: uxCertification,
    alt: 'Google UX Design',
  },
  // 之後可以在這裡增加其他證照
]

export function CertificationSection() {
  const [selectedCert, setSelectedCert] = useState<
    (typeof certifications)[0] | null
  >(null)

  return (
    <Card className='p-10' label='CERTIFICATION' labelColor='orange'>
      <div className='flex flex-wrap gap-6'>
        {certifications.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className='w-full cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:scale-[1.02] hover:shadow-md md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]'
          >
            <div className='aspect-4/3 w-full'>
              <img
                src={cert.img}
                alt={cert.alt}
                className='h-full w-full object-cover'
              />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-900'>
                {cert.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title}
        size='2xl'
      >
        {selectedCert && (
          <div className='flex w-full justify-center'>
            <img
              src={selectedCert.img}
              alt={selectedCert.alt}
              className='h-auto max-w-full rounded-lg shadow-lg'
            />
          </div>
        )}
      </Modal>
    </Card>
  )
}
