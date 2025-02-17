import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import Subheading from "@components/Subheading";
import { Project } from "@/projects/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "@components/Image";

export const ProjectCard = ({ id, title, thumbnail, tags, shortDesc }: Project) => {
  const {language, t} = useLanguage();
  return (
    <div css={styleBasis}>
      <div className="project__card">
        <Link
          to={`/project/${id}`}
          title={`Projet ${title}`}
          className="project__card__img-container">
          <Image 
          src={thumbnail.src ?? "https://picsum.photos/800/400"} 
          alt={t({en: `Project ${title}`, fr: `Projet ${title}`}) as string}
          sizes="(min-width: 1080px) 25%, (min-width: 810px) 33%, (min-width: 540px) 50%, 100vw" />
        </Link>
        <div className="project__card__txt-container">
          <Link
            to={`/project/${id}`}
            title={`Projet ${title}`}
            className="project__card__title">
            <Subheading margin={"0"}>{title}</Subheading>
          </Link>
          <p className="project__card__txt">{shortDesc[language]}</p>
          <div className="project__card__tags-container">
            {tags.map((tag) => (
              <span key={tag} className="project__card__tag">
                {tag}
              </span>
            ))}
          </div>
          <Link
            to={`/project/${id}`}
            className="project__card__cta"
            title={`Projet ${title}`}>
            {t({en: "View project", fr: "Voir le projet"})}
            <span className="arrow">&#x2192;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const borderWidth = 0.55;
const cornerSize = 3;
const duration = 0.3;

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
    transition: all ${duration}s;
    @media screen and (min-width: 320px) {
      box-shadow: 10px -10px 0 0 var(--body--background);
    }

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
          transform: translateX(0.7rem);
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

      &::before,
      &::after {
        content: "";
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
        max-width: 100%;
        max-height: 100%;
        height: auto;

        filter: drop-shadow(8px 6px 8px var(--body--background));
      }
    }

    &__txt-container {
      width: 100%;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      a {
        align-self: start;
      }
    }

    &__txt {
      @media screen and (max-width: 768px) {
        text-align: justify;
        text-justify: auto;
        //hyphens: auto;
      }
      font-size: var(--font-size-md);
    }

    &__tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    &__tag {
      font-family: "acumin-pro-wide", sans-serif;
      font-size: clamp(0.9rem, 1.5vw, 1rem);
      letter-spacing: 0.1rem;
      //font-weight: 700;
      text-transform: uppercase;
      padding: 0.5rem 1rem;
      background-color: transparent;
      border: 1px solid var(--primary);
      color: var(--txt--darker);
      transition: all 0.3s ease-in-out;
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
        content: "";
        position: absolute;
        bottom: calc((${borderWidth}rem * -1) - 0.3rem);
        width: 100%;
        transform-origin: left center;
        transform: scaleX(0);
        height: ${borderWidth}rem;
        background-color: var(--accent);
        transition: all ${duration}s ease-in-out;
      }
    }
  }
`;
