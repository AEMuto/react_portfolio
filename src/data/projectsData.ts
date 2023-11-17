import FisheyeImg from "../../assets/images/fisheye_result.webp"
import ArgentBankImg from "../../assets/images/argentbank_result.webp"
import HRnetImg from "../../assets/images/hrnet_result.webp"
import FisheyeMarkdown from "./markdown/Fisheye.md"
import test from "./markdown/test.md"

export type TProject = {
	id: number,
	title: string,
	img: string | null,
	short_desc: string,
	tags: string[]
	markdown?: string
}

const projectsData: TProject[] = [
	{
		id: 1,
		title: "Fisheye",
		img: FisheyeImg,
		short_desc: "Une plateforme permettant à des photographes de présenter leurs travaux.",
		tags: ["VanillaJS", "OOP (Programmation Orienté Objet)", "Factory Pattern", "Accessibilité"],
		markdown: FisheyeMarkdown,
	},
	{
		id: 2,
		title: "ArgentBank",
		img: ArgentBankImg,
		short_desc: "Front-end d'une application web permettant la connexion et la création d'un utilisateur via l'usage d'un JWT.",
		tags: ["React", "Redux", "Typescript"],
		markdown: test,
	},
	{
		id: 3,
		title: "HRnet",
		img: HRnetImg,
		short_desc: "CRM d'une entreprise permettant de gérer la création et le suivi de ses profils employés.",
		tags: ["React", "Redux", "Typescript", "Storybook"],
		markdown: test,
	},
	{
		id: 4,
		title: "D20Codex",
		img: null,
		short_desc: "Application web répertoriant les données de plusieurs systèmes de jeu de rôle.",
		tags: ["React", "Typescript", "Scroll Infini", "Virtualisation", "Appwrite"],
		markdown: test,
	}
]

export default projectsData
