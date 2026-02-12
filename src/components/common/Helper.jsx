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

