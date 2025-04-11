import styled from 'styled-components';

export const Container = styled.div`
background-color: #181f36;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding:20px;
`;

export const Title = styled.h2`
color: #fff;
text-align: center;
font-size: 38px;
font-style: normal;
font-weight: 600;
margin-top: 30px;
`;
export const ContainerUsers = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr ;
 grid-gap: 20px;
 margin: 40px 0;

 @media ( max-width: 1350px) {
     grid-template-columns: 1fr 1fr ;

 }

 @media ( max-width: 890px) {
     grid-template-columns: 1fr  ;

 }
`;
export const CardiUsers = styled.div`
background-color: #252d48;
padding: 16px;
border-radius: 32px;
display: flex;
justify-content: space-between;
align-items:center;
gap:20px;
max-width:400px;

h3{
     color: #fff;
     font-size:24px;
     font-weight:50;
     margin-bottom:3px;
     text-transform: capitalize;
}



p {
color: #fff;
font-size:14px;
font-weight:200;
}

`;
export const TrashIcon = styled.img`
cursor: pointer;
padding-left: 30px;

&  :hover{
     opacity:0.8;
}
& :active{
     height: 0.5;
}
`;
export const AvatarUser = styled.img`
height: 80px;
`;
