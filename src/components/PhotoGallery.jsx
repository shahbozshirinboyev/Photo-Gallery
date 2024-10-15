import { useState } from "react";

// npm install yet-another-react-lightbox
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

function PhotoGallery() {
    
    const images ={
        img1 : "https://picsum.photos/seed/picy3shum/800/600",
        img2 : "https://picsum.photos/seed/pic5shum/800/600",
        img3 : "https://picsum.photos/seed/pic53shum/800/600",
        img4 : "https://picsum.photos/seed/picsh5um/800/600",
        img5 : "https://picsum.photos/seed/pic3s3hum/800/600",
        img6 : "https://picsum.photos/seed/pic3sh5um/800/600",
        img7 : "https://picsum.photos/seed/pic36sh5um/800/600",
        img8 : "https://picsum.photos/seed/pic63sh5um/800/600",
        img9 : "https://picsum.photos/seed/pic3fsh5um/800/600",
        img10 : "https://picsum.photos/seed/pic3s7h5um/800/600",
        img11 : "https://picsum.photos/seed/pifc3sh5um/800/600",
        img6 : "https://picsum.photos/seed/pic3sh5um/800/600",
        img12 : "https://picsum.photos/seed/pidc3sh5um/800/600",
    }

    const [open, setOpen] = useState(false);

    const [activeImg, setActiveImg] = useState('')

  return (
    <>
        <p className="text-center font-bold text-3xl mt-5">Photo Gallery</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 p-5 lg:p-16'>

            {Object.values(images).map((image, index)=>(
                 <img src={image} key={index}  alt="" className='rounded-3xl hover:scale-[0.95] transition-all duration-300' onClick={ () => { setOpen(true);  setActiveImg(image); }} />
            ))}

        </div>

        <>

            <Lightbox
                open={open}
                plugins={[Zoom]}
                close={() => setOpen(false)}
                slides={[ { src: `${activeImg}` } ]}
                carousel={{ finite: true }}
                render={{
                    buttonPrev: () => null, // Chapga o'tkazuvchi tugmani o'chiradi
                    buttonNext: () => null, // O'ngga o'tkazuvchi tugmani o'chiradi
                  }}
                  zoom={{
                    maxZoomPixelRatio: 5,  // Zoom imkoniyatlarini oshiradi (bu qiymatni oshirishingiz mumkin)
                    zoomInMultiplier: 2,   // Zoom bosqichlari tezligini boshqaradi
                    doubleTapDelay: 300,   // Ikki marta bosish uchun kechikish vaqti (ms)
                    doubleClickDelay: 300, // Ikki marta bosish uchun kechikish vaqti (ms)
                    scrollToZoom: true,    // Skrin qilish orqali zoom qilish imkoniyati
                }}
            />

        </>
    </>
  )
}

export default PhotoGallery