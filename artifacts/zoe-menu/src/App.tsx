import { useState } from 'react';
import { Language, translations } from './data/translations';
import {
  softDrinks, beers, craftBeers, draftBeers,
  aperitifs, amari, signatureCocktails, mocktails,
  ginTonics, vodkaTonics, rums, whiskeys, grappas, tequilas,
  redWines, whiteWines, sparkling,
  coffees, coffeeSpecials, hotChocolates, milkMugs, desserts, fruits,
  snacks, bruschette, pinse, taglieri,
  MenuItem, WineItem, SignatureCocktail,
} from './data/menuData';

function LanguageSwitcher({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  const langs: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'de', label: 'DE' },
    { code: 'fr', label: 'FR' },
  ];
  return (
    <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center' }}>
      {langs.map((l) => (
        <button
          key={l.code}
          className={`lang-btn ${lang === l.code ? 'active' : ''}`}
          onClick={() => setLang(l.code)}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="menu-item">
      <div style={{ flex: 1 }}>
        <div className="menu-item-name">{item.name}
          {item.note && <span style={{ fontSize: '0.75rem', color: '#6fa3c8', marginLeft: '0.5rem' }}>({item.note})</span>}
        </div>
        {item.description && <div className="menu-item-desc">{item.description}</div>}
      </div>
      {item.price && <div className="menu-item-price">{item.price}</div>}
    </div>
  );
}

function WineItemRow({ item, glassLabel, bottleLabel }: { item: WineItem; glassLabel: string; bottleLabel: string }) {
  return (
    <div className="wine-item">
      <div className="menu-item-name" style={{ fontSize: '0.9rem' }}>{item.name}</div>
      <div className="wine-price-glass">{item.priceGlass || ''}</div>
      <div className="wine-price-bottle">{item.priceBottle || ''}</div>
    </div>
  );
}

function SigCard({ item }: { item: SignatureCocktail }) {
  return (
    <div className="signature-card">
      <div className="signature-name">{item.name}</div>
      {item.ingredients && <div className="signature-ingredients">{item.ingredients}</div>}
      <div className="signature-price">{item.price}</div>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: '1.5rem', marginTop: '1rem' }}>
      <hr className="divider-gold" />
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <hr className="divider-gold" />
    </div>
  );
}

function SubHeader({ title }: { title: string }) {
  return (
    <div style={{ margin: '1.5rem 0 0.75rem 0', textAlign: 'center' }}>
      <p style={{
        fontSize: '0.8rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#c8a97e',
        fontWeight: 500,
      }}>{title}</p>
      <hr className="divider-gold-full" style={{ maxWidth: '200px', margin: '0.5rem auto 0' }} />
    </div>
  );
}

type MainCategory = 'bar' | 'cocktails' | 'spirits' | 'wine' | 'food' | 'coffee';

