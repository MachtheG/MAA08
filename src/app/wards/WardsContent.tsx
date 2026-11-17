"use client";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { WajirMap } from "@/components/wards/WajirMap";
import { useLanguage } from "@/i18n/LanguageProvider";
import { wajirImages } from "@/content/imagery";

export function WardsContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero kicker={t.ui.wards.kicker} title={t.ui.wards.title} intro={t.ui.wards.intro} image={wajirImages.rooftops.src} imageAlt={wajirImages.rooftops.alt} imagePosition="50% 50%" />

      <section className="bg-page py-section">
        <Container>
          <WajirMap />
        </Container>
      </section>
    </>
  );
}
