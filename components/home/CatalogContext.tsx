'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import type { CatKey } from '@/lib/home-data';

type CatalogState = {
  cat: CatKey;
  all: boolean;
  setCat: (k: CatKey) => void;
  setAll: (v: boolean) => void;
};

const Ctx = createContext<CatalogState | null>(null);

/** Kategori aktif dipakai bersama oleh menu kategori di header dan bagian Katalog. */
export function CatalogProvider({ children }: { children: ReactNode }) {
  const [cat, setCatState] = useState<CatKey>('plafon');
  const [all, setAll] = useState(false);
  const setCat = (k: CatKey) => {
    setCatState(k);
    setAll(false);
  };
  return <Ctx.Provider value={{ cat, all, setCat, setAll }}>{children}</Ctx.Provider>;
}

export function useCatalog() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useCatalog harus dipakai di dalam <CatalogProvider>');
  return v;
}
