declare module '@apiverve/randomwords' {
  export interface randomwordsOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface randomwordsResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class randomwordsWrapper {
    constructor(options: randomwordsOptions);

    execute(callback: (error: any, data: randomwordsResponse | null) => void): Promise<randomwordsResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: randomwordsResponse | null) => void): Promise<randomwordsResponse>;
    execute(query?: Record<string, any>): Promise<randomwordsResponse>;
  }
}
