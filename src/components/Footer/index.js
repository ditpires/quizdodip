import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background-color: #FEFEFE;
   // opacity: .9;
    padding: 20px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    box-shadow: -10px 10px 10px black;

    img {
        width: 58px;
        margin-right: 23px;
    }
    a {
        color: black;
        text-decoration: none;
        transition: .3s;
        &:hover,
        &:focus {
            opacity: .5;
        }
        
        spam {
            text-decoration:underline;
        }
    }
`;

export default function Footer(props) {
    return (
        <FooterWrapper>
            <a href="https://www.alura.com.br">
                <img src="https://www.alura.com.br/assets/img/alura-logo.svg" alt="Logo Alura" />
            </a>
            <p>
                Orgulhosamente criado durante
                {' '}
                a
                {' '}
                <a href="https://www.alura.com.br/imersao-react-next-js">
                    <span>Imersão React:Next.js da Alura</span>
                </a>
            </p>
        </FooterWrapper>
    );
}