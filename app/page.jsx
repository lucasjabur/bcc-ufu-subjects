"use client";

import React, { useState, useEffect } from 'react';
import TutorialDialog from './tutorial-dialog/page';

export default function HomePage() {
  const [isTutorialDialogOpen, setIsTutorialDialogOpen] = useState(false);

  useEffect(() => {
    setIsTutorialDialogOpen(true);
  },[]);

  return (
    <div className="relative h-screen flex items-center justify-center bg-[#141e2e]">
      <div className="flex flex-col space-y-4 mr-10">
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Geometria Analítica e Álgebra Linear
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Lógica para Computação
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Cálculo Diferencial e Integral I
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Introdução à Ciência da Computação
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Programação Procedimental
        </button>
      </div>

      <div className="flex flex-col space-y-4 mr-10">
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Empreend. em Informática
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Programação Funcional
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Matemática para a Ciência da Computação
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Algoritmos e Estrutura de Dados I
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Sistemas Digitais
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Cálculo Diferencial e Integral II
        </button>
      </div>

      <div className="flex flex-col space-y-4 mr-10">
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Cálculo Numérico
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Algoritmos e Estruturas de Dados II
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Atividades Curriculares de Extensão I
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Arquitetura e Organização de Computadores
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Programação Orientada a Objetos
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Cálculo Diferencial e Integral III
        </button>
      </div>

      <div className="flex flex-col space-y-4 mr-10">
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Programação Lógica
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Estatística
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Teoria dos Grafos
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Sistemas de Banco de Dados
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Sistemas Operacionais
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Princípios e Padrões de Projeto
        </button>
      </div>

      <div className="flex flex-col space-y-4 mr-10">
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Linguagens Formais e Autômatos
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Análise de Algoritmos
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Gerencialmente de Banco de Dados
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Arquitetura de Redes de Computadores
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Inteligência Artificial
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Engenharia de Software
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Atividades Curriculares de Extensão II
        </button>
      </div>

      <div className="flex flex-col space-y-4 mr-10">
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Teoria da Computação
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Modelagem e Simulação
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Arquitetura de Redes TCP/IP
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Inteligência Computacional
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Processamento Digital de Imagens
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Otimização
        </button>
      </div>

      <div className="flex flex-col space-y-4 mr-10">
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Construção de Compiladores
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Sistemas Distribuídos
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Computação Gráfica
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Metodologia Científica em Comp. <p>e Info</p>
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Atividades Curriculares de Extensão III
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Programação para Internet
        </button>
      </div>

      <div className="flex flex-col space-y-4 mr-10">
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Gestão Empresarial
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Direito e Legislação
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Segurança da Informação
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Mineração de Dados
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Estágio Supervisionado
        </button>
        <button className="w-36 h-16 bg-[#1b2940] text-white text-sm font-semibold rounded-lg hover:bg-[#222e42] focus:outline-none focus:bg-green-900">
          Projeto de Graduação
        </button>
      </div>
      
      <TutorialDialog open={isTutorialDialogOpen} setOpen={setIsTutorialDialogOpen}/>
    </div>
  )
}