import { t } from "i18next";

import Biodechet from "../assets/images/iconsCategory/Biodechet.png";
import Bois from "../assets/images/iconsCategory/Bois.png";
import Bouchon from "../assets/images/iconsCategory/Bouchon.png";
import Bouteille from "../assets/images/iconsCategory/BouteillePlastique.png";
import Canette from "../assets/images/iconsCategory/Canette.png";
import Carton from "../assets/images/iconsCategory/CartonPlie.png";
import DEE from "../assets/images/iconsCategory/DEE.png";
import GobeletCarton from "../assets/images/iconsCategory/GobeletCarton.png";
import GobeletPlastique from "../assets/images/iconsCategory/GobeletPlastique.png";
import Marc from "../assets/images/iconsCategory/Marc.png";
import Megot from "../assets/images/iconsCategory/Megot.png";
import NeonAmpoule from "../assets/images/iconsCategory/NeonAmpoule.png";
import Papier from "../assets/images/iconsCategory/Papier.png";
import PapierConfidentiel from "../assets/images/iconsCategory/PapierConfidentiel.png";
import Verre from "../assets/images/iconsCategory/Verre.png";
import DIB from "../assets/images/iconsCategory/DIB.png";

const DataRouting = () => ([
    { label: t("Biowaste"), url: "dechet-alimentaire", image: Biodechet },
	{ label: t("Wood"), url: "bois", image: Bois },
	{ label: t("Cap"), url: "bouchon", image: Bouchon },
	{ label: t("Bottle"), url: "bouteille-en-plastique", image: Bouteille },
	{ label: t("Can"), url: "canette", image: Canette },
	{ label: t("Cardboard"), url: "carton", image: Carton },
	{ label: t("DEE"), url: "dechet-electronique", image: DEE },
	{ label: t("PlasticCup"), url: "gobelet-en-plastique", image: GobeletPlastique },
	{ label: t("PaperCup"), url: "gobelet-en-carton", image: GobeletCarton },
	{ label: t("CoffeeGrounds"), url: "cafe", image: Marc },
	{ label: t("CigarettesButt"), url: "cigarette", image: Megot },
	{ label: t("Bulb"), url: "ampoule", image: NeonAmpoule },
	{ label: t("Paper"), url: "papier", image: Papier },
	{ label: t("ConfidentialPaper"), url: "papier-confidentiel", image: PapierConfidentiel },
	{ label: t("Glass"), url: "verre", image: Verre },
	{ label: t("DIB"), url: "autres-dEchets", image: DIB }
]);

export default DataRouting;
