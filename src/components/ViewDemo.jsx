import React from 'react';

const ViewDemo = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">Demonstração do iPloyee</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>
        <div className="p-6">
          {/* Conteúdo da demonstração */}
          <p>Aqui virá o áudio e as FAQs.</p>
          <h3 className="text-xl font-semibold mb-4">Demonstração do Chatbot</h3>
          <div className="flex justify-center mb-8">
            <img src="/Beige,BrownandWhiteSimpleCleanAnimatedChatTextMobileVideo.gif" alt="Chatbot Demo" className="max-w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDemo;




          <h3 className="text-xl font-semibold mb-4">Perguntas Frequentes (FAQs)</h3>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h4 className="font-semibold text-lg mb-2">O que é um rececionista de IA?</h4>
              <p className="text-gray-700">Um rececionista de IA é um assistente virtual que utiliza inteligência artificial para interagir com clientes, agendar compromissos, qualificar leads e fornecer suporte, 24 horas por dia, 7 dias por semana.</p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-semibold text-lg mb-2">Como os chatbots de IA podem beneficiar o meu negócio?</h4>
              <p className="text-gray-700">Os chatbots de IA podem automatizar o atendimento ao cliente, responder a perguntas frequentes instantaneamente, reduzir a carga de trabalho da sua equipa, melhorar a satisfação do cliente e gerar leads qualificados.</p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-semibold text-lg mb-2">É fácil integrar o iPloyee com os meus sistemas existentes?</h4>
              <p className="text-gray-700">Sim, o iPloyee foi projetado para uma integração fácil com mais de 6.000 aplicações, incluindo sistemas CRM, calendários e ferramentas de negócios, sem necessidade de conhecimentos de programação.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">O iPloyee oferece suporte 24/7?</h4>
              <p className="text-gray-700">Sim, os nossos assistentes de IA estão disponíveis 24 horas por dia, 7 dias por semana, garantindo que nunca perca uma oportunidade de interação com o cliente, mesmo fora do horário comercial.</p>
            </div>
          </div>


