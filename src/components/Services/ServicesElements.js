import styled from "styled-components";

export const ServicesContainer = styled.div`
    background:#010606;
    padding:100px 0;
`;

export const ServicesWraper = styled.div`
    max-width:1100px;
    margin:0 auto;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    align-items:center;
    grid-gap:30px;
    padding:0 50px;

    @media(max-width: 1000px){
        grid-template-columns:1fr 1fr;
    }
    @media(max-width: 768px){
        grid-template-columns:1fr;
        padding:0 20px;
    }
`;

export const ServicesCard = styled.div`
    background:#fff;
    padding:30px;
    border-radius:10px;
    transition:0.3s ease-in-out;
    box-shadow:0 1px 3px rgba(0,0,0,0.2);
    text-align:center;

`;

export const ServicesIcon = styled.img`
    height:160px;
    width:160px;
    margin-bottom:10px;

`;
export const ServicesH1 = styled.h2`
    font-size:34px;
    color:#fff;
    text-transform:capitalize;
    margin-bottom:60px;
    text-align:center;

`;

export const ServicesH2 = styled.h3`
    font-size:25px;
    color:#000;
    margin-bottom:20px;

`;

export const ServicesP = styled.p`
    font-size:15px;
    color:#000;
    margin-bottom:0px;

`;

export const ImgWrap = styled.figure`
    max-width:200px;
    margin:0 auto 20px auto;

`;

export const Img = styled.img`
    height:150px;
`;