// ---------------------------------------------------------------------------
// Central content file. Edit the values below to update site copy.
// Swap `image` URLs in `gallery` for real photos when available.
// ---------------------------------------------------------------------------

import profilePhoto from "../assets/profile.jpeg";
import event1Photo from "../assets/event1.jpeg";
import event2Photo from "../assets/event2.jpeg";
import event3Photo from "../assets/event3.jpeg";
import event4Photo from "../assets/event4.jpeg";
import event5Photo from "../assets/event5.jpeg";
import event6Photo from "../assets/event6.jpeg";
import event7Photo from "../assets/event7-bunda-cerdas-academy.jpeg";
import event8Photo from "../assets/event8-hjkb-216.jpeg";
import event9Photo from "../assets/event9-finexpo-2026.jpeg";
import event10Photo from "../assets/event10-thufan-al-aqsha.jpeg";
import protocolApelPhoto from "../assets/protocol-apel-honorarium.jpg";
import protocolApelVideo from "../assets/videos/protocol-apel-honorarium.mp4";
import protocolSharingPhoto from "../assets/protocol-sharing-session-unpad.jpg";
import protocolSharingVideo from "../assets/videos/protocol-sharing-session-unpad.mp4";
import protocolSertijabPhoto from "../assets/protocol-sertijab-tp-pkk.jpg";
import protocolSertijabVideo from "../assets/videos/protocol-sertijab-tp-pkk.mp4";
import mufinBrowniesPhoto from "../assets/film-mufin-brownies.jpg";
import besokKiamatPhoto from "../assets/film-besok-kiamat.jpg";

export const profile = {
  name: "Aisyah Mahla Nurussalamah",
  title: "Event Coordination & Public Relations",
  tagline:
    "Delivering seamless, high-impact events through meticulous planning, cross-functional coordination, and confident public relations.",
  location: "Bandung, West Java",
  email: "aisyahmahla29@gmail.com",
  phone: "085175440729",
  // Used to build the wa.me link (Indonesian country code, no leading 0).
  whatsappNumber: "6285175440729",
  // Profile photo shown on the Home hero.
  photo: profilePhoto,
};

export const bio = `Communication Science graduate with a strong interest in Event Management and Public Relations. Hands-on experience coordinating 10+ official government-level events during an internship within Bandung City's governmental protocol division. Skilled in end-to-end event logistics, cross-functional coordination, and formal communication — comfortable operating in fast-paced, high-visibility environments where precision and professionalism matter.`;

export const skills = {
  hard: [
    "Event Planning & Coordination",
    "Protocol & Logistics Management",
    "Press Release Writing",
    "Media Relations",
    "Social Media Management",
  ],
  soft: [
    "Public Speaking",
    "Problem Solving",
    "Strategic Communication",
    "Critical Thinking",
    "Adaptability",
  ],
};

export const education = {
  degree: "Bachelor of Communication",
  institution: "Muhammadiyah University of Bandung",
  period: "Oct 2021 – Aug 2025",
  gpa: "3.80 / 4.00",
};

// Most recent first.
export const experience = [
  {
    role: "Freelance Event Crew",
    org: "Sauyunan Creation",
    period: "Jun 2026 – Present",
    bullets: [
      "Post Team & Location Coordinator for \"QRIS Jelajah Kuliner Indonesia\", a West Java-wide culinary event with 21 participating vendors.",
      "Liaison Officer for MC Stage at \"Bandung QRIS Run\", coordinating stage logistics and communication for an event with 2,000+ participants.",
    ],
  },
  {
    role: "Internship — Governmental Protocol",
    org: "Bandung City Leadership",
    period: "Feb 2025 – Mar 2025",
    bullets: [
      "Coordinated end-to-end protocol and logistics for 10+ official city-level events.",
      "Managed the Bandung Mayor & Vice Mayor Inauguration Ceremony 2025–2030 (50+ guests).",
      "Managed the 79th Commemoration of Bandung Lautan Api (100+ guests).",
      "Facilitated communication between city leadership and event organizers across ceremonial and community events.",
    ],
  },
  {
    role: "General Treasurer",
    org: "HIMA Ilmu Komunikasi",
    period: "Dec 2023 – Oct 2024",
    bullets: [
      "Coordinated budget planning and logistics for major departmental events, including Leadership Inauguration, \"MASAKU\" Orientation, and Dies Natalis.",
      "Managed organizational finances with accurate reporting and accountability.",
    ],
  },
  {
    role: "Secretary, Department of Organizational Apparatus Development",
    org: "HIMA Ilmu Komunikasi",
    period: "Jan 2023 – Nov 2023",
    bullets: [
      "Handled administrative operations, documentation, and correspondence.",
      "Prepared internal reporting to support departmental activities.",
    ],
  },
];

