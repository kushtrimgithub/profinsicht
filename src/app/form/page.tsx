"use client";

import { useState } from 'react';
import StepOneForm from '@/components/StepOne';
import Praxis from '@/components/Kooperationen';
import Wissenschaft from '@/components/Praxisforschung';

// Define a type for the data parameter
interface FormData {
  // Define the structure of your data here
}

const Home = () => {
  const [formData, setFormData] = useState<FormData>([]); // Specify the type here
  const [step, setStep] = useState(1);

  const handleNextStep = (data: FormData) => { // Specify the type here
    setFormData(data);
  };

  const handleGeneratePDF = (data: FormData) => { // Specify the type here
    // Implement PDF generation here
    console.log('Generating PDF with data:', data);
  };

  return (
    <div>
      {step === 1 && (
        <StepOneForm
          onNext={handleNextStep}
          onStepChange={(selectedOptions) => {
            if (selectedOptions.includes('Praxisforschung')) {
              setStep(2);
            } else if (selectedOptions.includes('Kooperationen')) {
              setStep(3);
            }
          }}
        />
      )}
      {step === 2 && (
        <Wissenschaft formData={formData} onGeneratePDF={handleGeneratePDF} />
      )}
      {step === 3 && (
        <Praxis formData={formData} onGeneratePDF={handleGeneratePDF} />
      )}
    </div>
  );
};

export default Home;
