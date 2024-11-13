import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 14px 24px;
  width: 400px;
  color: #7C3AED;
  background: #000;
  border: 1px solid #7C3AED;
  font-size: 16px;
  font-weight: 500;
  transition: 200ms ease;
  &:hover {
    transform: translateY(-6px);
  }
  &:active {
    transform: translateY(-3px);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ContributeButton = styled(StyledButton)`
  margin-top: 1rem;
  background: #7C3AED;
  color: #000;
`;

export const CarouselContainer = styled.div`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-scroll {
    display: inline-flex;
    animation: scroll 20s linear infinite;
    white-space: nowrap;
  }

  &:hover .animate-scroll {
    animation-play-state: paused;
  }

  .animate-scroll > div {
    margin-right: 1rem;
    flex-shrink: 0;
  }
`;