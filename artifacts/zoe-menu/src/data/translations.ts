export type Language = 'it' | 'en' | 'es' | 'de' | 'fr';

export const langLabels: Record<Language, string> = {
  it: 'IT',
  en: 'EN',
  es: 'ES',
  de: 'DE',
  fr: 'FR',
};

export interface Translation {
  tagline: string;
  openingHours: string;
  monday: string; tuesday: string; wednesday: string; thursday: string;
  friday: string; saturday: string; sunday: string;
  closed: string;
  monHours: string; tueHours: string; wedHours: string; thuHours: string;
  friHours: string; satHours: string; sunHours: string;
  followUs: string; contactUs: string; leaveReview: string;
  // Categories
  cat_bar: string; cat_cocktails: string; cat_spirits: string;
  cat_wine: string; cat_food: string; cat_coffee: string;
  // Bar subcats
  sub_softDrinks: string; sub_beers: string; sub_craftBeers: string;
  sub_draftBeers: string; sub_aperitifs: string; sub_amari: string;
  // Cocktail subcats
  sub_signature: string; sub_mocktails: string;
  // Spirits subcats
  sub_gin: string; sub_vodka: string; sub_rum: string;
  sub_whiskey: string; sub_grappa: string; sub_tequila: string;
  // Wine subcats
  sub_red: string; sub_white: string; sub_sparkling: string;
  // Food subcats
  sub_snacks: string; sub_bruschette: string; sub_pinse: string;
  sub_taglieri: string;
  // Coffee subcats
  sub_coffee: string; sub_specialCoffee: string; sub_hotChoc: string;
  sub_milkMugs: string; sub_dessert: string; sub_fruit: string;
  // Labels
  glass: string; bottle: string;
  ibaNotes: string; premiumIba: string;
  signatureNote: string; correctionFee: string;
  servingGuide: string; comingSoon: string; close: string;
  teaNote: string;
  tableService: string;
}

