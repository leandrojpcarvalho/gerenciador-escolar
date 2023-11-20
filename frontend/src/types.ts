export type Login = {
  email: string;
  password: string;
};

export type Method = 'GET'| 'POST' | 'DELETE' | 'PUT';


export type Request<T> = {
  body?: T;
  method?: Method;
  headers?: { 
    authorization: string;
  },
}

export type RequestGenerator = <T>(param:Request<T>) => RequestInit;