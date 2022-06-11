import "./App.css";
import { FaPython } from "react-icons/fa";
import { SiHtml5, SiCss3, SiReact, SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";

function App() {
  return (
    <div className="container">
      <section className="inicial" id="pag1">
        <a className="insta" href="https://www.instagram.com/gustavoh2003/">
          <SiInstagram  />
        </a>
        <a className="github" href = "https://github.com/GustavoHenrique23">
          <SiGithub/>
        </a>
        <a className="linkedin" href = "https://www.linkedin.com/in/gustavo-henrique-545170231/">
          <SiLinkedin/>
        </a>
        <div className="textos">
          <h1>OLÁ , MEU NOME É GUSTAVO HENRIQUE.</h1>
          <p>
            TENHO 18 ANOS E CURSO ENGENHARIAS E AMO TECNOLOGIA, <br />
            SOU UM VICIADO DESDE QUE ME ENTENDO POR GENTE E TUDO <br />
            QUE DA PRA FAZER ATRÁS DE UMA TELA DE COMPUTADOR.
          </p>
          <a href="#pag2">
            <button>FORMAÇÃO</button>
          </a>
        </div>
        <img
          src="https://github.com/GustavoHenrique23.png"
          alt="SouLindo"
          className="fotogh"
        />
      </section>
      <section className="form" id="pag2">
        <div className="formacao">
          <h1>FORMAÇÕES</h1>
        </div>
        <div className="inicial">
          <ul className="formacaos">
            <li>NOVA VISÃO 2007-2008</li>
            <li>COLÉGIO MUNICIPAL SEBASTIÃO MACHADO 2009-2012.</li>
            <li>COLÉGIO ESTADUAL CONEGO RAMIRO 2013-2017.</li>
            <li>CEPI-OSVALDO DA COSTA MEIRELES 2018-2020.</li>
            <li>INGLÊS BÁSICO AUTODIDATA SEM DATA DEFINIDA.</li>
            <li>EXPERIENCIA EM MONTAGEM DE COMPUTADOR AUTODIDATA.</li>
            <a href="#pag3">
              <button>TECNOLOGIAS</button>
            </a>
          </ul>
          <img
            src="https://media2.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e47inc5drzk7sr2kc74cnmubh9tpncc2u9wm4w5skex&rid=giphy.gif&ct=g"
            alt="gifprog"
            className="gif"
          />
        </div>
      </section>
      <section id="pag3" className="tecnologias">
        <div className="formacao">
          <h1>TECNOLOGIAS</h1>
          <p>
            ALGUMAS TECNOLOGIAS QUE TENHO ALGUMA EXPERIENCIA <br /> E QUE TAMBÉM
            QUERO ME APRIMORAR CADA VEZ MAIS.
          </p>
          <ul className="formacaos">
            <li>
              PYTHON <FaPython />
            </li>
            <li>
              HTML <SiHtml5 />
            </li>
            <li>
              CSS <SiCss3 />
            </li>
            <li>
              REACT JS <SiReact />
            </li>
            <a href="#pag4">
              <button>FIM</button>
            </a>
          </ul>
        </div>
        <img
          src="https://media2.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e47inc5drzk7sr2kc74cnmubh9tpncc2u9wm4w5skex&rid=giphy.gif&ct=g"
          alt="tec"
          className="gif1"
        />
        <div className="inicial"></div>
      </section>
      <section id="pag4" className="fim">
        <div className="textosFim">
          <h1>INTERESSES</h1>
          <p>
            MEUS INTERESSES SÃO POR ATIVIDADES QUE PODEM SER PRODUTIVAS E
            DIVERTIDAS AO MESMO TEMPO <br />
            GOSTO MUITO DE COMPETIÇÃO E DE SENTIR QUE ESTOU FAZENDO PROGRESSO
            SEJA QUALQUER ARÉA DA VIDA <br />
            ADORO TRABALHAR EM EQUIPE QUANDO A EQUIPE É PRODUTIVA SEM
            DIFICULDADES
          </p>
          <p>
            <em>
              "NÃO TENHA MEDO DE ERRAR E DE RECOMEÇAR <br />O IMPORTANTE É TER
              CORAGEM DE SEGUIR EM FRENTE"
            </em>
          </p>
          <a href="#pag1">
            <button>INICIO</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