export const translations: Record<Language, Translation> = {
  it: {
    tagline: 'Premium Bar & Restaurant',
    openingHours: 'Orari di Apertura',
    monday: 'Lunedì', tuesday: 'Martedì', wednesday: 'Mercoledì',
    thursday: 'Giovedì', friday: 'Venerdì', saturday: 'Sabato', sunday: 'Domenica',
    closed: 'Chiuso',
    monHours: '16:00 – 02:00', tueHours: 'Chiuso', wedHours: '07:00 – 02:00',
    thuHours: '07:00 – 02:00', friHours: '07:00 – 02:00',
    satHours: '07:00 – 02:00', sunHours: '07:00 – 02:00',
    followUs: 'Seguici su Instagram', contactUs: 'Scrivici su WhatsApp', leaveReview: 'Lascia una recensione su Google',
    cat_bar: 'Bar', cat_cocktails: 'Cocktails', cat_spirits: 'Spirits',
    cat_wine: 'Vini & Bollicine', cat_food: 'Cucina', cat_coffee: 'Caffetteria',
    sub_softDrinks: 'Bibite', sub_beers: 'Birre', sub_craftBeers: 'Birre Artigianali',
    sub_draftBeers: 'Birre alla Spina', sub_aperitifs: 'Aperitivi', sub_amari: 'Amari',
    sub_signature: 'Signature', sub_mocktails: 'Analcolici',
    sub_gin: 'Gin Tonic', sub_vodka: 'Vodka Tonic', sub_rum: 'Rum',
    sub_whiskey: 'Whiskey', sub_grappa: 'Grappe & Cognac', sub_tequila: 'Mezcal & Tequila',
    sub_red: 'Rossi', sub_white: 'Bianchi', sub_sparkling: 'Bollicine',
    sub_snacks: 'Gli Sfizi', sub_bruschette: 'Bruschette', sub_pinse: 'Le Pinse', sub_taglieri: 'I Taglieri',
    sub_coffee: 'Caffetteria', sub_specialCoffee: 'Caffè Speciali', sub_hotChoc: 'Cioccolata Calda',
    sub_milkMugs: 'Milk Mugs', sub_dessert: 'Dessert', sub_fruit: 'Frutta',
    glass: 'Calice', bottle: 'Bottiglia',
    ibaNotes: 'Cocktail IBA — € 7,00', premiumIba: 'Premium IBA — € 9,00',
    signatureNote: 'La nostra Signature è sempre alla costante ricerca di nuovi ingredienti e abbinamenti. Saremo, comunque, lieti di soddisfare tutte le vostre richieste.',
    correctionFee: 'Ad ogni correzione viene applicato il costo di € 1,00',
    servingGuide: 'Come si serve', comingSoon: 'Immagini in arrivo...', close: 'Chiudi',
    teaNote: 'Consulta il menù cartaceo',
    tableService: 'Il servizio al tavolo termina all\'01:00',
  },
  en: {
    tagline: 'Premium Bar & Restaurant',
    openingHours: 'Opening Hours',
    monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday',
    thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday',
    closed: 'Closed',
    monHours: '4:00 PM – 2:00 AM', tueHours: 'Closed', wedHours: '7:00 AM – 2:00 AM',
    thuHours: '7:00 AM – 2:00 AM', friHours: '7:00 AM – 2:00 AM',
    satHours: '7:00 AM – 2:00 AM', sunHours: '7:00 AM – 2:00 AM',
    followUs: 'Follow us on Instagram', contactUs: 'Message us on WhatsApp', leaveReview: 'Leave us a Google Review',
    cat_bar: 'Bar', cat_cocktails: 'Cocktails', cat_spirits: 'Spirits',
    cat_wine: 'Wine & Bubbles', cat_food: 'Food', cat_coffee: 'Coffee & Dessert',
    sub_softDrinks: 'Soft Drinks', sub_beers: 'Beers', sub_craftBeers: 'Craft Beers',
    sub_draftBeers: 'Draft Beers', sub_aperitifs: 'Aperitifs', sub_amari: 'Digestifs',
    sub_signature: 'Signature', sub_mocktails: 'Non-Alcoholic',
    sub_gin: 'Gin & Tonic', sub_vodka: 'Vodka & Tonic', sub_rum: 'Rum',
    sub_whiskey: 'Whiskey', sub_grappa: 'Grappa & Cognac', sub_tequila: 'Mezcal & Tequila',
    sub_red: 'Red Wines', sub_white: 'White Wines', sub_sparkling: 'Sparkling',
    sub_snacks: 'Snacks', sub_bruschette: 'Bruschette', sub_pinse: 'Pinse', sub_taglieri: 'Charcuterie Boards',
    sub_coffee: 'Coffee', sub_specialCoffee: 'Special Coffee', sub_hotChoc: 'Hot Chocolate',
    sub_milkMugs: 'Milk Mugs', sub_dessert: 'Dessert', sub_fruit: 'Fruit',
    glass: 'Glass', bottle: 'Bottle',
    ibaNotes: 'IBA Cocktail — € 7.00', premiumIba: 'Premium IBA — € 9.00',
    signatureNote: 'Our signature menu is constantly evolving. We will be happy to accommodate all your requests.',
    correctionFee: 'Each addition/correction: + € 1.00',
    servingGuide: 'How it\'s served', comingSoon: 'Images coming soon...', close: 'Close',
    teaNote: 'Please refer to the paper menu',
    tableService: 'Table service until 1:00 AM',
  },
  es: {
    tagline: 'Bar & Restaurante Premium',
    openingHours: 'Horario de Apertura',
    monday: 'Lunes', tuesday: 'Martes', wednesday: 'Miércoles',
    thursday: 'Jueves', friday: 'Viernes', saturday: 'Sábado', sunday: 'Domingo',
    closed: 'Cerrado',
    monHours: '16:00 – 02:00', tueHours: 'Cerrado', wedHours: '07:00 – 02:00',
    thuHours: '07:00 – 02:00', friHours: '07:00 – 02:00',
    satHours: '07:00 – 02:00', sunHours: '07:00 – 02:00',
    followUs: 'Síguenos en Instagram', contactUs: 'Contáctanos en WhatsApp', leaveReview: 'Déjanos una reseña en Google',
    cat_bar: 'Bar', cat_cocktails: 'Cócteles', cat_spirits: 'Spirits',
    cat_wine: 'Vinos & Burbujas', cat_food: 'Cocina', cat_coffee: 'Café & Postre',
    sub_softDrinks: 'Refrescos', sub_beers: 'Cervezas', sub_craftBeers: 'Artesanales',
    sub_draftBeers: 'Barril', sub_aperitifs: 'Aperitivos', sub_amari: 'Digestivos',
    sub_signature: 'Signature', sub_mocktails: 'Sin Alcohol',
    sub_gin: 'Gin & Tónica', sub_vodka: 'Vodka & Tónica', sub_rum: 'Ron',
    sub_whiskey: 'Whisky', sub_grappa: 'Grappa & Coñac', sub_tequila: 'Mezcal & Tequila',
    sub_red: 'Tintos', sub_white: 'Blancos', sub_sparkling: 'Espumosos',
    sub_snacks: 'Aperitivos', sub_bruschette: 'Bruschettas', sub_pinse: 'Pinse', sub_taglieri: 'Tablas',
    sub_coffee: 'Café', sub_specialCoffee: 'Café Especial', sub_hotChoc: 'Chocolate Caliente',
    sub_milkMugs: 'Milk Mugs', sub_dessert: 'Postre', sub_fruit: 'Fruta',
    glass: 'Copa', bottle: 'Botella',
    ibaNotes: 'Cóctel IBA — € 7,00', premiumIba: 'IBA Premium — € 9,00',
    signatureNote: 'Nuestra carta signature está en constante evolución. Estaremos encantados de satisfacer todas sus peticiones.',
    correctionFee: 'Cada corrección: + € 1,00',
    servingGuide: 'Cómo se sirve', comingSoon: 'Imágenes próximamente...', close: 'Cerrar',
    teaNote: 'Consulte el menú en papel',
    tableService: 'Servicio de mesa hasta la 1:00',
  },
  de: {
    tagline: 'Premium Bar & Restaurant',
    openingHours: 'Öffnungszeiten',
    monday: 'Montag', tuesday: 'Dienstag', wednesday: 'Mittwoch',
    thursday: 'Donnerstag', friday: 'Freitag', saturday: 'Samstag', sunday: 'Sonntag',
    closed: 'Geschlossen',
    monHours: '16:00 – 02:00 Uhr', tueHours: 'Geschlossen', wedHours: '07:00 – 02:00 Uhr',
    thuHours: '07:00 – 02:00 Uhr', friHours: '07:00 – 02:00 Uhr',
    satHours: '07:00 – 02:00 Uhr', sunHours: '07:00 – 02:00 Uhr',
    followUs: 'Folg uns auf Instagram', contactUs: 'Schreib uns auf WhatsApp', leaveReview: 'Bewerte uns auf Google',
    cat_bar: 'Bar', cat_cocktails: 'Cocktails', cat_spirits: 'Spirits',
    cat_wine: 'Wein & Sekt', cat_food: 'Speisen', cat_coffee: 'Kaffee & Dessert',
    sub_softDrinks: 'Getränke', sub_beers: 'Biere', sub_craftBeers: 'Craft Biere',
    sub_draftBeers: 'Fassbiere', sub_aperitifs: 'Aperitifs', sub_amari: 'Digestifs',
    sub_signature: 'Signature', sub_mocktails: 'Alkoholfrei',
    sub_gin: 'Gin & Tonic', sub_vodka: 'Vodka & Tonic', sub_rum: 'Rum',
    sub_whiskey: 'Whisky', sub_grappa: 'Grappa & Cognac', sub_tequila: 'Mezcal & Tequila',
    sub_red: 'Rotweine', sub_white: 'Weißweine', sub_sparkling: 'Sekt',
    sub_snacks: 'Snacks', sub_bruschette: 'Bruschette', sub_pinse: 'Pinse', sub_taglieri: 'Wurstplatten',
    sub_coffee: 'Kaffee', sub_specialCoffee: 'Spezialkaffee', sub_hotChoc: 'Heiße Schokolade',
    sub_milkMugs: 'Milk Mugs', sub_dessert: 'Nachspeise', sub_fruit: 'Obst',
    glass: 'Glas', bottle: 'Flasche',
    ibaNotes: 'IBA Cocktail — € 7,00', premiumIba: 'Premium IBA — € 9,00',
    signatureNote: 'Unsere Signature-Karte entwickelt sich ständig weiter. Wir erfüllen gerne alle Ihre Wünsche.',
    correctionFee: 'Jede Korrektur: + € 1,00',
    servingGuide: 'Wie es serviert wird', comingSoon: 'Bilder folgen in Kürze...', close: 'Schließen',
    teaNote: 'Auf der Papierkarte ansehen',
    tableService: 'Tischservice bis 1:00 Uhr',
  },
  fr: {
    tagline: 'Bar & Restaurant Premium',
    openingHours: 'Horaires d\'ouverture',
    monday: 'Lundi', tuesday: 'Mardi', wednesday: 'Mercredi',
    thursday: 'Jeudi', friday: 'Vendredi', saturday: 'Samedi', sunday: 'Dimanche',
    closed: 'Fermé',
    monHours: '16h00 – 02h00', tueHours: 'Fermé', wedHours: '07h00 – 02h00',
    thuHours: '07h00 – 02h00', friHours: '07h00 – 02h00',
    satHours: '07h00 – 02h00', sunHours: '07h00 – 02h00',
    followUs: 'Suivez-nous sur Instagram', contactUs: 'Contactez-nous sur WhatsApp', leaveReview: 'Laissez-nous un avis Google',
    cat_bar: 'Bar', cat_cocktails: 'Cocktails', cat_spirits: 'Spiritueux',
    cat_wine: 'Vins & Bulles', cat_food: 'Restauration', cat_coffee: 'Café & Dessert',
    sub_softDrinks: 'Boissons', sub_beers: 'Bières', sub_craftBeers: 'Artisanales',
    sub_draftBeers: 'Pression', sub_aperitifs: 'Apéritifs', sub_amari: 'Digestifs',
    sub_signature: 'Signature', sub_mocktails: 'Sans Alcool',
    sub_gin: 'Gin & Tonic', sub_vodka: 'Vodka & Tonic', sub_rum: 'Rhum',
    sub_whiskey: 'Whisky', sub_grappa: 'Grappa & Cognac', sub_tequila: 'Mezcal & Tequila',
    sub_red: 'Vins Rouges', sub_white: 'Vins Blancs', sub_sparkling: 'Pétillants',
    sub_snacks: 'Snacks', sub_bruschette: 'Bruschette', sub_pinse: 'Pinse', sub_taglieri: 'Planches',
    sub_coffee: 'Café', sub_specialCoffee: 'Café Spécial', sub_hotChoc: 'Chocolat Chaud',
    sub_milkMugs: 'Milk Mugs', sub_dessert: 'Dessert', sub_fruit: 'Fruits',
    glass: 'Verre', bottle: 'Bouteille',
    ibaNotes: 'Cocktail IBA — € 7,00', premiumIba: 'IBA Premium — € 9,00',
    signatureNote: 'Notre carte signature évolue en permanence. Nous serons heureux de répondre à toutes vos demandes.',
    correctionFee: 'Chaque correction : + € 1,00',
    servingGuide: 'Comment c\'est servi', comingSoon: 'Images bientôt disponibles...', close: 'Fermer',
    teaNote: 'Consultez le menu papier',
    tableService: 'Service à table jusqu\'à 1h00',
  },
};
