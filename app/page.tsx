import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center gap-12 mt-24">
        <h1 className="text-4xl">Fazer login com o Google</h1>
        <button className="py-5 px-6 rounded-lg text-5xl border border-[#F42C2C] text-[#F42C2C] hover:bg-[#FFBFBF] hover:border-[#FFBFBF]">
          G
        </button>
      </main>
      <footer className="flex flex-col items-center gap-1 mt-48 text-[#8A8A8A]">
        <p>
          Esse aplicativo foi criado por <strong>João Vitor Camelo</strong>.
        </p>
        <p>Essa é apenas uma versão teste.</p>
        <p>
          Nosso propósito é facilitar o compartilhamento de informações pelo
          Google Sheets.
        </p>
        <p>A privacidade dos usuários é inteiramente respeitada.</p>
      </footer>
    </>
  );
}
