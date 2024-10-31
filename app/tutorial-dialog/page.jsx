import React from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from 'lucide-react';

export default function TutorialDialog({ open, setOpen }) {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-md p-6 bg-[#242b38] rounded-lg shadow-lg" autoFocus={false}>
        <div tabIndex="0" aria-hidden="true"></div>
        <Dialog.Title className="text-lg font-medium text-slate-100" tabIndex="-1">
          Bem-vindo ao seu Gestor de Disciplinas!
          <span role="img" arial-label="star-eyes">
            🤩
          </span>
        </Dialog.Title>
        <Dialog.Description className="mt-2 text-sm text-slate-300">
          Analise as disciplinas disponíveis na grade horária do curso de
          Ciência da Computação da UFU!<br/><br/>

          Clique em uma disciplina para marcá-la como "Aprovada" e clique
          novamente caso queira desmarcá-la.<br/><br/>

          Caso tenha reprovado em uma disciplina, clique com o botão direito
          do mouse e, no menu, clique em "Reprovada".<br/><br/>

          Para adicioná-la ao seu "Carrinho de Disciplinas", aperte com o
          botão direito do mouse e selecione a opção "Puxar Disciplina".<br/><br/>

          As disciplinas selecionadas irão aparecer abaixo da grade horária,
          onde é possível analisar a quantidade de horas total que irão tomar.<br/><br/>

          Muito obrigado!<br/><br/>

          Espero que ajude ou que, pelo menos, ache interessante!
        </Dialog.Description>
        <button
          variant="soft"
          className="absolute top-4 right-4"
          onClick={() => setOpen(false)}
          tabIndex="0"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>
      </Dialog.Content>
    </Dialog.Root>
  );
}
