import separador from '/images/separator.png' // línea suave decorativa
import { FaChurch, FaGlassCheers, FaUtensils, FaMusic } from 'react-icons/fa'

const events = [
    { time: '5:00 p.m.', label: 'Ceremonia religiosa', icon: <FaChurch /> },
    { time: '6:00 p.m.', label: 'Coctel de bienvenida', icon: <FaGlassCheers /> },
    { time: '7:00 p.m.', label: 'Cena especial', icon: <FaUtensils /> },
    { time: '8:30 p.m.', label: 'Fiesta y baile', icon: <FaMusic /> },
]

const Itinerary = () => {
    return (
        <section className="bg-cream px-6 py-16 text-center">
            <h2 className="text-3xl font-display text-primary mb-10">Itinerario</h2>

            {/* Separador decorativo */}
            <img src={separador} alt="separador" className="mx-auto w-24 mb-8" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {events.map((event, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="text-2xl text-primary mb-2">{event.icon}</div>
                        <p className="font-semibold text-gray-800">{event.label}</p>
                        <p className="text-sm text-gray-600">{event.time}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Itinerary
