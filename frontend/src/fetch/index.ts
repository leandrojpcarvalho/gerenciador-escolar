import { RequestGenerator, Request } from '../types';


const requestMaker: RequestGenerator = <T>(param: Request<T>): RequestInit => {
  const { body, headers, method } = param;
  return {
    body: JSON.stringify(body),
    method,
    headers: {...headers, 'Content-Type': 'application/json' },
    // mode: 'no-cors'
  };
};

const Fetch = {
  requestMaker,
};

export default Fetch;
