import { ICareers } from '@/interfaces';
import { fetchCareers } from '@/services/cms';
import React from 'react';

export default function OpenRoles() {
  const [jobLists, setJobLists] = React.useState<ICareers[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const init = async () => {
    setLoading(true);
    try {
      const response = await fetchCareers();

      if (response?.data?.length) {
        setJobLists(response.data);
      }
    } catch (error) {
      console.error('Error fetching careers:', error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    init();
  }, []);

  // ----- UI States -----
  if (loading) {
    return (
      <div className="mb-10 md:mb-20 flex justify-center items-center py-10">
        <p className="text-gray-400 animate-pulse">Loading open roles...</p>
      </div>
    );
  }

  if (jobLists.length === 0) {
    return (
      <div className="mb-10 md:mb-20">
        <h3 className="metallic-text-long text-3xl md:text-4xl">
          No Open Roles
        </h3>
      </div>
    );
  }

  return (
    <div className="mb-10 md:mb-20">
      <div>
        <h3 className="metallic-text-long text-3xl md:text-4xl">
          All Open Roles
        </h3>
      </div>

      {/* Header Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-5 border-b border-gray-800">
        <h2 className="font-semibold text-gray-500 uppercase tracking-wider text-sm">
          Role
        </h2>
        <h2 className="font-semibold text-gray-500 uppercase tracking-wider text-sm hidden md:block">
          Department
        </h2>
        <h2 className="font-semibold text-gray-500 uppercase tracking-wider text-sm hidden md:block">
          Location
        </h2>
        <h2 className="font-semibold text-gray-500 uppercase tracking-wider text-sm text-right md:text-left">
          Type
        </h2>
      </div>

      {/* Job Listings */}
      <div className="flex flex-col">
        {jobLists.map((job, index) => (
          <div
            key={index}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center px-4 py-6 border-b border-gray-800 hover:bg-gray-900/50 transition-colors duration-200"
          >
            {/* Role */}
            <div className="col-span-1">
              <a
                href={job.attributes.link}
                className="text-white font-medium underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {job.attributes.role}
              </a>
            </div>

            {/* Department */}
            <div className="hidden md:block">{job.attributes.department}</div>

            {/* Location */}
            <div className="hidden md:block">{job.attributes.location}</div>

            {/* Type */}
            <div className="col-span-1 text-right md:text-left">
              {job.attributes.type}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
