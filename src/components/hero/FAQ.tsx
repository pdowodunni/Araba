import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { Plus } from "lucide-react";

const FAQS = [
  {
    id: 0,
    q: "Is social media design included in my Araba subscription?",
    a: "Yes—our subscription covers all static and animated social assets.",
  },
  {
    id: 1,
    q: "What is the minimum commitment for social media creative services?",
    a: "No minimum—cancel or pause at any time with 30 days notice.",
  },
  {
    id: 2,
    q: "How do Araba’s social media creative services work?",
    a: "Submit requests in our platform and get drafts within 24–48h.",
  },
  {
    id: 3,
    q: "What type of customers use your social media design services?",
    a: "From startups to Fortune 500s across all industries.",
  },
  {
    id: 4,
    q: "Why is Araba better than other social media design services?",
    a: "Global talent pool + AI tools = faster, higher‑quality work.",
  },
  {
    id: 5,
    q: "How is Araba different from a traditional social media creative agency?",
    a: "Flat subscription pricing, on‑demand scaling, real‑time collaboration.",
  },
  {
    id: 6,
    q: "Do you do custom plans?",
    a: "Yes—contact sales for tailored team size, SLAs and pricing.",
  },
  {
    id: 7,
    q: "What billing options do you offer?",
    a: "Monthly, quarterly or annual billing, with net‑30 payment terms.",
  },
  {
    id: 8,
    q: "What is social media design?",
    a: "Branded graphics and animations optimized for each platform.",
  },
  {
    id: 9,
    q: "How important is on‑brand content in social media campaigns?",
    a: "Consistent branding drives recognition and engagement.",
  },
  {
    id: 10,
    q: "Why should you use motion graphics in your social media content?",
    a: "Motion grabs attention and boosts watch‑time.",
  },
  {
    id: 11,
    q: "How important is on‑brand content in social media campaigns?",
    a: "Aligns audience perception and builds trust.",
  },
];

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const answerRefs = useRef<Record<number, HTMLDivElement>>({});
  const iconRefs = useRef<Record<number, SVGSVGElement>>({});

  useLayoutEffect(() => {
    FAQS.forEach(({ id }) => {
      const ans = answerRefs.current[id];
      if (ans) gsap.set(ans, { height: 0, opacity: 0 });
    });
  }, []);

  {
    /* 
    ============================= 
    To open and close a section.
    I just used gsap. Could have done it with plain CSS 
    buh who has the time abeg.
    ============================= 
  */
  }
  const toggle = (id: number) => {
    const ans = answerRefs.current[id];
    const icon = iconRefs.current[id];
    if (openId === id) {
      gsap.to(ans, { height: 0, opacity: 0, duration: 0.3 });
      gsap.to(icon, { rotate: 0, duration: 0.3 });
      setOpenId(null);
    } else {
      if (openId !== null) {
        const prevAns = answerRefs.current[openId];
        const prevIcon = iconRefs.current[openId];
        gsap.to(prevAns, { height: 0, opacity: 0, duration: 0.3 });
        gsap.to(prevIcon, { rotate: 0, duration: 0.3 });
      }
      gsap.to(ans, { height: "auto", opacity: 1, duration: 0.4 });
      gsap.to(icon, { rotate: 45, duration: 0.4 });
      setOpenId(id);
    }
  };
  {
    /* 
    ============================= 
    Split the sections into two.
    If we use one container to hold everthing it causes some weird layout chnage I don't like
    ============================= 
  */
  }
  const half = Math.ceil(FAQS.length / 2);
  const left = FAQS.slice(0, half);
  const right = FAQS.slice(half);

  return (
    <section className="bg-primary text-light-bg">
      <div className="mx-container">
        <div className="pt-lg-pad pb-md-pad flex flex-col gap-20">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-wide">FAQ</p>
            <h3 className="m-0 p-0">
              Frequently asked{" "}
              <em className="font-instrumental-serif">questions</em>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[left, right].map((column, colIdx) => (
              <div key={colIdx} className="space-y-4">
                {column.map(({ id, q, a }) => (
                  <div key={id} className="border-b border-light-bg/20 py-5">
                    <button
                      onClick={() => toggle(id)}
                      className="w-full grid grid-cols-[1fr_30px] gap-5 justify-between items-center text-left "
                    >
                      <span className=" text-xl font-interTight-medium ">
                        {q}
                      </span>
                      <span className="">
                        <Plus
                          size={28}
                          strokeWidth={1}
                          ref={(el): void => {
                            iconRefs.current[id] = el!;
                          }}
                          className="transition-transform"
                        />
                      </span>
                    </button>
                    <div
                      ref={(el): void => {
                        answerRefs.current[id] = el!;
                      }}
                      className="overflow-hidden mt-2 text-white/80 "
                    >
                      <p className="py-2">{a}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
