import { render } from '@testing-library/react';

import { ContextProviders } from 'contexts';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/',
      };
    },
  };
});

describe('Context Providers', () => {
  it('should to render the component', () => {
    const { getByText } = render(<ContextProviders>Mocked</ContextProviders>);
    expect(getByText('Mocked')).toBeInTheDocument();
  });
});
