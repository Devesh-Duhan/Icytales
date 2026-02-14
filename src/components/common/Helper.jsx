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

export const homeProducts = [
  {
    id: 1,
    heading: " Chocolate Brownie Sundae",
    title: "Rich chocolate ice cream with chunks of brownie.",
    price: "$5.49",
    image: "/images/chocolate.png",
  },
  {
    id: 2,
    heading: "Strawberry Shortcake",
    title: "Strawberry ice cream layered with shortcake.",
    price: "$5.29",
    image: "/images/strawberry.png",
  },
  {
    id: 3,
    heading: "Mint Chocolate Chip Cone",
    title: "Refreshing mint ice cream with chocolate chips.",
    price: "$3.99",
    image: "/images/mint.png",
  },
  {
    id: 4,
    heading: "Classic Vanilla Ice Cream",
    title: "Creamy vanilla ice cream topped with cherry.",
    price: "$4.99",
    image: "/images/vanilla.png",
  },
  {
    id: 5,
    heading: "Mint Chocolate Chip Cone",
    title: "Refreshing mint ice cream with chocolate chips.",
    price: "$3.99",
    image: "/images/mint.png",
  },
];
 export const homeCategories =[
  { 
    id: 1,
    image:"/images/homeCategories1.png",
    text:"Sundaes"


  },
   { 
    id: 2,
    image:"/images/homeCategories2.png",
    text:"Ice Cream Cones"


  },
  { 
    id: 3,
    image:"/images/homeCategories3.png",
    text:"Milkshakes"


  },
  { 
    id: 4,
    image:"/images/homeCategories4.png",
    text:"Seasonal Flavors"


  },
  
 ]
