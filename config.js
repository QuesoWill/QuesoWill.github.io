/* ============================================================
   GIS PORTFOLIO TEMPLATE — CONFIG
   ============================================================

   This is the ONE file you need to edit to make the site yours.
   Every page on the site reads from here. Change something
   here, and it updates on the homepage, the projects page,
   the about page, and the contact page all at once.

   Rules of thumb:
   - Keep the quote marks around each value
   - Keep the commas at the end of each line
   - Don't delete the curly braces { } or square brackets [ ]

   ============================================================ */


const CONFIG = {

  // =========================================================
  // BASICS — name, contact, headshot
  // =========================================================

  name: "William Scharpf",
  tagline: "B.A. in Leadership Studies with a Minor in Data Science and Statistics, University of Richmond, 2026",
  location: "Baltimore, Maryland",

  email:    "williamascharpf@gmail.com",
  github:   "https://github.com/QuesoWill",
  linkedin: "https://www.linkedin.com/in/will-scharpf-b51ba5302/",
  website:  "",   // leave as "" to hide

  headshot: "images/headshot (2).jpg",


  // =========================================================
  // SHORT BIO — used on the homepage
  // 1-2 sentences. Keep it punchy.
  // =========================================================

  shortBio: `B.A. in Leadership Studies with a Minor in Data Science and Statistics, University of Richmond, 2026`,


  // =========================================================
  // LONG BIO — used on the About page
  // 3-6 paragraphs. Write like a human, not a resume.
  // To split into paragraphs, use \n\n between them.
  // =========================================================

  longBio: `I am a senior at the University of Richmond studying Geography
            and Data Science. My work focuses on using open spatial data
            to answer questions that communities are actually asking.

            In 2024 I interned with the City of Richmond's Office of
            Sustainability, where I built a series of tree-equity
            dashboards now used by neighborhood groups to advocate for
            plantings on underserved blocks. I have also worked on a
            statistical analysis of margins of error in American
            Community Survey data, a project I am co-authoring with
            two faculty members at UR.

            Outside of GIS, I write a small newsletter about urban
            history in the upper South, and I am slowly teaching
            myself to make decent sourdough.

            I am graduating in May 2026 and am looking for full-time
            roles in spatial analysis, planning support, or applied
            research.`,


  // =========================================================
  // EDUCATION — used on the About page
  // Add or remove entries as needed.
  // =========================================================

  education: [
    {
      school: "University of Richmond",
      degree: "B.A., Leadership Studies & Data Science",
      year:   "May 2026",
      note:   "Cum Laude"
    },
    // Add high school, study abroad, certificate programs, etc. here
    // {
    //   school: "...",
    //   degree: "...",
    //   year:   "...",
    //   note:   ""
    // },
  ],


  // =========================================================
  // EXPERIENCE — used on the About page
  // =========================================================

  experience: [
    {
      role:    "Student Manager",
      org:     "Technology Studio, Weinstein Learning Center, University of Richmond",
      years:   "2025 - 2026",
      blurb:   "Supervised and trained 20+ student employees and oversaw daily studio operations. Collaborated with full-time staff and campus departments to develop and improve service offerings. Conducted interviews and supported hiring decisions for new student staff. Planned and led weekly staff meetings."
    },
    {
      role:    "Instructional Technology Consultant",
      org:     "Technology Studio, Weinstein Learning Center, University of Richmond",
      years:   "2022 - 2025",
      blurb:   "Trained students, faculty and staff on cameras, software (e.g., Photoshop, Excel), and studio services"
    },
    {
      role:    "Data Analyst",
      org:     "Spider's Baseball, University of Richmond",
      years:   "2025 - 2026",
      blurb:   "Recorded and managed Trackman pitching data during home games. Maintained accurate player performance datasets"
    },
    {
      role:    "Intern",
      org:     "Johns Hopkins University, Bloomberg School of Public Health",
      years:   "Spring 2022",
      blurb:   "Conducted statistical research and stress-tested databases in advance of pharmaceutical trails; used R and Stata to clean data"
    },
    {
      role:    "Orange Ambassador",
      org:     "Chesapeake Baysox, (Orioles AA Affiliate)",
      years:   "Summer 2025",
      blurb:   "Assisted front office set	up	and executed on-field entertainment	and sponsorship deliverables. Engaged with fans	to	improve their experience; handpicked contestants and performed	on	the field. Pinch-hit in other departments (e.g., batter walk-up music DJ, ticket scanning at the gates). Advertised promotional events by calling local businesses and canvassing door to door."
    },
     {
      role:    "Lead Counselor",
      org:     "Summer at Friends",
      years:   "Summer 2023 and Summer 2024",
      blurb:   "Managed and mentored a staff of 100+ across multiple camp divisions. Ensured compliance with all State of Maryland regulatory procedures. Resolved conflicts,	managed emergencies,	and oversaw	logistics for camp-wide	events."
    },
    {
      role:    "Head Counselor",
      org:     "Summer at Friends",
      years:   "Summer 2021 and Summer 2022",
      blurb:   "Planned, set up and	executed	day-long	special events	such as field days and water games. Supervised a set group of campers during activities across all programming areas. Oversaw a team of 3–6 Counselors and Counselors-in-Training"
    },
    {
      role:    "Assistant Counselor",
      org:     "Summer at Friends",
      years:   "Summer 2019",
      blurb:   "Provided individualized supervision and support for campers with behavioral and learning differences. Organized the ordering and distribution of lunches across different camp groups. Assisted camp groups in need of extra help."
    },
    {
      role:    "Volunteer Math Tutor",
      org:     "Henrico County Juvenile Detention Home",
      years:   "Spring 2024",
      blurb:   "Tutored residents in math, working one-on-one, and assisted residents with the completion of materials for their personalized curricula."
    },
    {
      role:    "Volunteer",
      org:     "Habitat for Humanity reStore",
      years:   "Summer 2019",
      blurb:   "Inventoried donations, helped customers, assembled furniture and stocked shelves, all in support of Habitat for Humanity’s mission to build affordable housing"
    },
    {
      role:    "Intern",
      org:     "T. Rowe Price",
      years:   "Spring 2022",
      blurb:   "Applied	financial basics to researching and	collecting data on investing scenarios, then	presented findings to research staff."
    },
  ],


  // =========================================================
  // SKILLS — used on the About page
  // Grouped by category. Be honest about what you actually know.
  // =========================================================

  skillGroups: [
    {
      label: "GIS",
      skills: ["ArcGIS Pro", "QGIS", "ArcGIS Online", "OSM", "QGIS"]
    },
    {
      label: "Programming",
      skills: ["Python", "R", "STATA", "JavaScript"]
    },
    {
      label: "Remote Sensing",
      skills: ["ENVI", "Google Eath Engine"]
    },
    {
      label: "Data & databases",
      skills: ["PowerBI", "Tableau", "Trackman"]
    },
     {
        label: "Media Editing",
        skills: ["Adobe Suite (Illustrator, Photoshop, Premiere)", "Ableton Live", "iMovie", "Final Cut Pro"]
     },
     {
        label: "Office Suites",
        skills: ["Microsoft (including Access and Excel)", "Google Suite", "Slate", "TeamDynamix"]
     }
     ],


  // =========================================================
  // PROJECTS — the most important section
  // =========================================================
  //
  // Each project has a "slug" (a short id used for the URL)
  // and a "detailPage" (the file that holds the case study).
  //
  // To add a project: copy a whole { ... } block, paste it
  // below, and edit the values.
  //
  // The "featured: true" flag means it shows on the homepage.
  // Mark 3 as featured. The rest show on the projects page only.
  //
  // =========================================================

  projects: [

    {
      slug:        "uralum",
      title:       "University of Rihcmond Major Alumni Donors Represented in Class of 2027 Prespective Students",
      year:        "2026",
      type:        "Department Deliverable",
      thumbnail:   "images/projects/willnewproj.jpg",
      blurb:       `This map was created for the University of Richmond Alumni Assocation and uses data they provided. The map has a feature for every zipcode containing the residence of a major donor. The color of the feature indicates if the class of 2027 prospective student list contains someone from within that zipcode. `,
      tags:        ["ArcGIS Pro", "Python", "MapLibre", "Community-Engaged"],
      detailPage:  "project-tree-equity.html",
      featured:    true,
    },

    {
      slug:        "acs-uncertainty",
      title:       "Hidden Uncertainty in ACS Health Data",
      year:        "2025",
      type:        "Spatial Statistics",
      thumbnail:   "images/projects/acs-uncertainty-thumb.svg",
      blurb:       `A simulation study showing how margins of error in
                    American Community Survey estimates propagate through
                    public-health risk models.`,
      tags:        ["R", "GLM", "Monte Carlo", "Research"],
      detailPage:  "project-acs-uncertainty.html",
      featured:    true,
    },

    {
      slug:        "kde-traffic",
      title:       "Where the Crashes Cluster",
      year:        "2024",
      type:        "Spatial Analysis",
      thumbnail:   "images/projects/kde-traffic-thumb.svg",
      blurb:       `A kernel density analysis of three years of
                    traffic-accident data in Gainesville, Florida, with
                    an interactive bandwidth control.`,
      tags:        ["QGIS", "Python", "Leaflet", "KDE"],
      detailPage:  "project-kde-traffic.html",
      featured:    true,
    },

    // Example of a non-featured project (will appear on /projects only):
    {
      slug:        "sanborn-mosaic",
      title:       "Stitching the Sanborn Atlases of Richmond",
      year:        "2023",
      type:        "Historical GIS",
      thumbnail:   "images/projects/sanborn-mosaic-thumb.svg",
      blurb:       `Georeferenced and mosaicked a set of 1905 Sanborn fire
                    insurance maps into a single cloud-optimized GeoTIFF
                    for use in archival research.`,
      tags:        ["ArcGIS Pro", "GDAL", "COG", "Archives"],
      detailPage:  "project-sanborn-mosaic.html",
      featured:    false,
    },

  ],


  // =========================================================
  // CONTACT PAGE — what to say on the contact page
  // =========================================================

  contactLead: `I am open to conversations about GIS, cartography,
                community-engaged research, and full-time roles
                starting summer 2026.`,


  // =========================================================
  // SITE — small details
  // =========================================================

  // Used in browser tab and site footer
  siteTitle: "Portfolio",

  // Year on the footer copyright; "auto" uses the current year
  footerYear: "auto",

};
