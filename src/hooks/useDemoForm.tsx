'use client';

import { useState } from 'react';
import DemoForm from '@/components/layout/DemoForm';

export function useDemoForm() {
  const [isDemoFormOpen, setIsDemoFormOpen] =
    useState(false);

  const openDemoForm = () => setIsDemoFormOpen(true);
  const closeDemoForm = () => setIsDemoFormOpen(false);

  const DemoFormComponent = (
    <DemoForm
      isOpen={isDemoFormOpen}
      onClose={closeDemoForm}
    />
  );

  return {
    openDemoForm,
    DemoFormComponent,
  };
}
