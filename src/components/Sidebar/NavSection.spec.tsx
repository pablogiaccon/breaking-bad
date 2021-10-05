import { render } from '@testing-library/react';

import { NavSection } from './NavSection';

describe('NavSection', () => {
  it('should to render the component', () => {
    const { getByTestId } = render(
      <NavSection title="Mocked component">
        <p>Mocked test</p>
      </NavSection>,
    );

    expect(getByTestId('nav-section')).toBeInTheDocument();
  });
});
