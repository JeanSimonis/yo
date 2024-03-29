import AddressHeader from 'components/address/AddressHeader';
import { AddressPageContextProvider } from 'lib/hooks/page-context/AddressPageContext';
import PublicLayout from './PublicLayout';

interface Props {
  children: React.ReactNode;
  address: string;
}

// TODO: This will become better when we switch to Next.js App Directory (nested layouts)
const AddressPageLayout = ({ children, address }: Props) => {
  return (
    <PublicLayout>
      <AddressPageContextProvider address={address}>
        <AddressHeader />
        {children}
      </AddressPageContextProvider>
    </PublicLayout>
  );
};

export default AddressPageLayout;
