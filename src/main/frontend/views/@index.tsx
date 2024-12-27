import { TabSheet, TabSheetTab } from '@vaadin/react-components';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

import HomeTabSheet from '../components/tab/sheet/HomeTabSheet';

export default function MainView(){
 const { t, i18n } = useTranslation();

 return (
   <TabSheet theme="equal-width-tabs">
     <TabSheetTab label={t('home')}>
       <HomeTabSheet/>
     </TabSheetTab>

     <TabSheetTab label="Payment">
       <div>This is the Payment tab content</div>
     </TabSheetTab>

     <TabSheetTab label="Shipping">
       <div>This is the Shipping tab content</div>
     </TabSheetTab>
   </TabSheet>
 );
}