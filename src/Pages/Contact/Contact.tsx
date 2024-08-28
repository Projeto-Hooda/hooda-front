import { ChangeEvent } from "react";
import { toastAlerta } from "../../utils/ToastAlerta";


function Contact() {

    function forms(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
    toastAlerta('Feedback enviado com sucesso', 'sucesso');
    }
  return (
    <>
    <div className="text-start pt-5 pl-5">
    <h2 className="text-3xl font-semibold tracking-tighter sm:text-3xl md:text-4xl font-Montserrat">Contato</h2>
  </div>
    <section className="w-full flex xl:justify-evenly py-12 md:py-24 lg:py-10">

      <div className="container grid gap-12 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="grid gap-2">
              <h3 className="text-xl font-bold font-sans">Informações: </h3>
              <div className="flex items-center gap-2">
              <LocateIcon className="h-5 w-5 text-muted-foreground" />
              <p className='font-sans'>
                Rua Exemplo, 123 - Rio de Janeiro - RJ - CEP 12345-678 </p>
              </div>
              <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-muted-foreground" />
              <p className="text-muted-foreground">(11) 1234-5678</p>
              </div>
              <div className="flex items-center gap-2">
              <MailIcon className="h-5 w-5 text-muted-foreground" />
              <p className="text-muted-foreground">projetohooda@gmail.com</p>
            </div>
            </div>
            <div className="grid gap-2">
              <h3 className="text-xl font-bold font-sans">Horário de Funcionamento</h3>
              <div className="flex items-center gap-2 pb-2">
              <ClockIcon className="w-5 h-5 text-muted-foreground" />
              <p  className='font-sans'>
                Segunda a Sexta: 9h às 18h
              </p>
                </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden pt-2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.4009651582319!2d-43.681941744617184!3d-22.92067540769505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bfa597c4c2151%3A0xbaebd06b7e1f895c!2sSanta%20Cruz%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1724785346482!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
          </div>
          </div>
          <div className="grid grid-cols-1 mb-[5rem] md:grid-cols-1 items-center gap-2">
                    <h1 className="text-2xl mt-8 font-Montserrat flex justify-center md:mt-0">Nos deixe um feedback: </h1>
                    <form className="max-w-md mx-auto mt-16" onSubmit={forms}>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-hoodaLaranja focus:outline-none focus:ring-0 focus:border-hoodaLaranja peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-hoodaLaranja peer-focus:dark:text-hoodaLaranja peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-hoodaLaranja focus:outline-none focus:ring-0 focus:border-hoodaLaranja peer" placeholder=" " required />
                                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-hoodaLaranja peer-focus:dark:text-hoodaLaranja peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Primeiro Nome</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-hoodaLaranja focus:outline-none focus:ring-0 focus:border-hoodaLaranja peer" placeholder=" " required />
                                <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-hoodaLaranja peer-focus:dark:text-hoodaLaranja peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sobrenome</label>
                            </div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="feedback" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Digite seu Feedback</label>

                            <div className="flex justify-center">
                                <textarea id="feedback" className="feedback-textarea w-full max-w-md text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 p-4" placeholder=" "></textarea>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full max-w-xs px-6 py-3 text-center dark:bg-hoodaLaranja dark:hover:bg-amber-500 dark:focus:ring-hoodaLaranja">
                                Enviar
                            </button>
                        </div>
                    </form>
            </div>
        </div>
      </div>
    </section>
    </>

  )
}

function PhoneIcon(props) {
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }

  function MailIcon(props) {
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
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  }

  function LocateIcon(props) {
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
        <line x1="2" x2="5" y1="12" y2="12" />
        <line x1="19" x2="22" y1="12" y2="12" />
        <line x1="12" x2="12" y1="2" y2="5" />
        <line x1="12" x2="12" y1="19" y2="22" />
        <circle cx="12" cy="12" r="7" />
      </svg>
    )
  }

  function ClockIcon(props) {
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
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
  

export default Contact