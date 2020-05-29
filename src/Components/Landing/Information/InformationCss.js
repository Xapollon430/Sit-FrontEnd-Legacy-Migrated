import styled from "styled-components";

export const InformationWrapper = styled.div`
    width: 80%;
    margin: 80px auto 0px auto;
    background-color: FFFFF;
`;

export const Title = styled.h1`
    color: rgb(100, 100, 105);
    font-size: 3rem;
    text-align: center;
`;

export const InformationParagraph = styled.p`
    font-size: 1.4rem;
    color: rgb(100, 100, 105);
    margin: 10px auto;
    width: 80%;
    @media (max-width: 700px) {
        font-size: 1.3rem;
    }
`;

export const StepWrapper = styled.div`
    display: grid;
    grid-gap: 20px;
    margin-top: 80px;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    @media (max-width: 950px) {
        grid-template-columns: 1fr;
    }
`;

export const Step = styled.div`
    display: grid;
    @media (max-width: 950px) {
        justify-items: center;
    }
`;

export const StepNumber = styled.h3`
    color: #28a55f;
`;

export const StepImage = styled.img`
    justify-self: center;
`;

export const StepTitle = styled.h2`
    margin: 0px;
    color: rgb(100, 100, 105);
    @media (max-width: 950px) {
        width: 300px;
    }
`;

export const StepParagraph = styled.p`
    color: rgb(100, 100, 105);
    font-size: 20px;
    @media (max-width: 950px) {
        width: 300px;
    }
`;
