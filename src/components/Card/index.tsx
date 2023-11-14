import {Project} from "../../data/projectsData"
import Subheading from "../Subheading"
import {css} from "@emotion/react"


export const ProjectCard = (
	{
		id,
		title,
		img,
		tags,
		short_desc,
		markdown,
	}
		: Project) => {
	return (
		<div className="project__card">
			<a href={`/project/${id}`} title={`Projet ${title}`} className="project__card__img-container">
				<img src={img ?? "https://picsum.photos/800/500"} alt={`Projet ${title}`}/>
			</a>
			<div className="project__card__txt-container">
				<a href={`/project/${id}`} title={`Projet ${title}`} className="project__card__title">
					<Subheading>{title}</Subheading>
				</a>
				<p className="project__card__txt">{short_desc}</p>
				<a href={`/project/${id}`}
				   className="project__card__cta"
				   title={`Projet ${title}`}>
					Voir le projet
					<span className="arrow">&#x2192;</span>
				</a>
			</div>
		</div>
	)
}

const styleBasis = css`
  --borderWidth: .5rem;
  --cornerSize: 3rem;
  --duration: .3s;

  .project__card {
    height: 100%;
    background-color: var(--body--brighter);
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    box-shadow: 10px -10px 0px 0px var(--body--darker);
    transition: all var(--duration);

    &:hover {
      &:active {
        box-shadow: 15px -15px 0px 0px var(--body--darker);
      }

      .project__card__img-container {
        border-color: var(--accent);

        &::before {
          transform: translateX(-50%) scaleX(0);
        }

        &::after {
          transform: translateY(-50%) scaleY(0);
        }
      }

      .project__card__cta {
        .arrow {
          transform: translateX(.7rem);
        }

        &::before {
          transform: scaleX(1.05);
        }
      }
    }

    &__img-container {
      display: grid;
      place-items: center;
      background-color: transparent;
      padding: 2rem;
      position: relative;
      z-index: 2;
      border: var(--border-width) solid var(--primary);
      transition: border var(--duration);

      &::before, &::after {
        content: '';
        position: absolute;
        background-color: var(--body--brighter);
        z-index: -1;
        transition: all var(--duration) ease-in-out;
      }

      &::before {
        width: calc(100% - var(--cornerSize));
        height: calc(100% + calc(var(--borderWidth) * 2));
        top: -var(--borderWidth);
        left: 50%;
        transform: translateX(-50%) scaleX(1);
      }

      &::after {
        height: calc(100% - var(--cornerSize));
        width: calc(100% + calc(var(--borderWidth) * 2));
        left: -var(--borderWidth);
        top: 50%;
        transform: translateY(-50%) scaleY(1);
      }

      img {
        width: 100%;
        height: auto;

        filter: drop-shadow(8px 6px 8px var(--body--darker));
      }
    }

    &__txt-container {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      a {
        align-self: start;
      }
    }

    &__txt {
      margin: 2rem 0;
    }

    &__cta {
      font-family: "acumin-pro-wide", sans-serif;
      font-size: 1.5rem;
      text-transform: uppercase;
      position: relative;

      &:hover {
        color: var(--color__primary);
      }

      .arrow {
        display: inline-block;
        transition: transform var(--duration);
      }

      &::before {
        content: '';
        position: absolute;
        bottom: calc((var(--borderWidth) * -1) - .3rem);
        width: 100%;
        transform-origin: left center;
        transform: scaleX(0);
        height: var(--borderWidth);
        background-color: var(--accent);
        transition: all var(--duration);
      }
    }
  }
`
