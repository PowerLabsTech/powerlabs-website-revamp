'use client';
import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

const faqData = [
  {
    question: 'Is it open to all courses?',
    answer:
      ' Yes. Whether you’re in Engineering, Law, Media or Agriculture, you are more than welcome to apply.',
  },
  {
    question: 'I’m a freshman. Can I apply?',
    answer:
      'Yes. Absolutely! The PowerLabs Campus Ambassadors program is open to students at all stages of their academic journey, including freshmen.',
  },
  {
    question: 'Do I need to be an engineering student?',
    answer:
      'Not at all. The program is open to all fields of study. We are building a community of students with diverse backgrounds and varying interests.',
  },
  {
    question: 'Is there a selection process?',
    answer:
      'Yes. We review every application and send a mail to shortlisted candidates',
  },
  {
    question: 'How long is the program?',
    answer: '6 months.',
  },
];

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <div className="relative h-8 w-8 bg-amber-600 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`h-5 w-5 text-white transition-transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          id === open ? 'rotate-180 opacity-100' : 'rotate-0 opacity-0'
        }`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`h-5 w-5 text-white transition-transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          id === open ? 'rotate-0 opacity-0' : 'rotate-180 opacity-100'
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </div>
  );
}

// --- Main FAQ Component ---
export default function FaqAmbassadorAccordion() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="w-full p-8 md:p-16 lg:p-20 bg-primary text-white rounded-lg">
      <h3 className="font-semibold text-lg mb-2 text-amber-600">FAQs</h3>
      <h3 className="text-subheading metallic-text mb-1">
        Still have questions?
      </h3>
      <h4 className="text-secondary metallic-text">
        Send us an email: hello@powerlabstech.com
      </h4>

      {faqData.map(({ question, answer }, index) => (
        <Accordion
          key={index}
          open={open === index + 1}
          icon={<Icon id={index + 1} open={open} />}
          className="border-b border-gray-700"
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <AccordionHeader
            onClick={() => handleOpen(index + 1)}
            className="border-b-0 text-white hover:text-gray-300 py-6"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <h3 className="mr-auto font-medium text-lg md:text-xl text-white">
              {question}
            </h3>
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal text-gray-400">
            {answer}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}
