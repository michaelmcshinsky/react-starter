import type { Meta, StoryObj } from '@storybook/react';
import { ErrorBoundary } from './ErrorBoundary';

function Boom(): never {
  throw new Error('Storybook demo error');
}

const meta = {
  title: 'Shared/ErrorBoundary',
  component: ErrorBoundary,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ErrorBoundary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Healthy: Story = {
  args: {
    children: <p className="p-4">This content rendered without errors.</p>,
  },
};

export const WithError: Story = {
  args: {
    children: <Boom />,
  },
};
