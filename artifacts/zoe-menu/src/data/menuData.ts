import type { Language } from './translations';

export type MultiLang = Record<Language, string>;

export interface MenuItem {
  name: string;
  price?: string;
  note?: string;
}

export interface SignatureCocktail {
  name: string;
  price: string;
  descriptions: MultiLang;
  image?: string;
}

export interface WineItem {
  name: string;
  priceGlass?: string;
  priceBottle?: string;
}

// ─── BAR ─────────────────────────────────────────────────────────
export const softDrinks: MenuItem[] = [
  { name: 'Acqua 0,5' , price: '€ 1,50' },
  { name: 'Succo di Frutta', price: '€ 3,00' },
  { name: 'Spremuta d\'Arancia', price: '€ 3,50' },
  { name: 'Coca Cola', price: '€ 3,50' },
  { name: 'Coca Cola Zero / Zero Zero', price: '€ 3,50' },
  { name: 'Fanta', price: '€ 3,50' },
  { name: 'Sprite', price: '€ 3,50' },
  { name: 'Estathe Limone / Pesca', price: '€ 3,50' },
  { name: 'Estathe Limone Zero / Pesca Zero', price: '€ 3,50' },
  { name: 'Red Bull', price: '€ 4,00' },
  { name: 'Ginger Beer', price: '€ 4,00' },
];

export const beers: MenuItem[] = [
  { name: 'Nastro Azzurro', price: '€ 3,00' },
  { name: 'Tennent\'s', price: '€ 3,50' },
  { name: 'Corona', price: '€ 4,00' },
];

export const craftBeers: MenuItem[] = [
  { name: 'Steen Brugge Blonde / Brown', price: '€ 5,00' },
  { name: 'Keychain Pils', price: '€ 6,00', note: 'Gluten Free' },
  { name: 'Keychain Tripel', price: '€ 6,00', note: 'Gluten Free' },
  { name: 'Keychain Double IPA', price: '€ 6,00', note: 'Gluten Free' },
  { name: 'Tuka Neipa', price: '€ 6,00' },
  { name: 'Weihenstephaner Weiss', price: '€ 6,00' },
  { name: 'Weihenstephaner Vitus', price: '€ 6,00' },
];

export const draftBeers: MenuItem[] = [
  { name: 'Löwenbräu 0,2L', price: '€ 2,50' },
  { name: 'Löwenbräu 0,4L', price: '€ 4,50' },
  { name: 'Leffe Rituel 9° 0,33L', price: '€ 5,00' },
];

export const aperitifs: MenuItem[] = [
  { name: 'Bitter Rosso', price: '€ 3,50' },
  { name: 'Bitter Bianco', price: '€ 3,50' },
  { name: 'Crodino XL', price: '€ 4,00' },
  { name: 'San Pellegrino Rosso', price: '€ 4,00' },
  { name: 'San Pellegrino Bianco', price: '€ 4,00' },
  { name: 'Schweppes Lemon', price: '€ 4,00' },
  { name: 'Schweppes Orange', price: '€ 4,00' },
  { name: 'Tassoni', price: '€ 3,50' },
  { name: 'Campari Soda', price: '€ 3,50' },
  { name: 'Aperol Soda', price: '€ 3,50' },
  { name: 'Toniche Premium', price: '€ 4,00' },
  { name: 'Spritz', price: '€ 6,00' },
  { name: 'Spritz Campari', price: '€ 6,00' },
  { name: 'Hugo', price: '€ 7,00' },
];

export const amari: MenuItem[] = [
  { name: 'Amaro del Capo', price: '€ 4,00' },
  { name: 'Jägermeister', price: '€ 4,00' },
  { name: 'Montenegro', price: '€ 4,00' },
  { name: 'Petrus', price: '€ 4,00' },
  { name: 'Unicum', price: '€ 4,00' },
  { name: 'Fernet Branca', price: '€ 4,00' },
  { name: 'Branca Menta', price: '€ 4,00' },
  { name: 'Amaretto di Saronno', price: '€ 4,00' },
  { name: 'Baileys', price: '€ 4,00' },
  { name: 'Cherry', price: '€ 4,00' },
  { name: 'Frangelico', price: '€ 4,00' },
  { name: 'Altri Amari', price: '€ 5,00' },
];

