import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Head from 'next/head';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
          <title>Journey, The Quiz</title>
          <meta name="title" content="Journey, The Quiz" />
          <meta name="description" content="Quiz feito durante a imersão React Next.js da Alura"/>

          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://quizdodip.vercel.app/"/>
          <meta property="og:title" content="Journey, The Quiz"/>
          <meta property="og:description" content="Quiz feito durante a imersão React Next.js da Alura"/>
          <meta property="og:image" content="https://images.hdqwalls.com/wallpapers/journey-game-5k-6h.jpg"/>

      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
          <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}>
              <Input  
                onChange={(infosDoEvento) => {
                 setName(infosDoEvento.target.value);
                }}
                placeholder="Preencha seu nome aqui"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Bora jogar, ${name} ?`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ditpires/quizdodip" />
    </QuizBackground>
  );
}
