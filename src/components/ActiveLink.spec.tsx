/* eslint-disable jsx-a11y/anchor-is-valid */
import { render } from '@testing-library/react';

import { ActiveLink } from './ActiveLink';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/',
      };
    },
  };
});

describe('ActiveLink', () => {
  it('should to render the component', () => {
    const { getByText, debug } = render(
      <ActiveLink href="/">
        <a>Home</a>
      </ActiveLink>,
    );
    expect(getByText('Home')).toBeInTheDocument();
  });
});
