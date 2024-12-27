import { ProgressBar } from '@vaadin/react-components';
import { I18nextProvider } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import i18n from  '../i18n';
import "../main.css";

import LocaleSelect from '../components/LocaleSelect';

export default function MainLayout() {
  return (
    <div>
    <I18nextProvider i18n={ i18n }>
      <Suspense fallback={<ProgressBar indeterminate className="m-0" />}>
        <section>
          <nav className="flex justify-between items-center border-b bg-blue-500 relative">
            <div className="text-white ml-5 text-m">eimono</div>
            <div className="mr-5">
                <LocaleSelect/>
            </div>
          </nav>
          <Outlet />
        </section>
      </Suspense>
      </I18nextProvider>
    </div>
  );
}
