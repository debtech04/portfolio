import styled from 'styled-components';
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'

export const HeroContainer = styled.div`
   background:#0c0c0c;
   display:flex;
   justify-content:center;
   align-items:center;
   padding:0 30px;
   position:relative;
   z-index:1;
   height:800px;

   :before{
      content:"";
      position:absolute;
      left:0;
      right:0;
      bottom:0;
      top:0;
      background:rgba(0,0,0,0.75);
      z-index:2
   }
`

export const HeroBg = styled.div`
   position:absolute;
   top:0;
   left:0;
   right:0;
   bottom:0;
   width:100%;
   height:100%;
   overflow:hiden;
`
export const VideoBg = styled.video`
   width:100%;
   height:100%;
   object-fit:cover;
   background:#232a34;
`
export const HeroContent = styled.div`
   max-with:1200px;
   z-index:3;
   position:absolute;
   padding:8px 24px;
   display:flex;
   flex-direction:column;
   align-items:center;
`
export const HeroH1 = styled.h1`
   color:#fff;
   font-size:48px;
   text-align:center;
   text-transform:capitalize;

   @media screen and (max-width: 768px) {
    font-size:40px
    }

    @media screen and (max-width: 480px) {
        font-size:30px
        }
`
export const HeroP = styled.p`
   color:#fff;
   font-size:24px;
   text-align:center;
   max-width:600px;
   margin-top:24px

   @media screen and (max-width: 768px) {
    font-size:18px
    }

    @media screen and (max-width: 480px) {
        font-size:16px
        }
`
export const HeroBtnWrapper = styled.div`
    display:flex;
    flex-diection:column;
    margin-top:32px;
    align-items:center;
`
export const Arrowforward = styled(MdArrowForward)`
    margin-left:8px;
    font-size:20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left:8px;
    font-size:20px;
`