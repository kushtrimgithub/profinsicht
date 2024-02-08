"use client";

import { useState } from 'react';
import StepOneForm from '@/components/StepOne';
import Praxis from '@/components/Kooperationen';
import Wissenschaft from '@/components/Praxisforschung';


const Home = () => {
  const [formData, setFormData] = useState<string[]>([]); // Assuming data is an array of strings
  const [step, setStep] = useState(1);

  const handleNextStep = (data: string[]) => { // Explicitly specifying type as string[]
    setFormData(data);
    // No automatic step increase here
  };

  const handleGeneratePDF = (data: string[]) => { // Assuming the PDF generation data is also an array of strings
    // Implement PDF generation here
    console.log('Generating PDF with data:', data);
  };

  return (
    <div>
      {step === 1 && (
        <StepOneForm
          onNext={handleNextStep}
          onStepChange={(selectedOptions) => {
            // Update step based on selected options
            if (selectedOptions.includes('Wissenschaft')) {
              setStep(2);
            } else if (selectedOptions.includes('Praxis')) {
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

