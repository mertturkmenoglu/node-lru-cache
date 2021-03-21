import LRUCache from "lru-cache";

export const LRU_MAX_AGE = 1000 * 60;

export const lruOptions: LRUCache.Options<string, string> = {
  max: 500,
  maxAge: LRU_MAX_AGE,
};