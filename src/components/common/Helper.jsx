export const NavLinks = [
  {
    label: "Home",
    path: "/",
    isActive: true,
    hasDropdown: true,
    dropdownItems: [
      { label: "Home 1", path: "/" },
      { label: "Home 2", path: "/" },
      { label: "Home 3", path: "/" },
    ],
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Pages",
    path: "/pages",
    hasDropdown: true,
    dropdownItems: [
      { label: "Our Team", path: "/team" },
      { label: "Pricing", path: "/pricing" },
      { label: "Gallery", path: "/gallery" },
    ],
  },
  {
    label: "Blog",
    path: "/blog",
    hasDropdown: true,
    dropdownItems: [
      { label: "Blog Grid", path: "/blog" },
      { label: "Blog List", path: "/blog" },
      { label: "Blog Details", path: "/blog" },
    ],
  },
  {
    label: "Faq's",
    path: "/faqs",
  },
];

export const statisticsData = [
  {
    value: 91,
    symbol: "+",
    label: "Awards Win",
  },
  {
    value: 95,
    symbol: "%",
    label: "Satisfied Clients",
  },
  {
    value: 48,
    symbol: "+",
    label: "Years of Experience",
  },
  {
    value: 143,
    symbol: "+",
    label: "Employees Working",
  },
];

export const teamData = [
  {
    id: 1,
    name: "Marvin Joner",
    role: "Bakery Worker",
    image: "/team/team1.jpg",
  },
  {
    id: 2,
    name: "Patricia Woodrum",
    role: "Staff Worker",
    image: "/team/team2.jpg",
  },
  {
    id: 3,
    name: "Hannaz Stone",
    role: "Shop Worker",
    image: "/team/team3.jpg",
  },
];
export const ContactDetails = [
  {image:"/images/contactlocation.png",heading:"Our Location",subheading:["121 King Street, Melbourne Victoria 3000 Australia"]},
  {image:"/images/contactmobile.png",heading:"Phone Number",subheading:["(+61 3 8376 6284)","(+800 2345 6789)"]},
  {image:"/images/contactpage-email.png",heading:"Email us at",subheading:["info@icedelights.com","icedelights@gmail.com"]},
]
