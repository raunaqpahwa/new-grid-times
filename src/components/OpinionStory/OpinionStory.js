import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <OpinionStoryLink href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </OpinionStoryLink>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  color: var(--color-gray-900);

  @media ${QUERIES.tabletOnly} {
    display: initial;
  }
`;

const OpinionStoryLink = styled.a`
  padding: 16px 0;
  border-bottom: 1px solid var(--color-gray-300);

  &:last-of-type {
    border: none;
  }

  &:first-of-type {
    padding-top: 0px;
  }

  @media ${QUERIES.tabletOnly} {
    padding: 0;
    border: none;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 16px;

  @media ${QUERIES.tabletOnly} {
    margin-left: 0px;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;

  @media ${QUERIES.tabletOnly} {
    margin-top: 4px;
  }
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;

  @media ${QUERIES.tabletAndUp} {
    margin-top: -4px;
  }
`;

export default OpinionStory;
