import { Stack } from '@chakra-ui/react';
import { CgCross } from 'react-icons/cg';
import {
  RiContactsLine,
  RiRefreshLine,
  RiFileList2Line,
  RiPencilLine,
} from 'react-icons/ri';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GENERAL">
        <NavLink href="/" icon={RiContactsLine}>
          Characters
        </NavLink>

        <NavLink href="/episodes" icon={RiFileList2Line}>
          Episodes
        </NavLink>

        <NavLink href="/quotes" icon={RiPencilLine}>
          Quote
        </NavLink>

        <NavLink href="/deaths" icon={CgCross}>
          Deaths
        </NavLink>
      </NavSection>

      <NavSection title="RANDOM">
        <NavLink href="/random/character" icon={RiContactsLine}>
          Random character
        </NavLink>

        <NavLink href="/random/quote" icon={RiPencilLine}>
          Random Quote
        </NavLink>

        <NavLink href="/random/death" icon={CgCross}>
          Random death
        </NavLink>
      </NavSection>
    </Stack>
  );
}
