import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LocaleSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;
  const [otherLocales, setOtherLocales] = useState(null);

  useEffect(() => {
    const other_locales = locales?.filter(
      (locale) => locale !== activeLocale && locale !== "default"
    );

    setOtherLocales(other_locales);
  }, [router.locale]);

  return (
    <span className="text-muted cursor-pointer">
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <span key={"locale-" + locale}>
            <Link
              href={{ pathname, query }}
              as={asPath}
              locale={locale}
              legacyBehavior
            >
              <a>
                {locale === "en" ? (
                  <div className="flex items-center gap-1">
                    <div className="w-5">
                      <Image
                        src="/images/icons/en.png"
                        alt=""
                        fill
                        className="custom-img"
                      />
                    </div>
                    En
                  </div>
                ) : locale === "ar" ? (
                  <div className="flex items-center gap-1">
                    <div className="w-6">
                      <Image
                        src="/images/icons/ar.png"
                        alt=""
                        fill
                        className="custom-img"
                      />
                    </div>
                    عربى
                  </div>
                ) : null}
              </a>
            </Link>
          </span>
        );
      })}
    </span>
  );
}
