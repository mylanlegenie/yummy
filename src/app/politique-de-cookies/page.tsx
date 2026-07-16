import type { Metadata } from "next";
import LegalPage from "../component/LegalPage";

export const metadata: Metadata = {
  title: "Politique de cookies | Yummy! FastFood",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Politique de cookies"
      introduction="Cette page présente l’utilisation des cookies et technologies similaires sur le site."
      sections={[
        {
          title: "Utilisation actuelle",
          content: <p>Le site ne dépose actuellement aucun cookie publicitaire ou de mesure d’audience nécessitant votre consentement.</p>,
        },
        {
          title: "Services externes",
          content: <p>Certaines pages peuvent intégrer un service cartographique externe. Celui-ci peut appliquer sa propre politique de confidentialité lorsque vous interagissez avec son contenu.</p>,
        },
        {
          title: "Évolution de cette politique",
          content: <p>Si de nouveaux outils nécessitant des cookies sont ajoutés, cette page sera mise à jour et un mécanisme de consentement sera proposé lorsque cela est requis.</p>,
        },
        {
          title: "Nous contacter",
          content: <p>Pour toute question relative aux cookies, écrivez à contact@yummy-fastfood.fr.</p>,
        },
      ]}
    />
  );
}
