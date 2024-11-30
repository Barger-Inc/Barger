// TODO: move to other folder
export const mockCollections = [
  { id: 1, title: "Новости" },
  { id: 2, title: "Объявления" },
  { id: 3, title: "Товары" },
  { id: 4, title: "Пользователи" },
  { id: 5, title: "Мероприятия" },
  { id: 6, title: "Статьи" },
  { id: 7, title: "Кейсы" },
] as const

export const mockCollectionFields = [
  {
    name: "cover",
    type: "media",
  },
  {
    name: "name",
    type: "text",
  },
  {
    name: "link",
    type: "link",
  },
  {
    name: "price",
    type: "number",
  },
  {
    name: "boolean",
    type: "boolean",
  },
] as const
