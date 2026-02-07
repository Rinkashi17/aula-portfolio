import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam magni
      eaque tempora esse molestias similique aspernatur aliquid accusantium
      beatae eius. Maxime culpa ad vel enim quo blanditiis quibusdam dicta
      aperiam?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats-fast.vercel.app/api?username=Rinkashi17&show_icons=true&theme=tokyonight" />
      <img src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=Rinkashi17&layout=compact&theme=tokyonight" />
    </GithubSecao>
  </section>
)

export default Sobre
