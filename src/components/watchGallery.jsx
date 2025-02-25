"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const watches = [
  {
    id: 1,
    name: "Royal Oak",
    images: ["/watch1.png", "/watch1-2.png", "/watch1-3.png"],
    color: "Negro",
    material: "Acero inoxidable",
  },
  {
    id: 2,
    name: "Royal Oak",
    images: ["/watch2.png", "/watch2-2.png", "/watch2-3.png"],
    color: "Blanco",
    material: "Acero inoxidable",
  },
  {
    id: 3,
    name: "Royal Oak",
    images: ["/watch3.png", "/watch3-2.png", "/watch3-3.png"],
    color: "Verde",
    material: "Acero inoxidable",
  },
];

export default function WatchGallery() {
  const [search, setSearch] = useState("");
  const [selectedWatch, setSelectedWatch] = useState(null);

  const filteredWatches = watches.filter((watch) =>
    watch.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 w-full px-10">
      <input
        type="text"
        placeholder="Buscar reloj..."
        className="w-full p-2 border rounded-md mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredWatches.map((watch) => (
          <motion.div
            key={watch.id}
            className="cursor-pointer border p-4 rounded-lg"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedWatch(watch)}
          >
            <img src={watch.images[0]} alt={watch.name} className="w-full" />
            <p className="text-center mt-2">{watch.name}</p>
          </motion.div>
        ))}
      </div>

      {selectedWatch && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
        >
          <div className="bg-white p-6 rounded-lg w-full max-w-3xl relative">
            <button
              className="absolute top-4 right-4"
              onClick={() => setSelectedWatch(null)}
            >
              <X size={24} />
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <Carousel showThumbs={false}>
                  {selectedWatch.images.map((img, index) => (
                    <div key={index}>
                      <img src={img} alt={selectedWatch.name} />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="md:w-1/2 p-4">
                <h2 className="text-2xl font-bold">{selectedWatch.name}</h2>
                <p className="mt-2">Color: {selectedWatch.color}</p>
                <p>Material: {selectedWatch.material}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
