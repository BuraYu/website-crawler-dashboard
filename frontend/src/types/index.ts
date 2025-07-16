export interface CrawlResult {
  id: string;
  url: string;
  title: string;
  htmlVersion: string;
  headingCounts: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
  };
  internalLinks: number;
  externalLinks: number;
  brokenLinks: BrokenLink[];
  hasLoginForm: boolean;
  status: "queued" | "running" | "completed" | "error";
  error?: string;
  crawledAt?: Date;
}

export interface BrokenLink {
  url: string;
  statusCode: number;
  statusText: string;
}

export interface CrawlRequest {
  url: string;
}

export interface FilterState {
  search: string;
  status: string;
  hasLoginForm: string;
}

export interface SortState {
  field: keyof CrawlResult;
  direction: "asc" | "desc";
}