// ─── COCKTAILS ───────────────────────────────────────────────────
export const signatureCocktails: SignatureCocktail[] = [
  {
    name: 'Il Parallelo',
    price: '€ 9,00',
    descriptions: {
      it: 'Gin Bulldog, Maraschino, Citric Blend, Sciroppo di Aperol, Acqua Faba',
      en: 'Gin Bulldog, Maraschino, Citric Blend, Aperol Syrup, Aquafaba',
      es: 'Gin Bulldog, Maraschino, Mezcla Cítrica, Jarabe de Aperol, Aquafaba',
      de: 'Gin Bulldog, Maraschino, Zitruszubereitung, Aperol-Sirup, Aquafaba',
      fr: 'Gin Bulldog, Maraschino, Mélange Citrique, Sirop d\'Aperol, Aquafaba',
    },
  },
  {
    name: 'Malocchio',
    price: '€ 11,00',
    descriptions: {
      it: 'Tanqueray No 10, Vermouth Extra Dry, Fill di Prosecco Extra Dry, Gocce di Olio al Basilico',
      en: 'Tanqueray No 10, Extra Dry Vermouth, Prosecco Extra Dry, Drops of Basil Oil',
      es: 'Tanqueray No 10, Vermut Extra Seco, Prosecco Extra Seco, Gotas de Aceite de Albahaca',
      de: 'Tanqueray No 10, Extra Dry Vermouth, Prosecco Extra Dry, Basilikumöl-Tropfen',
      fr: 'Tanqueray No 10, Vermouth Extra Dry, Prosecco Extra Dry, Gouttes d\'Huile de Basilic',
    },
  },
  {
    name: 'Masaniello',
    price: '€ 9,00',
    descriptions: {
      it: 'Pampero Bianco infuso al Melone Retato, Succo di Lime, Sciroppo di Zucchero, Marmellata H.M. Passion Fruit',
      en: 'Pampero Bianco infused with Cantaloupe Melon, Lime Juice, Sugar Syrup, Passion Fruit Jam H.M.',
      es: 'Pampero Bianco macerado en Melón Cantalupo, Zumo de Lima, Jarabe de Azúcar, Mermelada de Maracuyá H.M.',
      de: 'Pampero Bianco mit Honigmelone infusiert, Limettensaft, Zuckersirup, Passionsfrucht-Konfitüre H.M.',
      fr: 'Pampero Bianco infusé au Melon Cantaloup, Jus de Citron Vert, Sirop de Sucre, Confiture Passion H.M.',
    },
  },
  {
    name: 'Munaciello',
    price: '€ 10,00',
    descriptions: {
      it: 'Wild Turkey Rye, Vermouth del Professore, Angostura Bitter, Miele Sciolto alla Vaniglia',
      en: 'Wild Turkey Rye, Vermouth del Professore, Angostura Bitters, Vanilla-Infused Honey',
      es: 'Wild Turkey Rye, Vermouth del Professore, Angostura Bitter, Miel con Vainilla',
      de: 'Wild Turkey Rye, Vermouth del Professore, Angostura Bitters, Vanillehonig',
      fr: 'Wild Turkey Rye, Vermouth del Professore, Angostura Bitter, Miel à la Vanille',
    },
  },
  {
    name: 'Kamille',
    price: '€ 9,00',
    descriptions: {
      it: 'Gin infuso ai Fiori di Camomilla, Miele di Castagno, Succo di Lime, Soda',
      en: 'Chamomile Flower-Infused Gin, Chestnut Honey, Lime Juice, Soda Water',
      es: 'Gin Macerado en Flores de Manzanilla, Miel de Castaño, Zumo de Lima, Soda',
      de: 'Kamillenbüten-Gin, Kastanienhonig, Limettensaft, Sodawasser',
      fr: 'Gin Infusé à la Camomille, Miel de Châtaignier, Jus de Citron Vert, Soda',
    },
  },
  {
    name: 'Kentucky Derby',
    price: '€ 11,00',
    descriptions: {
      it: 'Bulleit 10 Anni, Sciroppo di Zucchero alla Cannella, Foglie di Menta',
      en: 'Bulleit 10 Year, Cinnamon Sugar Syrup, Fresh Mint Leaves',
      es: 'Bulleit 10 Años, Jarabe de Azúcar y Canela, Hojas de Menta Fresca',
      de: 'Bulleit 10 Jahre, Zimtzuckersirup, Frische Minzblätter',
      fr: 'Bulleit 10 Ans, Sirop de Sucre à la Cannelle, Feuilles de Menthe Fraîche',
    },
  },
  {
    name: 'Papa Doble 2°',
    price: '€ 9,00',
    descriptions: {
      it: 'Clairin Commun Four, Agrumi Sour Mix, Maraschino',
      en: 'Clairin Commun Four, Citrus Sour Mix, Maraschino',
      es: 'Clairin Commun Four, Mezcla Agria Cítrica, Maraschino',
      de: 'Clairin Commun Four, Zitrus-Sour-Mix, Maraschino',
      fr: 'Clairin Commun Four, Mélange Agrumes Sour, Maraschino',
    },
  },
  {
    name: 'Canchanchara Moderna',
    price: '€ 10,00',
    descriptions: {
      it: 'Hampden 8 Anni, Agrumi Sour Mix, Miele, Top di Tonica',
      en: 'Hampden 8 Year, Citrus Sour Mix, Honey, Tonic Water',
      es: 'Hampden 8 Años, Mezcla Agria Cítrica, Miel, Tónica',
      de: 'Hampden 8 Jahre, Zitrus-Sour-Mix, Honig, Tonic Water',
      fr: 'Hampden 8 Ans, Mélange Agrumes Sour, Miel, Eau Tonique',
    },
  },
  {
    name: 'Fruits d\'Amour',
    price: '€ 9,00',
    descriptions: {
      it: 'Whisky infuso alla Banana, Sciroppo di Zucchero, Soda',
      en: 'Banana-Infused Whisky, Sugar Syrup, Soda Water',
      es: 'Whisky Macerado en Plátano, Jarabe de Azúcar, Soda',
      de: 'Bananen-Whisky, Zuckersirup, Sodawasser',
      fr: 'Whisky Infusé à la Banane, Sirop de Sucre, Soda',
    },
  },
  {
    name: 'Negroni in Botte',
    price: '€ 9,00',
    descriptions: {
      it: 'Negroni invecchiato in botte (almeno 3 mesi)',
      en: 'Barrel-aged Negroni (minimum 3 months)',
      es: 'Negroni Envejecido en Barrica (mínimo 3 meses)',
      de: 'Fassgelagerter Negroni (mindestens 3 Monate)',
      fr: 'Negroni Vieilli en Fût (minimum 3 mois)',
    },
  },
  {
    name: 'ZOE Espresso',
    price: '€ 8,00',
    descriptions: {
      it: 'Ciroc Vodka, Liquore al Caffè, Espresso Napoletano alla Nocciola, Sciroppo di Zucchero',
      en: 'Ciroc Vodka, Coffee Liqueur, Neapolitan Hazelnut Espresso, Sugar Syrup',
      es: 'Ciroc Vodka, Licor de Café, Espresso Napolitano de Avellana, Jarabe de Azúcar',
      de: 'Ciroc Vodka, Kaffeelikör, Neapolitanischer Haselnuss-Espresso, Zuckersirup',
      fr: 'Ciroc Vodka, Liqueur de Café, Espresso Napolitain Noisette, Sirop de Sucre',
    },
  },
  {
    name: 'Daikiwi',
    price: '€ 8,00',
    descriptions: {
      it: 'Rum Barcelon Blanco, Estratto di Kiwi, Sciroppo di Zucchero, Succo di Lime',
      en: 'Barcelon Blanco Rum, Kiwi Extract, Sugar Syrup, Lime Juice',
      es: 'Ron Barcelon Blanco, Extracto de Kiwi, Jarabe de Azúcar, Zumo de Lima',
      de: 'Barcelon Blanco Rum, Kiwi-Extrakt, Zuckersirup, Limettensaft',
      fr: 'Rhum Barcelon Blanco, Extrait de Kiwi, Sirop de Sucre, Jus de Citron Vert',
    },
  },
  {
    name: 'Il Duro',
    price: '€ 9,00',
    descriptions: {
      it: 'Rare Breed Kentucky Straight Bourbon Whiskey, Angostura, Zolletta di Zucchero',
      en: 'Rare Breed Kentucky Straight Bourbon Whiskey, Angostura Bitters, Sugar Cube',
      es: 'Rare Breed Kentucky Straight Bourbon, Angostura Bitter, Terrón de Azúcar',
      de: 'Rare Breed Kentucky Straight Bourbon, Angostura Bitters, Zuckerwürfel',
      fr: 'Rare Breed Kentucky Straight Bourbon, Angostura Bitters, Morceau de Sucre',
    },
  },
  {
    name: 'Tokyo Drift',
    price: '€ 9,00',
    descriptions: {
      it: 'Ketel One Premium Vodka, Midori, Sciroppo di Zucchero, Estratto di Cetriolo e Mela Verde, Succo di Lime',
      en: 'Ketel One Premium Vodka, Midori, Sugar Syrup, Cucumber & Green Apple Extract, Lime Juice',
      es: 'Ketel One Premium Vodka, Midori, Jarabe de Azúcar, Extracto de Pepino y Manzana Verde, Zumo de Lima',
      de: 'Ketel One Premium Vodka, Midori, Zuckersirup, Gurken- & Grünapfel-Extrakt, Limettensaft',
      fr: 'Ketel One Premium Vodka, Midori, Sirop de Sucre, Extrait Concombre & Pomme Verte, Jus de Citron Vert',
    },
  },
  {
    name: 'Borbone',
    price: '€ 9,00',
    descriptions: {
      it: 'J. Walker Double Black Whiskey, Knob Creek Rye, Carpano Antica Formula, Campari Bitter, Angostura',
      en: 'J. Walker Double Black Whiskey, Knob Creek Rye, Carpano Antica Formula, Campari Bitter, Angostura',
      es: 'J. Walker Double Black Whiskey, Knob Creek Rye, Carpano Antica Formula, Campari Bitter, Angostura',
      de: 'J. Walker Double Black Whiskey, Knob Creek Rye, Carpano Antica Formula, Campari Bitter, Angostura',
      fr: 'J. Walker Double Black Whiskey, Knob Creek Rye, Carpano Antica Formula, Campari Bitter, Angostura',
    },
  },
  {
    name: 'Peach & Love',
    price: '€ 8,00',
    descriptions: {
      it: 'Tequila Don Julio Blanco, Peach Cordial, Succo di Lime',
      en: 'Don Julio Blanco Tequila, Peach Cordial, Lime Juice',
      es: 'Tequila Don Julio Blanco, Cordial de Melocotón, Zumo de Lima',
      de: 'Don Julio Blanco Tequila, Pfirsich-Cordial, Limettensaft',
      fr: 'Tequila Don Julio Blanco, Cordial de Pêche, Jus de Citron Vert',
    },
  },
  {
    name: 'Vasinicola',
    price: '€ 9,00',
    descriptions: {
      it: 'Rum Clairin Communal, Rum Scuro Hechicera, Lime, Sciroppo, Foglie di Basilico',
      en: 'Clairin Communal Rum, Hechicera Dark Rum, Lime, Syrup, Fresh Basil Leaves',
      es: 'Ron Clairin Communal, Ron Oscuro Hechicera, Lima, Jarabe, Hojas de Albahaca',
      de: 'Clairin Communal Rum, Hechicera Dunkler Rum, Limette, Sirup, Basilikumblätter',
      fr: 'Rhum Clairin Communal, Rhum Brun Hechicera, Citron Vert, Sirop, Feuilles de Basilic',
    },
  },
  {
    name: "L'Orcula",
    price: '€ 9,00',
    descriptions: {
      it: 'Gin alla Melannurca H.M., Lime, Sciroppo, Bitter al Cacao',
      en: 'Annurca Apple Gin H.M., Lime, Syrup, Cocoa Bitters',
      es: 'Gin de Manzana Annurca H.M., Lima, Jarabe, Bitter de Cacao',
      de: 'Annurca-Apfel-Gin H.M., Limette, Sirup, Kakao-Bitters',
      fr: 'Gin à la Pomme Annurca H.M., Citron Vert, Sirop, Bitter Cacao',
    },
  },
  {
    name: 'Essenza',
    price: '€ 8,00',
    descriptions: {
      it: 'Amaro Locale, Vodka Absolut, Top di Soda, Succo di Arancia, Foglie di Menta',
      en: 'Local Amaro, Absolut Vodka, Soda, Orange Juice, Fresh Mint Leaves',
      es: 'Amaro Local, Vodka Absolut, Soda, Zumo de Naranja, Hojas de Menta',
      de: 'Lokaler Amaro, Absolut Vodka, Soda, Orangensaft, Frische Minzblätter',
      fr: 'Amaro Local, Vodka Absolut, Soda, Jus d\'Orange, Feuilles de Menthe',
    },
  },
  {
    name: "Fico d'India",
    price: '€ 8,00',
    descriptions: {
      it: "Altos Tequila, Liquore di Fico d'India, Succo di Lime, Sciroppo d'Agave",
      en: 'Altos Tequila, Prickly Pear Liqueur, Lime Juice, Agave Syrup',
      es: 'Tequila Altos, Licor de Higo Chumbo, Zumo de Lima, Jarabe de Agave',
      de: 'Altos Tequila, Kaktusfeigenlikör, Limettensaft, Agavensirup',
      fr: "Tequila Altos, Liqueur de Figue de Barbarie, Jus de Citron Vert, Sirop d'Agave",
    },
  },
];

