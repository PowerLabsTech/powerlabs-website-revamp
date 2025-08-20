'use client';
import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from '@material-tailwind/react';

const faqData = [
  {
    question: 'Is it open to all courses?',
    answer:
      'The Pai Hardware Device is a smart sensor that connects to all your power sources (Grid, Solar, Generator, etc.). It tracks key power data—including voltage, current, energy use, and power factor—with industry-grade accuracy. This gives you trusted insights to manage your energy smarter and minimize costs.',
  },
  {
    question: 'I’m a freshman. Can I apply?',
    answer:
      'No, installation is designed to be straightforward. The device is installed by a certified technician at your main distribution board. The process is quick, non-intrusive, and typically takes less than an hour to complete without any significant downtime.',
  },
  {
    question: 'Do I need to be an engineering student?',
    answer:
      'Yes, absolutely. The Pai device has its own internal power backup that allows it to continue monitoring and recording data even when all primary power sources are down. You will never lose visibility of your energy consumption.',
  },
  {
    question: 'Is there a selection process?',
    answer:
      'Yes, data security is our top priority. All data transmitted from the device is encrypted, and our cloud platform uses industry-standard security protocols to ensure your energy data is kept private, secure, and accessible only to you.',
  },
  {
    question: 'How long is the program?',
    answer:
      'Yes. The Pai Enterprise solution is built to be versatile and is suitable for a wide range of environments, including factories, hospitals, offices, residential estates, and commercial buildings. It scales to meet the needs of any operation.',
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
    <div className="w-full px-[120px] py-[64px] bg-primary text-white rounded-lg">
      <h3 className="font-semibold text-lg mb-2 text-amber-600">FAQs</h3>
      <h3 className="font-medium mb-8 text-5xl metallic-text">
        Still have questions?
      </h3>
      <h4 className="font-medium mb-8 text-2xl metallic-text">
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
            <Typography
              color="white"
              className="mr-auto font-medium text-xl"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {question}
            </Typography>
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal text-gray-400">
            {answer}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}