// Placeholder images via placehold.co — replace `image` with real event photos later.
export const gallery = [
  {
    id: "inauguration-2025",
    title: "Mayor & Vice Mayor Inauguration Ceremony 2025–2030",
    role: "Protocol & Logistics Coordinator",
    description:
      "Coordinated end-to-end protocol and logistics for the official inauguration ceremony, hosting 50+ guests.",
    image: event1Photo,
  },
  {
    id: "kinemaksi-acfest-kpk",
    title: "KINEMAKSI X ACFEST KPK",
    role: "PIC Finance & Accounting",
    description:
      "Managed finance and accounting for an anti-corruption film festival held in collaboration with KPK, attended by 800+ participants.",
    image: event2Photo,
  },
  {
    id: "qris-kuliner",
    title: "QRIS Jelajah Kuliner Indonesia",
    role: "Post Team & Location Coordinator",
    description:
      "Coordinated locations and on-ground teams for a West Java-wide culinary event with 21 participating vendors.",
    image: event3Photo,
  },
  {
    id: "qris-run",
    title: "Bandung QRIS Run",
    role: "Liaison Officer, MC Stage",
    description:
      "Served as liaison for the MC stage, coordinating run-of-show communication for an event with 2,000+ participants.",
    image: event4Photo,
  },
  {
    id: "protocol-internship",
    title: "Governmental Protocol Internship",
    role: "Protocol & Logistics Support",
    description:
      "Coordinated protocol and logistics across 10+ official city-level events within Bandung City leadership.",
    image: event5Photo,
  },
  {
    id: "hima-events",
    title: "HIMA Ilmu Komunikasi Departmental Events",
    role: "General Treasurer",
    description:
      "Coordinated budget planning and logistics for Leadership Inauguration, MASAKU Orientation, and Dies Natalis.",
    image: event6Photo,
  },
  {
    id: "usher-bunda-cerdas-academy",
    title: "Usher — Bunda Cerdas Academy With Bye Bye Fever",
    role: "Usher",
    description:
      "Welcomed and guided 200+ attendees to event areas in August 2026, provided clear information about the event schedule, booth locations, and facilities, and ensured entrance, seating, and emergency exits remained orderly throughout the event.",
    image: event7Photo,
  },
  {
    id: "lo-hjkb-216",
    title: "Liaison Officer — Hari Jadi Kota Bandung (HJKB) Festival ke-216",
    role: "Liaison Officer",
    description:
      "Served as Liaison Officer for festival participants at the 216th Hari Jadi Kota Bandung Festival, acting as their point of contact between the committee and participants throughout the event.",
    image: event8Photo,
  },
  {
    id: "floor-finexpo-2026",
    title: "Floor — FinExpo 2026",
    role: "Floor",
    description:
      "Served as official floor crew at FinExpo 2026, supporting on-site event operations and coordinating with the team to keep the program running smoothly.",
    image: event9Photo,
  },
  {
    id: "usher-thufan-al-aqsha",
    title: "Usher — Thufan Al-Aqsha",
    role: "Usher",
    description:
      "Welcomed and guided attendees to event areas at Thufan Al-Aqsha, provided clear information about the event schedule and facilities, and ensured entrance and seating remained orderly throughout the event.",
    image: event10Photo,
  },
];

// Video content, shown on the separate Content page.
export const contentPosts = [
  {
    id: "protocol-apel-honorarium",
    title: "Morning Assembly & Honorarium Handover for Educators",
    role: "Protocol & Logistics Support",
    description:
      "Supported the morning assembly (apel pagi) ceremony marking the honorarium handover for educators across Bandung City.",
    image: protocolApelPhoto,
    video: protocolApelVideo,
  },
  {
    id: "protocol-sharing-session-unpad",
    title: "Sharing Session with Universitas Padjadjaran's Student Protocol Corps",
    role: "Protocol & Logistics Support",
    description:
      "Joined a sharing session with Universitas Padjadjaran's student protocol corps on MC hosting and protocol practices.",
    image: protocolSharingPhoto,
    video: protocolSharingVideo,
  },
  {
    id: "protocol-sertijab-tp-pkk",
    title: "Handover Ceremony & Inauguration of TP PKK Bandung City",
    role: "Protocol & Logistics Support",
    description:
      "Supported the handover ceremony and inauguration of the TP PKK, Dekranasda, and TP Posyandu leadership of Bandung City.",
    image: protocolSertijabPhoto,
    video: protocolSertijabVideo,
  },
  {
    id: "film-mufin-brownies",
    title: "MUFIN BROWNIES",
    role: "Cast",
    description: "Short film by Aisyah Mahla and team.",
    image: mufinBrowniesPhoto,
    youtubeId: "mYTcp0wvFjE",
  },
  {
    id: "film-besok-kiamat",
    title: "BESOK KIAMAT",
    role: "Wardrobe",
    description: "Short film by Anak Negeri Production.",
    image: besokKiamatPhoto,
    youtubeId: "yiVOkG9ZLoA",
  },
];
