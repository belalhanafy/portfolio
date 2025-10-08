import React from 'react';
import styled from 'styled-components';

const NeonBorder = ({ text }) => {
    return (
        <StyledWrapper>
            <button className="button text-nowrap">
                {text}
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .button {
    --ch-black: #00264d; /* Deep Blue */
    --eer-black: #003366; /* Dark Blue */
    --night-rider: #004080; /* Royal Blue */
    --white: #ffffff; /* Pure White */
    --af-white: #d6e6ff; /* Light Blue */
    --ch-white: #b3d1ff; /* Pale Blue */

    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px;
    border: none;
    font-size : 20px;
    color: white;
    position: relative;
    font-weight: 700;
    transition-duration: .2s;
    background-color: black;
    cursor: auto;
  }

  .button:before, .button:after {
    content: '';
    position: absolute;
    left: -2px;
    top: -2px;
    border-radius: 50px;
    background: linear-gradient(45deg, 
    var(--ch-black), var(--eer-black),
    var(--night-rider), var(--ch-white), var(--night-rider), 
  	var(--eer-black), var(--ch-black),var(--ch-black));
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
  }`;

export default NeonBorder;
