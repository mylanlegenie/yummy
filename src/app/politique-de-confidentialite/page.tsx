import type { Metadata } from "next";
import LegalPage from "../component/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Yummy! FastFood",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      introduction="Cette page explique simplement comment les informations transmises à Yummy! FastFood sont utilisées et protégées."
      sections={[
        {
          title: "Données collectées",
          content: <p>Lorsque vous nous contactez, nous pouvons recevoir votre nom, votre adresse e-mail, le sujet de votre demande et le contenu de votre message.</p>,
        },
        {
          title: "Pourquoi nous les utilisons",
          content: <p>Ces informations servent uniquement à comprendre votre demande, vous répondre et assurer le suivi de nos échanges.</p>,
        },
        {
          title: "Conservation et destinataires",
          content: <p>Les données sont accessibles aux seules personnes qui traitent les demandes reçues. Elles sont conservées uniquement pendant la durée nécessaire au suivi de l’échange et au respect de nos obligations.</p>,
        },
        {
          title: "Vos droits",
          content: <p>Vous pouvez demander l’accès, la rectification ou la suppression de vos données, ainsi que vous opposer à certains traitements, en écrivant à contact@yummy-fastfood.fr.</p>,
        },
        {
          title: "Responsable du traitement",
          content: <p>Yummy! FastFood — coordonnées juridiques et postales à compléter par l’éditeur du site avant sa publication.</p>,
        },
      ]}
    />
  );
}
