# Sistema de Gerenciamento de Estoque

## Visão Geral

Este documento descreve as entidades de domínio e os casos de uso identificados para um sistema de gerenciamento de estoque, com base em uma conversa entre um Domain Expert e um desenvolvedor. O objetivo deste sistema é otimizar o controle de estoque, garantir a disponibilidade de produtos e fornecer insights para tomadas de decisão de compra.

## Entidades de Domínio

- **Produto:** Representa cada item individual no estoque.
  - **Atributos:**
    - `Número de Identificação Único`
    - `Nome/Descrição`
    - `Quantidade em Estoque`
    - `Quantidade Mínima de Estoque`
    - `Tamanho` (opcional)
    - `Cor` (opcional)
    - `Histórico de Vendas`
    - `Histórico de Estoque`
    - `Lucro por Produto` (calculado)
- **Estoque:** Representa o estado atual da quantidade de cada produto armazenado.
- **Venda:** Representa uma transação de venda de um ou mais produtos.
  - **Atributos:**
    - `Data da Venda`
    - `Produtos Vendidos` (com quantidades)
    - `Lucro da Venda`
- **Alerta de Estoque:** Representa uma notificação gerada quando o estoque de um produto atinge ou fica abaixo da quantidade mínima definida.
  - **Atributos:**
    - `Produto`
    - `Data do Alerta`
    - `Nível de Estoque Atual`
    - `Método de Envio` (e-mail, notificação no sistema)
- **Ordem de Compra:** Representa um pedido para adquirir mais produtos de um fornecedor.
  - **Atributos:**
    - `Data da Criação`
    - `Produtos a Comprar` (com quantidades)
    - `Fornecedor`
    - `Status` (em aberto, enviada, recebida)
    - `Prazo de Entrega` (informado pelo fornecedor)
- **Fornecedor:** Representa as empresas das quais os produtos são comprados.

## Casos de Uso (Ações)

- **Rastrear Produto Individualmente:**
  - Atribuir um número de identificação único a um produto.
  - Adicionar informações extras (tamanho, cor).
  - Visualizar a movimentação de um produto no estoque.
- **Definir Quantidade Mínima de Estoque:**
  - Permitir a definição de um limite mínimo de estoque para cada produto.
- **Receber Alertas de Estoque:**
  - Gerar alertas automáticos quando o estoque de um produto atingir ou ficar abaixo do mínimo definido.
  - Enviar alertas por e-mail.
  - Exibir notificações dentro do sistema.
- **Visualizar Histórico de Vendas:**
  - Permitir a consulta do número de produtos vendidos dentro de um período específico.
  - Exibir o lucro gerado por cada produto em um determinado período.
  - Identificar os produtos com melhor desempenho de vendas em diferentes períodos.
- **Visualizar Histórico de Estoque:**
  - Permitir o acompanhamento das tendências de estoque ao longo do tempo.
- **Criar Ordem de Compra:**
  - Gerar automaticamente ordens de compra com base nas quantidades mínimas de estoque e nas tendências de vendas.
  - Permitir a criação manual de ordens de compra.
- **Gerenciar Ordem de Compra:**
  - Visualizar o status das ordens de compra (em aberto, enviada, recebida).
  - Atualizar o status das ordens de compra conforme necessário.
- **Integrar com Fornecedores:**
  - Receber atualizações automáticas sobre os prazos de entrega de novas remessas de produtos.

## Próximos Passos

Este mapeamento do domínio serve como um ponto de partida para o desenvolvimento do sistema. Os próximos passos incluem a definição detalhada dos requisitos funcionais e não funcionais, o design da arquitetura do sistema e a implementação das funcionalidades identificadas.
