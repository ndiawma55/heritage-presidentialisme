import React from 'react';
import Section from './components/Section';
import Quote from './components/Quote';
import DevelopmentChart from './components/DevelopmentChart';

const App: React.FC = () => {
  const sections = [
    { id: 'introduction', icon: 'fas fa-landmark', title: 'Héritage colonial et présidentialisme importé' },
    { id: 'dia', icon: 'fas fa-gavel', title: 'Mamadou Dia et la tentative avortée d’un parlementarisme africain' },
    { id: 'senegal', icon: 'fas fa-balance-scale', title: 'Le présidentialisme sénégalais : un système d’étouffement' },
    { id: 'epreuve', icon: 'fas fa-shield-alt', title: "L'Épreuve du Changement" },
    { id: 'monde', icon: 'fas fa-globe-europe', title: 'Leçons du monde : le parlementarisme, moteur des nations développées' },
    { id: 'afrique', icon: 'fas fa-globe-africa', title: 'Et en Afrique ? Le triomphe du présidentialisme et ses ravages' },
    { id: 'correlation', icon: 'fas fa-chart-line', title: 'Corrélation entre régime politique et développement' },
    { id: 'souverain', icon: 'fas fa-dove', title: 'Pour un parlementarisme africain souverain' },
    { id: 'conclusion', icon: 'fas fa-flag-checkered', title: 'Conclusion : Réformer ou échouer' },
  ];

  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 min-h-screen">
      
      <header className="relative h-96 flex items-center justify-center text-white text-center p-4">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <img src="https://picsum.photos/1600/900?grayscale&blur=2" alt="Architectural background" className="absolute inset-0 w-full h-full object-cover z-[-1]"/>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Héritage Colonial et Présidentialisme
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light max-w-3xl mx-auto">
            Une analyse critique de l'impact des régimes politiques sur le développement en Afrique, avec un focus sur le Sénégal.
          </p>
        </div>
      </header>

      <nav className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-20">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-2 md:space-x-4 overflow-x-auto py-3">
            {sections.map(section => (
              <li key={section.id} className="flex-shrink-0">
                <a href={`#${section.id}`} className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300 px-3 py-2 rounded-md">
                  <i className={`${section.icon} hidden md:inline mr-2`}></i>{section.title.split(':')[0]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="container mx-auto p-4 md:p-8 max-w-4xl">
        <Section id="introduction" icon="fas fa-landmark" title="Héritage colonial et présidentialisme importé">
          <p>
            À l'aube des indépendances, les nations africaines ont hérité de structures étatiques modelées par les puissances coloniales. La France, notamment, a légué un modèle jacobin et centralisateur, préfigurant des régimes présidentialistes forts. Ce système, conçu pour servir les intérêts de la métropole, s'est avéré inadapté aux réalités socio-culturelles africaines, posant les bases d'une instabilité politique chronique.
          </p>
          <p className="mt-4">
            Le Sénégal et, au-delà, l’ensemble de l’Afrique francophone, ne peuvent aspirer à la souveraineté économique, politique et sécuritaire sans une refondation institutionnelle radicale et lucide. Nos États, depuis les indépendances, fonctionnent dans un cadre juridique et politique façonné non pas pour libérer nos peuples, mais pour les maintenir dans une dépendance subtile. Le régime présidentiel, tout comme le franc CFA, a été pensé et imposé pour prolonger l’influence du colonisateur sous des formes nouvelles : dépendance monétaire, dépendance politique, dépendance intellectuelle.
          </p>
        </Section>
        
        <Section id="dia" icon="fas fa-gavel" title="Mamadou Dia et la tentative avortée d’un parlementarisme africain">
          <p>
            Au Sénégal, la crise politique de décembre 1962 est un tournant majeur. Elle oppose le Président Léopold Sédar Senghor, partisan d'un exécutif fort, au Président du Conseil Mamadou Dia, qui prônait un régime parlementaire rationalisé. La victoire de Senghor a non seulement écarté Dia, mais a surtout anéanti la perspective d'un modèle politique basé sur le partage du pouvoir et la responsabilité gouvernementale devant le parlement.
          </p>
          <Quote author="Mamadou Dia">
            Le développement ne peut être l'œuvre d'un seul homme, mais celle d'un peuple organisé et conscient de ses responsabilités.
          </Quote>
        </Section>
        
        <Section id="senegal" icon="fas fa-balance-scale" title="Le présidentialisme sénégalais : un système d’étouffement">
          <p>
            Le régime présidentialiste sénégalais, consolidé après 1962, se caractérise par une hyper-concentration des pouvoirs entre les mains du chef de l'État. Le président nomme, dissout, légifère par ordonnance et contrôle l'appareil judiciaire. Cette absence de contre-pouvoirs effectifs a étouffé le débat démocratique, marginalisé le parlement et favorisé une culture de l'allégeance plutôt que de la compétence.
          </p>
           <p className="mt-4">
            Ce système n’a pas seulement concentré les pouvoirs entre les mains d’un seul homme ; il a désarmé la société tout entière, privant les citoyens du droit de contrôler leurs dirigeants, de demander des comptes, et d’être partie prenante du destin collectif. Il a produit des États forts contre leur peuple, mais faibles face aux puissances extérieures. Des présidents tout-puissants à l’intérieur, mais impuissants à défendre la souveraineté de leurs nations sur la scène internationale.
          </p>
           <div className="mt-6 p-4 border-l-4 border-gray-500 bg-gray-50 dark:bg-gray-800 rounded-r-lg">
            <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">La dérive des partis politiques</h4>
            <p>
              Le régime présidentiel, tel qu’il fonctionne aujourd’hui, a engendré une prolifération de partis politiques sans représentativité réelle. Le Sénégal compte plus de 200 formations politiques, mais combien d’entre elles disposent d’élus, de députés, ou même d’un programme crédible ? Ces micro-partis, souvent créés par des élites déconnectées du terrain, ne cherchent pas à conquérir le pouvoir par le suffrage universel. Ils gravitent autour du président, espérant obtenir un poste, une nomination, ou une faveur.
            </p>
            <p className="mt-2">
              Dans ce système, le mérite électoral ne compte plus : c’est la loyauté personnelle qui décide. Des orateurs habiles, des laudateurs professionnels, des courtisans sans base populaire accèdent à des responsabilités que le peuple n’a jamais validées. Le présidentialisme favorise cette dérive : un seul homme concentre tout, et autour de lui se forme une cour politique d’intellectuels, de stratèges et d’opportunistes en quête de faveur. Ces élites savent qu’elles ne peuvent pas atteindre 4 ou 5 % des voix dans une élection libre. Alors, elles défendent le statu quo : un président fort qu’elles peuvent influencer, manipuler ou flatter.
            </p>
            <p className="mt-2 italic text-gray-500 dark:text-gray-400">
              C’est ainsi que le Sénégal s’éloigne chaque jour davantage de l’esprit de sa Constitution, qui stipule pourtant que « les partis politiques concourent à l’expression du suffrage universel. » Dans les faits, beaucoup de ces partis ne concourent à rien : ils se contentent de soutenir les formations dominantes, vivant dans l’ombre du pouvoir exécutif.
            </p>
          </div>
        </Section>

        <Section id="epreuve" icon="fas fa-shield-alt" title="L'Épreuve du Changement : Le Cas Sonko-Diomaye">
          <p>
            Le système clientéliste décrit précédemment ne reste pas passif face à la volonté de rupture. Les attaques agressives et coordonnées contre le Premier ministre Ousmane Sonko en sont la parfaite illustration. Ces offensives sont orchestrées par les mêmes intellectuels sans base politique, se servant de relais médiatiques, d'activistes et de segments de la société civile en quête de prébendes.
          </p>
          <p className="mt-4">
            Leur objectif est de semer la division entre le Premier ministre et le Président Bassirou Diomaye Faye, car le nouveau pouvoir a verrouillé les circuits de l'argent facile et des détournements. Ces différentes couches de la société, habituées aux faveurs du présidentialisme, roulent pour leurs propres intérêts et ceux de leurs mentors, à l'intérieur comme à l'extérieur du pays. C'est pourquoi ils rejettent la rupture et le changement. Ils ne veulent ni d'un parlementarisme qui rend le pouvoir au peuple, ni d'un système où le mérite électoral prime. Leur survie dépend du statu quo : un présidentialisme fort, sans partis politiques porteurs de projets, où le pouvoir se négocie dans les antichambres et non devant les urnes.
          </p>
          <div className="mt-6 p-4 border-l-4 border-green-500 bg-green-50 dark:bg-gray-800 rounded-r-lg">
            <h4 className="font-semibold text-lg text-green-800 dark:text-green-300 mb-2">La Riposte par la Transparence</h4>
            <p>
              Face à une offensive sans précédent (fausses informations, insultes, documents falsifiés), Ousmane Sonko adopte une stratégie de rupture. Là où ses adversaires attendent la provocation, il répond par la transparence et la pédagogie. Plutôt que la riposte verbale, il privilégie la communication directe, les rapports d'audit publics et les conférences de presse explicatives sur les réformes.
            </p>
            <p className="mt-2">
              Cette attitude, rare sur le continent, tranche avec la brutalité politique héritée du présidentialisme. En refusant de céder à la violence verbale ou à la vengeance, il transforme l'attaque en leçon de civisme et redéfinit les codes du pouvoir : un pouvoir qui ne s'impose plus par la peur, mais par l'exemple et la responsabilité.
            </p>
          </div>
        </Section>
        
        <Section id="monde" icon="fas fa-globe-europe" title="Leçons du monde : le parlementarisme, moteur des nations développées">
          <p>
            La plupart des nations les plus développées et stables au monde (Allemagne, Japon, Canada, pays scandinaves) ont adopté des régimes parlementaires. Ce système favorise la négociation, le compromis et la formation de coalitions, assurant une meilleure représentativité et une plus grande stabilité gouvernementale. Le Premier ministre, issu de la majorité parlementaire, est directement responsable devant les élus du peuple, garantissant une réactivité accrue aux attentes citoyennes.
          </p>
        </Section>
        
        <Section id="afrique" icon="fas fa-globe-africa" title="Et en Afrique ? Le triomphe du présidentialisme et ses ravages">
          <p>
            Sur le continent, le présidentialisme est devenu la norme. Ce modèle a souvent conduit à des "présidences à vie", à la personnalisation du pouvoir, au népotisme et à la corruption endémique. En affaiblissant les institutions au profit d'un seul homme, il a créé un terrain fertile pour les coups d'État et les conflits civils, freinant durablement le développement économique et social.
          </p>
        </Section>

        <Section id="correlation" icon="fas fa-chart-line" title="Corrélation entre régime politique et développement">
          <p>
            Les données empiriques suggèrent une forte corrélation entre la nature du régime politique et les indicateurs de développement. Les régimes parlementaires tendent à surpasser les régimes présidentialistes en matière de stabilité, de croissance économique inclusive, de contrôle de la corruption et de respect de l'État de droit. Le graphique ci-dessous illustre cette tendance sur la base d'indicateurs composites.
          </p>
          <DevelopmentChart />
        </Section>
        
        <Section id="souverain" icon="fas fa-dove" title="Pour un parlementarisme africain souverain">
          <p>
            Il ne s'agit pas d'importer un modèle clé en main, mais de concevoir un parlementarisme africain souverain, adapté à nos réalités. Un tel régime renforcerait les parlements, valoriserait le rôle des partis politiques comme porteurs de projets de société, et instaurerait un dialogue permanent entre l'exécutif et le législatif. Il permettrait l'émergence d'un leadership collectif et responsable, antidote à la personnalisation du pouvoir.
          </p>
          <p className="mt-4">
            Le parlementarisme offrirait un tout autre modèle. Dans un système parlementaire, seuls les partis capables de gagner la confiance des électeurs siègent à l’Assemblée nationale, participent à la formation du gouvernement et assument la responsabilité politique. Les formations sans base populaire disparaissent naturellement, car le pouvoir se gagne par les urnes — pas par les faveurs. Le débat d’idées remplace la course à la nomination, et la compétence supplante la flatterie.
          </p>
        </Section>
        
        <Section id="conclusion" icon="fas fa-flag-checkered" title="Conclusion : Réformer ou échouer">
          <p>
            L'Afrique est à la croisée des chemins. Persister dans le modèle hyper-présidentiel hérité de la colonisation, c'est condamner le continent à un cycle d'instabilité et de sous-développement. Oser la réforme institutionnelle en faveur d'un parlementarisme repensé est la voie la plus sûre pour construire des États de droit solides, des économies prospères et des sociétés justes et apaisées. Le choix est clair : il faut réformer en profondeur pour ne pas échouer collectivement.
          </p>
        </Section>
      </main>

      <footer className="bg-gray-800 dark:bg-black text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-bold mb-2">Remerciements et prochaines étapes</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cette analyse est une contribution au débat sur l'avenir institutionnel de l'Afrique. La prochaine étape consiste à ouvrir des forums de discussion panafricains pour élaborer des propositions concrètes de réformes constitutionnelles adaptées à chaque contexte national.
            </p>
            <p className="mt-6 text-sm text-gray-400">Fait par Polidata Macodou Ndione</p>
            <p className="mt-4 text-sm text-gray-500">&copy; {new Date().getFullYear()} - Analyse Politique Panafricaine. Tous droits réservés.</p>
        </div>
      </footer>

    </div>
  );
};

export default App;
