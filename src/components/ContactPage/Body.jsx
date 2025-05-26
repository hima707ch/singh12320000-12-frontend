import React from 'react';
import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';
import { useContact } from './useContact';

const Body = () => {
  const { handleSubmit, formState, setFormState, errors, isLoading, submitStatus } = useContact();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-3xl mx-auto">
        <ContactHeader />
        <ContactForm
          formState={formState}
          setFormState={setFormState}
          errors={errors}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          submitStatus={submitStatus}
        />
      </div>
    </div>
  );
};

export default Body;