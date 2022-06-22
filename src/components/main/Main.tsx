import { ReactNode } from "react";
import styled from "styled-components";

type MainType = {
    children: ReactNode
}

export const Main = ({children}: MainType) => {
    return (
        <MainStyled>
            {children}
        </MainStyled>
    )
};

const MainStyled = styled.main`
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 15px;
`;