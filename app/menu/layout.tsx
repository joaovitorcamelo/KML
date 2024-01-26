import {
  InformationCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-24">
      <header className="grid grid-cols-2 gap-1.5 items-center text-subText ">
        <div className="flex flex-row gap-2 items-center justify-self-start hover:text-brandText">
          <InformationCircleIcon className="w-8 h-8" />
          <span className="text-xl">Como funciona o nosso aplicativo?</span>
        </div>
        <div className="flex flex-row-reverse gap-2 items-center justify-self-end hover:text-brandText">
          <ArrowRightStartOnRectangleIcon className="w-8 h-8" />
          <span className="text-xl">Trocar conta</span>
        </div>
      </header>
      <div>{children}</div>
    </div>
  );
}
