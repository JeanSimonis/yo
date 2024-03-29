import Divider from 'components/common/Divider';
import Href from 'components/common/Href';
import ContentPageLayout from 'layouts/ContentPageLayout';
import { defaultSEO } from 'lib/next-seo.config';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

const AboutPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <NextSeo {...defaultSEO} title={t('about:meta.title')} description={t('about:meta.description')} />
      <ContentPageLayout>
        <h1>{t('about:title')}</h1>
        <Divider className="my-4" />

        <div className="flex flex-col gap-3 text-lg leading-none">
          <div>
            <Trans
              i18nKey="about:body.intro"
              components={[
                <Href href="https://twitter.com/RoscoKalis" html className="font-medium" underline="hover" />,
              ]}
            />
          </div>

          <div className="mx-auto max-w-2xl my-2 md:my-4 flex flex-col items-center gap-2">
            <Href href="https://twitter.com/RoscoKalis/status/1183412994375503872" underline="none" external>
              <Image
                src="/assets/images/revoke-tweet.png"
                alt="Initial Revoke.cash Tweet"
                height="1000"
                width="1500"
                className="rounded-2xl border border-black dark:border-white"
              />
            </Href>
            <figcaption className="text-base leading-none text-zinc-600 dark:text-zinc-400">
              {t('about:captions.first_tweet')}
            </figcaption>
          </div>

          <div>
            <Trans
              i18nKey="about:body.growth"
              components={[<Href href="/extension" html className="font-medium" underline="hover" router />]}
            />
          </div>

          {/* <div className="mx-auto max-w-2xl my-4 md:my-8 flex flex-col items-center gap-2">
            <Image
              src="/assets/images/revoke-team.png"
              alt="Initial Revoke.cash Tweet"
              height="900"
              width="1400"
              className="rounded-2xl border border-black dark:border-white"
            />
            <figcaption className="text-zinc-600 dark:text-zinc-400">{t('about:captions.team')}</figcaption>
          </div> */}

          <div>
            <Trans i18nKey="about:body.team" />
          </div>

          <div>
            <Trans
              i18nKey="about:body.learn_more"
              components={[<Href href="/learn" html className="font-medium" underline="hover" router />]}
            />
          </div>
        </div>
      </ContentPageLayout>
    </>
  );
};

export default AboutPage;
