import separator from '/images/separator-2.png'

const images = [
  '/images/img6.jpeg',
  '/images/img5.jpeg',
  '/images/img4.jpeg',
  '/images/img3.jpeg',
  '/images/img2.jpeg',
  '/images/img1.jpeg',
]

const Gallery = () => {
  return (
    <section className="px-6 text-center">
      <img src={separator} alt="separator" className="mx-auto w-[220px]" />
      <h2 className="text-7xl font-display text-primary mb-10 kapakana-regular">Momentos especiales</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`foto-${idx}`}
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery
