'use client'
import imgabout from '@/components/icons/img.svg'
import SectionTitle from '@/components/SectionTitle'
import cssIcon from '@/images/css-icon.svg'
import htmlIcon from '@/images/html-icon.svg'
import jsIcon from '@/images/js-icon.svg'
import nodeIcon from '@/images/node-icon.svg'
import reactIcon from '@/images/react-icon.svg'
import nextIcon from '@/images/next.svg'
import typescriptIcon from '@/images/typescript-icon.svg'
import figmaIcon from '@/images/Figma.svg'
import Image from 'next/image'
const AboutSection = () => {
  return (
    <>
      <SectionTitle>Além do código: quem sou eu?</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 px-14 md:grid-cols-2 lg:gap-8">
        {/* Bio */}

        <p className="text-justify">
          Sou um desenvolvedor web e estudante de sistemas de informaçâo.
          Especializo-me na criação de websites dinâmicos e amigáveis ao
          usuário. Focado no desenvolvimento front-end e com interesse no
          back-end, tenho paixão por proporcionar experiências de usuário
          excepcionais. Estou sempre ansioso para aprender e me manter
          atualizado com as mais recentes tecnologias web. Estou empolgado para
          colaborar em projetos desafiadores e dar vida a ideias. Explore meu
          trabalho,entre em contato e vamos conversar.
          <span className="paragraph py-2 text-1xl font-semibold">
            <p>
              Estas sâo algumas tecnologias com as quais tenho trabalhado
              recentemente:
            </p>
          </span>
          <div className="hard-skills flex flex-auto gap-7 py-4 ">
            <div className="hability">
              <Image src={reactIcon} alt="React" width={30} height={30} />
            </div>

            <div className="hability">
              <Image src={nextIcon} alt="Html" width={35} height={35} />
            </div>

            <div className="hability">
              <Image src={jsIcon} alt="JavaScript" width={30} height={30} />
            </div>

            <div className="hability">
              <Image
                src={typescriptIcon}
                alt="Typescript"
                width={30}
                height={30}
              />
            </div>

            <div className="hability">
              <Image src={htmlIcon} alt="Html" width={30} height={30} />
            </div>

            <div className="hability">
              <Image src={cssIcon} alt="Css" width={30} height={30} />
            </div>
            <div className="hability">
              <Image src={nodeIcon} alt="Node" width={30} height={30} />
            </div>

            <div className="hability">
              <Image src={figmaIcon} alt="Node" width={25} height={25} />
            </div>
          </div>
        </p>

        <div className="descriptionImage">
          <Image layout="responsive" src={imgabout} alt="" />
        </div>
      </div>
    </>
  )
}

export default AboutSection
