'use client'; // styled; subcomponent: `Heading`

import styled from 'styled-components';
import { Heading } from './component';

/**
 * Go-to heading component for rendering semantic html headings. Can provide different levels and sizes.
 *
 * TODO: The `styled` wrapper will be removed in Nicollet v12. [See ticket](https://git.target.com/web/platform/issues/19687)
 */
export const StyledHeading = styled(Heading)``;

StyledHeading.displayName = 'Heading';
