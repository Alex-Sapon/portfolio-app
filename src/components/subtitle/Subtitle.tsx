import styled from "styled-components";

type SubtitleType = {
    subtitle: string
}

export const Subtitle = ({subtitle}: SubtitleType) => {
    return (
        <SubtitleStyled>{subtitle}</SubtitleStyled>
    )
};

const SubtitleStyled = styled.h3`
    display: inline-block;
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 5px;
    font-size: 22px;
    border-bottom: solid 1px #e2e8f0;
    align-self: flex-start;
`;