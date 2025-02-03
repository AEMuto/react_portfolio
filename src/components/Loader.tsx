import { css } from "@emotion/react";

/**
 * Need to be put in a flex container
 * @constructor
 */
const Loader = () => {
  return (
    <div css={baseStyle}>
      <div className="loader">
        <div className="loader__icon"></div>
      </div>
    </div>
  );
};

export default Loader;

const baseStyle = css`
  position: relative;
  flex: 1;

  .loader {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    display: grid;
    place-items: center;
    background-color: var(--body);
    z-index: 9999;
    transition: opacity 500ms ease-in-out;
    opacity: 1;
    pointer-events: auto;
  }

  .loader__icon {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 0.45rem solid var(--primary);
    border-top-color: transparent;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
