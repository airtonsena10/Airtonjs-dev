import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <div className="  border-t border-gray-200 px-7 py-10 gap-7 md:flex m-auto">
        <div>
          <a href="mailto:airtonsena41@gmail.com">
            <AiOutlineMail />
            <strong>
              <h1>E-mail</h1>
            </strong>
            Entre em contato comigo!
            <br />
          </a>
        </div>

        <div>
          <a href="https://github.com/airtonsena10">
            <FaGithub />
            <strong>
              <h1>GitHub</h1>
            </strong>
            Veja meus repositórios no GitHub!
            <br />
          </a>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/airtonsena/">
            <FaLinkedin />
            <strong>
              <h1>LinkedIn</h1>
            </strong>
            Acesse meu perfil no LinkedIn
            <br />
          </a>
        </div>
      </div>

      <footer className="container mt-auto border-t border-gray-200 py-6 text-center text-gray-500 dark:border-gray-600">
        Copyright &#169; {new Date().getFullYear()}. AirtonSena Dantas
      </footer>
    </>
  )
}

export default Footer
