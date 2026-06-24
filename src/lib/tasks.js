import interactiveImage from '@/assets/icons/interactive.webp';
import conceptImage from '@/assets/icons/interactive.webp';
import systemImage from '@/assets/icons/system.webp';

const tasksData = [
  {
    id: 1,
    tag: 'система',
    icon: conceptImage,
    title: 'Арт-дирекшн и концепции',
    description: 'От идеи и структуры до визуального направления и координации команды.'
  },
  {
    id: 2,
    tag: 'процессы',
    icon: systemImage,
    title: 'Сложные цифровые продукты',
    description: 'CRM, личные кабинеты, внутренние сервисы и интерфейсы'
  },
  {
    id: 3,
    tag: 'UX',
    icon: interactiveImage,
    title: 'Интерактивные проекты',
    description: 'Музейные экспозиции, презентационные интерфейсы, VR/AR и цифровой опыт.'
  }
];

export default tasksData;
