import type { Meta, StoryObj } from '@storybook/react';
import { SharedComponentsWeb } from './shared-components-web';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SharedComponentsWeb> = {
  component: SharedComponentsWeb,
  title: 'SharedComponentsWeb',
};
export default meta;
type Story = StoryObj<typeof SharedComponentsWeb>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SharedComponentsWeb!/gi)).toBeTruthy();
  },
};
