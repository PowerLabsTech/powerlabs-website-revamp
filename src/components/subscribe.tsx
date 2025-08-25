import React from 'react';
import { Input } from '@material-tailwind/react';

type SubscribeFormProps = {
  status: string | null;
  message: string | Error | null;
  onValidated: (data: { EMAIL: string }) => void;
};

export default function SubscribeForm({
  status,
  message,
  onValidated,
}: SubscribeFormProps) {
  const [formData, setFormData] = React.useState({
    EMAIL: '',
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
    onValidated(formData);
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="mt-8 mb-2 w-full max-w-[480px]  mx-auto text-default"
    >
      {status === 'error' && (
        <div
          className="m-5 text-red-500"
          dangerouslySetInnerHTML={{ __html: message ?? '' }}
        />
      )}
      <div className="lg:flex gap-2">
        <div>
          <Input
            autoComplete="off"
            name="email"
            type="email"
            label={status === 'success' ? 'Sent' : ''}
            value={formData.EMAIL}
            success={status === 'success'}
            required
            placeholder="John@example.com"
            onChange={(e) =>
              setFormData({ ...formData, EMAIL: e.target.value })
            }
            className="lg:mt-1.5 !border !border-default/[12%] px-[0.875rem] py-2.5 rounded-lg text-default placeholder:opacity-[32%] focus:!border-[#1570EF] text-base bg-[#1018280D] lg:w-[23rem] w-[100%] mt-[2rem]"
            onResize={undefined}
            onResizeCapture={undefined}
            crossOrigin={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 rounded-sm font-medium text-white mx-auto px-4 py-2 text-[0.875rem] lg:mt-2 mt-[3rem] w-[100%]"
          >
            Subscribe
          </button>
        </div>
      </div>
    </form>
  );
}

export function SubscribeBlog({
  status,
  message,
  onValidated,
}: SubscribeFormProps) {
  const [formData, setFormData] = React.useState({
    EMAIL: '',
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
    onValidated(formData);
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="mt-8 mb-2 w-full max-w-[480px]  mx-auto text-default"
    >
      {status === 'error' && (
        <div
          className="m-5 text-red-500"
          dangerouslySetInnerHTML={{ __html: message ?? '' }}
        />
      )}
      <div className="lg:flex gap-2">
        <div>
          <Input
            autoComplete="off"
            name="email"
            type="email"
            label={status === 'success' ? 'Sent' : ''}
            value={formData.EMAIL}
            success={status === 'success'}
            required
            placeholder="John@example.com"
            onChange={(e) =>
              setFormData({ ...formData, EMAIL: e.target.value })
            }
            className="lg:mt-1.5 !border !border-default/[12%] px-[0.875rem] py-2.5 rounded-lg text-default placeholder:opacity-[32%] focus:!border-[#1570EF] text-base bg-[#18191AED] lg:w-[23rem] w-[100%] mt-[2rem]"
            onResize={undefined}
            onResizeCapture={undefined}
            crossOrigin={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-white rounded-sm font-medium text-blue-500 mx-auto px-4 py-2 text-[0.875rem] lg:mt-2 mt-[3rem] w-[100%]"
          >
            Subscribe
          </button>
        </div>
      </div>
    </form>
  );
}
