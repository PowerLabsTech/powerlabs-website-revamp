'use client';
import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

const faqData = [
  {
    question: 'What does the Pai Hardware Device actually do?',
    answer:
      'The Pai Hardware Device is a smart sensor that connects to all your power sources (Grid, Solar, Generator, etc.). It tracks key power data—including voltage, current, energy use, and power factor—with industry-grade accuracy. This gives you trusted insights to manage your energy smarter and minimize costs.',
  },
  {
    question: 'Is it hard to install?',
    answer:
      'No, installation is designed to be straightforward. The device is installed by a certified technician at your main distribution board. The process is quick, non-intrusive, and typically takes less than an hour to complete without any significant downtime.',
  },
  {
    question: 'Will the device keep working during power cuts?',
    answer:
      'Yes, absolutely. The Pai device has its own internal power backup that allows it to continue monitoring and recording data even when all primary power sources are down. You will never lose visibility of your energy consumption.',
  },
  {
    question: 'Is my energy data safe?',
    answer:
      'Yes, data security is our top priority. All data transmitted from the device is encrypted, and our cloud platform uses industry-standard security protocols to ensure your energy data is kept private, secure, and accessible only to you.',
  },
  {
    question:
      'Can I use it in different environments like factories or offices?',
    answer:
      'Yes. The Pai Enterprise solution is built to be versatile and is suitable for a wide range of environments, including factories, hospitals, offices, residential estates, and commercial buildings. It scales to meet the needs of any operation.',
  },
];

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <div className="relative h-7 w-7">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        // This icon (minus) is shown when the accordion is OPEN
        className={`h-7 w-7 text-white transition-transform absolute inset-0 ${
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
        // This icon (plus) is shown when the accordion is CLOSED
        className={`h-7 w-7 text-white transition-transform absolute inset-0 ${
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
export default function FaqAccordion() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="w-full px-6 py-12 md:px-16 lg:px-20 bg-primary text-white rounded-lg">
      <h3 className="font-semibold text-base md:text-lg mb-2 text-blue-600">
        FAQs
      </h3>
      <h3 className="font-medium mb-6 md:mb-8 text-3xl md:text-5xl metallic-text">
        Still have questions?
      </h3>

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
            className="border-b-0 text-white hover:text-gray-300 py-5 md:py-6"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <h3
              color="white"
              className="mr-auto font-medium text-lg md:text-xl"
            >
              {question}
            </h3>
          </AccordionHeader>
          <AccordionBody className="pt-0 pb-4 text-base font-normal text-gray-400">
            {answer}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}
