export interface MenuItem {
  name: string;
  price?: string;
  description?: string;
  note?: string;
}

export interface MenuSection {
  title: string;
  titleKey: string;
  items: MenuItem[];
  note?: string;
}

export const softDrinks: MenuItem[] = [
  { name: 'Acqua 0,5', price: '€ 1,50' },
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

export interface SignatureCocktail {
  name: string;
  ingredients: string;
  price: string;
}

export const signatureCocktails: SignatureCocktail[] = [
  {
    name: 'Il Parallelo',
    ingredients: 'Gin Bulldog, Maraschino, Citric Blend, Sciroppo di Aperol, Acqua Faba',
    price: '€ 9,00',
  },
  {
    name: 'Malocchio',
    ingredients: 'Tanqueray No 10, Vermouth Extra Dry, Fill di Prosecco Extra Dry, Gocce di Olio al Basilico',
    price: '€ 11,00',
  },
  {
    name: 'Masaniello',
    ingredients: 'Pampero Bianco infuso al Melone Retato, Succo di Lime, Sciroppo di Zucchero, Marmellata H.M. Passion Fruit',
    price: '€ 9,00',
  },
  {
    name: 'Munaciello',
    ingredients: 'Wild Turkey Rye, Vermouth del Professore, Angostura Bitter, Miele Sciolto alla Vaniglia',
    price: '€ 10,00',
  },
  {
    name: 'Kamille',
    ingredients: 'Gin infuso ai Fiori di Camomilla, Miele di Castagno, Succo di Lime, Soda',
    price: '€ 9,00',
  },
  {
    name: 'Kentucky Derby',
    ingredients: 'Bulleit 10 Anni, Sciroppo di Zucchero alla Cannella, Foglie di Menta',
    price: '€ 11,00',
  },
  {
    name: 'Papa Doble 2°',
    ingredients: 'Clairin Commun Four, Agrumi Sour Mix, Maraschino',
    price: '€ 9,00',
  },
  {
    name: 'Canchanchara Moderna',
    ingredients: 'Hampden 8 Anni, Agrumi Sour Mix, Miele, Top di Tonica',
    price: '€ 10,00',
  },
  {
    name: 'Fruits d\'Amour',
    ingredients: 'Whisky infuso alla Banana, Sciroppo di Zucchero, Soda',
    price: '€ 9,00',
  },
  {
    name: 'Negroni in Botte',
    ingredients: 'Negroni invecchiato in botte (almeno 3 mesi)',
    price: '€ 9,00',
  },
  {
    name: 'ZOE Espresso',
    ingredients: 'Ciroc Vodka, Liquore al Caffè, Espresso Napoletano alla Nocciola, Sciroppo di Zucchero',
    price: '€ 8,00',
  },
  {
    name: 'Daikiwi',
    ingredients: 'Rum Barcelon Blanco, Estratto di Kiwi, Sciroppo di Zucchero, Succo di Lime',
    price: '€ 8,00',
  },
  {
    name: 'Il Duro',
    ingredients: 'Rare Breed Kentucky Straight Bourbon Whiskey, Angostura, Zolletta di Zucchero',
    price: '€ 9,00',
  },
  {
    name: 'Tokyo Drift',
    ingredients: 'Ketel One Premium Vodka, Midori, Sciroppo di Zucchero, Estratto di Cetriolo e Mela Verde, Succo di Lime',
    price: '€ 9,00',
  },
  {
    name: 'Borbone',
    ingredients: 'J. Walker Double Black Whiskey, Knob Creek Rye, Carpano Antica Formula, Campari Bitter, Angostura',
    price: '€ 9,00',
  },
  {
    name: 'Peach & Love',
    ingredients: 'Tequila Don Julio Blanco, Peach Cordial, Succo di Lime',
    price: '€ 8,00',
  },
];

export const mocktails: SignatureCocktail[] = [
  {
    name: 'Sprizzato',
    ingredients: 'Sciroppo di Aperol, Tonica Mediterranea, Soda',
    price: '€ 7,00',
  },
  {
    name: 'Il Conte',
    ingredients: 'Vibrante Martini, Gin "O" Sabatini, Vermouth Analcolico',
    price: '€ 8,00',
  },
  {
    name: 'Tandem',
    ingredients: 'Riduzione di Campari Bitter, Succo d\'Arancia, Top di Soda',
    price: '€ 7,00',
  },
  {
    name: 'O\' Re',
    ingredients: 'Melone Retato, Sciroppo di Zucchero, Succo di Pompelmo',
    price: '€ 7,00',
  },
  {
    name: 'Zia Pina',
    ingredients: 'Estratto di Ananas, Gelato al Cocco, Acqua d\'Ananas',
    price: '€ 7,00',
  },
  {
    name: 'Mulan',
    ingredients: 'Ginger Beer, Succo di Lime, Menta, Sciroppo allo Zenzero',
    price: '€ 7,00',
  },
  {
    name: 'Pink Lady',
    ingredients: 'Tonica al Pompelmo Rosa, Marmellata di Arancia, Sciroppo ai Frutti Rossi',
    price: '€ 7,00',
  },
];

export const ginTonics: MenuItem[] = [
  { name: 'Gin Tonic base', price: '€ 7,00' },
  { name: 'Portofino', price: '€ 10,00' },
  { name: 'Poku', price: '€ 10,00' },
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

export interface WineItem {
  name: string;
  priceGlass?: string;
  priceBottle?: string;
}

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
  { name: 'Falerno del Massico, Cantina Papa Conclave', priceBottle: '€ 28,00' },
  { name: 'Falerno del Massico, Cantina Papa Campantuono', priceBottle: '€ 50,00' },
  { name: 'Falerno del Massico, Cantina Pagano-Angelus', priceBottle: '€ 40,00' },
  { name: 'Falerno del Massico, Cantina Pagano-Voluptas', priceBottle: '€ 35,00' },
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
  { name: 'Falanghina Femmena - Telaro', priceGlass: '€ 6,00', priceBottle: '€ 22,00' },
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
  { name: 'Spumante Tefrite Telaro', priceGlass: '€ 5,00', priceBottle: '€ 22,00' },
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
  { name: 'Kinder', ingredients: 'Espresso con gusto Kinder', price: '€ 3,50' },
  { name: 'Rocher', ingredients: 'Espresso con gusto Rocher', price: '€ 3,50' },
  { name: 'Raffaello', ingredients: 'Espresso con gusto Raffaello', price: '€ 4,00' },
  { name: 'Brontese', ingredients: 'Espresso al pistacchio di Bronte', price: '€ 4,00' },
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
    ingredients: 'Fondo cioccolato fondente, espresso, latte di mandorla, panna',
    price: '€ 6,00',
  },
  {
    name: 'Vegan Exotic',
    ingredients: 'Fondo cioccolato bianco, latte di cocco, ananas sciroppata, passion fruit',
    price: '€ 7,00',
  },
  {
    name: 'Gran Caramel',
    ingredients: 'Espresso, latte, sciroppo vaniglia, topping al caramello',
    price: '€ 5,00',
  },
  {
    name: 'Mocha',
    ingredients: 'Espresso, latte, cioccolato al latte, panna montata',
    price: '€ 5,00',
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
  { name: 'Tagliata 2 Pax', price: '€ 14,00' },
  { name: 'Tagliata 4 Pax', price: '€ 25,00' },
  { name: 'Tagliata di Frutta', price: '€ 8,00' },
  { name: 'Tagliata di Stagione', price: '€ 6,00' },
];

export const snacks: MenuItem[] = [
  { name: 'Patatine Fritte Cheddar + Bacon', price: '€ 6,00' },
  { name: 'Patatine Fritte', price: '€ 5,00' },
  { name: 'Patatine Fritte con Stracciata di Bufala e Bacon', price: '€ 6,00' },
  { name: 'Patate Fritte con Mortadella, Stracciata di Bufala e Pistacchio Salato', price: '€ 6,00' },
  { name: 'Coppetta di Olive', price: '€ 3,50' },
  { name: 'Montanara Classica', price: '€ 5,00' },
  { name: 'Montanara a Modo Mio', price: '€ 7,00' },
];

export const bruschette: SignatureCocktail[] = [
  { name: 'Classica', ingredients: 'Pomodoro, aglio, olio', price: '€ 4,00' },
  { name: 'Guanciale e Noci', ingredients: 'Guanciale croccante, noci', price: '€ 5,00' },
  { name: 'Pesto di Pistacchio e Pomodoro Secco', ingredients: 'Pesto di pistacchio, pomodoro secco', price: '€ 5,00' },
  { name: 'Broccoli, Salsiccia e Provola', ingredients: 'Broccoli saltati, salsiccia, provola', price: '€ 5,00' },
  { name: 'Spuma di Mozzarella e Prosciutto Crudo Essiccato', ingredients: 'Spuma di mozzarella, prosciutto crudo', price: '€ 6,00' },
  { name: 'Bruschetta Fritta, Provola di Bufala e Croccante di Pancetta', ingredients: 'Bruschetta fritta, provola di bufala, pancetta croccante', price: '€ 6,00' },
  { name: 'Bruschetta Fritta, Ricotta di Bufala, Cipolla Caramellata e Croccante di Pancetta', ingredients: 'Bruschetta fritta, ricotta di bufala, cipolla caramellata, pancetta', price: '€ 6,00' },
  { name: 'Bruschette Mix 4 pz.', ingredients: 'Selezione di 4 bruschette', price: '€ 8,00' },
];

export const pinse: SignatureCocktail[] = [
  { name: 'Margherita', ingredients: '', price: '€ 6,00' },
  { name: 'La Fresca', ingredients: 'Crudo, Rucola, Parmigiano, Pomodorini, Aceto Balsamico', price: '€ 8,00' },
  { name: 'Mortazza', ingredients: 'Mortadella, Stracciatella di Bufala, Pistacchio', price: '€ 8,00' },
  { name: 'Conciata Male', ingredients: 'Guanciale di maialino nero, Pecorino Toscano conciato, Pomodori secchi, Nocciole', price: '€ 12,00' },
  { name: 'Vegana', ingredients: 'Pesto di pistacchio, Zucchine fritte, Melanzane arrostite, Rucola, Noci', price: '€ 10,00' },
];

export const taglieri: MenuItem[] = [
  { name: 'Salumi – Selezione della Casa', price: '€ 12,00' },
  { name: 'Formaggi – Selezione della Casa', price: '€ 14,00' },
  { name: 'Mix (consigliato per 2 persone)', price: '€ 18,00' },
  { name: 'Mix + Sfizi del Giorno (consigliato per 2 persone)', price: '€ 26,00' },
];
