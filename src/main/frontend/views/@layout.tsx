import { ProgressBar } from '@vaadin/react-components';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import "../main.css";
import '../i18n';

import LocaleSelect from '../components/LocaleSelect';

export default function MainLayout() {
  return (
    <div>
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
    </div>
  );
}