export const mocktails: SignatureCocktail[] = [
  {
    name: 'Sprizzato',
    price: '€ 7,00',
    descriptions: {
      it: 'Sciroppo di Aperol, Tonica Mediterranea, Soda',
      en: 'Aperol Syrup, Mediterranean Tonic, Soda Water',
      es: 'Jarabe de Aperol, Tónica Mediterránea, Soda',
      de: 'Aperol-Sirup, Mediterrane Tonic, Sodawasser',
      fr: 'Sirop d\'Aperol, Tonic Méditerranéen, Soda',
    },
  },
  {
    name: 'Il Conte',
    price: '€ 8,00',
    descriptions: {
      it: 'Vibrante Martini, Gin "O" Sabatini, Vermouth Analcolico',
      en: 'Vibrante Martini, Sabatini "O" Gin (alcohol-free), Non-Alcoholic Vermouth',
      es: 'Vibrante Martini, Gin "O" Sabatini (sin alcohol), Vermut sin Alcohol',
      de: 'Vibrante Martini, Sabatini "O" Gin (alkoholfrei), Alkoholfreier Vermouth',
      fr: 'Vibrante Martini, Gin "O" Sabatini (sans alcool), Vermouth sans Alcool',
    },
  },
  {
    name: 'Tandem',
    price: '€ 7,00',
    descriptions: {
      it: 'Riduzione di Campari Bitter, Succo d\'Arancia, Top di Soda',
      en: 'Campari Bitter Reduction, Orange Juice, Soda Water',
      es: 'Reducción de Campari Bitter, Zumo de Naranja, Soda',
      de: 'Campari-Bitter-Reduktion, Orangensaft, Sodawasser',
      fr: 'Réduction de Campari Bitter, Jus d\'Orange, Soda',
    },
  },
  {
    name: 'O\' Re',
    price: '€ 7,00',
    descriptions: {
      it: 'Melone Retato, Sciroppo di Zucchero, Succo di Pompelmo',
      en: 'Cantaloupe Melon, Sugar Syrup, Grapefruit Juice',
      es: 'Melón Cantalupo, Jarabe de Azúcar, Zumo de Pomelo',
      de: 'Honigmelone, Zuckersirup, Grapefruitsaft',
      fr: 'Melon Cantaloup, Sirop de Sucre, Jus de Pamplemousse',
    },
  },
  {
    name: 'Zia Pina',
    price: '€ 7,00',
    descriptions: {
      it: 'Estratto di Ananas, Gelato al Cocco, Acqua d\'Ananas',
      en: 'Pineapple Extract, Coconut Ice Cream, Pineapple Water',
      es: 'Extracto de Piña, Helado de Coco, Agua de Piña',
      de: 'Ananas-Extrakt, Kokoseis, Ananaswater',
      fr: 'Extrait d\'Ananas, Glace à la Noix de Coco, Eau d\'Ananas',
    },
  },
  {
    name: 'Mulan',
    price: '€ 7,00',
    descriptions: {
      it: 'Ginger Beer, Succo di Lime, Menta, Sciroppo allo Zenzero',
      en: 'Ginger Beer, Lime Juice, Fresh Mint, Ginger Syrup',
      es: 'Ginger Beer, Zumo de Lima, Menta Fresca, Jarabe de Jengibre',
      de: 'Ginger Beer, Limettensaft, Frische Minze, Ingwersirup',
      fr: 'Ginger Beer, Jus de Citron Vert, Menthe Fraîche, Sirop de Gingembre',
    },
  },
  {
    name: 'Pink Lady',
    price: '€ 7,00',
    descriptions: {
      it: 'Tonica al Pompelmo Rosa, Marmellata di Arancia, Sciroppo ai Frutti Rossi',
      en: 'Pink Grapefruit Tonic, Orange Marmalade, Red Fruits Syrup',
      es: 'Tónica de Pomelo Rosa, Mermelada de Naranja, Jarabe de Frutas Rojas',
      de: 'Rosa Grapefruit Tonic, Orangenmarmelade, Rote-Früchte-Sirup',
      fr: 'Tonic au Pamplemousse Rose, Confiture d\'Orange, Sirop aux Fruits Rouges',
    },
  },
];

