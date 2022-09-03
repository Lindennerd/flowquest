import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ToastContainer, toast } from "react-toastify";

interface IErrorContext {
  setError: (error: string) => void;
}

const errorContext = createContext<IErrorContext | null>(null);

export function useErrorContext() {
  const context = useContext(errorContext);
  if (!context) {
    throw new Error("errorContext must be used within an ErrorContextProvider");
  }

  return context;
}

export function ErrorProvider({ children }: { children: ReactNode }) {
  const [trpcError, setTrpcError] = useState<string | null>(null);

  function setError(error: string) {
    setTrpcError(error);
  }

  useEffect(() => {
    toast.error(trpcError);
  }, [trpcError]);

  return (
    <errorContext.Provider value={{ setError }}>
      <ToastContainer />
      {children}
    </errorContext.Provider>
  );
}
