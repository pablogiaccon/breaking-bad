import { render } from '@testing-library/react';

import { Layout } from '.';

const mockedIsOpen = false;
const mockedOnClose = jest.fn();
const mockedUseBreakpointVale = false;

jest.mock('contexts/SidebarDrawerContext', () => {
  return {
    useSidebarDrawer: () => ({
      isOpen: mockedIsOpen,
      onClose: mockedOnClose,
    }),
  };
});

jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      asPath: '/',
    }),
  };
});

jest.mock('@chakra-ui/react', () => {
  const originalModule = jest.requireActual('@chakra-ui/react');
  return {
    __esModule: true,
    ...originalModule,
    useBreakpointValue() {
      return mockedUseBreakpointVale;
    },
  };
});

describe('Layout', () => {
  it('should to render the component', () => {
    const { getByText } = render(<Layout>Mocked Layout</Layout>);
    expect(getByText('Mocked Layout')).toBeInTheDocument();
  });
});