// ─── SPIRITS ─────────────────────────────────────────────────────
export const ginTonics: MenuItem[] = [
  { name: 'Gin Tonic base', price: '€ 7,00' },
  { name: 'Portofino', price: '€ 10,00' },
  { name: 'Roku', price: '€ 10,00' },
  { name: 'Adamus', price: '€ 13,00' },
  { name: 'Aviation', price: '€ 8,00' },
  { name: 'Bombay', price: '€ 8,00' },
  { name: 'Bombay Star', price: '€ 10,00' },
  { name: 'Bulldog', price: '€ 9,00' },
  { name: 'Caorunn', price: '€ 10,00' },
  { name: 'Caprisius', price: '€ 9,00' },
  { name: 'Capsicum', price: '€ 9,00' },
  { name: 'Citadelle', price: '€ 9,00' },
  { name: 'Engine', price: '€ 11,00' },
  { name: 'Fifty Pounds', price: '€ 10,00' },
  { name: 'Hendrick\'s', price: '€ 10,00' },
  { name: 'Juniper', price: '€ 9,00' },
  { name: 'Komasa Mandarino', price: '€ 11,00' },
  { name: 'Komasa The', price: '€ 11,00' },
  { name: 'Gin Mare', price: '€ 9,00' },
  { name: 'Mediterraneo', price: '€ 8,00' },
  { name: 'Monkey 47', price: '€ 11,00' },
  { name: 'Eden Mill', price: '€ 8,00' },
  { name: 'Plymouth', price: '€ 8,00' },
  { name: 'Sakurao', price: '€ 11,00' },
  { name: 'Seven Hills', price: '€ 9,00' },
  { name: 'Tanqueray', price: '€ 8,00' },
  { name: 'Tanqueray No. 10', price: '€ 11,00' },
  { name: 'Elephant', price: '€ 10,00' },
  { name: 'Nordes', price: '€ 10,00' },
];

