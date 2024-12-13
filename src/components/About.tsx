import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-16" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('about')}</h2>
        <div className="max-w-3xl mx-auto">
          <div className="prose lg:prose-lg">
            <p className="mb-6">{t('aboutDescription')}</p>
            <h3 className="text-xl font-semibold mb-4">{t('howItWorks')}</h3>
            <p className="mb-6">{t('howItWorksDescription')}</p>
            <ul className="list-disc pl-6 mb-6">
              <li>{t('trackBusRealTime')}</li>
              <li>{t('viewRouteInfo')}</li>
              <li>{t('checkTimes')}</li>
              <li>{t('receiveUpdates')}</li>
            </ul>
            <p>{t('goal')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}