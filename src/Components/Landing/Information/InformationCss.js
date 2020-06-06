import styled from "styled-components";

export const InformationWrapper = styled.div`
    width: 100%;
    margin: 50px auto 0px auto;
    display: grid;
    justify-items: center;
    background-color: FFFFF;
`;

export const Title = styled.h1`
    color: rgb(100, 100, 105);
    font-size: 3rem;
    @media (max-width: 600px) {
        font-size: 2rem;
    }
    @media (min-width: 600px) and (max-width: 750px) {
        font-size: 2.5rem;
    }
`;

export const StepWrapper = styled.div`
    display: grid;
    grid-gap: 20px;
    margin: 50px 0px;
    grid-template-columns: 1fr 1fr 1fr;
    width: 80%;
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
    line-height: 1.5;
`;

export const StepParagraph = styled.p`
    color: rgb(100, 100, 105);
    font-size: 20px;
    @media (max-width: 950px) {
        width: 300px;
    }
    line-height: 1.5;
`;

export const CustomerWrap = styled.div`
    width: 70%;
    margin: 100px auto;
    position: relative;
    @media (max-width: 1100px) {
        width: 100%;
    }
`;

export const CustomerImage = styled.img`
    width: 100%;
`;

export const CustomerQuoteWrap = styled.div`
    box-sizing: border-box;

    position: absolute;
    top: -50px;
    left: 50px;
    width: 350px;
    height: 220px;
    padding: 20px;
    background-color: white;
    border: 1px solid #e5e5e5;
    line-height: 2;
    border-radius: 5px;
    @media (max-width: 760px) {
        width: 100vw;
        height: 140px;
        left: 0px;
        top: -100px;
    }
    @media (min-width: 512px) and (max-width: 616px) {
        height: 120px;
        top: -100px;
    }
    @media (max-width: 512px) {
        top: -120px;
        height: 150px;
    }
`;

export const CustomerQuote = styled.span`
    font-size: 22px;
    font-weight: 700;
    @media (max-width: 616px) {
        font-size: 18px;
    }
`;

export const CustomerName = styled(CustomerQuote)`
    color: rgb(102, 114, 124);
`;

export const GreenLine = styled.div`
    width: 30px;
    height: 2px;
    background-color: #28a55f;
    margin-bottom: 10px;
`;

export const SitterName = styled.span`
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 7px;
    position: absolute;
    bottom: 25px;
    right: 30px;
    box-sizing: border-box;
    border-radius: 5px;
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