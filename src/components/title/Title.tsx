import styled from "styled-components";

type TitleType = {
    title: string
}

export const Title = ({title}: TitleType) => {
    return (
        <TitleStyled>{title}</TitleStyled>
    )
};

const TitleStyled = styled.h2`
    display: inline-block;
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 5px;
    font-size: 28px;
    border-bottom: solid 1px #e2e8f0;
    align-self: center;
`;