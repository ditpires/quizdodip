import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  
  return (
    <BackgroundImage>
      <Head>
        <title>Quiz do Di</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
          <h1>Journey</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}>
              <input  
                onChange={function (infosDoEvento) {
                 setName(infosDoEvento.target.value);
                }}
                placeholder="Preencha seu nome aqui"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Journey</h1>
            <p>blabalbal</p>
          </Widget.Content>
        </Widget>
        <Footer>
          
        </Footer>
      </QuizContainer>
    </BackgroundImage>
  );
}
