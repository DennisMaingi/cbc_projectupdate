import React from 'react';

interface SignUpFormProps {
  onBackToLogin: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onBackToLogin }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Sign Up Form</h2>
        <p className="text-gray-600 mb-4">This is a placeholder for the sign-up form.</p>
        <button
          onClick={onBackToLogin}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;