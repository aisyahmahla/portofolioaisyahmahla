// Source of truth for the downloadable CV (cv/CV-Aisyah_Mahla_Nurussalamah.pdf).
// Plain data only (no asset imports) so scripts/build-cv.mjs can load it in Node.
// When the portfolio site (src/data/content.js) changes, mirror it here and run `npm run cv`.

export const cvHeader = {
  name: "AISYAH MAHLA NURUSSALAMAH",
  contact: ["Bandung", "+6285175440729", "aisyahmahla29@gmail.com"],
  portfolioUrl: "https://aisyahmahla.github.io/portofolioaisyahmahla/",
};

export const cvSummary =
  "A Bachelor's degree graduate in Communication Studies with strong interpersonal communication skills, professional appearance, and interest in protocol and event management. Experienced in organizational activities involving team coordination, rundown preparation, and guest services. Disciplined, detail-oriented, and capable of working under pressure. Willing to work on an event-based schedule including weekends and public holidays. Proficient in Microsoft Office and fluent in both spoken and written English.";

export const cvInternship = [
  {
    title: "Governmental Protocol Within Bandung City Leadership",
    role: "Internship",
    period: "Feb 2025 - March 2025",
    bullets: [
      "Coordinated end-to-end protocol and event logistics - seating arrangement, venue readiness, and guest flow for 10+ official city-level events within a 2-month period, including the Bandung Mayor & Vice Mayor Inauguration Ceremony 2025-2030 (50+ guests) and the 79th Commemoration of Bandung Lautan Api (100+ guests).",
      "Facilitated strategic communication between city leadership and event organizers across diverse event formats, from formal ceremonial events (inauguration of Mayor, TP PKK & Posyandu, and Dekranasda leadership) to community-facing programs (Taman Lansia inauguration, MC & Protocol sharing session), ensuring smooth execution of official ceremonies.",
      "Supported multi-stakeholder coordination for large-scale public events such as the DWP Bandung City Routine Meeting and Gebyar Ramadhan 1446H (100+ attendees each), managing logistics across government officials, community leaders, and the public.",
    ],
  },
];

// Most recent first.
export const cvWork = [
  {
    title: "Thufan Al-Aqsha",
    role: "Usher",
    period: "",
    bullets: [
      "Welcomed and guided attendees to event areas.",
      "Provided clear information about event schedule and facilities to guests.",
      "Ensured entrance and seating remained orderly throughout the event.",
    ],
  },
  {
    title: "FinExpo 2026",
    role: "Floor",
    period: "October 2026",
    bullets: [
      "Served as official floor crew supporting on-site event operations.",
      "Coordinated with the team to keep the program running smoothly.",
    ],
  },
  {
    title: "Hari Jadi Kota Bandung ke-216",
    role: "LO",
    period: "October 2026",
    bullets: [
      "Acted as Liaison Officer for 50+ festival participants at the Bandung City Anniversary Festival.",
      "Ensured seamless coordination between participants and committee, achieving 100% adherence to the event rundown.",
      "Resolved on-site logistical issues quickly, maintaining participant satisfaction and smooth event execution.",
    ],
  },
  {
    title: "Bandung QRIS Run With Bank Indonesia Jabar",
    role: "LO MC",
    period: "August 2026",
    bullets: [
      "Coordinated stage communication and run-of-show logistics for a large-scale run event with 2,000+ participants.",
      "Acted as the main point of contact between the MC, event organizer, talent, and technical team.",
      "Ensured the MC understood the rundown, script, and cue times for a smooth event flow.",
      "Prepared all MC needs including script, microphone check, water, meals, and pre-show briefing.",
    ],
  },
  {
    title: "Bunda Cerdas Academy With Bye Bye Fever",
    role: "Usher",
    period: "August 2026",
    bullets: [
      "Welcomed and guided 200+ attendees to event areas.",
      "Provided clear information about event schedule, booth locations, and facilities to guests.",
      "Ensured entrance, seating, and emergency exits remained orderly throughout the event.",
    ],
  },
  {
    title: "QRIS Jelajah Kuliner Indonesia With Bank Indonesia Jabar",
    role: "Coordinator",
    period: "July 2026",
    bullets: [
      "Managed checkpoint operations and on-site coordination.",
      "Conducted venue research and selected locations based on concept, capacity, and budget.",
      "Designed event layout including entrance and VIP zones.",
      "Served as the main liaison with venue management for permits, electricity, security, and cleaning.",
    ],
  },
  {
    title: "Curata Experience",
    role: "Event Planner",
    period: "June 2026",
    bullets: [
      "Developed event concept, theme, rundown, and timeline from planning to execution.",
      "Coordinated across 5 teams: creative, logistics, sponsorship, media, and operations.",
      "Led team briefings and ensured all event elements aligned with brand guidelines.",
    ],
  },
  {
    title: "PT CV Pisangan Timur Raya (Ranting 2 Gathering)",
    role: "Logistics",
    period: "June 2026",
    bullets: [
      "Managed procurement, inventory, and distribution of all event equipment: sound, lighting, decor.",
      "Created and maintained a master checklist to track all items from H-5 to H+1.",
      "Coordinated with other teams for delivery, setup, and pickup of all logistics.",
    ],
  },
  {
    title: "Kinemaksi X ACFEST KPK",
    role: "PIC Accounting",
    period: "October 2024",
    bullets: [
      "Prepared the event budget, monitored cash flow, and recorded all income and expenses.",
      "Processed payments to vendors, talent, and crew according to milestones.",
      "Compiled and submitted the final financial accountability report within H+3 after the event.",
    ],
  },
];

export const cvOrganization = [
  {
    title: "HIMA Ilmu Komunikasi",
    role: "General Treasurer",
    period: "Dec 2023 - Oct 2024",
    bullets: [
      "Coordinated budget planning and on-ground logistics support for major departmental events, including the HIMA Ilkom Leadership Inauguration (2023-2024), New Student Orientation \"MASAKU\" 2023, and Ilkom Dies Natalis 2024.",
      "Managed organizational finances, including cash flow tracking and budget planning, ensuring financial transparency and efficient resource allocation.",
      "Reviewed and validated cross-divisional budgets to align with organizational priorities and optimize fund utilization.",
    ],
  },
];

export const cvEducation = {
  school: "Muhammadiyah University of Bandung",
  degree: "Bachelor of Communication",
  gpa: "3.80 / 4.00",
  period: "2021 - 2025",
};

export const cvSkills = {
  skills:
    "Adaptability, ability to multitask, ability to work in a team, leadership and teamwork, communication skills, critical thinking and problem solving, effective time management, hard worker.",
  languages: "Indonesian, English, Arabic.",
};
