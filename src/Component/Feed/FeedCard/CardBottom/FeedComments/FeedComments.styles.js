import styled from "styled-components";

export const FeedCommentWrapper = styled.div`
  display: block;
  margin-bottom: 4px;
  margin-left: 5px;
  margin-right: 8px;
  border-top : 1px solid rgba(0, 0, 0, 0.2);
`

export const CommentWrapper = styled.div`
  display: flex;
  position: relative;
  padding-left: 10px;
  padding-top: 6px;
  outline: none;
  overflow-y: hidden;
  overflow-x: hidden;
  flex-direction: row;
`

export const CommentImage = styled.div`
  border-radius: 50%;
  margin-top: 2px;
  align-self: flex-start;
  position: relative;
  margin-right: 6px;
  display: block;

  & > img {
    border-radius: inherit;
    width: 32px;
    height: 32px;
    vertical-align: bottom;
  }
`

export const CommentTextWrapper = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  flex-basis: 0;
  flex-grow: 1;
  padding-right: 4px;
  display: block;
`

export const CommentBackgroundDiv = styled.div`
  display: inline-block;
  white-space: normal;
  vertical-align: middle;
  word-wrap: break-word;
  max-width: calc(100%- 5px);
`

export const CommentBackground = styled.div`
    box-sizing: border-box;
  display: inline-block;
  word-break: break-word;
  white-space: normal;
  position : relative;
  max-width: 100%;
  border-radius: 16px;
  background-color: #dae0e6;
  padding: 8px 12px;
`

export const CommentUsername = styled.div`
  display: inline;
  font-weight: 600;
  line-height: 1.2308;
  font-size: 0.8125rem;
  max-width: 100%;
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  font-family: inherit;
`

export const CommentText = styled.div`
  text-align: start;
  font-size: 0.9375rem;
  font-weight: 400;
  word-wrap: break-word;
  text-wrap: normal;
  white-space: normal;
  display: block;
  line-height: 1.3333;
  font-family: inherit;
  padding: 4px 0;
`

export const CommentInputWrapper = styled.div`
  padding : 12px 5px 4px 12px;
  display: flex;
  flex-direction: row;
  outline: none;
`

export const CommentInputTextDiv = styled.div`
  overflow-y: hidden;
  padding-right: 0;
  flex-basis: 0;
  flex-grow: 1;
  display: block;
`

export const CommentInputForm = styled.form`
  border-radius: 16px;
  background-color: #dae0e6;
  cursor: text;
  display: flex;
  justify-content: flex-end;
  border: 0;
  margin: 0;
  padding : 0;
`

export const CommentInputFormDiv = styled.div`
  flex-basis: auto;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 8px 15px 1px 12px;
`

export const CommentInput = styled.textarea`
    user-select: text;
  position: relative;
  word-break: break-word;
  white-space: pre-wrap;
  text-align: initial;
  font-size: .9357rem;
  outline: none;
  width: 100%;
  border: none;
  resize: none;
  overflow: hidden;
  background-color: inherit;
`