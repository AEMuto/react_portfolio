import {Project} from "../../data/projectsData"
import Subheading from "../Subheading"
import {css} from "@emotion/react"
import React from "react"
import {Link} from "react-router-dom"

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
		<div css={styleBasis}>
			<div className="project__card">
				<Link to={`/project/${id}`} title={`Projet ${title}`} className="project__card__img-container">
					<img src={img ?? "https://picsum.photos/800/400"} alt={`Projet ${title}`}/>
				</Link>
				<div className="project__card__txt-container">
					<Link to={`/project/${id}`} title={`Projet ${title}`} className="project__card__title">
						<Subheading margin={"0"}>{title}</Subheading>
					</Link>
					<p className="project__card__txt">{short_desc}</p>
					<Link to={`/project/${id}`}
					   className="project__card__cta"
					   title={`Projet ${title}`}>
						Voir le projet
						<span className="arrow">&#x2192;</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

const borderWidth = .5
const cornerSize = 3
const duration = .3

const styleBasis = css`
  // --borderWidth: .5rem;
  // --cornerSize: 3rem;
  // --duration: .3s;
	height: 100%;
	
  .project__card {
    height: 100%;
    background-color: var(--body--foreground);
    position: relative;
    overflow: hidden;
    display: grid;
    grid-auto-rows: 50%;
    box-shadow: 10px -10px 0px 0px var(--body--background);
    transition: all ${duration}s;

    &:hover {
      &:active {
        box-shadow: 15px -15px 0px 0px var(--body--background);
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
      border: ${borderWidth}rem solid var(--primary);
      transition: border ${duration}s ease-in-out;

      &::before, &::after {
        content: '';
        position: absolute;
        background-color: var(--body--foreground);
        z-index: -1;
        transition: all ${duration}s ease-in-out;
      }

      &::before {
        width: calc(100% - ${cornerSize}rem);
        height: calc(100% + ${borderWidth * 2}rem);
        top: -${borderWidth}rem;
        left: 50%;
        transform: translateX(-50%) scaleX(1);
      }

      &::after {
        height: calc(100% - ${cornerSize}rem);
        width: calc(100% + ${borderWidth * 2}rem);
        left: -${borderWidth}rem;
        top: 50%;
        transform: translateY(-50%) scaleY(1);
      }

      img {
        width: 100%;
        height: auto;

        filter: drop-shadow(8px 6px 8px var(--body--background));
      }
    }

    &__txt-container {
	    width: 100%;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      a {
        align-self: start;
      }
    }

    &__txt {
      // margin: 1rem 0;
    }

    &__cta {
      font-family: "acumin-pro-wide", sans-serif;
      font-size: 1.5rem;
      text-transform: uppercase;
      position: relative;

      &:hover {
        color: var(--primary);
      }

      .arrow {
        display: inline-block;
        transition: transform ${duration}s ease-in-out;
      }

      &::before {
        content: '';
        position: absolute;
        bottom: calc((${borderWidth}rem * -1) - .3rem);
        width: 100%;
        transform-origin: left center;
        transform: scaleX(0);
        height: ${borderWidth}rem;
        background-color: var(--accent);
        transition: all ${duration}s ease-in-out;
      }
    }
  }
`