export const vodkaTonics: MenuItem[] = [
  { name: 'Vodka Tonic base', price: '€ 7,00' },
  { name: 'Absolut', price: '€ 8,00' },
  { name: 'Bellissima', price: '€ 8,00' },
  { name: 'Belvedere', price: '€ 10,00' },
  { name: 'Cîroc', price: '€ 9,00' },
  { name: 'Grey Goose', price: '€ 10,00' },
  { name: 'Ketel One', price: '€ 9,00' },
  { name: 'Maskawskaya', price: '€ 7,00' },
  { name: 'Stolichnaya', price: '€ 7,00' },
  { name: 'Stolichnaya Elite', price: '€ 9,00' },
  { name: 'Stolichnaya Gold', price: '€ 8,00' },
  { name: 'Danzka', price: '€ 8,00' },
];

export const rums: MenuItem[] = [
  { name: 'Pampero Especial', price: '€ 4,00' },
  { name: 'Pampero Anniversario', price: '€ 7,00' },
  { name: 'Don Papa', price: '€ 10,00' },
  { name: 'Appleton 12', price: '€ 10,00' },
  { name: 'Barcelon Blanco', price: '€ 6,00' },
  { name: 'Barcelon Imperial', price: '€ 8,00' },
  { name: 'Brugal Añejo', price: '€ 8,00' },
  { name: 'Diplomatico', price: '€ 9,00' },
  { name: 'El Dorado 12', price: '€ 10,00' },
  { name: 'El Dorado 15', price: '€ 13,00' },
  { name: 'Goslings', price: '€ 6,00' },
  { name: 'Havana Club 7', price: '€ 7,00' },
  { name: 'J. Bally', price: '€ 9,00' },
  { name: 'Kraken', price: '€ 10,00' },
  { name: 'Matusalem 7', price: '€ 8,00' },
  { name: 'Matusalem 15', price: '€ 10,00' },
  { name: 'Plantation', price: '€ 9,00' },
  { name: 'Saint James', price: '€ 9,00' },
  { name: 'Zacapa 23', price: '€ 10,00' },
  { name: 'Zacapa XO', price: '€ 16,00' },
  { name: 'Hampden 4 Anni', price: '€ 8,00' },
  { name: 'Hampden 8 Anni', price: '€ 10,00' },
];

export const whiskeys: MenuItem[] = [
  { name: 'Ballantine\'s', price: '€ 6,00' },
  { name: 'Black Label', price: '€ 9,00' },
  { name: 'Green Label', price: '€ 10,00' },
  { name: 'Double Black Label', price: '€ 8,00' },
  { name: 'Red Label', price: '€ 6,00' },
  { name: 'Bulleit', price: '€ 9,00' },
  { name: 'Bulleit 10', price: '€ 13,00' },
  { name: 'Caol Ila 12', price: '€ 11,00' },
  { name: 'Gold Label', price: '€ 9,00' },
  { name: 'J&B', price: '€ 6,00' },
  { name: 'Jack Daniel\'s No. 7', price: '€ 8,00' },
  { name: 'Jack Daniel\'s Honey', price: '€ 7,00' },
  { name: 'Jack Daniel\'s Gentleman', price: '€ 10,00' },
  { name: 'Jameson', price: '€ 6,00' },
  { name: 'Knob Creek', price: '€ 9,00' },
  { name: 'Lagavulin 16', price: '€ 11,00' },
  { name: 'Lagavulin 10', price: '€ 13,00' },
  { name: 'Suntory', price: '€ 11,00' },
  { name: 'Talisker 10', price: '€ 14,00' },
  { name: 'The Chita', price: '€ 13,00' },
  { name: 'Monkey Shoulder', price: '€ 8,00' },
  { name: 'Myers\'s', price: '€ 7,00' },
  { name: 'Lot No. 40 Rye', price: '€ 9,00' },
  { name: 'Macallan', price: '€ 14,00' },
  { name: 'Michter\'s American', price: '€ 12,00' },
  { name: 'Michter\'s Single Barrel Rye', price: '€ 12,00' },
  { name: 'Wild Turkey Bourbon', price: '€ 8,00' },
  { name: 'Wild Turkey Rye', price: '€ 9,00' },
  { name: 'Long Branch Wild Turkey', price: '€ 10,00' },
];

export const grappas: MenuItem[] = [
  { name: 'Vite d\'Oro Tosolini', price: '€ 4,50' },
  { name: 'Diciotto Lune', price: '€ 4,50' },
  { name: '903', price: '€ 3,50' },
  { name: 'Berta Bric del Gaian', price: '€ 12,00' },
  { name: 'Berta Roccaniva', price: '€ 13,00' },
  { name: 'Berta Tre Soli Tre', price: '€ 11,00' },
  { name: 'Courvoisier', price: '€ 8,00' },
  { name: 'Hennessy', price: '€ 8,00' },
  { name: 'Janneau', price: '€ 8,00' },
  { name: 'Nardini', price: '€ 3,50' },
  { name: 'Grappa Bepi Tosolini Ex Cherry', price: '€ 10,00' },
  { name: 'Grappa Bepi Tosolini Ex Rum', price: '€ 10,00' },
  { name: 'Grappa Bepi Tosolini Ex Whiskey', price: '€ 10,00' },
  { name: 'Grappa Bepi Tosolini Ex Porto', price: '€ 10,00' },
];

export const tequilas: MenuItem[] = [
  { name: 'Mezcal Beneva', price: '€ 9,00' },
  { name: 'Mezcal Monte Alban', price: '€ 9,00' },
  { name: 'Jose Cuervo', price: '€ 5,00' },
  { name: 'Espolon', price: '€ 7,00' },
  { name: 'Olmega Altos', price: '€ 8,00' },
  { name: 'Casamigos', price: '€ 9,00' },
];

