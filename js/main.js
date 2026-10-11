* {
  box-sizing: border-box;
}

:root {
  --sea-1: #eefcff;
  --sea-2: #d7f5ff;
  --sea-3: #a8e8ff;
  --sea-4: #72cfff;
  --sea-5: #2aaad2;
  --sea-6: #0d5c82;
  --ink: #163847;
  --muted: #587284;
  --white: #ffffff;
  --shadow: 0 20px 50px rgba(16, 96, 130, 0.12);
  --radius: 22px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Noto Sans SC", sans-serif;
  color: var(--ink);
  background: linear-gradient(180deg, #f5fdff 0%, #eefbff 38%, #f8fdff 100%);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.66);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(13, 92, 130, 0.08);
}

.brand-box {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  min-width: 200px;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: linear-gradient(135deg, #cfefff, #8fdcff);
  color: var(--sea-6);
  font-weight: 700;
  font-size: 1.6rem;
  box-shadow: 0 10px 24px rgba(55, 178, 226, 0.16);
}

.brand-name {
  font-weight: 700;
  letter-spacing: 0.08em;
  font-size: 1.08rem;
}

.brand-box small {
  color: var(--muted);
  letter-spacing: 0.08em;
}

.top-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.45rem;
}

.nav-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.52rem 0.8rem;
  border-radius: 999px;
  font-size: 0.76rem;
  background: rgba(255,255,255,0.7);
  border: 1px solid rgba(17,58,77,0.06);
  box-shadow: 0 8px 18px rgba(18, 82, 112, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.nav-pill:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 22px rgba(18, 82, 112, 0.08);
}

.navy { background: rgba(102,152,210,0.12); }
.cyan { background: rgba(98,203,228,0.12); }
.blue { background: rgba(84,126,214,0.12); }
.sky { background: rgba(147,208,255,0.12); }
.teal { background: rgba(116,209,211,0.12); }
.ocean { background: rgba(92,183,224,0.12); }
.aqua { background: rgba(118,227,243,0.12); }
.sapphire { background: rgba(94,156,208,0.12); }
.jade { background: rgba(102,205,164,0.12); }
.mint { background: rgba(122,219,197,0.12); }
.soft { background: rgba(176,219,233,0.12); }
.cold { background: rgba(162,217,236,0.12); }
.amethyst { background: rgba(152,192,222,0.12); }
.melon { background: rgba(165,215,158,0.12); }
.foam { background: rgba(166,227,233,0.12); }
.peach { background: rgba(246,201,169,0.12); }
.mist { background: rgba(205,227,240,0.12); }
.drift { background: rgba(186,215,233,0.12); }
.lagoon { background: rgba(140,221,212,0.12); }

.hero-wrap {
  position: relative;
  min-height: 600px;
  display: grid;
  place-items: center;
  padding: 2rem 1.5rem 4rem;
  overflow: hidden;
}

.hero-backdrop {
  position: absolute;
  inset: 0;
  background-image: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2200&auto=format&fit=crop");
  background-size: cover;
  background-position: center;
  filter: saturate(1.06) brightness(0.8);
  transform: scale(1.06);
}

.hero-wrap::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(6, 28, 40, 0.15), rgba(7, 42, 59, 0.6));
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.7;
  animation: floatGlow 12s ease-in-out infinite alternate;
}

.glow-one {
  width: 340px;
  height: 340px;
  background: rgba(131, 209, 255, 0.25);
  right: 12%;
  top: 20%;
}

.glow-two {
  width: 300px;
  height: 300px;
  background: rgba(178, 236, 255, 0.2);
  left: 10%;
  bottom: 8%;
  animation-delay: 2s;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 980px;
  text-align: center;
  color: var(--white);
}

.eyebrow {
  margin: 0 0 1rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.8);
  font-size: 0.82rem;
}

