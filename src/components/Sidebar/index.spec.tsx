import { render } from '@testing-library/react';

import { SideBar } from 'components/Sidebar';

const mockedIsOpen = false;
const mockedOnClose = jest.fn();
let mockedUseBreakpointVale = false;

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

describe('Sidebar', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should to render the component when it is a large page', () => {
    const { getByTestId } = render(<SideBar />);

    expect(getByTestId('sidebar')).toBeInTheDocument();
  });

  it('should to render the the component when it is not a large page', () => {
    mockedUseBreakpointVale = true;
    const { queryByTestId } = render(<SideBar />);

    expect(queryByTestId('sidebar')).not.toBeInTheDocument();
  });
});
