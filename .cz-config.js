module.exports = {
  types: [
    { value: '✨ feat', name: '✨ feat:     Nova funcionalidade' },
    { value: '🐛 fix', name: '🐛 fix:      Correção de bug' },
    { value: '📚 docs', name: '📚 docs:     Apenas mudanças na documentação' },
    { value: '💄 style', name: '💄 style:    Mudanças de estilo (espaçamento, formatação...)' },
    { value: '♻️ refactor', name: '♻️ refactor: Refatoração de código' },
    { value: '⚡ perf', name: '⚡ perf:     Melhoria de performance' },
    { value: '🧪 test', name: '🧪 test:     Adição ou modificação de testes' },
    { value: '🔧 chore', name: '🔧 chore:    Alterações de build, ferramentas, etc' },
    { value: '🚀 deploy', name: '🚀 deploy:   Preparação para deploy' },
    { value: '🧹 cleanup', name: '🧹 cleanup:  Limpeza de código' },
    { value: '🗑️ remove', name: '🗑️ remove:   Remoção de arquivos, código ou libs' }
  ],
  messages: {
    type: "📦 Tipo de alteração:",
    scope: '📁 Escopo (opcional):',
    subject: '📝 Descrição curta:',
    body: '📚 Descrição longa (opcional):',
    breaking: '💥 Alguma mudança quebra a compatibilidade? (opcional):',
    footer: '🔗 Referências (issues, links, etc):',
    confirmCommit: '🚀 Confirma o commit acima?'
  },
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body', 'breaking', 'footer'],
  subjectLimit: 100
}
