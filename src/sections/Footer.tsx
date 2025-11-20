export function Footer() {
  return (
    <footer id="contato" className="bg-bg-paper pt-16 pb-8 border-t border-text-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">Real Máquinas</h3>
            <p className="text-text-secondary mb-6 max-w-md">
              Desde 2000 transformando aço em produtividade. Referência em Unaí e região no fornecimento de equipamentos agrícolas e estruturas navais de alta resistência.
            </p>
            <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center text-text-secondary">IG</div>
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center text-text-secondary">FB</div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-text-primary mb-4">Contato Rápido</h4>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-center gap-3">
                <span className="text-brand-primary">📞</span> (38) 99999-9999
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-primary">💬</span> (38) 98888-8888
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-primary">📧</span> contato@realmaquinas.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-text-primary mb-4">Endereço</h4>
            <p className="text-text-secondary leading-relaxed">
              Av. Governador Valadares, 1234<br/>
              Distrito Industrial<br/>
              Unaí - MG<br/>
              CEP: 38610-000
            </p>
          </div>
        </div>
        
        <div className="border-t border-text-secondary/10 pt-8 text-center">
          <p className="text-text-secondary text-sm">© 2025 Real Máquinas. Engenharia e Aço. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}