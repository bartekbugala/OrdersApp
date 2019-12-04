import React from 'react';
import Header from '../Header/Header';
import PageContainer from '../PageContainer/PageContainer';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => (
  <PageContainer>
    <Header />
    <main>
      <div className="container">{children}</div>
    </main>
    <Footer />
  </PageContainer>
);

export default MainLayout;
