import React from 'react'
// import Icon1 from '../../images/svg-1.svg';
// import Icon2 from '../../images/svg-2.svg';
// import Icon3 from '../../images/svg-3.svg';

import {
    ServicesContainer,
    ServicesH1,
    ServicesWraper,
    ServicesCard,
    // ServicesIcon,
    ServicesH2,
    ServicesP,
    ImgWrap,
    Img,

} from "./ServicesElements";
const list = [
    {
        id: 'a',
        img: require("../../images/svg-1.svg").default,
        alt:'serv1',
        servTitle: 'Title1',
        servCont: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus pulvinar dui, at scelerisque nisl gravida eget. Maecenas aliquet, sem nec finibus fermentum',
    },
    {
        id: 'b',
        img: require("../../images/svg-2.svg").default,
        alt:'serv2',
        servTitle: 'Title2',
        servCont: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus pulvinar dui, at scelerisque nisl gravida eget. Maecenas aliquet, sem nec finibus fermentum',
    },
    {
        id: 'b',
        img: require("../../images/svg-3.svg").default,
        alt:'serv3',
        servTitle: 'Title3',
        servCont: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus pulvinar dui, at scelerisque nisl gravida eget. Maecenas aliquet, sem nec finibus fermentum',
    },
];
const Services = () => {
    return (
        <>
            {/* <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWraper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Service 1</ServicesH2>
                        <ServicesP>orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus pulvinar dui, at scelerisque nisl gravida eget. Maecenas aliquet, sem nec finibus fermentum</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Service 2</ServicesH2>
                        <ServicesP>orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus pulvinar dui, at scelerisque nisl gravida eget. Maecenas aliquet, sem nec finibus fermentum</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Service 3</ServicesH2>
                        <ServicesP>orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus pulvinar dui, at scelerisque nisl gravida eget. Maecenas aliquet, sem nec finibus fermentum</ServicesP>
                    </ServicesCard>
                </ServicesWraper>
            </ServicesContainer> */}
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWraper>
                    {list.map(item => (
                        <ServicesCard key={item.id}>
                            <ImgWrap>
                                <Img src={item.img} alt={item.alt} />
                            </ImgWrap>
                            <ServicesH2>{item.servTitle}</ServicesH2>
                            <ServicesP>{item.servCont}</ServicesP>
                        </ServicesCard>
                    ))}
                </ServicesWraper>
            </ServicesContainer>
        </>
    )
}

export default Services
