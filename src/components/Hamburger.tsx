import { css } from "@emotion/react";
import { HTMLAttributes } from "react";

type HamburgerProps = HTMLAttributes<HTMLButtonElement> & {
  isActive: boolean;
  setIsActive: () => void;
  size?: number;
};

const Hamburger = ({ 
  isActive, 
  setIsActive, 
  size = 52, 
  'aria-hidden': ariaHidden,
  tabIndex,
  ...rest 
}: HamburgerProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsActive();
    }
  };

  return (
    <button
      type="button"
      css={style}
      onClick={setIsActive}
      onKeyDown={handleKeyDown}
      aria-label="Toggle Navigation Menu"
      aria-expanded={isActive}
      aria-controls="mobile-menu"
      aria-hidden={ariaHidden}
      tabIndex={tabIndex}
      {...rest}
    >
      <div className={`container ${isActive ? "active" : ""}`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width={size} 
          height={size} 
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <g strokeWidth="9" strokeLinecap="round">
            <path d="M72 82.286h28.75" fill="#009100" fillRule="evenodd" />
            <path
              d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
              fill="none"
            />
            <path d="M72 125.143h28.75" fill="#009100" fillRule="evenodd" />
            <path
              d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
              fill="none"
            />
            <path d="M100.75 82.286h28.75" fill="#009100" fillRule="evenodd" />
            <path d="M100.75 125.143h28.75" fill="#009100" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </button>
  );
};

export default Hamburger;

const style = css`
  @media screen and (min-width: 769px) {
    display: none;
  }
  position: relative;
  background: none;
  border: none;
  padding: 0;
  margin: 0;

  &:hover {
    path {
      stroke: var(--primary--hover);
    }
  }

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
    border-radius: 4px;
  }

  .container {
    cursor: pointer;
    display: flex;
  }

  svg {
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .active svg {
    transform: rotate(90deg);
  }

  path {
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke 500ms cubic-bezier(0.4, 0, 0.2, 1);
    stroke: var(--primary);
  }

  path:nth-of-type(1) {
    transform-origin: 36% 40%;
  }

  path:nth-of-type(2) {
    stroke-dasharray: 29 299;
  }

  path:nth-of-type(3) {
    transform-origin: 35% 63%;
  }

  path:nth-of-type(4) {
    stroke-dasharray: 29 299;
  }

  path:nth-of-type(5) {
    transform-origin: 61% 52%;
  }

  path:nth-of-type(6) {
    transform-origin: 62% 52%;
  }

  .active path:nth-of-type(1) {
    transform: translateX(9px) translateY(1px) rotate(45deg);
  }

  .active path:nth-of-type(2) {
    stroke-dasharray: 225 299;
    stroke-dashoffset: -72px;
  }

  .active path:nth-of-type(3) {
    transform: translateX(9px) translateY(1px) rotate(-45deg);
  }

  .active path:nth-of-type(4) {
    stroke-dasharray: 225 299;
    stroke-dashoffset: -72px;
  }

  .active path:nth-of-type(5) {
    transform: translateX(9px) translateY(1px) rotate(-45deg);
  }

  .active path:nth-of-type(6) {
    transform: translateX(9px) translateY(1px) rotate(45deg);
  }
`;
