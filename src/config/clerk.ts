import { ClerkProvider } from '@clerk/clerk-react';

const publishableKey = 'pk_test_YOUR_PUBLISHABLE_KEY';

export const ClerkProviderConfig = ({ children }) => (
  <ClerkProvider publishableKey={publishableKey}>
    {children}
  </ClerkProvider>
);