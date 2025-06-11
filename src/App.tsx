import './App.css'
import Gallery from './components/Gallery'
import separator from '/images/separator-2.png'
import background from '/images/body.png'
import pareja from '/images/pareja.png'
import song from '/music/cancion.mp3'
import point from '/images/point.png'
import church from '/images/church.png'
import { useRef, useState } from 'react'
import dressCode from '/images/wedding-dress.png'
import { FaGift, FaWhatsapp } from 'react-icons/fa'
import play from '/images/play.png'

function App() {
  const audio = useRef<HTMLAudioElement>(null)
  const [show, setShow] = useState(true)
  const handleClick = () => {
    audio.current?.play()
    setShow(false)
  }
  return (
    <>
      {
        show &&
        <section className='h-screen w-full fixed top-0 z-10 flex items-center justify-center bg-accent filter-blur' onClick={handleClick} >
          <img src={play} alt="separator" className="w-[150px] palpitar" />
        </section>
      }
      <audio autoPlay={true} loop={false} controls ref={audio} style={{ display: 'none' }}>
        <source src={song} type="audio/mpeg" />
      </audio>
      <div className='font-sans max-w-[500px] m-auto mt-0 overflow-hidden'>
        <section className="relative flex flex-col items-center justify-center text-center pt-7 bg-top bg-no-repeat bg-contain" style={{ backgroundImage: `url(${background})` }}>
          {/* Nombres */}
          <div className='reletive w-3/4 mt-28 flex flex-col justify-center'>
            <h1 className="text-8xl md:text-4xl font-display text-primary kapakana-regular text-left w-full">
              Mariana
            </h1>
            <p className="text-7xl md:text-4xl font-display text-primary kapakana-regular m-0 p-0">
              &
            </p>
            <h1 className="text-8xl md:text-4xl font-display text-primary mb-4 kapakana-regular text-right">
              Federico
            </h1>
            <h6 className='italianno-regular text-2xl'>A veces, el amor no llega con ruido ni advertencia. A veces, simplemente aparece, suave como una brisa, tímido como una mirada que se cruza por primera vez. Fue así como comenzó nuestra historia: sin prisa, sin guiones, solo tú y yo compartiendo momentos que parecían pequeños, pero que en el fondo estaban marcando el inicio de algo eterno.</h6>
            <img src={separator} alt="separator" className="mx-auto w-[220px]" />
          </div>
          <img
            src={pareja}
            alt="Mariana y Federico"
            className="w-[300px]"
          />
          <div className="relative flex flex-col justify-center items-center px-6 bg-white">

            <p className="max-w-md text-black italic font-light leading-relaxed italianno-regular text-3xl mt-5 z-2">
              “Grábame como un sello sobre tu corazón; llévame como una marca sobre tu brazo.
              Fuerte es el amor, como la muerte, y tenaz la pasión, como el sepulcro.
              Como llama divina es el fuego ardiente del amor.
              Ni las muchas aguas pueden apagarlo, ni los ríos pueden extinguirlo.”
              <br />
              <span className="block mt-2 text-gray-500 text-xl">— Cantares 8:6-7</span>
            </p>
            <img src={separator} alt="separator" className="mx-auto w-[220px]" />
          </div>
        </section>

        <section className="px-6 text-center bg-white">
          <h2 className="text-7xl font-display text-primary mb-1 kapakana-regular">¡Nuestra Boda!</h2>
          <p className='work-sans-light'>Queremos que estés en este día tan especial con nosotros</p>

          {/* Fecha y hora */}
          <div className='flex justify-center items-center my-6 w-full'>
            <p className='text-2xl font-medium text-[#98af9f] work-sans-light border-t-2 border-b-2 border-[#98af9f] p-2 w-[100px]'>Sabado</p>
            <div className='mx-5'>
              <p className="text-xl font-medium text-[#98af9f] work-sans-semibold">Julio</p>
              <p className="text-7xl font-medium text-[#9ca286] work-sans-bold">5</p>
            </div>
            <p className="text-2xl font-medium text-[#98af9f] work-sans-light border-t-2 border-b-2 border-[#98af9f] p-2 w-[100px]">2025</p>
          </div>

          {/* Lugar de la ceremonia */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 work-sans-light">Ceremonia, <span className='work-sans-bold'>Parroquia emaus </span></h3>
            <p className="text-sm text-gray-600 mb-2 work-sans-light">Hora: 7:00pm</p>
            <a
              href="https://maps.app.goo.gl/sExNtSXexWRXRpPP6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 px-4 py-2 text-sm bg-[#dfd2c2] text-white rounded-lg hover:bg-opacity-90 transition flex gap-2 w-[140px] m-auto"
            >
              <img src={church} width="12px" height={"12px"}/>  Ver ubicación
            </a>
          </div>

          {/* Lugar de la recepción */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 work-sans-light">Recepción, <span className='work-sans-bold'>Eventoselecto</span></h3>
            <p className="text-sm text-gray-600 mb-2 work-sans-light">Hora: 8:00pm</p>
            <a
              href="https://maps.app.goo.gl/h3VtFaJEv5wyP5Nz5"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 px-4 py-2 text-sm bg-[#dfd2c2] text-white rounded-lg hover:bg-opacity-90 transition flex gap-2 w-[140px] m-auto"
            >
              <img src={point} width="12px" height={"12px"}/> Ver ubicación
            </a>
          </div>
        </section>

        <section className="px-6 text-center bg-white">
          <img src={separator} alt="separator" className="mx-auto w-[220px]" />
          <h2 className="text-7xl font-display text-primary mb-10 kapakana-regular">Detalles</h2>

          {/* Lluvia de sobres */}
          <div className="mb-8 work-sans-light flex flex-col items-center justify-center">
            <div className="text-2xl text-primary mb-2"><FaGift /></div>
            <p className="text-black">
              Tu presencia es nuestro mejor regalo,
              <br />
              pero si deseas apoyarnos, tendremos <strong>lluvia de sobres</strong>.
            </p>
          </div>

          {/* Confirmación de asistencia */}
          <div className="mb-8 work-sans-light flex flex-col items-center justify-center">
            <div className="text-2xl text-primary mb-2"><FaWhatsapp /></div>
            <p className="text-black">
              Confirma tu asistencia al WhatsApp de los novios:
            </p>
            <div className="mt-2 space-x-4">
              <a
                href="https://wa.me/573246729960"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#dfd2c2] text-white rounded-md hover:bg-opacity-90 transition"
              >
                Mariana
              </a>
              <a
                href="https://wa.me/573006887323"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#dfd2c2] text-white rounded-md hover:bg-opacity-90 transition"
              >
                Federico
              </a>
            </div>
          </div>

          {/* Código de vestimenta */}
          <div className='work-sans-light flex flex-col items-center justify-center'>
            <div className="text-2xl text-primary mb-2 "><img src={dressCode} /></div>
            <p className="text-black">
              Vestimenta: <strong>formal</strong>
            </p>
          </div>
        </section>

        <Gallery />
        <img src="/images/footer.png" alt="" />
      </div>
    </>
  )
}

export default App
