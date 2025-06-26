export type TransactionActionType = {
  buy: number;
  sell: number;
};

export type TransactionType = {
  m5: TransactionActionType;
  h1: TransactionActionType;
  h6: TransactionActionType;
  h24: TransactionActionType;
};
