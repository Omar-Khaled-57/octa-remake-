import { useTranslations } from "next-intl";
import React from "react";

export function useTR(namespace?: string) {
  const t = useTranslations(namespace);

  // Simple string translation (for basic text props)
  const simpleT = (key: string): string => {
    return t(key);
  };

  // Rich translation (for HTML content)
  simpleT.rich = (key: string) => {
    return t.rich(key, {
      br: () => <br />,
      strong: (chunks) => <strong>{chunks}</strong>,
    });
  };

  return simpleT;
}
