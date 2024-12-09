"use client";

import React, { useState, useEffect } from 'react';
import TutorialDialog from './tutorial-dialog/page';

export default function HomePage() {
  const [isTutorialDialogOpen, setIsTutorialDialogOpen] = useState(false);

  useEffect(() => {
    setIsTutorialDialogOpen(true);
  },[]);


  const periodo1 = [
    { nome: "Geometria Analítica e Álgebra Linear", HT: 2, HP: 1, total: 3 },
    { nome: "Lógica para Computação", HT: 3, HP: 0, total: 3 },
    { nome: "Lógica para Computação", HT: 3, HP: 0, total: 3 },
    { nome: "Lógica para Computação", HT: 3, HP: 0, total: 3 },
    { nome: "Lógica para Computação", HT: 3, HP: 0, total: 3 },
    { nome: "Lógica para Computação", HT: 3, HP: 0, total: 3 },
    { nome: "Lógica para Computação", HT: 3, HP: 0, total: 3 },
    // Continue adicionando as demais disciplinas aqui
  ];

  // return (
  //   <div className="relative h-screen flex flex-col items-center justify-center bg-[#141e2e]">
  //     <div className="grid grid-cols-6 gap-4">
  //       {disciplinas.map((disciplina, index) => (
  //         <button key={index} className="flex flex-col justify-between p-2 w-36 h-24 bg-[#1b2940] text-white text-center text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
  //           <span>{disciplina.nome}</span>
  //           <div className="mt-2 text-xs text-gray-400 flex justify-between">
  //             <span>HT: {disciplina.HT}</span>
  //             <span>HP: {disciplina.HP}</span>
  //             <span>Total: {disciplina.total}</span>
  //           </div>
  //         </button>
  //       ))}
  //     </div>
      
  //     <TutorialDialog open={isTutorialDialogOpen} setOpen={setIsTutorialDialogOpen}/>
  //   </div>
  // );
  
  return (
    <div className="relative h-screen flex items-start justify-center bg-[#141e2e] pt-12">
      <div className="flex flex-col space-y-4 mr-3">
      {periodo1.map((disciplina, index) => (
        <button key={index} className="flex flex-col justify-between p-2 w-36 h-24 bg-[#1b2940] text-white text-center text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          <span>{disciplina.nome}</span>
          <div className="mt-2 text-xs text-gray-400 flex justify-between">
            <span>HT: {disciplina.HT}</span>
            <span>HP: {disciplina.HP}</span>
            <span>Total: {disciplina.total}</span>
          </div>
        </button>
      ))}
      </div>
    </div>
  )

  return (
    <div className="relative h-screen flex items-start justify-center bg-[#141e2e] pt-12">
      <div className="flex flex-col space-y-4 mr-3">
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Geometria Analítica e Álgebra Linear
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Lógica para Computação
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Cálculo Diferencial e Integral I
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Introdução à Ciência da Computação
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Programação Procedimental
        </button>
      </div>

      <div className="flex flex-col space-y-4 mr-3">
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Empreend. em Informática
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Programação Funcional
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Matemática para a Ciência da Computação
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Algoritmos e Estrutura de Dados I
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Sistemas Digitais
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Cálculo Diferencial e Integral II
        </button>
      </div>

      <div className="flex flex-col space-y-4 mr-3">
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Cálculo Numérico
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Algoritmos e Estruturas de Dados II
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Atividades Curriculares de Extensão I
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Arquitetura e Organização de Computadores
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Programação Orientada a Objetos
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Cálculo Diferencial e Integral III
        </button>
      </div>

      <div className="flex flex-col space-y-4 mr-3">
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Programação Lógica
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Estatística
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Teoria dos Grafos
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Sistemas de Banco de Dados
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Sistemas Operacionais
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Princípios e Padrões de Projeto
        </button>
      </div>

      <div className="flex flex-col space-y-4 mr-3">
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Linguagens Formais e Autômatos
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Análise de Algoritmos
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Gerencialmente de Banco de Dados
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Arquitetura de Redes de Computadores
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Inteligência Artificial
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Engenharia de Software
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Atividades Curriculares de Extensão II
        </button>
      </div>

      <div className="flex flex-col space-y-4 mr-3">
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Teoria da Computação
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Modelagem e Simulação
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Arquitetura de Redes TCP/IP
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Inteligência Computacional
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Processamento Digital de Imagens
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Otimização
        </button>
      </div>

      <div className="flex flex-col space-y-4 mr-3">
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Construção de Compiladores
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Sistemas Distribuídos
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Computação Gráfica
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Metodologia Científica em Comp. <p>e Info</p>
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Atividades Curriculares de Extensão III
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Programação para Internet
        </button>
      </div>

      <div className="flex flex-col space-y-4 mr-3">
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Gestão Empresarial
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Direito e Legislação
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Segurança da Informação
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Mineração de Dados
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Estágio Supervisionado
        </button>
        <button className="pt-2 pb-2 pl-2 pr-2 w-32 h-auto bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Projeto de Graduação
        </button>
      </div>
      
      <TutorialDialog open={isTutorialDialogOpen} setOpen={setIsTutorialDialogOpen}/>
    </div>
  )
}