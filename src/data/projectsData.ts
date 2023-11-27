import FisheyeImg from "../../assets/images/fisheye_result.webp"
import ArgentBankImg from "../../assets/images/argentbank_result.webp"
import HRnetImg from "../../assets/images/hrnet_result.webp"
import D20CodexImg from "../../assets/images/d20codex3_800_667.webp"
import FisheyeMarkdown from "./markdown/fisheye.md"
import ArgentBankMarkdown from "./markdown/argentbank.md"
import HRnetMarkdown from "./markdown/hrnet.md"
import D20CodexMarkdown from "./markdown/d20codex.md"

export type TProject = {
	id: number,
	title: string,
	img: string | null,
	short_desc: string,
	tags: string[]
	markdown?: string
	urls: Array<{ name: string, url: string }>

}

const projectsData: TProject[] = [
	{
		id: 1,
		title: "Fisheye",
		img: FisheyeImg,
		short_desc: "Une plateforme accessible permettant à des photographes de présenter leurs travaux.",
		tags: ["Javascript", "OOP", "Factory Pattern", "Accessibilité"],
		markdown: FisheyeMarkdown,
		urls: [
			{name: "Voir le site", url: "https://aemuto.github.io/AntoineMarseaud_6_10082021/"},
			{name: "Voir le code", url: "https://github.com/AEMuto/AntoineMarseaud_6_10082021"},
		],
	},
	{
		id: 2,
		title: "ArgentBank",
		img: ArgentBankImg,
		short_desc: "Front-end d'une application web permettant la connexion, création et modification d'un utilisateur via l'usage d'un JWT.",
		tags: ["React", "Redux", "Typescript"],
		markdown: ArgentBankMarkdown,
		urls: [
			{name: "Voir le site", url: "https://argent-bank.vercel.app/"},
			{name: "Voir le code", url: "https://github.com/AEMuto/AntoineMarseaud_13_16022022"},
		],
	},
	{
		id: 3,
		title: "HRnet",
		img: HRnetImg,
		short_desc: "CRM d'une entreprise permettant de gérer la création et le suivi de ses profils employés.",
		tags: ["React", "Redux", "Typescript", "Storybook"],
		markdown: HRnetMarkdown,
		urls: [
			{name: "Voir le site", url: "https://antoine-marseaud-hrnet-app.vercel.app/"},
			{name: "Voir le code", url: "https://github.com/AEMuto/AntoineMarseaud_14_HRnet_Application_23032022"},
		],
	},
	{
		id: 4,
		title: "D20Codex",
		img: D20CodexImg,
		short_desc: "Application web répertoriant les données de plusieurs systèmes de jeu de rôle.",
		tags: ["React", "Typescript", "Scroll Infini", "Virtualisation", "Appwrite"],
		markdown: D20CodexMarkdown,
		urls: [
			{name: "Voir le site", url: "https://d20codex.vercel.app/"},
			{name: "Voir le code", url: "https://github.com/AEMuto/d20codex"},
		],
	},
]

export default projectsData
