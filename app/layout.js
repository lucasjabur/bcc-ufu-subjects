import "./globals.css";

export const metadata = {
  title: "Gestor de Disciplinas",
  description: "Website que permite os estudantes do curso de Ciência da Computação organizarem melhor a sua grade curricular.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="vsc-initialized"> 
        {children}
      </body>
    </html>
  );
}


/*
------------------------------
How to add fonts:
------------------------------
*/

// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });