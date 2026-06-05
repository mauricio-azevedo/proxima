import { useLocale } from '../../../shared/i18n/hooks/use-locale';

export function AuthSessionLoadingPage() {
  const { t } = useLocale();

  return (
    <main className="grid min-h-svh place-items-center" aria-busy="true">
      <div className="size-8 animate-spin rounded-full border-2 border-current border-t-transparent" aria-label={t('app.loading.label')} role="status" />
    </main>
  );
}
