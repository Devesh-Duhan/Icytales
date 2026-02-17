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
    image: "/images/marvinJoner.png",
  },
  {
    id: 2,
    name: "Patricia Woodrum",
    role: "Staff Worker",
    image: "/images/patriciaWoodrum.png",
  },
  {
    id: 3,
    name: "Hannaz Stone",
    role: "Shop Worker",
    image: "/images/hannazStone.png",
  },
  {
    id: 4,
    name: "Elina James",
    role: "Bakery Worker",
    image: "/images/elinaJames.png",
  },
  {
    id: 5,
    name: "Kevin Andrew",
    role: "Staff Worker",
    image: "/images/kevinAndrew.png",
  },
  {
    id: 6,
    name: "Lauren Trout",
    role: "Shop Worker",
    image: "/images/laurenTrout.png",
  },
];
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

export const testimonialData = [
  {
    id: 1,
    name: "Kevin Andrew",
    role: "Happy Client",
    image: "/images/kevinAndrew2.png",
    rating: 5,
    text: "Quisuam est rui dolorem ipsum rui do sit amet, consectetur, adipise velit seu non numquam eiusm temora incidunt aut labore siner...",
  },
  {
    id: 2,
    name: "Peri James",
    role: "Happy Client",
    image: "/images/periJames.png",
    rating: 5,
    text: "Ruisuam est rui dolorem ipsum rui do sit amet, consectetur, adipise velit seu non numquam eiusm temora incidunt aut labore siner...",
  },
  {
    id: 3,
    name: "Naurth Reough",
    role: "Happy Client",
    image: "/images/naurthReough.png",
    rating: 5,
    text: "Nuisuam est rui dolorem ipsum rui do sit amet, consectetur, adipise velit seu non numquam eiusm temora incidunt aut labore siner...",
  },
  {
    id: 1,
    name: "Kevin Andrew",
    role: "Happy Client",
    image: "/images/kevinAndrew2.png",
    rating: 5,
    text: "Quisuam est rui dolorem ipsum rui do sit amet, consectetur, adipise velit seu non numquam eiusm temora incidunt aut labore siner...",
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
    ratings:"4.3",
      type: "favourite",
    

    
  },
  {
    id: 2,
    heading: "Strawberry Shortcake",
    title: "Strawberry ice cream layered with shortcake.",
    price: "$5.29",
    image: "/images/strawberry.png",
    ratings:"4.4",
      type: "favourite",
   
  },
  {
    id: 3,
    heading: "Mint Chocolate Chip Cone",
    title: "Refreshing mint ice cream with chocolate chips.",
    price: "$3.99",
    image: "/images/mint.png",
    ratings:"3.8",
      type: "favourite",
    
  },
  {
    id: 4,
    heading: "Classic Vanilla Ice Cream",
    title: "Creamy vanilla ice cream topped with cherry.",
    price: "$4.99",
    image: "/images/vanilla.png",
    ratings:"4.6",
      type: "bestSeller",
   
  },
  {
    id: 5,
    heading: "Mint Chocolate Chip Cone",
    title: "Refreshing mint ice cream with chocolate chips.",
    price: "$3.99",
    image: "/images/mint.png",
    ratings:"4.6",
      type: "bestSeller",
   
  },
   {
    id: 6,
    heading: "Mint Chocolate Chip Cone",
    title: "Refreshing mint ice cream with chocolate chips.",
    price: "$3.99",
    image: "/images/mint.png",
     ratings:"4.6",
      type: "bestSeller",
  },
  {
    id: 7,
    heading: "Strawberry Shortcake",
    title: "Strawberry ice cream layered with shortcake.",
    price: "$5.29",
    image: "/images/strawberry.png",
     ratings:"4.6",
      type: "bestSeller",
      

  },
  {
    id: 8,
    heading: "Strawberry Shortcake",
    title: "Strawberry ice cream layered with shortcake.",
    price: "$5.29",
    image: "/images/strawberry.png",
    ratings:"4.4",
      type: "favourite",
   
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
export const Discountproducts = [
  {
    id: 1,
    heading: " Strawberry Sundae",
    title: "Strawberry ice cream with fresh strawberries.",
    price: "$5.99",
    image: "/images/strawberrySudane.png",
    discount: "28% OFF",
    off: "$12.99",
  },
  {
    id: 2,
    heading: "Chocolate Chip Cookie Cone",
    title: "Chocolate chip cookie dough ice cream in a cone.",
    price: "$4.49",
    image: "/images/chocolateCone.png",
    discount: "22% OFF",
    off: "$13.99",
  },
  {
    id: 3,
    heading: "Rocky Road Sundae",
    title: "Marshmallow and nutty rockyroad ice cream.",
    price: "$5.69",
    image: "/images/rockyRoadSundae.png",
    discount: "20% OFF",
    off: "$14.99",
  },
  {
    id: 4,
    heading: "Peach Melba Sundae",
    title: "Peach ice cream topped with raspberry sauce",
    price: "$5.39",
    image: "/images/peachMelbaSundae.png",
    discount: "16% OFF",
    off: "$15.99",
  },
  {
    id: 2,
    heading: "Chocolate Chip Cookie Cone",
    title: "Chocolate chip cookie dough ice cream in a cone.",
    price: "$4.49",
    image: "/images/chocolateCone.png",
    discount: "22% OFF",
    off: "$13.99",
  },
];
export const termsData = [
  {
    id: 1,
    title: "Use of Website:",
    desc: "Your use of our website is subject to these Terms and Conditions. You must be at least 18 years old to use our services.",
  },
  {
    id: 2,
    title: "User Account:",
    desc: "You are responsible for maintaining the confidentiality of your account and password. You agree to provide accurate and complete information when creating an account.",
  },
  {
    id: 3,
    title: "Intellectual Property:",
    desc: "All content on this website, including text, graphics, logos, and images, is the property of [Your Online Education Platform] and protected by copyright laws. You may not reproduce, distribute, or transmit any content without prior written consent.",
  },
  {
    id: 4,
    title: "Payment and Billing:",
    desc: "Payment for our services is required in advance. All fees are non-refundable.",
  },
  {
    id: 5,
    title: "Termination:",
    desc: "We reserve the right to suspend or terminate your account at any time for violation of these Terms and Conditions. Please review our full Terms and Conditions for more detailed information.You have the right to access, update, or delete your personal information at any time. You can opt out of receiving promotional emails by following the instructions provided in the email. By using our website, you consent to the terms of this Privacy Policy. If you have any questions or concerns, please contact us.",
  },
];
export const PolicyData = [
  {
    id: 1,
    title: " Information We Collect:",
    desc: "We collect personal information such as your name, email address, and payment details when you create an account or make a purchase. We also collect usage data such as IP address, browser type, and pages visited.",
  },
  {
    id: 2,
    title: " How We Use Your Information:",
    desc: "We use your personal information to provide and improve our services. Your information may also be used for communication purposes, such as sending newsletters or updates.",
  },
  {
    id: 3,
    title: " Information Sharing:",
    desc: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. We may share your information with trusted third-party service providers who assist us in operating our website.",
  },
  {
    id: 4,
    title: " Security:",
    desc: "We implement security measures to protect your personal information against unauthorized access or alteration. However, no method of transmission over the Internet or electronic storage is 100% secure.",
  },
  {
    id: 5,
    title: " Your Choices:",
    desc: "You have the right to access, update, or delete your personal information at any time. You can opt out of receiving promotional emails by following the instructions provided in the email. By using our website, you consent to the terms of this Privacy Policy. If you have any questions or concerns, please contact us.",
  },
];

export const CommitmentCards = [
  {
    id: 1,
    title: "Free Shipping",
    desc: "Enjoy the convenience of free shipping on all orders!",
    icon: "/images/shippingTruck.png",
  },
  {
    id: 2,
    title: "Unique Packaging",
    desc: "Experience our commitment to uniqueness with every order.",
    icon: "/images/uniquePackaging.png",
  },
  {
    id: 3,
    title: "100% Money Back",
    desc: "Rest assured with our money-back guarantee at any time.",
    icon: "/images/moneyBack.png",
  },
  {
    id: 4,
    title: "Fast Delivery",
    desc: "Experience swift and efficiently reliable delivery with us.",
    icon: "/images/fastDelivery.png",
  },
];
export const faqs = [
  {
    id: 1,
    question: "Do you offer dairy-free or vegan options?",
    answer:
      "Yes! We offer a variety of dairy-free and vegan ice cream options made with plant-based ingredients.",
  },
  {
    id: 2,
    question: "Can I order ice cream online?",
    answer:
      "Absolutely! You can order directly from our website and get it delivered to your doorstep.",
  },
  {
    id: 3,
    question: "What ingredients do you use in your ice cream?",
    answer:
      "We use premium quality milk, fresh fruits, natural flavors, and high-quality chocolate.",
  },
  {
    id: 4,
    question: "Do you have nutritional information available?",
    answer:
      "Yes, nutritional information is available on product pages and packaging.",
  },
  {
    id: 5,
    question: "Do you have gluten-free ice cream?",
    answer:
      "Yes, many of our flavors are gluten-free. Please check product labels for confirmation.",
  },
  {
    id: 6,
    question: "Can I book your store for private events?",
    answer:
      "Yes! We host birthday parties, celebrations, and private tasting events.",
  },
];
export const NewProducts = [
  { id:1,
  productimage: "/images/fourColumnFirstcard.png" },
  { id:2,
  productimage: "/images/fourColumnSecondCard.png" },
  { id:3,
  productimage: "/images/fourColumnThirdCard.png" },
  { id:4,
  productimage: "/images/fourColumnForthCard.png" },
  { id:5,
  productimage: "/images/fourColumnFifthCard.png" },
  { id:6,
  productimage: "/images/fourColumnSixthCard.png" },
  { id:7,
  productimage: "/images/fourColumnSeventhCard.png" },
  { id:8,
  productimage: "/images/fourColumnEighthCard.png" },
];
export const MoreProducts = [
  { id: 1, productimage: "/images/fourColumnFirstcard.png" },
  { id: 8, productimage: "/images/fourColumnEighthCard.png" },
  { id: 4, productimage: "/images/fourColumnForthCard.png" },
];