// ─── WINE ─────────────────────────────────────────────────────────
export const redWines: WineItem[] = [
  { name: 'Aglianico Vantanara IGP San Teodoro', priceGlass: '€ 6,00', priceBottle: '€ 22,00' },
  { name: 'Aglianico Fappiano', priceGlass: '€ 6,00', priceBottle: '€ 22,00' },
  { name: 'Aglianico del Sannio Fidelis Cantine del Taburno', priceGlass: '€ 6,00', priceBottle: '€ 24,00' },
  { name: 'Negramaro Cantina Fiorentina', priceGlass: '€ 6,00', priceBottle: '€ 24,00' },
  { name: 'Nero di Troia Podere 29', priceGlass: '€ 6,00', priceBottle: '€ 26,00' },
  { name: 'Nero di Troia Gelso Nero', priceGlass: '€ 6,00', priceBottle: '€ 26,00' },
  { name: 'Primitivo di Manduria', priceGlass: '€ 6,00', priceBottle: '€ 26,00' },
  { name: 'Chianti C.S. Primo Colle Villa Cerna', priceBottle: '€ 26,00' },
  { name: 'Ciliegiolo Principio IGT Antonio Camillo', priceGlass: '€ 7,00', priceBottle: '€ 28,00' },
  { name: 'Falerno del Massico – Conclave', priceBottle: '€ 28,00' },
  { name: 'Falerno del Massico – Campantuono', priceBottle: '€ 50,00' },
  { name: 'Falerno del Massico – Angelus', priceBottle: '€ 40,00' },
  { name: 'Falerno del Massico – Voluptas', priceBottle: '€ 35,00' },
  { name: 'Aglianico Feudi San Gregorio, Sabbie Nere', priceBottle: '€ 28,00' },
  { name: 'Taurasi Mastro Bernardino Radici', priceBottle: '€ 45,00' },
  { name: 'Taurasi Riserva Due Principati', priceBottle: '€ 40,00' },
  { name: 'Taurasi Rue 333 Nativ', priceBottle: '€ 35,00' },
  { name: 'Valpolicella C.S. Zenato', priceBottle: '€ 25,00' },
  { name: 'Chianti Banfi', priceBottle: '€ 20,00' },
  { name: 'Chianti C.S. Riserva Carpineto', priceBottle: '€ 32,00' },
  { name: 'Montepulciano d\'Abruzzo Tirabuccio', priceBottle: '€ 18,00' },
  { name: 'Brunello di Montalcino Banfi', priceBottle: '€ 65,00' },
  { name: 'Solaia Antinori', priceBottle: '€ 320,00' },
  { name: 'Ornellaia Bolgheri', priceBottle: '€ 320,00' },
  { name: 'Pinot Nero Meran', priceBottle: '€ 25,00' },
  { name: 'Dolcetto d\'Alba Cascina Fontana', priceBottle: '€ 32,00' },
  { name: 'Chateau Musar Jeune Red 2021', priceBottle: '€ 36,00' },
];

export const whiteWines: WineItem[] = [
  { name: 'Falanghina Femmena – Telaro', priceGlass: '€ 6,00', priceBottle: '€ 22,00' },
  { name: 'Aglianico Rosé Bella Femmena Telaro', priceGlass: '€ 6,00', priceBottle: '€ 22,00' },
  { name: 'Falanghina Vantanara San Teodoro', priceGlass: '€ 6,00', priceBottle: '€ 22,00' },
  { name: 'Greco di Tufo Cutizzi Feudi San Gregorio', priceGlass: '€ 6,00', priceBottle: '€ 26,00' },
  { name: 'Fiano Pietra Calda Feudi San Gregorio', priceGlass: '€ 6,00', priceBottle: '€ 26,00' },
  { name: 'Falerno del Massico Fattoria Pagano', priceGlass: '€ 6,00', priceBottle: '€ 24,00' },
  { name: 'Traminer Torre Rosazza', priceGlass: '€ 6,00', priceBottle: '€ 28,00' },
  { name: 'Sauvignon Torre Rosazza', priceGlass: '€ 6,00', priceBottle: '€ 26,00' },
  { name: 'Pinot Grigio Torre Rosazza', priceGlass: '€ 6,00', priceBottle: '€ 24,00' },
  { name: 'Chardonnay Torre Rosazza', priceGlass: '€ 6,00', priceBottle: '€ 24,00' },
  { name: 'Gewurztraminer Hartweg Dambach La Ville 2020', priceBottle: '€ 40,00' },
  { name: 'Chateau Musar Jeune Blanche', priceBottle: '€ 36,00' },
  { name: 'Bordeaux Rosé Lamarotte', priceBottle: '€ 32,00' },
  { name: 'Falanghina Quinto Decimo', priceBottle: '€ 60,00' },
  { name: 'Fiano di Avellino Quinto Decimo', priceBottle: '€ 70,00' },
  { name: 'Greco di Tufo Quinto Decimo', priceBottle: '€ 70,00' },
  { name: 'Galluccio Bianco Consiglio di Volpe', priceBottle: '€ 22,00' },
];

export const sparkling: WineItem[] = [
  { name: 'Prosecco DOCG Varaschin Brut', priceGlass: '€ 5,00', priceBottle: '€ 30,00' },
  { name: 'Prosecco DOCG Varaschin Extra Dry', priceGlass: '€ 5,00', priceBottle: '€ 30,00' },
  { name: 'Ferrari Brut', priceBottle: '€ 35,00' },
  { name: 'Franciacorta Spensierata Brut', priceBottle: '€ 30,00' },
  { name: 'Franciacorta Berlucchi Extra Brut', priceBottle: '€ 45,00' },
  { name: 'Franciacorta Berlucchi Brut', priceBottle: '€ 45,00' },
  { name: 'Franciacorta Berlucchi Saten', priceBottle: '€ 50,00' },
  { name: 'Franciacorta Ricci Curbastro Brut', priceBottle: '€ 40,00' },
  { name: 'Franciacorta Ricci Curbastro Saten', priceBottle: '€ 45,00' },
  { name: 'Franciacorta Bellavista Brut', priceBottle: '€ 90,00' },
  { name: 'Franciacorta Bellavista Saten', priceBottle: '€ 90,00' },
  { name: 'Ca\' del Bosco', priceBottle: '€ 70,00' },
  { name: 'Mumm Champagne Grand Cordon', priceBottle: '€ 70,00' },
  { name: 'Mumm Champagne 100% Pinot Nero', priceBottle: '€ 130,00' },
  { name: 'Moët & Chandon Brut', priceBottle: '€ 70,00' },
  { name: 'Moët Ice Imperial', priceBottle: '€ 110,00' },
  { name: 'Cazals Champagne', priceBottle: '€ 90,00' },
  { name: 'Veuve Clicquot Champagne', priceBottle: '€ 75,00' },
  { name: 'Jean Call Champagne Brut', priceBottle: '€ 180,00' },
  { name: 'Jean Call Champagne Reserve Brut', priceBottle: '€ 220,00' },
  { name: 'Perrier-Jouët Grand Brut', priceBottle: '€ 110,00' },
  { name: 'Bollinger Champagne', priceBottle: '€ 90,00' },
  { name: 'Perrier-Jouët Belle Époque', priceBottle: '€ 320,00' },
];

