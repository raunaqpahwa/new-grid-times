import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Row>
          <MainHeaderActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </MainHeaderActionGroup>
          <Logo />
          <ButtonActionGroup>
            <Button>Subscribe</Button>
            <SubscriberLink>Already a subscriber?</SubscriberLink>
          </ButtonActionGroup>
        </Row>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeaderActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
    gap: 24px;
    align-items: center;

    svg {
      display: block;
    }
  }
`;

const ButtonActionGroup = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }
`;

const SubscriberLink = styled.a`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
    font-size: ${14 / 16}rem;
    padding-top: 0px;
    padding-bottom: 0px;
    font-weight: var(--font-weight-normal);
    justify-content: center;
    text-decoration: underline;
    font-style: italic;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 48px;
`;

export default Header;
