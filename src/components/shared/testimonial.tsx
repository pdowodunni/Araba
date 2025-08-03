import { useRef, useState, useEffect } from "react";
import { TESTIMONIALS } from "../../config/hero";
import gsap from "gsap";
import { ArrowDown, ArrowUp, ArrowUpRight } from "lucide-react";

{
  /* 
    ============================= 
    Features to be added:
      - Infinite scroll on image 
      - Fix glitch when using the arrow buttons
    ============================= 
  */
}

const images = [
  "/images/face/1.jpg",
  "/images/face/2.jpg",
  "/images/face/3.jpg",
  "/images/face/4.jpg",
  "/images/face/5.jpg",
];

export default function VerticalSnapCarousel() {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const scrollStart = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const DRAG_FACTOR = 2;

  const handleScroll = () => {
    const c = containerRef.current;
    const h = c.firstChild.offsetHeight;
    setActiveIndex(Math.round(c.scrollTop / h));
  };

  const handleMouseDown = (e) => {
    const c = containerRef.current;
    isDragging.current = true;
    startY.current = e.pageY - c.offsetTop;
    scrollStart.current = c.scrollTop;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const c = containerRef.current;
    const dy = e.pageY - c.offsetTop - startY.current;
    c.scrollTop = scrollStart.current - dy * DRAG_FACTOR;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const c = containerRef.current;
    c.addEventListener("scroll", handleScroll);
    return () => c.removeEventListener("scroll", handleScroll);
  }, []);

  // PREVIOUS & NEXT
  const changeIndex = (newIndex: number) => {
    const max = images.length - 1;
    const idx = Math.min(Math.max(newIndex, 0), max);
    setActiveIndex(idx);
    const c = containerRef.current;
    const h = c.firstChild.offsetHeight;
    c.scrollTo({ top: idx * h, behavior: "smooth" });
  };

  const handlePrev = () => changeIndex(activeIndex - 1);
  const handleNext = () => changeIndex(activeIndex + 1);

  // CONTENT LOGIC
  const [data, setData] = useState(TESTIMONIALS[0]);

  // const data =
  //   TESTIMONIALS.find((t) => t.id === activeIndex) || TESTIMONIALS[0];

  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    gsap.to(el, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        gsap.to(el, { opacity: 1, duration: 0.3 });
        setData(TESTIMONIALS[activeIndex]);
      },
    });
  }, [activeIndex]);

  return (
    <div className="bg-mid-bg">
      <div className="mx-container h-[750px]">
        <div className="flex items-center justify-between">
          {/* PROFIL IMAGE SLIDER */}
          <div
            ref={containerRef}
            className="h-[750px] w-[300px] overflow-y-scroll snap-y snap-mandatory scroll-smooth cursor-grab scrollbar-hide py-60"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className={`snap-center pointer-events-none select-none flex justify-center items-center h-[250px] transition-all duration-200 ${
                  i === activeIndex
                    ? "scale-100 opacity-100"
                    : "scale-85 opacity-20"
                }`}
              >
                <img
                  src={src}
                  alt={`Person ${i}`}
                  className="rounded-full h-60 w-60 object-cover"
                />
              </div>
            ))}
          </div>
          {/* CONTENT */}
          <div
            ref={contentRef}
            className="max-w-4xl mx-auto flex-1 flex flex-col gap-16"
            style={{ opacity: 0 }}
          >
            <div className="flex flex-col gap-10">
              <div className="flex items-center justify-start w-40 ">
                <data.Logo />
              </div>
              {data.quote}
              <p className="">
                {data.author}, {data.role}
              </p>
            </div>

            <div className="flex gap-6 ">
              {data.stats.length > 0 && (
                <div className="flex gap-6 my-3">
                  {data.stats.map(({ value, label }, i) => (
                    <div
                      key={i}
                      className={`flex flex-col gap-1 min-w-[160px] ${
                        i !== 0 && "pl-6 border-l border-primary"
                      }`}
                    >
                      <div className="text-2xl font-instrumental-regular">
                        {value}
                      </div>
                      <div className="text-sm">{label}</div>
                    </div>
                  ))}
                </div>
              )}

              {data.caseStudy && (
                <a
                  href={data.caseStudy.link}
                  className="flex relative gap-1 p-2 rounded-lg border border-primary transition"
                >
                  <div className="absolute top-1 right-1">
                    <ArrowUpRight size={16} />
                  </div>
                  <div
                    className={`h-full flex aspect-square bg-red-500 rounded-lg`}
                    style={{
                      backgroundImage: `url('/images/1(7).jpg')`,
                      backgroundPosition: "center",
                    }}
                  >
                    {/* <img
                      src={data.caseStudy.thumbnail}
                      alt={data.caseStudy.title}
                    /> */}
                  </div>

                  <div className="flex flex-col justify-between">
                    <p className="uppercase text-xs opacity-50">
                      S&S ACTIVE FOOTWEAR
                    </p>
                    <p>{data.caseStudy.title}</p>
                  </div>
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <div
              className="p-4 border border-primary flex justify-center items-center rounded-full"
              onClick={() => handlePrev()}
            >
              <ArrowUp />
            </div>
            <div
              className="p-4 border border-primary flex justify-center items-center rounded-full"
              onClick={() => handleNext()}
            >
              <ArrowDown />
            </div>
          </div>
          {/* current index: {activeIndex} */}
        </div>
      </div>
    </div>
  );
}
