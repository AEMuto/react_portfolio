/*THUMBNAIL*/
import FisheyeThumbnail from "../../assets/images/fisheye_thumbnail.webp"
import ArgentBankThumbnail from "../../assets/images/argentbank_thumbnail.webp"
import HRnetThumbnail from "../../assets/images/hrnet_thumbnail.webp"
import D20CodexThumbnail from "../../assets/images/d20codex/d20codex3_800_667.webp"
/*IMG*/
const FisheyeIMGs = import.meta.glob("@assets/images/fisheye/*.webp", { as: 'url', eager: true  })
const ArgentBankIMGs = import.meta.glob("@assets/images/argentbank/*.webp", { as: 'url', eager: true  })
const HRnetIMGs = import.meta.glob("@assets/images/hrnet/*.webp", { as: 'url', eager: true  })
const D20CodexIMGs = import.meta.glob("@assets/images/d20codex/*.webp", { as: 'url', eager: true  })
/*MARKDOWN*/
import FisheyeMarkdown from "./markdown/fisheye.md"
import ArgentBankMarkdown from "./markdown/argentbank.md"
import HRnetMarkdown from "./markdown/hrnet.md"
import D20CodexMarkdown from "./markdown/d20codex.md"

export type TProject = {
	id: number,
	title: string,
	thumbnail: string | null,
	pics?:  Record<string, string>,
	short_desc: string,
	tags: string[]
	markdown?: string
	urls: {
		live: string | null,
		github: string | null
	}

}

const projectsData: TProject[] = [
	{
		id: 0,
		title: "D20Codex",
		thumbnail: D20CodexThumbnail,
		pics: D20CodexIMGs,
		short_desc: "Application web répertoriant les données de plusieurs systèmes de jeu de rôle.",
		tags: ["React", "Typescript", "Scroll Infini", "Virtualisation"],
		markdown: D20CodexMarkdown,
		urls: {
			live: "https://d20codex.vercel.app/",
			github: null
		},
	},
	{
		id: 1,
		title: "Fisheye",
		thumbnail: FisheyeThumbnail,
		pics: FisheyeIMGs,
		short_desc: "Une plateforme accessible permettant à des photographes de présenter leurs travaux.",
		tags: ["Javascript", "OOP", "Factory Pattern", "Accessibilité"],
		markdown: FisheyeMarkdown,
		urls: {
			live: "https://aemuto.github.io/AntoineMarseaud_6_10082021/",
			github: "https://github.com/AEMuto/AntoineMarseaud_6_10082021"
		},
	},
	{
		id: 2,
		title: "ArgentBank",
		thumbnail: ArgentBankThumbnail,
		pics: ArgentBankIMGs,
		short_desc: "Front-end d'une application web permettant la connexion, création et modification d'un utilisateur via l'usage d'un JWT.",
		tags: ["React", "Redux", "Typescript"],
		markdown: ArgentBankMarkdown,
		urls: {
			live: "https://argent-bank.vercel.app/",
			github: "https://github.com/AEMuto/AntoineMarseaud_13_16022022"
		},
	},
	{
		id: 3,
		title: "HRnet",
		thumbnail: HRnetThumbnail,
		pics: HRnetIMGs,
		short_desc: "CRM d'une entreprise permettant de gérer la création et le suivi de ses profils employés.",
		tags: ["React", "Redux", "Typescript", "Storybook"],
		markdown: HRnetMarkdown,
		urls: {
			live: "https://antoine-marseaud-hrnet-app.vercel.app/",
			github: "https://github.com/AEMuto/AntoineMarseaud_14_HRnet_Application_23032022"
		},
	},
]

export default projectsData
