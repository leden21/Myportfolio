import React, { useState, useEffect, useRef } from "react";
import cert1 from "../Assets/images/cert1.png";
import cert2 from "../Assets/images/cert2.png";
import cert3 from "../Assets/images/cert3.png";
import cert4 from "../Assets/images/cert4.png";
import cert5 from "../Assets/images/cert5.png";
import cert6 from "../Assets/images/cert6.jpeg";

const certificateImages = [
  { src: cert1, title: "Certificate 1" },
  { src: cert2, title: "Certificate 2" },
  { src: cert3, title: "Certificate 3" },
  { src: cert4, title: "Certificate 4" },
  { src: cert5, title: "Certificate 5" },
  { src: cert6, title: "Certificate 6" },
];

function CertificateGallery() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const certificateRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = certificateRef.current;
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        setIsVisible(sectionTop < window.innerHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-8 flex flex-col items-center justify-center text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Certificates</h1>

      <div
        ref={certificateRef}
        className={`grid grid-cols-3 gap-6 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {certificateImages.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer relative transition-all duration-500"
            onClick={() => setSelectedCertificate(index)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="rounded-lg shadow-md transition-transform duration-500 ease-in-out w-[300px] h-[200px] hover:scale-110"
            />
          </div>
        ))}
      </div>

      {selectedCertificate !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative p-4 bg-white shadow-lg rounded-lg">
            <img
              src={certificateImages[selectedCertificate].src}
              alt={certificateImages[selectedCertificate].title}
              className="w-[700px] h-[500px] rounded-lg shadow-md transition-transform duration-700 ease-in-out scale-110"
            />
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-3 right-3 text-black shadow-lg transition-all text-xl font-bold"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CertificateGallery;
