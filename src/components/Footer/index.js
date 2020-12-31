import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background-color: #08000070;
    padding: 20px;
    display: flex;
    align-items: center;
    border-radius: 4px;

    img {
        width: 58px;
        margin-right: 23px;
    }
    a {
        color: white;
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
                <img src="https://www.alura.com.br/assets/img/imersoes/react-2/alura-light.1609262503.svg"></img>
            </a>
            <p>
                Orgulhosamente criado durante
                {' '}
                a
                {' '}
                <a href="https://www.alura.com.br/imersao-react-2">
                    <span>Imersão React:Next.js da Alura</span>
                </a>
            </p>
        </FooterWrapper>
    );
}