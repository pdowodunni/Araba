import { useRef, useState, useLayoutEffect, type ReactNode } from "react";
import gsap from "gsap";
import { Plus } from "lucide-react";

type FAQItem = { id: number; q: string; a: ReactNode };
type FAQGroup = { title: string; items: FAQItem[] };

const FAQ_GROUPS: FAQGroup[] = [
  {
    title: "Identity & Positioning",
    items: [
      {
        id: 1,
        q: "What exactly is Araba Collective?",
        a: (
          <p>
            Araba Collective is a storytelling engine. We craft audio, visual,
            and strategic stories that move people, build brands, and spark
            impact. Whether it's a global NGO, a fast-growing startup, or a
            cultural institution, we help turn ideas into experiences people can
            feel.
          </p>
        ),
      },
      {
        id: 2,
        q: "Is The SoundBaking Company the same as Araba Collective?",
        a: (
          <div className="space-y-3">
            <p>
              Think of Araba Collective as the big tree—the umbrella brand that
              covers all of our storytelling expressions. The SoundBaking
              Company is one of its branches, focused specifically on audio
              storytelling: voiceovers, immersive audio, music, sound design,
              and podcasts.
            </p>
            <p>
              Araba Collective itself spans wider, combining audio, visual, and
              strategic storytelling and will eventually include more
              specialised arms. So, The SoundBaking Company is part of Araba,
              but Araba is bigger than just The SoundBaking Company.
            </p>
          </div>
        ),
      },
      {
        id: 3,
        q: "How is Araba Collective different from other agencies?",
        a: (
          <div className="space-y-3">
            <p>
              Most agencies focus on making content. We focus on creating
              connections. Agencies will give you ads, visuals, or campaigns
              that look good.
            </p>
            <p>
              We craft stories, strategies, and content that people feel—stories
              that spark belonging, trust, and movement.
            </p>
            <div className="space-y-2">
              <p>
                A disqualified Big Brother Naija contestant walked away with
                ₦30m, not from the show, but from strangers who felt like they
                knew her.
              </p>
              <p>
                Hilda Baci didn't just cook; she made millions care enough to
                rally behind her.
              </p>
              <p>
                Tunde Onakoya didn't raise $100k because people liked chess;
                they liked his heart, his story, his mission.
              </p>
            </div>
            <p>
              That's the power of emotional connection. And that's exactly what
              we help brands, NGOs, and changemakers build. Because when people
              feel something, they share. They fund. They show up. So while
              others sell ads, we build tribes around impact. Emotions move
              money. Community drives change. And that's the Araba difference.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Reach & Accessibility",
    items: [
      {
        id: 4,
        q: "Do you only work with Nigerian companies?",
        a: (
          <p>
            Not at all. We're rooted in Africa but built for the world. Our team
            and partners work across Nigeria, Africa, and globally, virtually or
            physically.
          </p>
        ),
      },
      {
        id: 5,
        q: "Can you handle projects outside Nigeria?",
        a: (
          <p>
            Yes. We collaborate with global partners, remote studios, and
            distribution platforms. We've worked on projects that live on
            Spotify, Apple, YouTube, and global stages.
          </p>
        ),
      },
      {
        id: 6,
        q: "Can startups and smaller organisations afford to work with you?",
        a: (
          <p>
            We design scalable offers—from specialised, productized services
            (like Audiobook Production or Physical-to-Digital Storytelling) to
            full custom campaigns. There's always an entry point to fit your
            needs and budget.
          </p>
        ),
      },
    ],
  },
  {
    title: "Process & Services",
    items: [
      {
        id: 7,
        q: "What services do you offer?",
        a: (
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Audio:</strong> voiceover, music, sound design, immersive
              audio, podcasts, audiobooks
            </li>
            <li>
              <strong>Visual:</strong> video production, documentaries, short
              films, brand marketing videos
            </li>
            <li>
              <strong>Strategic:</strong> brand story frameworks, campaign
              strategy, physical-to-digital storytelling
            </li>
          </ul>
        ),
      },
      {
        id: 8,
        q: "What's the difference between services and productized offers?",
        a: (
          <div className="space-y-3">
            <p>
              Services are flexible (voiceovers, video production, etc.), while
              productized offers are packaged, end-to-end solutions designed to
              be turnkey and ROI-focused:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Audiobook-to-Audio Experience</li>
              <li>Physical-to-Digital Storytelling</li>
              <li>Immersive Audio Experiences</li>
            </ul>
          </div>
        ),
      },
      {
        id: 9,
        q: "What's your creative process like?",
        a: (
          <p>
            Every project starts with discovery (goals and audience). Then we
            co-create the concept, produce the content (scripting, casting,
            production), and deliver with strategy for distribution and impact.
          </p>
        ),
      },
    ],
  },
  {
    title: "Value & ROI",
    items: [
      {
        id: 10,
        q: "Why should we invest in storytelling instead of regular ads?",
        a: (
          <p>
            Ads get attention. Storytelling makes people feel something—and
            feelings last longer than features or prices. We craft movements
            people want to be part of.
          </p>
        ),
      },
      {
        id: 11,
        q: "What's the ROI of working with Araba?",
        a: (
          <div className="space-y-3">
            <p>
              Our storytelling builds emotional connections that drive
              engagement, loyalty, and measurable results:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Deeper Connection:</strong> People buy into stories.
                Nigerians rallied behind Hilda Baci or Tunde Onakoya because of
                the story behind them.
              </li>
              <li>
                <strong>Higher Recall:</strong> A story is ~22× more memorable
                than a fact.
              </li>
              <li>
                <strong>Community:</strong> Stories turn audiences into
                advocates and funders.
              </li>
              <li>
                <strong>Cultural Relevance:</strong> In Africa (and globally),
                stories shape trust and influence; they cut through noise better
                than big media spends.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    title: "Operations & Practicalities",
    items: [
      {
        id: 12,
        q: "How long does a project take?",
        a: (
          <p>
            It depends. A jingle: 1–2 weeks. A documentary: 4–8 weeks. An
            audiobook: 2–3 months. We'll provide a clear timeline upfront.
          </p>
        ),
      },
      {
        id: 13,
        q: "Do you work remotely or on-site?",
        a: (
          <p>
            Both. We run virtual collaborations worldwide and have trusted
            studio/production partners across regions for physical projects.
          </p>
        ),
      },
      {
        id: 14,
        q: "What if we don't know exactly what we need?",
        a: (
          <p>
            That's fine. Many clients come with half-formed ideas. Bring the
            seed—we'll help it grow into a story that works.
          </p>
        ),
      },
      {
        id: 15,
        q: "How do we get started?",
        a: (
          <p>
            Book a discovery call → Share your brief or challenge → We co-design
            a solution → We produce, deliver, and amplify your story.
          </p>
        ),
      },
    ],
  },
];

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const answerRefs = useRef<Record<number, HTMLDivElement>>({});
  const iconRefs = useRef<Record<number, SVGSVGElement>>({});

  useLayoutEffect(() => {
    FAQ_GROUPS.forEach((g) =>
      g.items.forEach(({ id }) => {
        const ans = answerRefs.current[id];
        if (ans) gsap.set(ans, { height: 0, opacity: 0 });
      })
    );
  }, []);

  const closeItem = (id: number) => {
    const ans = answerRefs.current[id];
    const icon = iconRefs.current[id];
    if (!ans || !icon) return;
    gsap.to(ans, { height: 0, opacity: 0, duration: 0.3, ease: "power2.out" });
    gsap.to(icon, { rotate: 0, duration: 0.3, ease: "power2.out" });
  };

  const openItem = (id: number) => {
    const ans = answerRefs.current[id];
    const icon = iconRefs.current[id];
    if (!ans || !icon) return;
    gsap.to(ans, {
      height: "auto",
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(icon, { rotate: 45, duration: 0.4, ease: "power2.out" });
  };

  const toggle = (id: number) => {
    if (openId === id) {
      closeItem(id);
      setOpenId(null);
    } else {
      if (openId !== null) closeItem(openId);
      openItem(id);
      setOpenId(id);
    }
  };

  const leftGroups: FAQGroup[] = [];
  const rightGroups: FAQGroup[] = [];
  FAQ_GROUPS.forEach((g, i) =>
    i % 2 === 0 ? leftGroups.push(g) : rightGroups.push(g)
  );

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[leftGroups, rightGroups].map((groupCol, colIdx) => (
              <div key={colIdx} className="space-y-8">
                {groupCol.map((group, gi) => (
                  <div key={`${group.title}-${gi}`} className="space-y-4">
                    <h6 className="s-heading opacity-60">{group.title}</h6>
                    <div className="space-y-3">
                      {group.items.map(({ id, q, a }) => (
                        <div
                          key={id}
                          className="border-b border-light-bg/20 py-4 cursor-pointer"
                        >
                          <button
                            type="button"
                            aria-expanded={openId === id}
                            onClick={() => toggle(id)}
                            className="w-full grid grid-cols-[1fr_30px] gap-5 items-center text-left cursor-pointer"
                          >
                            <span className="text-xl font-interTight-medium">
                              {q}
                            </span>
                            <Plus
                              size={28}
                              strokeWidth={1}
                              ref={(el) => {
                                if (el) iconRefs.current[id] = el;
                              }}
                              className="transition-transform"
                            />
                          </button>

                          <div
                            ref={(el) => {
                              if (el) answerRefs.current[id] = el;
                            }}
                            className="overflow-hidden mt-2 text-white/80"
                          >
                            <div className="py-2">{a}</div>
                          </div>
                        </div>
                      ))}
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
