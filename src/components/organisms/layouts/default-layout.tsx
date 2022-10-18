import Footer from 'components/organisms/footer/footer';

const DefaultLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      {children}
      <Footer />
    </div>
  )
};

export default DefaultLayout;