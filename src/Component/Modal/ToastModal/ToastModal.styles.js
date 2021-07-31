import styled from "styled-components";

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 70px;
`;

export const MessageAction = styled.div`
  width: 40%;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 15px;
  margin-right: 10px;
  margin-bottom: 10px;
  min-height: 50px;
  justify-items: center;
  justify-content: center;
  padding: 12px;
  flex-direction: column;
  display: flex;
  color: white;
  transition: all 0.4s ease;
  animation: slide-in 0.5s;

  @keyFrames slide-in {
    from {
      transform: translateX(30px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  };
`;