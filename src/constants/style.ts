import styled from "styled-components";

export const MarkDownContainer = styled.div`
  & h1,
  & h2 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgb(209 213 219);
  }

  & h1 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 800;
  }

  & h2 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  }

  & h3 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-bottom: 1rem;
  }

  & h4 {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  }

  & p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    white-space: pre-wrap;
  }

  & p > code {
    display: inline-block;
    background-color: #eff1f3;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 0.5rem;
    white-space: normal;
  }

  & p > a {
    text-decoration-line: underline;
    color: rgb(59 130 246);
  }

  & p > img {
    max-width: 100%;
  }

  & pre,
  & code {
    display: block;
    margin: 0;
  }

  & pre > code {
    background-color: #f7f6f3;
    padding: 1rem;
    border-radius: 0.125rem;
    white-space: pre-wrap;
  }

  & ol,
  & ul {
    display: block;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-left: 1.25rem;
  }

  & ol {
    list-style-type: decimal;
  }

  & ul {
    list-style-type: disc;
  }

  & > span:first-child {
    font-weight: bold;
    text-align: right;
    width: 70px;
    text-align: center;
  }

  & > span:nth-child(2) {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: calc(100% - 70px);
  }
`;
