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

        <NavLink href="/random-character" icon={RiRefreshLine}>
          Random character
        </NavLink>

        <NavLink href="/episodes" icon={RiFileList2Line}>
          Episodes
        </NavLink>

        <NavLink href="/quote" icon={RiPencilLine}>
          Quote
        </NavLink>

        <NavLink href="/deaths" icon={CgCross}>
          Deaths
        </NavLink>
      </NavSection>
    </Stack>
  );
}
