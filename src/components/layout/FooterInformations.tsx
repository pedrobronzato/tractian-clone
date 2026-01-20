import PreferencesIcon from '@/content/icons/PreferencesIcon';
import { FooterInformation } from '@/content/Footer';
import PhoneIcon from '@/content/icons/PhoneIcon';

export default function FooterInformations({
  information,
}: {
  information: FooterInformation;
}) {
  return (
    <div className="flex w-full flex-col-reverse justify-between lg:flex-row">
      <div className="mt-8 flex flex-col items-center gap-y-4 lg:mt-0 lg:items-start">
        <information.whiteLogo />
        <p
          className="text-body-sm sm:text-tag text-slate-50 uppercase transition ease-in-out hover:brightness-125"
          dangerouslySetInnerHTML={{
            __html: information.tradeMark,
          }}
        />
        <a
          href={`tel:${information.phone}`}
          className="group relative flex items-center gap-x-2 text-slate-50 transition"
        >
          <PhoneIcon />
          <p className="text-body-sm group-hover:underline">
            {information.phone}
          </p>
        </a>
      </div>
      <section className="mx-auto flex w-full max-w-fit flex-col items-center gap-y-4 lg:mx-0 lg:items-end">
        <div className="flex items-center gap-x-6">
          {information.socialMediaLinks.map((link) => (
            <a
              href={link.href}
              className="transition-all ease-in-out lg:hover:brightness-110"
              target="_blank"
              key={link.name}
            >
              <link.icon />
            </a>
          ))}
        </div>
        <a
          href={information.addressLink}
          target="_blank"
          className="w-full text-slate-50 transition ease-in-out hover:brightness-125"
        >
          <p className="text-body-sm max-md:text-center">
            {information.address}
          </p>
        </a>
        <button className="group flex items-center gap-x-2">
          <PreferencesIcon />
          <p className="text-body-sm font-medium text-slate-50 group-hover:underline">
            {information.privacyPolicy}
          </p>
        </button>
      </section>
    </div>
  );
}
