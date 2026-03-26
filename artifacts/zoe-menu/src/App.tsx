import React, { useState, useRef, useEffect } from 'react';
import { Language, visibleLanguages, langLabels, translations, Translation } from './data/translations';
import {
  softDrinks, beers, craftBeers, draftBeers, aperitifs, amari,
  signatureCocktails, mocktails,
  ginTonics, vodkaTonics, rums, whiskeys, grappas, tequilas,
  redWines, whiteWines, sparkling,
  coffees, coffeeSpecials, hotChocolates, milkMugs, desserts, fruits,
  snacks, bruschette, pinse, taglieri,
  MenuItem, WineItem, SignatureCocktail,
} from './data/menuData';

// ─── MODAL ──────────────────────────────────────────────────────
interface ModalData { name: string; description?: string; image?: string; }
function ServingModal({ data, t, onClose }: { data: ModalData; t: Translation; onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <div className="modal-title-small">{t.servingGuide}</div>
            <div className="modal-name">{data.name}</div>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          {data.image ? (
            <img src={data.image} alt={data.name} className="modal-photo" />
          ) : (
            <div className="modal-img-placeholder">
              <span className="placeholder-icon">🍹</span>
              <span>{t.comingSoon}</span>
            </div>
          )}
          {data.description && (
            <div className="modal-ingredients">{data.description}</div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── INFO ICON SVG ───────────────────────────────────────────────
function InfoIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

// ─── ITEM ROW (info icon on LEFT, optional) ───────────────────────
function ItemRow({ item, onInfo }: { item: MenuItem; onInfo?: () => void }) {
  return (
    <div className="item-row">
      {onInfo ? (
        <button className="info-btn" onClick={onInfo} title="Informazioni" aria-label="Info">
          <InfoIcon />
        </button>
      ) : (
        <div className="info-spacer" />
      )}
      <div className="item-left">
        <span className="item-name">{item.name}</span>
        {item.note && <span className="item-badge">{item.note}</span>}
      </div>
      <div className="item-right">
        {item.price && <span className="item-price">{item.price}</span>}
      </div>
    </div>
  );
}

// ─── SIGNATURE CARD (info icon on LEFT, optional) ─────────────────
function SigCard({ item, lang, onInfo }: { item: SignatureCocktail; lang: Language; onInfo?: () => void }) {
  const desc = item.descriptions[lang];
  return (
    <div className="sig-card">
      {onInfo ? (
        <button className="info-btn sig-info-btn" onClick={onInfo} title="Informazioni" aria-label="Info">
          <InfoIcon />
        </button>
      ) : (
        <div className="info-spacer" />
      )}
      <div className="sig-body">
        <div className="sig-name">{item.name}</div>
        {desc && <div className="sig-ingredients">{desc}</div>}
      </div>
      <span className="sig-price">{item.price}</span>
    </div>
  );
}

// ─── WINE ROW ────────────────────────────────────────────────────
function WineRow({ item }: { item: WineItem }) {
  return (
    <div className="wine-row">
      <div className="wine-name">{item.name}</div>
      <div className="wine-price-glass">{item.priceGlass || '—'}</div>
      <div className="wine-price-bottle">{item.priceBottle || '—'}</div>
    </div>
  );
}

// ─── SECTION HEADER ──────────────────────────────────────────────
function SecHeader({ title, note }: { title: string; note?: string }) {
  return (
    <div className="sec-header">
      <div className="sec-rule" />
      <h2 className="sec-title">{title}</h2>
      {note && <p className="sec-note">{note}</p>}
      <div className="sec-rule" />
    </div>
  );
}

// ─── SUB TABS ────────────────────────────────────────────────────
function SubTabs({ tabs, active, setActive }: {
  tabs: { key: string; label: string }[];
  active: string;
  setActive: (k: string) => void;
}) {
  return (
    <div className="sub-tabs-wrap">
      <div className="sub-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`sub-tab ${active === tab.key ? 'active' : ''}`}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── LANGUAGE PICKER DROPDOWN ─────────────────────────────────────
function LangPicker({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div className="lang-picker" ref={ref}>
      <button className="lang-trigger" onClick={() => setOpen((v) => !v)} aria-label="Change language">
        {langLabels[lang]}
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '4px', opacity: 0.7 }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="lang-dropdown">
          {visibleLanguages.map((l) => (
            <button
              key={l}
              className={`lang-option ${lang === l ? 'active' : ''}`}
              onClick={() => { setLang(l); setOpen(false); }}
            >
              {langLabels[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────
type MainCat = 'bar' | 'cocktails' | 'spirits' | 'wine' | 'food' | 'coffee';

function SpiritsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="6" width="20" height="4" rx="2" fill="currentColor" opacity="0.9"/>
      <path d="M16 10 L12 28 Q11 32 14 34 L20 36 L20 42 L28 42 L28 36 L34 34 Q37 32 36 28 L32 10 Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M16 10 L32 10 L36 28 Q37 32 34 34 L14 34 Q11 32 12 28 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M13 22 Q20 25 35 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <line x1="20" y1="36" x2="28" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="18" y1="42" x2="30" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

const CATS: { id: MainCat; icon: React.ReactNode; labelKey: keyof Translation }[] = [
  { id: 'bar',      icon: '🍸', labelKey: 'cat_bar' },
  { id: 'cocktails', icon: '🍹', labelKey: 'cat_cocktails' },
  { id: 'spirits',  icon: <SpiritsIcon />, labelKey: 'cat_spirits' },
  { id: 'wine',     icon: '🍷', labelKey: 'cat_wine' },
  { id: 'food',     icon: '🍽️', labelKey: 'cat_food' },
  { id: 'coffee',   icon: '☕', labelKey: 'cat_coffee' },
];

export default function App() {
  const [lang, setLang] = useState<Language>('it');
  const t = translations[lang];

  const [mainCat, setMainCat] = useState<MainCat>('bar');
  const [subKey, setSubKey] = useState<Record<MainCat, string>>({
    bar: 'softDrinks',
    cocktails: 'signature',
    spirits: 'gin',
    wine: 'red',
    food: 'snacks',
    coffee: 'coffee',
  });
  const [modal, setModal] = useState<ModalData | null>(null);

  function setSubTab(key: string) {
    setSubKey((prev) => ({ ...prev, [mainCat]: key }));
  }

  function openModal(data: ModalData) { setModal(data); }
  function closeModal() { setModal(null); }

  const subTabsMap: Record<MainCat, { key: string; label: string }[]> = {
    bar: [
      { key: 'softDrinks', label: t.sub_softDrinks },
      { key: 'beers', label: t.sub_beers },
      { key: 'craftBeers', label: t.sub_craftBeers },
      { key: 'draftBeers', label: t.sub_draftBeers },
      { key: 'aperitifs', label: t.sub_aperitifs },
      { key: 'amari', label: t.sub_amari },
    ],
    cocktails: [
      { key: 'signature', label: t.sub_signature },
      { key: 'mocktails', label: t.sub_mocktails },
    ],
    spirits: [
      { key: 'gin', label: t.sub_gin },
      { key: 'vodka', label: t.sub_vodka },
      { key: 'rum', label: t.sub_rum },
      { key: 'whiskey', label: t.sub_whiskey },
      { key: 'grappa', label: t.sub_grappa },
      { key: 'tequila', label: t.sub_tequila },
    ],
    wine: [
      { key: 'red', label: t.sub_red },
      { key: 'white', label: t.sub_white },
      { key: 'sparkling', label: t.sub_sparkling },
    ],
    food: [
      { key: 'snacks', label: t.sub_snacks },
      { key: 'bruschette', label: t.sub_bruschette },
      { key: 'pinse', label: t.sub_pinse },
      { key: 'taglieri', label: t.sub_taglieri },
    ],
    coffee: [
      { key: 'coffee', label: t.sub_coffee },
      { key: 'specialCoffee', label: t.sub_specialCoffee },
      { key: 'hotChoc', label: t.sub_hotChoc },
      { key: 'milkMugs', label: t.sub_milkMugs },
      { key: 'dessert', label: t.sub_dessert },
      { key: 'fruit', label: t.sub_fruit },
    ],
  };

  const currentSub = subKey[mainCat];

  function handleCatChange(cat: MainCat) {
    setMainCat(cat);
  }

  function renderContent() {
    // BAR — no info icons
    if (mainCat === 'bar') {
      const secTitle = subTabsMap.bar.find((s) => s.key === currentSub)?.label || '';
      if (currentSub === 'softDrinks') return (
        <><SecHeader title={secTitle} />
          {softDrinks.map((i) => <ItemRow key={i.name} item={i} />)}</>
      );
      if (currentSub === 'beers') return (
        <><SecHeader title={secTitle} />
          {beers.map((i) => <ItemRow key={i.name} item={i} />)}</>
      );
      if (currentSub === 'craftBeers') return (
        <><SecHeader title={secTitle} />
          {craftBeers.map((i) => <ItemRow key={i.name} item={i} />)}</>
      );
      if (currentSub === 'draftBeers') return (
        <><SecHeader title={secTitle} />
          {draftBeers.map((i) => <ItemRow key={i.name} item={i} />)}</>
      );
      if (currentSub === 'aperitifs') return (
        <><SecHeader title={secTitle} note={t.correctionFee} />
          {aperitifs.map((i) => <ItemRow key={i.name} item={i} />)}</>
      );
      if (currentSub === 'amari') return (
        <><SecHeader title={secTitle} note={t.correctionFee} />
          {amari.map((i) => <ItemRow key={i.name} item={i} />)}</>
      );
    }

    // COCKTAILS — keep info icons
    if (mainCat === 'cocktails') {
      if (currentSub === 'signature') return (
        <>
          <SecHeader title={subTabsMap.cocktails[0].label} />
          <p className="small-note">{t.ibaNotes} &nbsp;·&nbsp; {t.premiumIba}</p>
          {signatureCocktails.map((i) => (
            <SigCard key={i.name} item={i} lang={lang} onInfo={() => openModal({ name: i.name, description: i.descriptions[lang] })} />
          ))}
          <p className="small-note" style={{ marginTop: '1.5rem' }}>{t.signatureNote}</p>
        </>
      );
      if (currentSub === 'mocktails') return (
        <>
          <SecHeader title={subTabsMap.cocktails[1].label} />
          {mocktails.map((i) => (
            <SigCard key={i.name} item={i} lang={lang} onInfo={() => openModal({ name: i.name, description: i.descriptions[lang] })} />
          ))}
        </>
      );
    }

    // SPIRITS — no info icons
    if (mainCat === 'spirits') {
      const secTitle = subTabsMap.spirits.find((s) => s.key === currentSub)?.label || '';
      const lists: Record<string, MenuItem[]> = {
        gin: ginTonics, vodka: vodkaTonics, rum: rums,
        whiskey: whiskeys, grappa: grappas, tequila: tequilas,
      };
      const items = lists[currentSub] || [];
      return (
        <>
          <SecHeader title={secTitle} />
          {items.map((i) => <ItemRow key={i.name} item={i} />)}
        </>
      );
    }

    // WINE — no info icons (WineRow)
    if (mainCat === 'wine') {
      const secTitle = subTabsMap.wine.find((s) => s.key === currentSub)?.label || '';
      const lists: Record<string, WineItem[]> = { red: redWines, white: whiteWines, sparkling };
      const items = lists[currentSub] || [];
      return (
        <>
          <SecHeader title={secTitle} />
          <div className="wine-header">
            <span className="wine-header-label"></span>
            <span className="wine-header-label">{t.glass}</span>
            <span className="wine-header-label">{t.bottle}</span>
          </div>
          {items.map((i) => <WineRow key={i.name} item={i} />)}
        </>
      );
    }

    // FOOD
    if (mainCat === 'food') {
      if (currentSub === 'snacks') return (
        <>
          <SecHeader title={t.sub_snacks} />
          {snacks.map((i) => <ItemRow key={i.name} item={i} />)}
        </>
      );
      if (currentSub === 'bruschette') return (
        <>
          <SecHeader title={t.sub_bruschette} note="2 pezzi" />
          {bruschette.map((i) => (
            <ItemRow key={i.name} item={i} onInfo={() => openModal({ name: i.name })} />
          ))}
        </>
      );
      if (currentSub === 'pinse') return (
        <>
          <SecHeader title={t.sub_pinse} />
          {pinse.map((i) => (
            <SigCard key={i.name} item={i} lang={lang} onInfo={() => openModal({ name: i.name, description: i.descriptions[lang] })} />
          ))}
        </>
      );
      if (currentSub === 'taglieri') return (
        <>
          <SecHeader title={t.sub_taglieri} />
          <p className="taglieri-note">{t.taiglieriNote}</p>
          {taglieri.map((i) => <ItemRow key={i.name} item={i} />)}
        </>
      );
    }

    // COFFEE — coffees / hotChoc / fruit: no icons; specials / milkMugs: icons
    if (mainCat === 'coffee') {
      const secTitle = subTabsMap.coffee.find((s) => s.key === currentSub)?.label || '';
      const coffeeNote = <p className="coffee-hours-note">{t.coffeeHoursNote}</p>;

      if (currentSub === 'coffee') return (
        <>{coffeeNote}<SecHeader title={secTitle} />
          {coffees.map((i) => <ItemRow key={i.name} item={i} />)}</>
      );
      if (currentSub === 'hotChoc') return (
        <>{coffeeNote}<SecHeader title={secTitle} />
          {hotChocolates.map((i) => <ItemRow key={i.name} item={i} />)}</>
      );
      if (currentSub === 'fruit') return (
        <>{coffeeNote}<SecHeader title={secTitle} />
          {fruits.map((i) => <ItemRow key={i.name} item={i} />)}</>
      );
      if (currentSub === 'dessert') return (
        <>{coffeeNote}<SecHeader title={secTitle} />
          {desserts.map((i) => <ItemRow key={i.name} item={i} onInfo={() => openModal({ name: i.name })} />)}</>
      );
      if (currentSub === 'specialCoffee') return (
        <>{coffeeNote}<SecHeader title={secTitle} />
          {coffeeSpecials.map((i) => (
            <SigCard key={i.name} item={i} lang={lang} onInfo={() => openModal({ name: i.name, description: i.descriptions[lang] })} />
          ))}</>
      );
      if (currentSub === 'milkMugs') return (
        <>{coffeeNote}<SecHeader title={secTitle} />
          {milkMugs.map((i) => (
            <SigCard key={i.name} item={i} lang={lang} onInfo={() => openModal({ name: i.name, description: i.descriptions[lang], image: i.image })} />
          ))}</>
      );
    }

    return null;
  }

  // Hours data
  const today = new Date().getDay();
  const hoursRows = [
    { key: 'mon', day: t.monday, hours: t.monHours, open: true, dayIndex: 1 },
    { key: 'tue', day: t.tuesday, hours: t.tueHours, open: false, dayIndex: 2 },
    { key: 'wed', day: t.wednesday, hours: t.wedHours, open: true, dayIndex: 3 },
    { key: 'thu', day: t.thursday, hours: t.thuHours, open: true, dayIndex: 4 },
    { key: 'fri', day: t.friday, hours: t.friHours, open: true, dayIndex: 5 },
    { key: 'sat', day: t.saturday, hours: t.satHours, open: true, dayIndex: 6 },
    { key: 'sun', day: t.sunday, hours: t.sunHours, open: true, dayIndex: 0 },
  ];

  return (
    <>
      {/* MODAL */}
      {modal && <ServingModal data={modal} t={t} onClose={closeModal} />}

      {/* HEADER */}
      <div className="header">
        <div className="header-bg" />
        <LangPicker lang={lang} setLang={setLang} />
        <img src="/logo.png" alt="ZOE" className="header-logo" />
        <p className="header-tagline">{t.tagline}</p>
      </div>

      {/* CATEGORY GRID + SUB TABS (sticky) */}
      <div className="sticky-wrap">
        <div className="category-grid">
          {CATS.map((cat) => (
            <button
              key={cat.id}
              className={`cat-btn ${mainCat === cat.id ? 'active' : ''}`}
              onClick={() => handleCatChange(cat.id)}
            >
              <span className="cat-icon">{cat.icon}</span>
              <span className="cat-label">{t[cat.labelKey] as string}</span>
            </button>
          ))}
        </div>
        <SubTabs
          tabs={subTabsMap[mainCat]}
          active={subKey[mainCat]}
          setActive={setSubTab}
        />
      </div>

      {/* CONTENT */}
      <div className="content-area" key={`${mainCat}-${subKey[mainCat]}`}>
        {renderContent()}
      </div>

      {/* FOOTER */}
      <div className="footer">
        <p className="footer-section-title">{t.openingHours}</p>
        <div className="hours-grid">
          {hoursRows.map((row) => (
            <div key={row.key} className={`hours-row ${today === row.dayIndex ? 'today' : ''}`}>
              <span className="hours-day">{row.day}</span>
              <span className={`hours-time ${!row.open ? 'closed' : ''}`}>{row.hours}</span>
            </div>
          ))}
        </div>
        <p className="small-note" style={{ color: 'rgba(244,241,236,0.35)', marginBottom: '1.5rem' }}>{t.tableService}</p>

        <hr className="footer-rule" />

        <div className="social-btns">
          <a href="https://www.instagram.com/zoepremiumbar" target="_blank" rel="noopener noreferrer" className="social-btn social-instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            {t.followUs}
          </a>
          <a href="https://wa.me/393275845006" target="_blank" rel="noopener noreferrer" className="social-btn social-whatsapp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            {t.contactUs}
          </a>
          <a href="https://www.google.com/search?sca_esv=0693a25b4e112fe7&q=zoepremium+bar&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOU1H1kqhZ06tnsIXfm3CDVMBnPbtGsEsCEx4Si143STTzd1UAswU9Q_9MJcmwV2n1Z6XbKA%3D&uds=ALYpb_mM1P_6lpjjfowRxWEKPgkk8GFlb5q-DBThKe8ZQ4HuClR6nVCuD0MHXkrL-1hUnbFCidzr2HNKDNV_IB1Bqo7PwvQwxyuon7N37V4q6fpgKiPCLMI&sa=X&ved=2ahUKEwij0-ChlL6TAxVOhf0HHZiYBdAQ3PALegQIGhAE" target="_blank" rel="noopener noreferrer" className="social-btn social-review">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="var(--gold)" />
            </svg>
            {t.leaveReview}
          </a>
        </div>

        <div className="footer-address">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, opacity: 0.6 }}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <div>
            <div>Via Funara lato Padre Pio 5/7 · 81054 San Prisco (CE)</div>
            <div className="footer-address-sub">Affianco all'uscita San Prisco della Variante Capua–Maddaloni</div>
          </div>
        </div>

        <p className="footer-copy">© ZOE Premium Bar & Restaurant</p>
      </div>
    </>
  );
}
