import {
  NotFoundPageContainer,
  NotFoundPageTitle,
  NotFoundPageText,
  NotFoundPageLink,
} from './NotFoundPage.module';

const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <NotFoundPageLink to="/">Go back to the homepage</NotFoundPageLink>
      <NotFoundPageTitle>404</NotFoundPageTitle>
      <NotFoundPageText>Ops... There's something wrong.</NotFoundPageText>
    </NotFoundPageContainer>
  );
};

export default NotFoundPage;
