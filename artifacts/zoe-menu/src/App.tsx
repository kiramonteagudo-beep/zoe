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
  const btnRef = useRef<HTMLButtonElement>(null);
  const [dropPos, setDropPos] = useState({ top: 0, right: 0 });

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (btnRef.current && !btnRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  function handleOpen() {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setDropPos({
        top: rect.bottom + 6,
        right: window.innerWidth - rect.right,
      });
    }
    setOpen((v) => !v);
  }

  return (
    <>
      <button ref={btnRef} className="lang-trigger" onClick={handleOpen} aria-label="Change language">
        {langLabels[lang]}
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '4px', opacity: 0.7 }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div
          className="lang-dropdown"
          style={{ position: 'fixed', top: dropPos.top, right: dropPos.right, zIndex: 9999 }}
          onMouseDown={(e) => e.stopPropagation()}
        >
          {visibleLanguages.map((l) => (
            <button
              key={l}
              className={`lang-option ${lang === l ? 'active' : ''}`}
              onMouseDown={() => { setLang(l); setOpen(false); }}
            >
              {langLabels[l]}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

// ─── BOTTOM PHOTO CAROUSEL ───────────────────────────────────────
const GALLERY_PHOTOS = [
  '/gallery/g1.jpg',
  '/gallery/g2.jpg',
  '/gallery/g3.jpg',
  '/gallery/g4.jpg',
  '/gallery/g5.jpg',
  '/gallery/g6.jpg',
  '/gallery/g7.jpg',
  '/gallery/g8.jpg',
  '/gallery/g9.jpg',
  '/gallery/g10.jpg',
  '/gallery/g11.jpg',
  '/gallery/g12.jpg',
];

function BottomCarousel() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [lbIdx, setLbIdx] = useState<number | null>(null); // lightbox
  const total = GALLERY_PHOTOS.length;
  const touchX = useRef(0);
  const lbTouchX = useRef(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  function advance() { setDir(1); setIdx((i) => (i + 1) % total); }

  function resetTimer() {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(advance, 3500);
  }

  useEffect(() => {
    timer.current = setInterval(advance, 3500);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  // pause timer when lightbox is open
  useEffect(() => {
    if (lbIdx !== null) {
      if (timer.current) clearInterval(timer.current);
    } else {
      resetTimer();
    }
  }, [lbIdx !== null]);

  function handlePrev() { setDir(-1); setIdx((i) => (i - 1 + total) % total); resetTimer(); }
  function handleNext() { setDir(1);  setIdx((i) => (i + 1) % total); resetTimer(); }

  function lbPrev() { setLbIdx((i) => ((i ?? 0) - 1 + total) % total); }
  function lbNext() { setLbIdx((i) => ((i ?? 0) + 1) % total); }

  function onTouchStart(e: React.TouchEvent) { touchX.current = e.touches[0].clientX; }
  function onTouchEnd(e: React.TouchEvent) {
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx < -40) handleNext();
    else if (dx > 40) handlePrev();
  }

  function lbTouchStart(e: React.TouchEvent) { lbTouchX.current = e.touches[0].clientX; }
  function lbTouchEnd(e: React.TouchEvent) {
    const dx = e.changedTouches[0].clientX - lbTouchX.current;
    if (dx < -40) lbNext();
    else if (dx > 40) lbPrev();
  }

  function slideClass(i: number) {
    const rel = (i - idx + total) % total;
    if (rel === 0) return 'bc-slide bc-current';
    if (rel === 1) return 'bc-slide bc-next';
    if (rel === total - 1) return 'bc-slide bc-prev';
    return dir > 0 ? 'bc-slide bc-far-right' : 'bc-slide bc-far-left';
  }

  return (
    <>
      <div className="bc-wrapper">
        <button className="bc-btn" onClick={handlePrev} aria-label="Previous">&#8249;</button>
        <div className="bc-viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {GALLERY_PHOTOS.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`ZOE ${i + 1}`}
              className={slideClass(i)}
              onClick={i === idx ? () => setLbIdx(i) : undefined}
              style={i === idx ? { cursor: 'zoom-in' } : undefined}
            />
          ))}
        </div>
        <button className="bc-btn" onClick={handleNext} aria-label="Next">&#8250;</button>
      </div>

      {/* LIGHTBOX */}
      {lbIdx !== null && (
        <div className="lb-overlay" onMouseDown={() => setLbIdx(null)}>
          <div
            className="lb-box"
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={lbTouchStart}
            onTouchEnd={lbTouchEnd}
          >
            <button className="lb-close" onClick={() => setLbIdx(null)}>✕</button>
            <img
              src={GALLERY_PHOTOS[lbIdx]}
              alt={`ZOE ${lbIdx + 1}`}
              className="lb-img"
            />
            <button className="lb-arrow lb-arrow-prev" onClick={lbPrev}>&#8249;</button>
            <button className="lb-arrow lb-arrow-next" onClick={lbNext}>&#8250;</button>
            <p className="lb-counter">{lbIdx + 1} / {total}</p>
          </div>
        </div>
      )}
    </>
  );
}

// ─── EVENTI CAROUSEL ─────────────────────────────────────────────
// Drop photo paths here once the user provides them:
const EVENTI_PHOTOS: { src: string; caption?: string }[] = [
  { src: '/eventi/e1.jpg' },
  { src: '/eventi/e2.jpg' },
  { src: '/eventi/e3.jpg' },
  { src: '/eventi/e4.jpg' },
  { src: '/eventi/e5.jpg' },
  { src: '/eventi/e6.jpg' },
  { src: '/eventi/e7.jpg' },
  { src: '/eventi/e8.jpg' },
  { src: '/eventi/e9.jpg' },
  { src: '/eventi/e10.jpg' },
  { src: '/eventi/e11.jpg' },
  { src: '/eventi/e12.jpg' },
  { src: '/eventi/e13.jpg' },
  { src: '/eventi/e14.jpg' },
  { src: '/eventi/e15.jpg' },
  { src: '/eventi/e16.jpg' },
  { src: '/eventi/e17.jpg' },
];

function EventiCarousel({ onClose }: { onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const touchX = useRef(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = EVENTI_PHOTOS.length;

  function advance() { setDir(1); setIdx((i) => (i + 1) % total); }

  function resetTimer() {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(advance, 4500);
  }

  useEffect(() => {
    timer.current = setInterval(advance, 4500);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  function handlePrev() { setDir(-1); setIdx((i) => (i - 1 + total) % total); resetTimer(); }
  function handleNext() { setDir(1);  setIdx((i) => (i + 1) % total); resetTimer(); }

  function onTouchStart(e: React.TouchEvent) { touchX.current = e.touches[0].clientX; }
  function onTouchEnd(e: React.TouchEvent) {
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx < -40) handleNext();
    else if (dx > 40) handlePrev();
  }

  function slideClass(i: number) {
    const rel = (i - idx + total) % total;
    if (rel === 0) return 'ev-slide ev-current';
    if (rel === 1) return 'ev-slide ev-next';
    if (rel === total - 1) return 'ev-slide ev-prev';
    return dir > 0 ? 'ev-slide ev-far-right' : 'ev-slide ev-far-left';
  }

  return (
    <div className="eventi-overlay" onMouseDown={onClose}>
      <div
        className="eventi-modal"
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button className="eventi-close" onClick={onClose}>✕</button>
        <p className="eventi-title">EVENTI</p>

        {total === 0 ? (
          <div className="eventi-placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(200,169,126,0.5)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <p className="eventi-placeholder-text">Le foto degli eventi sono in arrivo…</p>
          </div>
        ) : (
          <>
            {/* slide track */}
            <div className="ev-track">
              {EVENTI_PHOTOS.map((p, i) => (
                <img key={p.src} src={p.src} alt={`Evento ${i + 1}`} className={slideClass(i)} />
              ))}
            </div>

            {/* arrows */}
            <button className="eventi-arrow eventi-prev" onClick={handlePrev}>&#8249;</button>
            <button className="eventi-arrow eventi-next" onClick={handleNext}>&#8250;</button>

            {/* counter */}
            <p className="ev-counter">{idx + 1} / {total}</p>
          </>
        )}
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────
type MainCat = 'bar' | 'cocktails' | 'spirits' | 'wine' | 'food' | 'coffee';

const ip = {
  width: 30, height: 30, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'white', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
};

// Bar — simple tumbler
const BarIcon = () => (
  <svg {...ip}>
    <path d="M5 8 H19 L18 21 H6 Z" />
  </svg>
);

// Cocktails — martini glass with olive
const CocktailsIcon = () => (
  <svg {...ip}>
    <line x1="3" y1="4" x2="21" y2="4" />
    <line x1="3" y1="4" x2="12" y2="15" />
    <line x1="21" y1="4" x2="12" y2="15" />
    <line x1="12" y1="15" x2="12" y2="21" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <circle cx="12" cy="8" r="1" fill="white" stroke="none" />
  </svg>
);

// Spirits — whiskey tumbler
const SpiritsIcon = () => (
  <svg {...ip}>
    <path d="M4 8 H20 L19 20 Q19 21 18 21 H6 Q5 21 5 20 Z" />
    <line x1="5" y1="14" x2="19" y2="14" />
  </svg>
);

// Wine — wine glass
const WineIcon = () => (
  <svg {...ip}>
    <line x1="6" y1="3" x2="18" y2="3" />
    <path d="M6 3 Q4 13 12 17 Q20 13 18 3" />
    <line x1="12" y1="17" x2="12" y2="22" />
    <line x1="8" y1="22" x2="16" y2="22" />
  </svg>
);

// Food — cloche
const FoodIcon = () => (
  <svg {...ip}>
    <path d="M2 15 Q2 6 12 6 Q22 6 22 15" />
    <line x1="2" y1="15" x2="22" y2="15" />
    <line x1="1" y1="18" x2="23" y2="18" />
    <line x1="12" y1="6" x2="12" y2="4" />
    <line x1="10" y1="4" x2="14" y2="4" />
  </svg>
);

// Coffee — espresso cup
const CoffeeIcon = () => (
  <svg {...ip}>
    <path d="M5 11 L6 19 Q6 21 8 21 H16 Q18 21 18 19 L19 11 Z" />
    <path d="M19 13 Q23 13 23 16 Q23 19 19 19" />
    <path d="M3 22 Q12 24 21 22" />
    <path d="M9 8 Q10 6 9 4" />
    <path d="M15 8 Q16 6 15 4" />
  </svg>
);

const CATS: { id: MainCat; icon: React.ReactNode; labelKey: keyof Translation }[] = [
  { id: 'bar',       icon: <BarIcon />,       labelKey: 'cat_bar' },
  { id: 'cocktails', icon: <CocktailsIcon />, labelKey: 'cat_cocktails' },
  { id: 'spirits',   icon: <SpiritsIcon />,   labelKey: 'cat_spirits' },
  { id: 'wine',      icon: <WineIcon />,      labelKey: 'cat_wine' },
  { id: 'food',      icon: <FoodIcon />,      labelKey: 'cat_food' },
  { id: 'coffee',    icon: <CoffeeIcon />,    labelKey: 'cat_coffee' },
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
  const [eventiOpen, setEventiOpen] = useState(false);

  function setSubTab(key: string) {
    setSubKey((prev) => ({ ...prev, [mainCat]: key }));
  }

  function openModal(data: ModalData) { setModal(data); }
  function closeModal() { setModal(null); }

  const subTabsMap: Record<MainCat, { key: string; label: string }[]> = {
    bar: [
      { key: 'softDrinks', label: t.sub_softDrinks },
      { key: 'aperitifs', label: t.sub_aperitifs },
      { key: 'beers', label: t.sub_beers },
      { key: 'craftBeers', label: t.sub_craftBeers },
      { key: 'draftBeers', label: t.sub_draftBeers },
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
      { key: 'amari', label: t.sub_amari },
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
        whiskey: whiskeys, grappa: grappas, tequila: tequilas, amari,
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
      {/* MODALS */}
      {modal && <ServingModal data={modal} t={t} onClose={closeModal} />}
      {eventiOpen && <EventiCarousel onClose={() => setEventiOpen(false)} />}

      {/* LANGUAGE PICKER — fixed, always on top */}
      <div className="lang-bar">
        <LangPicker lang={lang} setLang={setLang} />
      </div>

      {/* HEADER */}
      <div className="header">
        <div className="header-bg" />
        <img src="/logo.png" alt="ZOE" className="header-logo" />
        <p className="header-tagline">{t.tagline}</p>
        <button className="eventi-btn" onClick={() => setEventiOpen(true)}>
          <span className="eventi-btn-diamond">◆</span> EVENTI <span className="eventi-btn-diamond">◆</span>
        </button>
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

        <BottomCarousel />

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
