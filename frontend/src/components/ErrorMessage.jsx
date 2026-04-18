import { AlertCircle } from "lucide-react";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="mb-5 flex justify-center">
      <div className="flex items-center gap-3 bg-red-600/20 border border-red-500/40 text-red-100 px-4 py-3 rounded-xl backdrop-blur-md shadow-md max-w-md w-full">
        
        <AlertCircle size={18} className="text-red-300 shrink-0" />

        <p className="text-sm font-semibold leading-snug">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ErrorMessage;