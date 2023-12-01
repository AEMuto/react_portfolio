import React from "react"
import {Link, useLoaderData} from "react-router-dom"
import styled from "@emotion/styled"
import {MdOutlineArrowRightAlt} from "react-icons/md"
import {TProject} from "../../data/projectsData"
import Heading from "../../components/Heading"
import ExternalLink from "../../components/ExternalLink"
import {SlideContainer} from "../../components/Slide"
import Loader from "../../components/Loader"

const TextContent = React.lazy(() => import("./TextContent"))

const Project = () => {
	// Data coming from the loader, see router.tsx
	const {current, total} = useLoaderData() as { current: TProject, total: number }
	const {title, markdown, id, urls, pics} = current

	const picsArray = Object.values(pics ?? {})

	const nextProject = id === total - 1 ? 0 : id + 1
	const previousProject = id === 0 ? total - 1 : id - 1 // Because total is the length of the array, not the last index

	return (

		<StyledSlideContainer>
			<Heading size="xxl">
				{title}
			</Heading>
			<PicturesGallery>
				<div className="container">
					{picsArray.map((pic_path, index) => (
						<img src={pic_path} alt={title} key={index}/>
					))}
				</div>
			</PicturesGallery>
			<ExternalLinksContainer>
				{urls.github &&
            <ExternalLink
                href={urls.github}
                title="Voir le code source sur Github"
                target="_blank"
            >
                Github
            </ExternalLink>
				}
				{urls.live &&
            <ExternalLink
                href={urls.live}
                title="Voir le projet en ligne"
                target="_blank"
            >
                Voir le projet
            </ExternalLink>
				}
			</ExternalLinksContainer>
			<React.Suspense fallback={<Loader/>}>
				<TextContent markdown={markdown}/>
			</React.Suspense>
			<ProjectNavArrowContainer>
				{/*Next & Prev arrows*/}
				<Link to={`/project/${previousProject}`}>
					<MdOutlineArrowRightAlt size={32} className="back"/>
					<span>Précédent</span>
				</Link>
				<Link to={`/project/${nextProject}`}>
					<span>Suivant</span>
					<MdOutlineArrowRightAlt size={32} className="next"/>
				</Link>
			</ProjectNavArrowContainer>
		</StyledSlideContainer>

	)
}

export default Project

const ExternalLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 2rem;

  a {
    font-size: var(--font-size-md);
  }
`

const PicturesGallery = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-bottom: 2.5rem;

  .container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: nowrap;

    img {
      width: 300px;
      height: auto;
    }
  }
`

const ProjectNavArrowContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 0;
  //gap: 2rem;
  a {
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-sm);
    line-height: 1;
    position: relative;

    svg.back {
      transform: rotate(180deg);
    }

    &:hover {
      color: var(--primary--hover);

      svg.back {
        transform: rotate(180deg) translateX(5px);
      }

      svg.next {
        transform: translateX(5px);
      }
    }

    & span {
      transform: translateY(-1px);
    }
  }

`

const StyledSlideContainer = styled(SlideContainer)`
  display: flex;
  flex-direction: column;
  max-width: 135ch;
  margin: 0 auto;
  padding: 0 1.6rem;
`


