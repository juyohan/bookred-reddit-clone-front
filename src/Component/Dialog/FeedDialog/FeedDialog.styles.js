import styled from "styled-components";

export const FeedDialogWrapper = styled.div`
    height: 100%;
  overflow-y: auto;
  position: relative;
  width: 100%;
  will-change: transform;
  contain: layout style size;
`

export const FeedDialogContainer = styled.div`
    top: 60px;
  background-color: rgba(28, 28, 28, 0.9);
bottom: 0;
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 50;
`