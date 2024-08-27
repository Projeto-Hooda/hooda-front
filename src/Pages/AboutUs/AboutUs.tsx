import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import './AboutUs.css'
import balance from '../../assets/balance.png'

function aboutUs() {
    return (
        <section className="bg-gray-100">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1  mb-[5rem] md:grid-cols-2 items-center gap-8">
                    <div className="max-w-lg">
                        <h2 className="text-3xl font-Montserrat text-gray-900 sm:text-4xl">SOBRE NÓS</h2>
                        <p className="mt-4 font-sans font-medium xl:text-justify text-gray-600 text-lg ">Olá, somos Hooda, um marketplace dedicado a oferecer produtos sustentáveis para consumidores conscientes. Nosso projeto nasceu em junho de 2024. Desde o início, nosso foco tem sido conectar produtores e marcas que compartilham do compromisso de fabricar
                            produtos ecologicamente responsáveis e éticos.</p>
                        <p className="mt-4 font-Montserrat text-gray-600 text-lg"></p>
                        <p className="mt-4 font-Montserrat text-gray-600 text-lg"></p>
                        <div className="mt-8">
                            <Link to='https://github.com/HoodaProject/hooda-front' target="blank" className="text-hoodaLaranja hover:text-amber-400 text-l font-semibold">Conheça mais sobre a Hooda
                                <span className="ml-2">&#8594;</span></Link>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-0 items-center  bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img src="https://i.imgur.com/uqAwc5T.jpeg" alt="" />
                    </div>
                </div>

                <section id="mission" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="hover:scale-105 transition-transform duration-300 hidden md:block" >
                                <img
                                    src="https://www.kerry.com/content/dam/kerry/cdprod/media/global/pages/kerrydigest/sustainability-persona-hero.jpg"
                                    width="550"
                                    height="310"
                                    alt="Missão"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full hidden md:block"
                                />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-Montserrat text-gray-900">Nossa Missão</h2>
                                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed xl:text-justify font-sans font-medium text-gray-600 text-justify">
                                    Nossa missão é criar um marketplace onde sustentabilidade e consumo consciente se encontram, promovendo produtos ecológicos e               éticos que apoiam o Trabalho Decente e o Crescimento Econômico, conforme o Objetivo de Desenvolvimento Sustentável 8 da ONU.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="values" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 font-Montserrat">Nossos Valores</h2>
                                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-600 font-sans text-justify">
                                    Na Hooda, nossos valores orientam cada aspecto de nossa missão. <span className="font-semibold">Sustentabilidade</span> é essencial para nós, promovendo a proteção ambiental e práticas que minimizam o impacto ecológico. <span className="font-semibold">Ética</span> guia todas as nossas operações, assegurando parcerias com produtores que respeitam práticas justas e responsáveis. A <span className="font-semibold">Conexão</span> entre consumidores e produtores é vital, criando uma rede de apoio mútuo em prol de um desenvolvimento econômico justo. Finalmente, buscamos gerar <span className="font-semibold">Impacto Social</span> positivo, apoiando iniciativas que promovem crescimento sustentável e oportunidades econômicas equitativas. Esses princípios reforçam nosso compromisso com um mercado responsável e impactante.
                                </p>
                            </div>
                            <div className="grid gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                                        <LeafIcon className="w-6 h-6 text-primary-foreground text-hoodaLaranja" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 font-sans ">Sustentabilidade </h3>
                                        <p className="text-muted-foreground text-gray-600 font-sans font-normal">
                                            Valorizamos a proteção ambiental e promovemos a escolha de produtos que respeitam o meio ambiente. Estamos comprometidos em apoiar práticas que reduzem o impacto ecológico e incentivam a preservação dos recursos naturais.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                                        <HandshakeIcon className=" w-6 h-6 text-primary-foreground text-hoodaLaranja" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 font-sans ">Ética</h3>
                                        <p className="text-muted-foreground text-gray-600 font-sans ">
                                            Priorizamos a ética em todas as nossas operações. Trabalhamos apenas com produtores e marcas que adotam práticas de trabalho justas e responsáveis, garantindo que todos os envolvidos sejam tratados com dignidade e respeito
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                                        <UsersIcon className="w-6 h-6 text-primary-foreground text-hoodaLaranja" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 font-sans ">Impacto Social</h3>
                                        <p className="text-muted-foreground text-gray-600 font-sans ">
                                            Apoiamos iniciativas que contribuem para o desenvolvimento econômico sustentável e o crescimento inclusivo. Nosso foco é gerar um impacto positivo na sociedade, apoiando o trabalho decente e promovendo oportunidades econômicas equitativas.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                                        <LinkIcon className="w-6 h-6 text-primary-foreground text-hoodaLaranja" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 font-sans ">Conexão</h3>
                                        <p className="text-muted-foreground text-gray-600 font-sans ">
                                            Fomentamos a colaboração entre consumidores e produtores para criar uma rede de apoio mútuo. Nosso objetivo é fortalecer parcerias que compartilham o compromisso com a sustentabilidade e o desenvolvimento econômico justo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <h1 className="text-2xl font-Montserrat pb-8">Conheça nossa equipe: </h1>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-center gap-8">
                    <div>
                        <div className="card w-90 bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div className="h-80">
                                <img
                                    src="https://i.imgur.com/NSLm9oV.jpeg"
                                    alt="profile-picture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center p-4">
                                <h4 className="text-xl font-Docker-One font-light text-hoodaLaranja ">Rodrigo</h4>
                                <h4 className="text-xl font-Docker-One text-hoodaLaranja mb-2">Silva</h4>
                                <p className="text-blue-gray-600  font-semibold">Fullstack Developer</p>
                            </div>
                            <div className="flex justify-center gap-7 pt-2 pb-4">
                                <div>
                                    <Link to={'https://github.com/rosdrigo'} target="blank">
                                        <GithubLogo size={32} color="#fcae04" /></Link>
                                </div>
                                <div>
                                    <Link to={'https://www.linkedin.com/in/rosdrigo/'} target="blank">
                                        <LinkedinLogo size={32} color="#fcae04" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-90 bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div className="h-80">
                                <img
                                    src="https://i.imgur.com/PbfFcbH.jpeg"
                                    alt="profile-picture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center p-4">
                                <h4 className="text-xl font-Docker-One text-hoodaLaranja ">Alexander</h4>
                                <h4 className="text-xl font-Docker-One text-hoodaLaranja mb-2">Pereira</h4>
                                <p className="text-blue-gray-600 font-semibold">Fullstack Developer</p>
                            </div>
                            <div className="flex justify-center gap-7 pt-2 pb-4">
                                <div>
                                    <Link to={'https://github.com/Alexnderp'} target="blank">
                                        <GithubLogo size={32} color="#fcae04" /></Link>
                                </div>
                                <div>
                                    <Link to={'https://www.linkedin.com/in/alexnderp/'} target="blank">
                                        <LinkedinLogo size={32} color="#fcae04" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-90 bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div className="h-80">
                                <img
                                    src="https://i.imgur.com/AyjBXfG.jpeg"
                                    alt="profile-picture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center p-4">
                                <h4 className="text-xl font-Docker-One text-hoodaLaranja ">Rebeca</h4>
                                <h4 className="text-xl font-Docker-One text-hoodaLaranja mb-2">Ouriques</h4>
                                <p className="text-blue-gray-600 font-semibold">Fullstack Developer</p>
                            </div>
                            <div className="flex justify-center gap-7 pt-2 pb-4">
                                <div>
                                    <Link to={'https://github.com/RebecaOuriques'} target="blank">
                                        <GithubLogo size={32} color="#fcae04" /></Link>
                                </div>
                                <div>
                                    <Link to={'https://www.linkedin.com/in/rebeca-ouriques/'} target="blank">
                                        <LinkedinLogo size={32} color="#fcae04" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-90 bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div className="h-80">
                                <img
                                    src="https://i.imgur.com/vx3QYOv.jpeg"
                                    alt="profile-picture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center p-4">
                                <h4 className="text-xl font-Docker-One text-hoodaLaranja">Camila</h4>
                                <h4 className="text-xl font-Docker-One text-hoodaLaranja mb-2">Andrade</h4>
                                <p className="text-blue-gray-600 font-semibold">Fullstack Developer</p>
                            </div>
                            <div className="flex justify-center gap-7 pt-2 pb-4">
                                <div>
                                    <Link to={'https://www.github.com/camilarandrade'} target="blank">
                                        <GithubLogo size={32} color="#fcae04" /></Link>
                                </div>
                                <div>
                                    <Link to={'https://www.linkedin.com/in/camilardeandrade/'} target="blank">
                                        <LinkedinLogo size={32} color="#fcae04" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-90 bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div className="h-80">
                                <img
                                    src="https://i.imgur.com/yGGAkcv.jpeg"
                                    alt="profile-picture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center p-4">
                                <h4 className="text-xl font-Docker-One text-hoodaLaranja">Gabriel</h4>
                                <h4 className="text-xl font-Docker-One mb-2 text-hoodaLaranja">Santana</h4>
                                <p className="font-semibold">Fullstack Developer</p>
                            </div>
                            <div className="flex justify-center gap-7 pt-2 pb-4">
                                <div>
                                    <Link to={'https://github.com/GabrielSantanadaSilva'} target="blank">
                                        <GithubLogo size={32} color="#fcae04" /></Link>
                                </div>
                                <div>
                                    <Link to={'https://www.linkedin.com/in/gabsantsilva/'} target="blank">
                                        <LinkedinLogo size={32} color="#fcae04" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-90 bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <div className="h-80">
                            <img
                                src="https://i.imgur.com/lFugnlI.jpeg"
                                alt="profile-picture"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-center p-4">
                            <h4 className="text-xl font-Docker-One text-hoodaLaranja">Wilker</h4>
                            <h4 className="text-xl font-Docker-One mb-2 text-hoodaLaranja">Silva</h4>
                            <p className="font-semibold">Fullstack Developer</p>
                        </div>
                        <div className="flex justify-center gap-7 pt-2 pb-4">
                            <div>
                                <Link to={'https://github.com/Wil220'} target="blank">
                                    <GithubLogo size={32} color="#fcae04" /></Link>
                            </div>
                            <div>
                                <Link to={'https://www.linkedin.com/in/wilker-silva-3a0ab2273/'} target="blank">
                                    <LinkedinLogo size={32} color="#fcae04" /></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}

function HandshakeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m11 17 2 2a1 1 0 1 0 3-3" />
            <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
            <path d="m21 3 1 11h-2" />
            <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
            <path d="M3 4h8" />
        </svg>
    )
}


function LeafIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
    )
}


function LinkIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    )
}


function UsersIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}




export default aboutUs

