import type { Metadata } from "next";
import LegalPage from "../component/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales | Yummy! FastFood",
};

export default function LegalNoticePage() {
  return (
    <LegalPage
      title="Mentions légales"
      introduction="Les informations ci-dessous identifient l’éditeur et les responsables du site Yummy! FastFood."
      sections={[
        {
          title: "Éditeur du site",
          content: <p>Yummy! FastFood — raison sociale, forme juridique, capital social, adresse du siège, numéro SIREN et numéro de TVA à compléter avant publication.</p>,
        },
        {
          title: "Directeur de la publication",
          content: <p>Nom et qualité du directeur ou de la directrice de la publication à compléter.</p>,
        },
        {
          title: "Hébergement",
          content: <p>Nom, raison sociale, adresse et numéro de téléphone de l’hébergeur à compléter selon la solution utilisée pour la mise en ligne.</p>,
        },
        {
          title: "Propriété intellectuelle",
          content: <p>Les textes, visuels, marques et éléments graphiques présents sur ce site sont protégés. Toute reproduction ou utilisation sans autorisation préalable est interdite.</p>,
        },
        {
          title: "Contact",
          content: <p>Pour toute question concernant le site, écrivez à contact@yummy-fastfood.fr.</p>,
        },
      ]}
    />
  );
}
