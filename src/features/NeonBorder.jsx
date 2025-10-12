import React from 'react';
import styled from 'styled-components';

const NeonBorder = ({ text, isDark }) => {
  return (
    <StyledWrapper isDark={isDark}>
      <button className="button text-nowrap">
        {text}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    --ch-black: #00264d;
    --eer-black: #003366;
    --night-rider: #004080;
    --white: #ffffff;
    --af-white: #d6e6ff;
    --ch-white: #b3d1ff;

    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px;
    border: none;
    font-size: 20px;
    position: relative;
    font-weight: 700;
    transition-duration: 0.2s;
    cursor: auto;

    background-color: ${({ isDark }) => (isDark ? 'black' : 'white')};
    color: ${({ isDark }) => (isDark ? 'white' : 'black')};
  }

  .button:before,
  .button:after {
    content: '';
    position: absolute;
    left: -2px;
    top: -2px;
    border-radius: 50px;
    background: linear-gradient(
      45deg,
      var(--ch-black),
      var(--eer-black),
      var(--night-rider),
      var(--ch-white),
      var(--night-rider),
      var(--eer-black),
      var(--ch-black),
      var(--ch-black)
    );
    background-size: 400%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    z-index: -1;
    animation: steam 20s linear infinite;
  }

  @keyframes steam {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  .button:after {
    filter: blur(50px);
  }
`;

export default NeonBorder;
