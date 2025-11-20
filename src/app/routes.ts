export const pathsRoute = {
  home: '/',
  hospital: '/pai-enterprise/business-types/hospitals',
  factory: '/pai-enterprise/business-types/factories',
  gym: '/pai-enterprise/business-types/gyms',
  hardware: '/pai-enterprise/hardware',
  software: '/pai-enterprise/software',
  blog: '/resources/blog',
  partnerHub: '/resources/partner-hub',
  careers: '/careers',
  podcast: '/community/podcast',
  shop: '/community/shop',
  events: '/community/events',
  ambassadors: '/community/ambassadors',
  company: '/company',
  terms: '/terms',
  privacyPolicy: '/privacy-policy',
  cookies: '/cookies',
  contactSales: '/contact-sales',
  limitlessProductivity:
    '/resources/blog/posts/unlocking-limitless-human-productivity',
  intelligentEnergy: '/resources/blog/posts/through-intelligent-energy',
};

export const paths = [
  { name: 'Home', path: '/' },
  {
    name: 'Pai Enterprise',
    path: '/pai-enterprise',
    dropdown: [
      {
        category: 'Business Types',
        subLinks: [
          {
            name: 'Hospitals',
            path: '/pai-enterprise/business-types/hospitals',
          },
          {
            name: 'Factories',
            path: '/pai-enterprise/business-types/factories',
          },
          { name: 'Gyms', path: '/pai-enterprise/business-types/gyms' },
        ],
      },
      { category: 'Hardware', path: '/pai-enterprise/hardware' },
      { category: 'Software', path: '/pai-enterprise/software' },
    ],
  },
  { name: 'Company', path: '/company' },
  {
    name: 'Resources',
    path: '/resources',
    // This item will have a dropdown menu
    dropdown: [
      { category: 'Blog', path: '/resources/blog' },
      // { category: 'Lab Notes', path: '/resources/lab-notes' },
      // { category: 'Webinars', path: '/resources/webinars' },
      // { category: 'Case Studies', path: '/resources/case-studies' },
      // { category: 'White Papers', path: '/resources/white-papers' },
      { category: 'Partner Hub', path: '/resources/partner-hub' },
    ],
  },
  { name: 'Careers', path: '/careers' },
  {
    name: 'Community',
    path: '/community',
    dropdown: [
      { category: 'Podcast', path: '/community/podcast' },
      { category: 'Shop', path: '/community/shop' },
      { category: 'Events', path: '/community/events' },
      { category: 'Ambassadors', path: '/community/ambassadors' },
    ],
  },
];