const BAR_TABS = ['drinks', 'beers', 'craftBeers', 'draftBeers', 'aperitifs', 'amari'] as const;
const COCKTAIL_TABS = ['signaturecocktails', 'mocktails'] as const;
const SPIRITS_TABS = ['ginTonic', 'vodkaTonic', 'rum', 'whiskey', 'grappa', 'tequila'] as const;
const WINE_TABS = ['redWines', 'whiteWines', 'sparkling'] as const;
const FOOD_TABS = ['snacks', 'bruschette', 'pinse', 'taglieri'] as const;
const COFFEE_TABS = ['coffee', 'coffeeSpecial', 'chocolate', 'milkMugs', 'dessert', 'fruit'] as const;

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  const [mainCat, setMainCat] = useState<MainCategory>('bar');
  const [barTab, setBarTab] = useState<typeof BAR_TABS[number]>('drinks');
  const [cocktailTab, setCocktailTab] = useState<typeof COCKTAIL_TABS[number]>('signaturecocktails');
  const [spiritsTab, setSpiritsTab] = useState<typeof SPIRITS_TABS[number]>('ginTonic');
  const [wineTab, setWineTab] = useState<typeof WINE_TABS[number]>('redWines');
  const [foodTab, setFoodTab] = useState<typeof FOOD_TABS[number]>('snacks');
  const [coffeeTab, setCoffeeTab] = useState<typeof COFFEE_TABS[number]>('coffee');

  const mainCategories: { id: MainCategory; label: string }[] = [
    { id: 'bar', label: t.category_bar },
    { id: 'cocktails', label: 'Cocktails' },
    { id: 'spirits', label: 'Spirits' },
    { id: 'wine', label: t.category_wine },
    { id: 'food', label: t.category_food },
    { id: 'coffee', label: t.category_coffee },
  ];

  function renderTabs(tabs: readonly string[], active: string, setActive: (t: any) => void) {
    return (
      <div className="tabs-scroll" style={{ display: 'flex', borderBottom: '1px solid rgba(200,169,126,0.3)', marginBottom: '1.5rem' }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`category-tab ${active === tab ? 'active' : ''}`}
            onClick={() => setActive(tab)}
          >
            {t[tab] || tab}
          </button>
        ))}
      </div>
    );
  }

  function renderBarContent() {
    switch (barTab) {
      case 'drinks': return softDrinks.map((i) => <MenuItemRow key={i.name} item={i} />);
      case 'beers': return beers.map((i) => <MenuItemRow key={i.name} item={i} />);
      case 'craftBeers': return craftBeers.map((i) => <MenuItemRow key={i.name} item={i} />);
      case 'draftBeers': return draftBeers.map((i) => <MenuItemRow key={i.name} item={i} />);
      case 'aperitifs': return aperitifs.map((i) => <MenuItemRow key={i.name} item={i} />);
      case 'amari': return amari.map((i) => <MenuItemRow key={i.name} item={i} />);
    }
  }

  function renderCocktailContent() {
    if (cocktailTab === 'signaturecocktails') {
      return (
        <>
          <div style={{ textAlign: 'center', marginBottom: '1rem', color: '#666', fontSize: '0.82rem', fontStyle: 'italic' }}>
            IBA Cocktail — € 7,00 &nbsp;|&nbsp; Premium IBA — € 9,00
          </div>
          {signatureCocktails.map((i) => <SigCard key={i.name} item={i} />)}
          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#999', marginTop: '1.5rem', fontStyle: 'italic' }}>
            {t.signatureNote}
          </p>
        </>
      );
    }
    return mocktails.map((i) => <SigCard key={i.name} item={i} />);
  }

  function renderSpiritsContent() {
    switch (spiritsTab) {
      case 'ginTonic': return ginTonics.map((i) => <MenuItemRow key={i.name} item={i} />);
      case 'vodkaTonic': return vodkaTonics.map((i) => <MenuItemRow key={i.name} item={i} />);
      case 'rum': return rums.map((i) => <MenuItemRow key={i.name} item={i} />);
      case 'whiskey': return whiskeys.map((i) => <MenuItemRow key={i.name} item={i} />);
      case 'grappa': return grappas.map((i) => <MenuItemRow key={i.name} item={i} />);
      case 'tequila': return tequilas.map((i) => <MenuItemRow key={i.name} item={i} />);
    }
  }

  function renderWineContent() {
    const glassLabel = t.glassLabel;
    const bottleLabel = t.bottleLabel;
    let items: WineItem[] = [];
    if (wineTab === 'redWines') items = redWines;
    if (wineTab === 'whiteWines') items = whiteWines;
    if (wineTab === 'sparkling') items = sparkling;
    return (
      <>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '0.5rem', padding: '0.4rem 0', borderBottom: '1px solid rgba(200,169,126,0.4)', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999' }}></span>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6fa3c8', minWidth: '50px', textAlign: 'right' }}>{glassLabel}</span>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#004060', minWidth: '60px', textAlign: 'right' }}>{bottleLabel}</span>
        </div>
        {items.map((i) => <WineItemRow key={i.name} item={i} glassLabel={glassLabel} bottleLabel={bottleLabel} />)}
      </>
    );
  }

  function renderFoodContent() {
    switch (foodTab) {
      case 'snacks': return snacks.map((i) => <MenuItemRow key={i.name} item={i} />);
      case 'bruschette': return bruschette.map((i) => <SigCard key={i.name} item={i} />);
      case 'pinse': return pinse.map((i) => <SigCard key={i.name} item={i} />);
      case 'taglieri': return taglieri.map((i) => <MenuItemRow key={i.name} item={i} />);
    }
  }

  function renderCoffeeContent() {
    switch (coffeeTab) {
      case 'coffee': return coffees.map((i) => <MenuItemRow key={i.name} item={i} />);
      case 'coffeeSpecial': return coffeeSpecials.map((i) => <SigCard key={i.name} item={i} />);
      case 'chocolate': return hotChocolates.map((i) => <MenuItemRow key={i.name} item={i} />);
      case 'milkMugs': return milkMugs.map((i) => <SigCard key={i.name} item={i} />);
      case 'dessert': return desserts.map((i) => <MenuItemRow key={i.name} item={i} />);
      case 'fruit': return fruits.map((i) => <MenuItemRow key={i.name} item={i} />);
    }
  }

  const hoursData = [
    { day: t.monday, hours: t.monHours, isClosed: lang === 'en' ? t.monHours !== 'Closed' : t.monHours !== 'Cerrado' && t.monHours !== 'Geschlossen' && t.monHours !== 'Fermé', special: true },
    { day: t.tuesday, hours: t.tueHours, isClosed: false },
    { day: t.wednesday, hours: t.wedHours, isClosed: true },
    { day: t.thursday, hours: t.thuHours, isClosed: true },
    { day: t.friday, hours: t.friHours, isClosed: true },
    { day: t.saturday, hours: t.satHours, isClosed: true },
    { day: t.sunday, hours: t.sunHours, isClosed: true },
  ];

  const today = new Date().getDay();
  const dayMap = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f1ec', fontFamily: '\'Cormorant Garamond\', Georgia, serif' }}>
      {/* HEADER */}
      <div style={{
        background: '#1a1a1a',
        padding: '2rem 1.5rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>
        <img
          src="/logo.png"
          alt="ZOE Logo"
          style={{ height: '90px', margin: '0 auto 0.75rem', display: 'block', filter: 'brightness(1)' }}
        />
        <p style={{ color: '#c8a97e', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', margin: 0 }}>
          {t.tagline}
        </p>
      </div>

      {/* MAIN CATEGORY NAV */}
      <div className="sticky-nav">
        <div className="tabs-scroll" style={{ display: 'flex', justifyContent: 'center', padding: '0 0.5rem' }}>
          {mainCategories.map((cat) => (
            <button
              key={cat.id}
              className={`category-tab ${mainCat === cat.id ? 'active' : ''}`}
              onClick={() => setMainCat(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '1.5rem 1.25rem 3rem' }}>

        {/* BAR */}
        {mainCat === 'bar' && (
          <>
            {renderTabs(BAR_TABS, barTab, setBarTab)}
            <div>{renderBarContent()}</div>
            {(barTab === 'aperitifs' || barTab === 'amari') && (
              <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#999', marginTop: '1rem', fontStyle: 'italic' }}>
                {t.correctionFee}
              </p>
            )}
          </>
        )}

        {/* COCKTAILS */}
        {mainCat === 'cocktails' && (
          <>
            {renderTabs(COCKTAIL_TABS, cocktailTab, setCocktailTab)}
            {renderCocktailContent()}
          </>
        )}

        {/* SPIRITS */}
        {mainCat === 'spirits' && (
          <>
            {renderTabs(SPIRITS_TABS, spiritsTab, setSpiritsTab)}
            {renderSpiritsContent()}
          </>
        )}

        {/* WINE */}
        {mainCat === 'wine' && (
          <>
            {renderTabs(WINE_TABS, wineTab, setWineTab)}
            {renderWineContent()}
          </>
        )}

        {/* FOOD */}
        {mainCat === 'food' && (
          <>
            {renderTabs(FOOD_TABS, foodTab, setFoodTab)}
            {renderFoodContent()}
          </>
        )}

        {/* COFFEE & DESSERT */}
        {mainCat === 'coffee' && (
          <>
            {renderTabs(COFFEE_TABS, coffeeTab, setCoffeeTab)}
            {renderCoffeeContent()}
          </>
        )}

      </div>

      {/* FOOTER */}
      <div style={{ background: '#1a1a1a', padding: '2.5rem 1.5rem', color: '#f4f1ec' }}>

        {/* HOURS */}
        <div style={{ maxWidth: '480px', margin: '0 auto 2.5rem' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.1rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8a97e', marginBottom: '1.5rem', fontWeight: 400 }}>
            {t.openingHours}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              { day: t.monday, hours: t.monHours, open: true, note: '' },
              { day: t.tuesday, hours: t.tueHours, open: false, note: '' },
              { day: t.wednesday, hours: t.wedHours, open: true, note: '' },
              { day: t.thursday, hours: t.thuHours, open: true, note: '' },
              { day: t.friday, hours: t.friHours, open: true, note: '' },
              { day: t.saturday, hours: t.satHours, open: true, note: '' },
              { day: t.sunday, hours: t.sunHours, open: true, note: '' },
            ].map((row, idx) => {
              const isToday = today === (idx === 0 ? 1 : idx === 1 ? 2 : idx + 2 === 8 ? 0 : idx + 2);
              return (
                <div key={row.day} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '2px',
                  background: isToday ? 'rgba(200,169,126,0.12)' : 'transparent',
                  borderLeft: isToday ? '2px solid #c8a97e' : '2px solid transparent',
                }}>
                  <span style={{
                    fontSize: '0.9rem',
                    letterSpacing: '0.05em',
                    color: isToday ? '#c8a97e' : '#f4f1ec',
                    fontWeight: isToday ? 600 : 400,
                  }}>{row.day}</span>
                  <span style={{
                    fontSize: '0.85rem',
                    color: row.open ? (isToday ? '#c8a97e' : '#6fa3c8') : '#666',
                    fontStyle: row.open ? 'normal' : 'italic',
                  }}>
                    {row.hours}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(200,169,126,0.2)', margin: '0 auto 2rem', maxWidth: '300px' }} />

        {/* SOCIAL BUTTONS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '380px', margin: '0 auto 2rem' }}>
          <a
            href="https://www.instagram.com/zoepremiumbar/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn social-btn-instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            {t.followUs}
          </a>

          <a
            href="https://wa.me/393280000000"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn social-btn-whatsapp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            {t.contactUs}
          </a>

          <a
            href="https://g.page/r/zoepremiumbar/review"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn social-btn-review"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#c8a97e" stroke="#c8a97e" strokeWidth="1.5" />
            </svg>
            {t.leaveReview}
          </a>
        </div>

        <p style={{ textAlign: 'center', fontSize: '0.7rem', color: '#555', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          © ZOE Premium Bar & Restaurant
        </p>
      </div>
    </div>
  );
}