// ─── COFFEE & DESSERT ─────────────────────────────────────────────
export const coffees: MenuItem[] = [
  { name: 'Espresso', price: '€ 1,50' },
  { name: 'Espresso Macchiato', price: '€ 1,50' },
  { name: 'Espresso Decaffeinato', price: '€ 2,00' },
  { name: 'Espresso alla Nocciola', price: '€ 3,00' },
  { name: 'Caffè Corretto', price: '€ 2,00' },
  { name: 'Ginseng Small', price: '€ 2,00' },
  { name: 'Ginseng Large', price: '€ 2,50' },
  { name: 'Orzo Small', price: '€ 2,00' },
  { name: 'Orzo Large', price: '€ 2,50' },
  { name: 'Cappuccino', price: '€ 2,00' },
  { name: 'Latte Bianco', price: '€ 2,00' },
  { name: 'Shakerato', price: '€ 3,00' },
  { name: 'Crema Caffè', price: '€ 2,50' },
];

export const coffeeSpecials: SignatureCocktail[] = [
  {
    name: 'Kinder',
    price: '€ 3,50',
    descriptions: {
      it: 'Crema caffè, Nutella, cioccolato bianco e panna',
      en: 'Coffee cream, Nutella, white chocolate and cream',
      es: 'Crema de café, Nutella, chocolate blanco y nata',
      de: 'Kaffee-Creme, Nutella, weiße Schokolade und Sahne',
      fr: 'Crème café, Nutella, chocolat blanc et crème',
    },
  },
  {
    name: 'Rocher',
    price: '€ 3,50',
    descriptions: {
      it: 'Crema caffè, Nutella, granella di nocciole e panna',
      en: 'Coffee cream, Nutella, chopped hazelnuts and cream',
      es: 'Crema de café, Nutella, granillo de avellanas y nata',
      de: 'Kaffee-Creme, Nutella, gehackte Haselnüsse und Sahne',
      fr: 'Crème café, Nutella, éclats de noisettes et crème',
    },
  },
  {
    name: 'Raffaello',
    price: '€ 4,00',
    descriptions: {
      it: 'Crema caffè, cioccolato bianco, granella di cocco e panna',
      en: 'Coffee cream, white chocolate, shredded coconut and cream',
      es: 'Crema de café, chocolate blanco, coco rallado y nata',
      de: 'Kaffee-Creme, weiße Schokolade, Kokosraspeln und Sahne',
      fr: 'Crème café, chocolat blanc, noix de coco râpée et crème',
    },
  },
  {
    name: 'Brontese',
    price: '€ 4,00',
    descriptions: {
      it: 'Crema caffè, crema di pistacchio, granella di pistacchio e panna',
      en: 'Coffee cream, pistachio cream, chopped pistachios and cream',
      es: 'Crema de café, crema de pistacho, granillo de pistacho y nata',
      de: 'Kaffee-Creme, Pistaziencreme, gehackte Pistazien und Sahne',
      fr: 'Crème café, crème de pistache, éclats de pistaches et crème',
    },
  },
];

export const hotChocolates: MenuItem[] = [
  { name: 'Cioccolata al Latte', price: '€ 4,00' },
  { name: 'Cioccolata Bianca', price: '€ 4,00' },
  { name: 'Cioccolata Fondente', price: '€ 4,00' },
  { name: 'Cioccolata a Modo Mio', price: '€ 5,00' },
];

export const milkMugs: SignatureCocktail[] = [
  {
    name: 'Leccese',
    price: '€ 6,00',
    image: '/milkmug-leccese.jpg',
    descriptions: {
      it: 'Fondo cioccolato fondente, espresso, latte di mandorla, panna',
      en: 'Dark chocolate base, espresso, almond milk, whipped cream',
      es: 'Base de chocolate negro, espresso, leche de almendra, nata',
      de: 'Zartbitterschokolade-Basis, Espresso, Mandelmilch, Sahne',
      fr: 'Base chocolat noir, espresso, lait d\'amande, crème fouettée',
    },
  },
  {
    name: 'Vegan Exotic',
    price: '€ 7,00',
    image: '/milkmug-veganexotic.jpg',
    descriptions: {
      it: 'Fondo cioccolato bianco, latte di cocco, ananas sciroppata, passion fruit',
      en: 'White chocolate base, coconut milk, pineapple in syrup, passion fruit',
      es: 'Base de chocolate blanco, leche de coco, piña en almíbar, maracuyá',
      de: 'Weiße Schokoladen-Basis, Kokosmilch, Ananas in Sirup, Passionsfrucht',
      fr: 'Base chocolat blanc, lait de coco, ananas au sirop, fruit de la passion',
    },
  },
  {
    name: 'Gran Caramel',
    price: '€ 5,00',
    image: '/milkmug-grancaramel.jpg',
    descriptions: {
      it: 'Espresso, latte, sciroppo vaniglia, topping al caramello',
      en: 'Espresso, milk, vanilla syrup, caramel topping',
      es: 'Espresso, leche, sirope de vainilla, topping de caramelo',
      de: 'Espresso, Milch, Vanillesirup, Karamell-Topping',
      fr: 'Espresso, lait, sirop vanille, topping caramel',
    },
  },
  {
    name: 'Mocha',
    price: '€ 5,00',
    image: '/milkmug-mocha.jpg',
    descriptions: {
      it: 'Espresso, latte, cioccolato al latte, panna montata',
      en: 'Espresso, milk, milk chocolate, whipped cream',
      es: 'Espresso, leche, chocolate con leche, nata montada',
      de: 'Espresso, Milch, Milchschokolade, Schlagsahne',
      fr: 'Espresso, lait, chocolat au lait, crème fouettée',
    },
  },
];

