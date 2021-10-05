import { render } from '@testing-library/react';
import { FiHome } from 'react-icons/fi';

import { NavLink } from './NavLink';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/',
      };
    },
  };
});

describe('NavLink', () => {
  it('should to render the component', () => {
    const { getByText } = render(
      <NavLink href="/" icon={FiHome}>
        Mocked link
      </NavLink>,
    );

    expect(getByText('Mocked link')).toBeInTheDocument();
  });
});
