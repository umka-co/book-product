export interface Tag {
  name: string;
  slug: string;
}
export const TAGS: Tag[] = [
  { name: 'время', slug: 'time' },
  { name: 'кто', slug: 'who' },
  { name: 'что', slug: 'what' },
  { name: 'почему', slug: 'why' },
];

export const SMART_TAGS = {
  time: { name: 'время' },
  who: { name: 'кто' },
  what: { name: 'что' },
  why: { name: 'почему' },
};
