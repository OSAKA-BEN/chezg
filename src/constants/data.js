import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Gros gourmand',
    subtitle: "C'est fin, c'est très fin, ça se mange sans faim.",
  },
  {
    imgUrl: images.award01,
    title: 'Etoile montante',
    subtitle: 'Je vais te réciter un court poème : « Le ciel ».',
  },
  {
    imgUrl: images.award05,
    title: 'Hospitalité',
    subtitle: 'Tu vois au début je t’aimais pas beaucoup. Mais là plus le temps passe, et moins je peux te saquer.',
  },
  {
    imgUrl: images.award03,
    title: 'Chef exceptionnel',
    subtitle: 'Il était comment ? Il était de dos.',
  },
];

export default { wines, cocktails, awards };
