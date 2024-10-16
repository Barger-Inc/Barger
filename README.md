# Barger

## Первые шаги

Если нет пакетного менеджера Yarn, то потребуется установить его:

```sh
npm install --global yarn
```

### Подготовка проекта к старту

Потребуется установить зависимости:

```sh
yarn
```

### Запуск проекта

```sh
yarn dev
```

## Дизайн-система и стилизация

- Дизайнеры используют [shadcn/ui](https://ui.shadcn.com) для таких простых компонентов как кнопка, инпут или же селект. То есть прежде чем начать верстать такие компоненты лучше посмотреть их наличие в shadcn/ui. **Вёрстка того, что уже есть — пустая трата времени.**

- Используем всегда [Tailwind CSS](https://tailwindcss.com) с подходом [mobile-first](https://tailwindcss.com/docs/responsive-design). Для каких-то сложных случаев стилизации лучше поинтересоваться у лидов о реализации.

## Иконки

### Добавление новых иконок

1. Поместите SVG-файл в папку `apps/admin-panel-frontend/public/icons`. Файл должен называться в формате [kebab-case](https://www.theserverside.com/definition/Kebab-case).

2. Отправьте команду в корневой папке для автоматической генерации типов.

```sh
yarn gen:icons
```

### Использование иконок

Компонент [`<Icon />`](apps/admin-panel-frontend/src/shared/ui/icon.tsx) способен отображать любые иконки, загруженные в соответствии с предыдущим шагом. Также можно менять размер и цвет с помощью пропсов. Либо же задать свои стили с помощью классов.

Проп `name` — [типизированный](apps/admin-panel-frontend/src/shared/types/icon-name.ts). Не получится использовать несуществующие значения.

#### Пример использования

```tsx
<Icon name={"attach"} size={16} className="mr-2 text-primary-foreground" />
// Цвет можно поменять также используя утилитарные классы из Tailwind
```

## Модальные окна

Для модальных окон преимущественно используются [Перехватывающие маршруты](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes).

Перехватывающие маршруты позволяют загружать маршрут из другой части приложения в текущем макете.

Это позволит пользователю закрывать модальное окно используя нативную кнопку "Назад" в браузере или же на мобильном устройстве. Также пользователь сможет вернуться к модальному окну, если пользователь нажмёт на кнопку "Вперёд" в браузере.

### Пример реализации

Можно посмотреть на реализацию модального окна для просмотра медиа-файлов:

Виджет: [apps/admin-panel-frontend/src/widgets/media-preview.tsx](apps/admin-panel-frontend/src/widgets/media-preview.tsx)

Триггер открытия модального окна: [apps/admin-panel-frontend/src/app/(admin)/media/page.tsx](apps/admin-panel-frontend/src/app/(admin)/media/page.tsx)

Страница, которую видит пользователь, если он открыл первым делом просмотр медиа-файлов (например, ему отправили ссылку): [apps/admin-panel-frontend/src/app/(admin)/media/[id]/page.tsx](apps/admin-panel-frontend/src/app/(admin)/media/[id]/page.tsx)

Модальное окно, которое видит пользователь, если он затриггерил открытие страницы из приложения: [apps/admin-panel-frontend/src/app/(admin)/@modal/(.)media/[id]/page.tsx](apps/admin-panel-frontend/src/app/(admin)/@modal/(.)media/[id]/page.tsx)