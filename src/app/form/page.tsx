import { useState } from 'react';
import StepOneForm from '@/components/StepOne';
import Praxis from '@/components/Kooperationen';
import Wissenschaft from '@/components/Praxisforschung';

// Define a type/interface for your form data
interface FormData {
  // Define the structure of your form data here
}

const Home = () => {
  const [formData, setFormData] = useState<FormData[]>([]); // Provide type annotation for useState
  const [step, setStep] = useState<number>(1); // Provide type annotation for useState

  const handleNextStep = (data: FormData) => { // Provide type annotation for handleNextStep
    setFormData(data);
  };

  const handleGeneratePDF = (data: FormData) => { // Provide type annotation for handleGeneratePDF
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
