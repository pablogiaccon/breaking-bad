import { render } from '@testing-library/react';

import { Header } from 'components/Header';

const mockedOnOpen = jest.fn();
let mockedUseBreakpointVale = false;

jest.mock('contexts/SidebarDrawerContext', () => {
  return {
    useSidebarDrawer: () => ({
      onOpen: mockedOnOpen,
    }),
  };
});

jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      query: [],
      push: jest.fn(),
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

describe('Header', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should to render the component when it is a large page', () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId('header')).toBeInTheDocument();
  });

  it('should to render the the component when it is not a large page', () => {
    mockedUseBreakpointVale = true;
    const { queryByTestId } = render(<Header />);

    expect(queryByTestId('icon-drop-menu')).not.toBeInTheDocument();
  });
});
