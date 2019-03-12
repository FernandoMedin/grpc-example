export interface Pagination {
  order: string;
  limit: number;
  offset: number;
}

export const parse = (data: any): Pagination => {
  return {
    order: data['order'] || '-created_at',
    limit: data['limit'] || 10,
    offset: data['offset'] || 0
  }
}
