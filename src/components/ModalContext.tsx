'use client';

import { createContext, useContext, useRef, ReactNode } from 'react';
import FormModal, { FormModalHandle } from '../components/FormModal';

interface ModalContextType {
  openModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const modalRef = useRef<FormModalHandle>(null);

  const openModal = () => {
    modalRef.current?.open();
  };

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      <FormModal
        ref={modalRef}
        startScrolling={() => document.body.classList.remove('disableScroll')}
        stopScrolling={() => document.body.classList.add('disableScroll')}
      />
    </ModalContext.Provider>
  );
}