.hero-content h1 {
  margin: 0;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(4rem, 8vw, 7rem);
  line-height: 0.9;
  letter-spacing: 0.04em;
  text-shadow: 0 14px 32px rgba(11, 45, 62, 0.2);
}

.lead {
  margin: 1.2rem auto 0;
  max-width: 760px;
  font-size: 1.12rem;
  line-height: 1.9;
  color: rgba(255,255,255,0.94);
}

.hero-actions {
  margin-top: 1.8rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.primary-btn,
.ghost-btn,
.page-cta,
.back-link,
.card-body a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0.8rem 1.35rem;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.primary-btn,
.page-cta {
  background: linear-gradient(135deg, var(--sea-4), var(--sea-5));
  color: var(--white);
  box-shadow: 0 18px 30px rgba(42, 170, 210, 0.2);
}

.ghost-btn,
.back-link {
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.18);
  color: var(--white);
}

.primary-btn:hover, .ghost-btn:hover, .page-cta:hover, .back-link:hover, .card-body a:hover {
  transform: translateY(-2px);
}

.hero-metrics {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2.3rem;
}

.metric-box {
  min-width: 140px;
  padding: 1rem 1.1rem;
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 18px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(10px);
}

.metric-box strong {
  display: block;
  font-size: 1.8rem;
  line-height: 1.2;
}

.metric-box span {
  color: rgba(255,255,255,0.82);
  font-size: 0.8rem;
}

.intro-panel {
  max-width: 1180px;
  margin: -2rem auto 0;
  position: relative;
  z-index: 5;
  padding: 0 1.2rem;
}

.intro-card {
  max-width: 900px;
  margin: 0 auto;
  background: rgba(255,255,255,0.85);
  border: 1px solid rgba(17,58,77,0.04);
  box-shadow: var(--shadow);
  border-radius: 28px;
  padding: 2rem 2.4rem;
}

.intro-card h2 {
  margin: 0 0 0.7rem;
  font-size: clamp(2rem, 4vw, 2.7rem);
}

.intro-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.9;
  font-size: 1.04rem;
}

.highlights,
.city-showcase {
  max-width: 1200px;
  margin: 4.5rem auto 0;
  padding: 0 1.2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.meta-label {
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--sea-5);
}

.section-header h2 {
  margin: 0.7rem 0 0;
  font-size: clamp(2.2rem, 4vw, 3rem);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
}

.feature-card {
  background: rgba(255,255,255,0.8);
  border-radius: 22px;
  padding: 1.5rem 1.4rem;
  border: 1px solid rgba(17,58,77,0.04);
  box-shadow: var(--shadow);
}

.feature-card h3 {
  margin: 0.7rem 0 0.5rem;
  font-size: 1.4rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, #deffff, #aee9ff);
  font-size: 1.6rem;
  box-shadow: inset 0 0 0 1px rgba(15,92,130,0.04);
}

.city-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;
}

.city-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 22px;
  background: rgba(255,255,255,0.86);
  border: 1px solid rgba(17,58,77,0.04);
  box-shadow: var(--shadow);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.city-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 48px rgba(13, 92, 130, 0.12);
}

.card-image {
  height: 190px;
  background-size: cover;
  background-position: center;
}

