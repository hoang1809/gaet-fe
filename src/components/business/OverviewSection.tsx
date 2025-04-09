import React from 'react'
import Container from '../common/Container'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'

type Props = {
    general: string
}

const OverviewSection = ({general} : Props) => {
  const {t} = useTranslation()
  return (
    <div id="overview" className="bg-white">
        <Container className="pt-0 space-y-16">
          <div className="py-6 flex items-center justify-between border-b">
            <Link
              href="/"
              className="inline-flex items-center text-gaet-600 hover:text-gaet-700"
            >
              <ArrowLeft size={16} className="mr-2" />
              {t('business_back_to_home')}
            </Link>

            <nav className="hidden md:flex space-x-4">
              <a href="#overview" className="text-gray-600 hover:text-gaet-600">
                {t('business_overview')}
              </a>
              <a
                href="#activities"
                className="text-gray-600 hover:text-gaet-600"
              >
                {t('business_main_activities')}
              </a>
              <a href="#gallery" className="text-gray-600 hover:text-gaet-600">
                {t('business_images')}
              </a>
              <a href="#related" className="text-gray-600 hover:text-gaet-600">
              {t('business_related_areas')}
              </a>
            </nav>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
                {t('business_overview')}
                <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-gaet-500"></div>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                {general}
              </p>
            </div>
          </div>
        </Container>
      </div>
  )
}

export default OverviewSection