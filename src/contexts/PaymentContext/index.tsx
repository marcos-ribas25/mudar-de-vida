import { createContext, ReactNode, useContext } from "react";

interface ProvidersProps {
  children: ReactNode;
}

interface Context {
  value: string;
}

const initialState: Context = {
  value: "",
};

const PaymentContext = createContext<
  | {
      value: string;
    }
  | undefined
>(undefined);

function PaymentProvider({ children }: ProvidersProps) {
  const value = "";
  return (
    <PaymentContext.Provider
      value={{
        value,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}

function usePayment() {
  const context = useContext(PaymentContext);

  if (context === undefined) {
    throw new Error("usePayment() must be used within a PaymentProvider");
  }
  return context;
}

export { PaymentProvider, usePayment };
