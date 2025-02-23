import React from "react";

const WatchesSection = () => {
  // Sample data structure for watches
  const watches = [
    {
      name: "OLAS ETERNAS",
      image: "/media/arrive1.avif",
      description:
        "La elegancia del oro blanco se manifiesta en su sofisticación. Con un diámetro de 38 mm captura el lujo refinado con la atemporalidad.",
    },
    {
      name: "ROYAL OAK",
      image: "/media/arrive2.avif",
      description:
        "El texto deEl nuevo Royal Oak Tourbillon Volante Automático Esqueleto introduce una nueva aleación de oro de 18 quilates, denominada oro arena.l párrafo",
    },
    {
      name: "CALENDARIO PERPETUO",
      image: "/media/arrive1.avif",
      description:
        "Diseñada en colaboración con John Mayer, esta edición limitada combina una caja y un brazalete de oro blanco de 18 quilates con la nueva y reluciente esfera con acabado «Crystal Sky» de la Manufactura en un tono azul oscuro.",
    },
    {
      name: "CALENDARIO PERPETUO",
      image: "/media/arrive2.avif",
      description:
        "Diseñada en colaboración con John Mayer, esta edición limitada combina una caja y un brazalete de oro blanco de 18 quilates con la nueva y reluciente esfera con acabado «Crystal Sky» de la Manufactura en un tono azul oscuro.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8 column md:flex">
      {/* Header Section */}
      <div className="mb-16 mr-24">
        <h1 className="text-4xl font-light mb-4">
          <span className="bg-gradient-to-r from-white via-yellow-400 to-blue-500 bg-clip-text text-transparent">
            NUESTROS
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-yellow-400 to-blue-500 bg-clip-text text-transparent">
            RELOJES
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-yellow-400 to-blue-500 bg-clip-text text-transparent">
            MAS
          </span>
          <br />
          <span className="text-white font-bold">EXCLUSIVOS</span>
        </h1>
        <button className="border-b border-white text-sm pb-1">
          Descubre tods los relojes
        </button>
      </div>

      {/* Watches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {watches.map((watch) => (
          <div key={watch.id} className="flex flex-col space-y-4">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={watch.image}
                alt={watch.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold">{watch.name}</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              {watch.description}
            </p>
            <button className="border-b border-white text-sm pb-1 w-fit">
              Descubre más
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchesSection;
