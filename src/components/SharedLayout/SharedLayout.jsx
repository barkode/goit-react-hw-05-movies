import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, NavItem, NavList, Navigation } from './SharedLayout.styled';
import BeatLoader from 'react-spinners/BeatLoader';

const SharedLayout = () => {
  return (
    <Container>
      <header>
        <Navigation>
          <NavList>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/movies">Movies</Link>
            </NavItem>
          </NavList>
        </Navigation>
      </header>
      <Suspense fallback={<BeatLoader color="#36d7b7" />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
