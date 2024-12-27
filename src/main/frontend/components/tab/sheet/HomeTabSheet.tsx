import { HorizontalLayout, Button } from '@vaadin/react-components';
import { useTranslation } from 'react-i18next';
import { CircleCheck } from 'lucide-react';

import ImgBackground from 'Frontend/assets/img/8219636_leisure_hobby_art_paint_design_icon.png';
import TextCircleLogo from 'Frontend/components/logo/TextCircleLogo';

export default function HomeTabSheet() {
    const { t } = useTranslation();

    return (
        <>
            <header className="flex justify-center md:h-3/5 border-b">
                <section className="flex flex-col md:flex-row gap-5 justify-between md:w-10/12">
                    <div className="flex flex-col items-center justify-center gap-4 md:w-8/12">
                        <TextCircleLogo text="eimono" />
                        <div className="text-justify text-xl leading-loose p-2">
                            <span className="font-bold mr-1">{t('welcome')}!</span>
                            <span>
                                a plataforma definitiva para escritores criarem, publicarem e venderem seus livros,
                                e elabaoração e correção de trabalho ciêntifico e académico, onde podes encontrar freelancers
                                para realização desses serviços.
                            </span>
                        </div>
                        <HorizontalLayout theme="spacing">
                            <Button theme="primary">Autenticação</Button>
                            <Button theme="primary success">Cadastramento</Button>
                        </HorizontalLayout>
                    </div>
                    <div>
                        <img src={ImgBackground} alt="Logo" />
                    </div>
                </section>
            </header>
            <section className="flex justify-center gap-2 bg-blue-500">
                <div className="flex flex-col   justify-between md:w-11/12 my-10">
                    <div className=" rounded-3xl p-4 m-auto">
                        <TextCircleLogo text="Recursos" contrast={true}/>
                        <div className="mt-3 text-xl text-white">
                            Nesta plataforma apresenta as seguinte ferramentas, para ajudar você nos seus trabalhos.
                        </div>
                    </div>
                    <div className="grid grid-cols-3">

                    </div>
                </div>
            </section>
        </>
    );
}