export const paths = [
  { name: 'Home', path: '/' },
  {
    name: 'Pai Enterprise',
    path: '/pai-enterprise',
    dropdown: [
      { name: 'Business Types', path: '/pai-enterprise/business-types' },
      { name: 'Hardware', path: '/pai-enterprise/hardware' },
      { name: 'Software', path: '/pai-enterprise/software' },
    ],
  },
  { name: 'Company', path: '/company' },
  {
    name: 'Resources',
    path: '/resources',
    // This item will have a dropdown menu
    dropdown: [
      { name: 'The Outlet', path: '/resources/outlet' },
      { name: 'Lab Notes', path: '/resources/lab-notes' },
      { name: 'Webinars', path: '/resources/webinars' },
      { name: 'Case Studies', path: '/resources/case-studies' },
      { name: 'White Papers', path: '/resources/white-papers' },
    ],
  },
  { name: 'Careers', path: '/careers' },
  { name: 'Community', path: '/community' },
];
