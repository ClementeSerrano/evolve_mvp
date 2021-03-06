import styled from "styled-components";

import { colors } from "../../utils";

const { LIGHT_GRAY } = colors;

const FundDetailsContainer = styled.div`
  display: flex;
  padding: 15px 40px;
  align-items: center;
  margin: 0 -40px;

  &:hover {
    background-color: ${LIGHT_GRAY};
  }
`;

const CurrencyDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: default;
`;

const CurrencyIconContainer = styled.div`
  margin-right: 10px;
  cursor: default;
`;

const CurrencyName = styled.div`
  cursor: default;
`;

export {
 CurrencyDetailsContainer, CurrencyName, CurrencyIconContainer, FundDetailsContainer,
};