export const desserts: MenuItem[] = [
  { name: 'Cheesecake "A Modo Mio"', price: '€ 6,00' },
  { name: 'Pancakes', price: '€ 4,50' },
  { name: 'Waffle', price: '€ 4,50' },
  { name: 'Soufflé', price: '€ 4,50' },
  { name: 'Soufflé "A Modo Mio"', price: '€ 5,00' },
  { name: 'Straccetti Fritti Nutella / Cioccolato Bianco', price: '€ 5,00' },
  { name: 'Straccetti Fritti Pistacchio', price: '€ 7,00' },
];

export const fruits: MenuItem[] = [
  { name: 'Tagliata di Frutta 2 Pax', price: '€ 14,00' },
  { name: 'Tagliata di Frutta 4 Pax', price: '€ 25,00' },
  { name: 'Tagliata di Frutta', price: '€ 8,00' },
  { name: 'Tagliata di Stagione', price: '€ 6,00' },
];

// ─── FOOD ─────────────────────────────────────────────────────────
export const snacks: MenuItem[] = [
  { name: 'Patatine Fritte Cheddar + Bacon', price: '€ 6,00', note: 'da condividere' },
  { name: 'Patatine Fritte', price: '€ 5,00', note: 'da condividere' },
  { name: 'Patatine Fritte con Stracciata di Bufala e Bacon', price: '€ 6,00', note: 'da condividere' },
  { name: 'Patate Fritte con Mortadella, Stracciata di Bufala e Pistacchio Salato', price: '€ 6,00', note: 'da condividere' },
  { name: 'Coppetta di Olive', price: '€ 3,50' },
  { name: 'Montanara Classica', price: '€ 5,00' },
  { name: 'Montanara a Modo Mio', price: '€ 7,00' },
];

export const bruschette: MenuItem[] = [
  { name: 'Classica', price: '€ 4,00' },
  { name: 'Guanciale e Noci', price: '€ 5,00' },
  { name: 'Pesto di Pistacchio e Pomodoro Secco', price: '€ 5,00' },
  { name: 'Broccoli, Salsiccia e Provola', price: '€ 5,00' },
  { name: 'Spuma di Mozzarella e Prosciutto Crudo Essiccato', price: '€ 6,00' },
  { name: 'Bruschetta Fritta con Provola di Bufala e Croccante di Pancetta', price: '€ 6,00' },
  { name: 'Bruschetta Fritta con Ricotta di Bufala, Cipolla Caramellata e Pancetta', price: '€ 6,00' },
  { name: 'Bruschette Mix 4 pz.', price: '€ 8,00', note: 'Selezione dello Chef' },
];

export const pinse: SignatureCocktail[] = [
  {
    name: 'Margherita',
    price: '€ 6,00',
    descriptions: {
      it: 'Pomodoro, mozzarella, basilico',
      en: 'Tomato, mozzarella, basil',
      es: 'Tomate, mozzarella, albahaca',
      de: 'Tomate, Mozzarella, Basilikum',
      fr: 'Tomate, mozzarella, basilic',
    },
  },
  {
    name: 'La Fresca',
    price: '€ 8,00',
    descriptions: {
      it: 'Prosciutto crudo, rucola, parmigiano, pomodorini, aceto balsamico',
      en: 'Cured ham, rocket, parmesan, cherry tomatoes, balsamic vinegar',
      es: 'Jamón crudo, rúcula, parmesano, tomates cherry, vinagre balsámico',
      de: 'Rohschinken, Rucola, Parmesan, Kirschtomaten, Balsamico-Essig',
      fr: 'Jambon cru, roquette, parmesan, tomates cerises, vinaigre balsamique',
    },
  },
  {
    name: 'Mortazza',
    price: '€ 8,00',
    descriptions: {
      it: 'Mortadella, stracciatella di bufala, pistacchio',
      en: 'Mortadella, buffalo stracciatella cheese, pistachio',
      es: 'Mortadela, stracciatella de búfala, pistacho',
      de: 'Mortadella, Büffel-Stracciatella-Käse, Pistazie',
      fr: 'Mortadelle, stracciatella de bufflonne, pistache',
    },
  },
  {
    name: 'Conciata Male',
    price: '€ 12,00',
    descriptions: {
      it: 'Guanciale di maialino nero, pecorino toscano conciato, pomodori secchi, nocciole',
      en: 'Black piglet guanciale, seasoned Tuscan pecorino, sun-dried tomatoes, hazelnuts',
      es: 'Guanciale de cerdo negro, pecorino toscano curado, tomates secos, avellanas',
      de: 'Schwarzferkel-Guanciale, gereifter toskanischer Pecorino, getrocknete Tomaten, Haselnüsse',
      fr: 'Guanciale de cochon noir, pecorino toscan affiné, tomates séchées, noisettes',
    },
  },
  {
    name: 'Vegana',
    price: '€ 10,00',
    descriptions: {
      it: 'Pesto di pistacchio, zucchine fritte, melanzane arrostite, rucola, noci',
      en: 'Pistachio pesto, fried courgette, roasted aubergine, rocket, walnuts',
      es: 'Pesto de pistacho, calabacín frito, berenjena asada, rúcula, nueces',
      de: 'Pistazien-Pesto, gebratene Zucchini, geröstete Aubergine, Rucola, Walnüsse',
      fr: 'Pesto de pistache, courgette frite, aubergine rôtie, roquette, noix',
    },
  },
];

export const taglieri: MenuItem[] = [
  { name: 'Salumi – Selezione della Casa', price: '€ 12,00' },
  { name: 'Formaggi – Selezione della Casa', price: '€ 14,00' },
  { name: 'Mix (consigliato per 2 persone)', price: '€ 18,00' },
  { name: 'Mix + Sfizi del Giorno (per 2 persone)', price: '€ 26,00' },
];
