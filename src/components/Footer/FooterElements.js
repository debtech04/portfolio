import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const FooterContainer = styled.div`
   background:#101522;
   padding:100px 0;
`
export const FooterWrap = styled.div`
   max-width:1100px;
   margin:0 auto;
   padding:0 15px;
`
export const FooterLinksContainer = styled.div`
   display:grid;
   grid-template-columns:1fr 1fr 1fr 1fr;
   grid-gap:30px;

   @media screen and (max-width: 991px) {
    grid-template-columns:1fr 1fr;
    }

    @media screen and (max-width: 575px) {
        grid-template-columns:1fr;
    }
`
export const FooterLinksWrapper = styled.div`
   width:100%;
`
export const FooterLinkTitle = styled.h4`
   font-size:20px;
   color:#fff;
   font-weight:600;
   margin-bottom:30px;
`
export const FooterLinkItems = styled.ul`
  list-style:none;
  pading:0;
  margin-bottom:0;
`
export const FooterLink = styled(Link)`
  display:block;
  margin-bottom:15px;
  color:#fff;
  font-weight:400;
  text-decoration:none;
  transition:0.3s ease-in-out;

  :hover{
      color:#01bf71;
  }
  :Last-child{
      margin-bottom:0px
  }
`

export const FooterSocial = styled.div`
  width:100%;
  text-align:center;
  margin-top:60px;
`
export const WebsiteRights = styled.p`
  color:#fff;
  font-size:15px;
  margin-bottom:20px;
`
export const FooterSocialList = styled.ul`
  list-style:none;
  text-align:center;
  margin:0;
`
export const FooterSocialLink = styled.a`
margin: 0 5px;
border-radius: 50%;
color: #fff;
font-size: 19px;
display: inline-block;
`