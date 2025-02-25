import React from "react";

const demoProducts = [
  {
    title: "ROLEX GMT SUBMARINER",
    size: "43 mm",
    description:
      "Descubre el Rolex GMT Submariner, una obra maestra de la relojería diseñada para aventureros exigentes. Con su imponente caja de 43 mm de diámetro y un elegante bisel giratorio en cerámica negra, este reloj combina precisión, resistencia y un estilo atemporal.",
    link: "/discover-more",
    image: "/media/prod1.jpg",
    reverse: false,
  },
  {
    title: "Vacheron Constantin ",
    size: "Overseas Tourbillon ",
    description:
      "El Vacheron Constantin Overseas Tourbillon es el reloj definitivo para los que buscan lujo y precisión. Con su tourbillon a la vista y una elegante caja de 42.5 mm, combina la máxima sofisticación con un diseño deportivo. Perfecto para quienes exigen lo mejor, este modelo ofrece un rendimiento excepcional y un estilo incomparable.",
    link: "/discover-more",
    image: "/media/prod2.avif",
    reverse: true,
  },
  {
    title: "Vacheron Constantin",
    size: "Métiers d'Art",
    description: `Vacheron Constantin Métiers d'Art El Vacheron Constantin Métiers d'Art es una obra de arte en cada detalle. Creado por maestros artesanos, este reloj exclusivo combina la alta relojería con técnicas artísticas ancestrales. Con diseños únicos en la esfera y acabados impecables, es perfecto para los amantes del lujo y el arte en su máxima expresión.`,
    link: "/discover-more",
    image: "/media/prod3.avif",
    reverse: false,
  },
];

const ProductCard = ({ title, size, description, link, reverse, image }) => {
  return (
    <div
      className={`
        flex flex-col md:flex-row 
        ${reverse ? "md:flex-row-reverse" : ""} 
        md:max-h-[90vh]
        bg-black text-white 
        p-4 md:p-8
        xl:px-32
        rounded-lg
        mb-10
      `}
    >
      <div className="w-full md:w-1/2 ">
        <img
          src={image}
          alt={title}
          className="w-full h-full rounded object-cover xl:p-10 "
        />
      </div>

      <div className="relative w-full md:w-1/2 flex flex-col  md:p-[3rem] text-center">
        <div>
          <h1 className="text-3xl mt-5  xl:text-4xl tracking-wide">
            {title}
          </h1>
          <h2 className="text-lg md:text-xl font-raleway font-extralight italic text-white text-right">
            {size}
          </h2>
        </div>
        <div className="my-auto">
          <p className="text-base p-5 md:text-lg leading-relaxed text-gray-100 xl:p-18">
            {description}
          </p>

          {link && (
            <div className="mt-4 md:mt-6">
              <a
                href={link}
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-200"
              >
                <span className="mr-2">Descubre más</span>
                <span>—</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductDisplay = ({ products = demoProducts }) => {
  return (
    <div className="min-h-screen bg-black py-6 ">
      {products.map((product, index) => (
        <ProductCard key={`${product.title}-${index}`} {...product} />
      ))}
    </div>
  );
};

export default ProductDisplay;