.image-haikou { background-image: url("https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop"); }
.image-sanya { background-image: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"); }
.image-sansha { background-image: url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"); }
.image-danzhou { background-image: url("https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200&auto=format&fit=crop"); }
.image-wenchang { background-image: url("https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop"); }
.image-qionghai { background-image: url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"); }
.image-wanning { background-image: url("https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop"); }
.image-dongfang { background-image: url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop"); }
.image-wuzhishan { background-image: url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"); }
.image-changjiang { background-image: url("https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1200&auto=format&fit=crop"); }
.image-baisha { background-image: url("https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop"); }
.image-lingshui { background-image: url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop"); }
.image-baoting { background-image: url("https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1200&auto=format&fit=crop"); }
.image-ledong { background-image: url("https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"); }
.image-lingao { background-image: url("https://images.unsplash.com/photo-1500336624523-d727130c3328?q=80&w=1200&auto=format&fit=crop"); }
.image-chengmai { background-image: url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop"); }
.image-dingan { background-image: url("https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1200&auto=format&fit=crop"); }
.image-tunchang { background-image: url("https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop"); }
.image-qiongzhong { background-image: url("https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop"); }

.card-body {
  padding: 1.1rem 1.05rem 1.2rem;
}

.card-tag {
  display: inline-block;
  margin-bottom: 0.7rem;
  padding: 0.42rem 0.7rem;
  border-radius: 999px;
  background: rgba(109, 211, 244, 0.14);
  color: var(--sea-6);
  font-size: 0.72rem;
  font-weight: 600;
}

.card-body h3 {
  margin: 0 0 0.5rem;
  font-size: 1.44rem;
}

.card-body p {
  margin: 0 0 1rem;
  color: var(--muted);
  line-height: 1.7;
  font-size: 0.94rem;
}

.card-body a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0.7rem 0.9rem;
  border-radius: 999px;
  background: rgba(149,221,255,0.15);
  color: var(--sea-6);
  font-weight: 600;
}

.site-footer {
  background: linear-gradient(180deg, rgba(12, 80, 116, 0.02), rgba(12, 80, 116, 0.08));
  text-align: center;
  padding: 2rem 1rem;
  color: var(--muted);
}

.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes floatGlow {
  0% { transform: translate3d(0,0,0) scale(1); }
  100% { transform: translate3d(20px,-12px,0) scale(1.08); }
}

.page-shell {
  min-height: 100vh;
}

.page-hero {
  position: relative;
  min-height: 360px;
  display: flex;
  align-items: flex-end;
  padding: 2.5rem 1.5rem;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  animation: gentleHeroFloat 18s ease-in-out infinite alternate;
}

.page-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(7, 30, 36, 0.12), rgba(7, 30, 36, 0.62));
}

.page-hero-inner {
  position: relative;
  z-index: 1;
  color: var(--white);
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.page-hero h1 {
  margin: 0;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.4rem, 5vw, 4.2rem);
  letter-spacing: 0.06em;
}

.page-hero p {
  margin: 0.55rem 0 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 1rem;
}

.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.2rem 4rem;
}

.page-grid {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(260px, 0.8fr);
  gap: 1.2rem;
}

.page-main,
.page-aside {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-block {
  background: rgba(255, 255, 255, 0.86);
  border-radius: 20px;
  border: 1px solid rgba(17, 58, 77, 0.05);
  box-shadow: var(--shadow);
  padding: 1.4rem 1.5rem;
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.info-block.visible {
  opacity: 1;
  transform: translateY(0);
}

.info-block h2,
.info-block h3 {
  margin: 0 0 0.8rem;
}

.info-block p,
.info-block li {
  color: var(--muted);
  line-height: 1.85;
}

.info-block ul {
  padding-left: 1.1rem;
  margin: 0;
}

.info-block .keyline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.7rem;
  padding: 0.35rem 0.7rem;
  background: rgba(126, 214, 255, 0.14);
  color: var(--sea-6);
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.page-aside .info-block {
  position: sticky;
  top: 90px;
}

.page-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 0.8rem;
}

@keyframes gentleHeroFloat {
  0% { transform: scale(1) translateY(0); }
  100% { transform: scale(1.02) translateY(-8px); }
}

@media (max-width: 1100px) {
  .city-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 920px) {
  .feature-grid,
  .city-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .site-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .top-nav {
    justify-content: flex-start;
  }

  .page-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .site-header {
    padding: 1rem 1rem 0.8rem;
  }

  .brand-box {
    min-width: auto;
  }

  .hero-wrap {
    min-height: 520px;
  }

  .feature-grid,
  .city-grid {
    grid-template-columns: 1fr;
  }

  .intro-card {
    padding: 1.5rem 1.1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
}
