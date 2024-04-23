import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Flex,
  FlexItem,
  Page,
  Stack,
  Text,
  TextContent,
} from '@patternfly/react-core';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ErrorBoundary } from '../../framework/components/ErrorBoundary';
import { useFrameworkTranslations } from '../../framework/useFrameworkTranslations';
import { LoginForm } from './LoginForm';
import { AuthOption } from './SocialAuthLogin';

export function Login(props: {
  hideInputs?: boolean;
  authOptions?: AuthOption[];
  apiUrl: string;
  onSuccess: () => void;
  loginDescription?: string;
  icon?: ReactNode;
  brand?: string;
  product?: string;
  productDescription?: string;
  background?: ReactNode;
}) {
  const { t } = useTranslation();
  const [translations] = useFrameworkTranslations();
  return (
    <ErrorBoundary message={translations.errorText}>
      <Page style={{ overflow: 'auto' }}>
        <LoginPageLayout>
          <LoginPageBody>
            <Card isLarge isRounded>
              <CardHeader>
                <TextContent>
                  <CardTitle component="h1">{t('Log in to your account')}</CardTitle>
                  {props.loginDescription && <Text component="p">{props.loginDescription}</Text>}
                </TextContent>
              </CardHeader>
              <CardBody>
                <LoginForm
                  apiUrl={props.apiUrl}
                  authOptions={props.authOptions}
                  onSuccess={props.onSuccess}
                  hideInputs={props.hideInputs}
                />
              </CardBody>
            </Card>
            <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsXl' }}>
              <FlexItem>
                <Flex
                  spaceItems={{ default: 'spaceItemsMd' }}
                  alignItems={{ default: 'alignItemsCenter' }}
                >
                  {props.icon}
                  <Stack>
                    {props.brand && <Brand>{props.brand}</Brand>}
                    <Product>{props.product}</Product>
                  </Stack>
                </Flex>
              </FlexItem>
              {props.productDescription && <FlexItem>{props.productDescription}</FlexItem>}
            </Flex>
          </LoginPageBody>
          {props.background && (
            <LoginPageFooter>
              <LoginPageDecoration>{props.background}</LoginPageDecoration>
            </LoginPageFooter>
          )}
        </LoginPageLayout>
      </Page>
    </ErrorBoundary>
  );
}

const Brand = styled.div`
  font-size: xx-large;
  font-weight: bold;
  line-height: 1.15;
  font-family: 'Red Hat Display', sans-serif;
`;

const Product = styled.h1`
  font-size: xx-large;
  line-height: 1.15;
  font-family: 'Red Hat Display', sans-serif;
`;

const LoginPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: stretch;
`;

const LoginPageBody = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 48px;
  align-items: center;
  justify-content: center;
`;

const LoginPageFooter = styled.div`
  display: flex;
  justify-content: end;
`;

const LoginPageDecoration = styled.div`
  display: flex;
  width: 400px;
`;
