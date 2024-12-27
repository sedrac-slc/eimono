import { useTranslation } from 'react-i18next';
import ImgBackground from '../../../assets/img/8219636_leisure_hobby_art_paint_design_icon.png';

export default function HomeTabSheet(){
    const { t } = useTranslation();

    return (
        <header className="flex gap-2">
            <section className="flex gap-5">
                <div className="">
                    <div className="text-2xl">{t('welcome')}</div>
                </div>
                <div>
                    <ImgBackground/>
                </div>
            </section>
        </header>
    );
}