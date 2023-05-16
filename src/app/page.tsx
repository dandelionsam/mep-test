'use client';
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';
import Divider from '../components/Divider/Divider';
import MenuButton from '../components/MenuButton/MenuButton';
import SearchButton from '../components/SearchButton/SearchButton';
import SearchInput from '../components/SearchInput/SearchInput';
import styles from '../styles/Home.module.scss';
import useDeviceSize from './hooks/useDeviceSize';

export default function Home() {
  const [width, _] = useDeviceSize();

  return (
    <main>
      <Banner>
        {'Spazi di lavoro impareggiabili. Ottimi sconti. Paghi il 25% in meno. *Si applicano Termini e condizioni'}
      </Banner>
      <header className="w-full">
        {width < 361 ? (
          <nav className="flex items-center justify-between mx-8 my-2">
            <div>
              <div className="text-base">🧾</div>
            </div>
            <div>
              <div className="text-base">🔍</div>
            </div>
            <div>
              <a href="">
                <img
                  className="w-14"
                  src="https://assets.iwgplc.com/image/upload/Sitecore/CD/-/media/regus/images/footer/regusheader_new.ashx"
                />
              </a>
            </div>
            <div>
              <div className="text-base">📞</div>
            </div>
            <div>
              <div className="text-base">👤</div>
            </div>
          </nav>
        ) : (
          <nav className="flex mx-11 my-5 justify-between p-4">
            <div className="flex">
              <div className="pr-6">
                <a href="">
                  <img src="https://assets.iwgplc.com/image/upload/Sitecore/CD/-/media/regus/images/footer/regusheader_new.ashx" />
                </a>
              </div>
              <Divider variant="tall" />
              <ul className={styles['nav-buttons']}>
                <li className="nav-button-item">
                  <MenuButton>{'Che cosa facciamo'}</MenuButton>
                </li>
                <li className="nav-button-item">
                  <MenuButton>{'Inizia'}</MenuButton>
                </li>
                <li className="nav-button-item">
                  <MenuButton>{'Scopri Regus'}</MenuButton>
                </li>
              </ul>
            </div>
            <div className={styles['menu-links']}>
              <div className={styles['phone-icon']}></div>
              <Divider />
              <div className={styles['search-icon']}>
                <span>Cerca una sede</span>
              </div>
              <Divider variant="tall" />
              <div className={styles['profile-icon']}></div>
            </div>
          </nav>
        )}
      </header>
      <section className="w-100 mx-0 sm:mx-11 mb-52">
        <div className="relative">
          <img
            className="min-h-[425px] object-none sm:object-contain sm:w-full"
            src="https://assets.iwgplc.com/image/upload/c_fill,f_auto,q_auto,w_936,h_424,g_auto:subject,ar_117:53/Sitecore/CD/-/media/regus/redesign/homepage/hero/searchv2heroofficespace.ashx?h=848&w=2624&hash=B54B3CEE6CB804EA26005C7CB8025B88"
          />
          <div className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-full text-center px-5">
            <h2 className="text-white text-sm sm:text-lg">
              Da una singola postazione a un intero edificio. A te la scelta.
            </h2>
            <div className="flex items-end justify-center">
              <h1 className="text-white sm:text-6xl text-4xl inline font-medium">Uffici a modo tuo</h1>
              <span className="text-8xl text-red-600">.</span>
            </div>
          </div>
          <div className={styles['search-widget']}>
            <div className={styles['search-widget-categories']}>
              <ul className="w-full justify-center hidden sm:flex">
                <li className={`${styles['search-widget-category']} ${styles['search-widget-category-selected']}`}>
                  <img
                    className="w-6 h-6 mr-4"
                    src="https://www.regus.com/-/media/regus/redesign/secondary-level-icons/solutionofficespace.ashx"
                  />
                  Uffici
                </li>
                <li className={styles['search-widget-category']}>
                  <img
                    className="w-6 h-6 mr-4"
                    src="https://www.regus.com/-/media/regus/redesign/secondary-level-icons/solutioncoworking.ashx"
                  />
                  Coworking
                </li>
                <li className={styles['search-widget-category']}>
                  <img
                    className="w-6 h-6 mr-4"
                    src="https://www.regus.com/-/media/regus/redesign/secondary-level-icons/solutionvirtualoffice.ashx"
                  />
                  Uffici Virtuali
                </li>
                <li className={styles['search-widget-category']}>
                  <img
                    className="w-6 h-6 mr-4"
                    src="https://www.regus.com/-/media/regus/redesign/secondary-level-icons/solutionmeetingrooms.ashx"
                  />
                  Sale Riunioni
                </li>
              </ul>
            </div>
            <div className={styles['search-widget-searchbar']}>
              <div className="gap-4 w-full px-8 py-6">
                <SearchInput />
                {width > 360 && <SearchButton text="Cerca" />}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-4 md:mx-11 sm:flex md:flex-wrap justify-between md:gap-4">
        <Card
          icon="https://www.regus.com/-/media/regus/redesign/primary-level-icons/platform_icon.ashx"
          title="Le nostre soluzioni"
          description="Esplora la nostra gamma di prodotti e servizi"
        />
        <Card
          icon="https://www.regus.com/-/media/regus/redesign/primary-level-icons/expert_icon.ashx"
          title="Parla con noi"
          description="Richiedi consigli ai nostri esperti, 24/7"
        />
        <Card
          icon="https://www.regus.com/-/media/regus/redesign/primary-level-icons/workspace_icon.ashx"
          title="Prenota spazi di lavoro"
          description="Prenota subito sale riunioni e uffici temporanei"
        />
        <Card
          icon="https://www.regus.com/-/media/regus/redesign/primary-level-icons/virtual_icon.ashx"
          title="Configura un ufficio virtuale"
          description="Inizia oggi a sviluppare una presenza reale"
        />
        <Card
          icon="https://www.regus.com/-/media/regus/redesign/primary-level-icons/membership_icon.ashx"
          title="Acquista una membership"
          description="Accedi on demand a migliaia di sedi nel mondo"
        />
        <Card
          icon="https://www.regus.com/-/media/regus/redesign/primary-level-icons/app_icons.ashx"
          title="Esplora la nostra app"
          description="Scarica l'app e inizia subito"
        />
      </section>
    </main>
  );
}
