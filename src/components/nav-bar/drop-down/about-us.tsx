export default function ServiceDropDown() {
  const ABOUT_DATA = [
    {
      image: "/images/1(12).jpg",
      title: "AI excellence",
      text: "Your shortcut to AI's creative advantage",
    },
    {
      image: "/images/placeholder.jpg",
      title: "Our technology",
      text: "The tech powering your creative edge",
    },
    {
      image: "/images/1(12).jpg",
      title: "Our creative talent",
      text: "Meet our dedicated team",
    },
  ];
  return (
    <div className="relative z-5">
      <div className="pointer-events-auto relative top-full left-0 w-screen bg-white shadow-lg pt-12 ">
        <div className="grid grid-cols-3 gap-8 mx-container h-fit">
          {ABOUT_DATA.map((itm, idx) => {
            return (
              <div className="w-full flex flex-col gap-6" key={idx}>
                <img
                  src={itm.image}
                  alt={itm.text}
                  className="w-full h-60 object-cover object-center"
                />
                <div>
                  <p className="text-[#0a211f] ">{itm.title}</p>
                  <p className="text-sm text-[#0a211f] mt-1">{itm.text}</p>
                </div>
              </div>
            );
          })}
          <div></div>
        </div>
      </div>
    </div>
  );
}
