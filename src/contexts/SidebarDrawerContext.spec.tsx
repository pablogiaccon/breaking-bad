import { render } from '@testing-library/react';

import { SidebarDrawerProvider } from 'contexts';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/',
      };
    },
  };
});

describe('SidebarDrawerContextProviders', () => {
  it('should to render the component', () => {
    const { getByText } = render(
      <SidebarDrawerProvider>Mocked</SidebarDrawerProvider>,
    );
    expect(getByText('Mocked')).toBeInTheDocument();
  });
});
