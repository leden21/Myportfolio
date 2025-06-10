import React, { useState, useEffect, useRef } from "react";

const certificateImages = [
  { src: "/images/cert1.png", title: "Certificate 1" },
  { src: "/images/cert2.png", title: "Certificate 2" },
  { src: "/images/cert3.png", title: "Certificate 3" },
  { src: "/images/cert4.png", title: "Certificate 4" },
  { src: "/images/cert5.png", title: "Certificate 5" },
  { src: "/images/cert6.jpeg", title: "Certificate 6" },
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
      {/* Certificate Section with Slide Animation */}
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

      {/* Lightbox View for Selected Certificate */}
      {selectedCertificate !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative p-4 bg-white shadow-lg rounded-lg">
            <img
              src={certificateImages[selectedCertificate].src}
              alt={certificateImages[selectedCertificate].title}
              className="w-[700px] h-[500px] rounded-lg shadow-md transition-transform duration-700 ease-in-out scale-110"
            />

            {/* Exit Button Inside Upper Right of Certificate */}
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
