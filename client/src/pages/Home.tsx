/* Obsidian Atelier: cinematic luxury editorial layout, asymmetrical archive rhythm, obsidian surfaces, copper signals, restrained motion. */
import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Filter,
  Search,
  Sparkles,
  X,
} from "lucide-react";

const generatedAssets = {
  monogram: "/manus-storage/pcgl-monogram_91c51d30.png",
  survival: "/manus-storage/pcgl-survival_b654def8.jpg",
  sweets: "/manus-storage/pcgl-sweets_a9a740e3.jpg",
  racing: "/manus-storage/pcgl-racing_78e05a58.jpg",
  war: "/manus-storage/pcgl-steamshare_c647265d.jpg",
};

/*
 * Windows game executable.
 *
 * Because app.exe is inside:
 * client/public/games/app.exe
 *
 * Vite serves it from:
 * /games/app.exe
 */
const GAME_DOWNLOAD_URL = "/games/app.exe";

const catalogImages = [
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1603481546238-487240415921?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1607513746994-51f730a44832?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=900&q=80",
];

const genres = [
  "All genres",
  "Action",
  "RPG",
  "Strategy",
  "Racing",
  "Cozy",
  "Horror",
];

const genreNames = [
  "Action",
  "RPG",
  "Strategy",
  "Racing",
  "Cozy",
  "Horror",
];

const names = [
  "Astral Divide",
  "Iron Orchard",
  "Neon Pilgrim",
  "Quiet Meridian",
  "Ashfall Protocol",
  "Velvet Circuit",
  "The Last Signal",
  "Morrow Vale",
  "Blackwater",
  "Orbit Run",
  "Hollow Crown",
  "Fallow Sky",
];

const descriptions = [
  "A world built for long nights and sharp choices.",
  "A considered journey through strange, beautiful places.",
  "Tactical depth wrapped in an unforgettable atmosphere.",
  "A focused experience where every detail earns its place.",
];

const originalGames = [
  {
    title: "Survive Alone",
    kicker: "ORIGINAL 01 / SURVIVAL",
    description:
      "A solitary expedition across a weather-beaten frontier where the signal is fading and every resource becomes a decision. Build a shelter, read the storm, and stay alive long enough to find the way home.",
    image: generatedAssets.survival,
    tone: "cold",
  },
  {
    title: "Candy Store",
    kicker: "ORIGINAL 02 / MANAGEMENT",
    description:
      "Turn a tiny neighborhood confectionery into a destination of wonder. Design the counter, discover signature recipes, and make every late-night customer feel like they found something rare.",
    image: generatedAssets.sweets,
    tone: "warm",
  },
  {
    title: "Velocity Club",
    kicker: "ORIGINAL 03 / RACING",
    description:
      "A precise, nocturnal racing experience built around beautifully tuned machines, wet asphalt, and the quiet ritual of finding the perfect line through the city.",
    image: generatedAssets.racing,
    tone: "copper",
  },
  {
    title: "Steam Share",
    kicker: "ORIGINAL 04 / WAR STRATEGY",
    description:
      "Lead a small unit through an industrial warzone where visibility is limited, resources are finite, and the best victory is the one that brings everyone back.",
    image: generatedAssets.war,
    tone: "olive",
  },
];

function CatalogCard({
  index,
  genre,
}: {
  index: number;
  genre: string;
}) {
  const image = catalogImages[index % catalogImages.length];

  const title =
    `${names[index % names.length]} ${
      index > 11
        ? `No. ${String(index + 1).padStart(4, "0")}`
        : ""
    }`.trim();

  const actualGenre =
    genre === "All genres"
      ? genreNames[index % genreNames.length]
      : genre;

  return (
    <article className="catalog-card">
      <div className="catalog-image-wrap">
        <img
          loading="lazy"
          src={image}
          alt={`${title} PC game artwork`}
        />

        <span className="catalog-index">
          {String(index + 1).padStart(4, "0")}
        </span>

        <button
          className="peek-button"
          aria-label={`View ${title}`}
        >
          <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="catalog-meta">
        <div>
          <span className="eyebrow">{actualGenre}</span>
          <span className="year">2026</span>
        </div>

        <h3>{title}</h3>

        <p>
          {descriptions[index % descriptions.length]}
        </p>
      </div>
    </article>
  );
}

export default function Home() {
  const [genre, setGenre] = useState("All genres");
  const [visible, setVisible] = useState(36);
  const [searchOpen, setSearchOpen] = useState(false);

  const catalog = useMemo(
    () => Array.from({ length: 1500 }, (_, index) => index),
    [],
  );

  return (
    <div className="site-shell">
      <header className="topbar">
        <a
          className="brand"
          href="#top"
          aria-label="PC Gaming Luxe home"
        >
          <img src={generatedAssets.monogram} alt="" />
          <span>PC GL / ARCHIVE</span>
        </a>

        <nav
          className="nav-links"
          aria-label="Primary navigation"
        >
          <a href="#archive">Archive</a>
          <a href="#originals">Originals</a>
          <a href="#about">About</a>
        </nav>

        <button
          className="search-trigger"
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="Search the archive"
        >
          {searchOpen ? <X size={18} /> : <Search size={18} />}
          <span>Search archive</span>
        </button>
      </header>

      {searchOpen && (
        <div className="search-panel">
          <label htmlFor="site-search">
            Search 1,500 titles
          </label>

          <input
            id="site-search"
            autoFocus
            placeholder="Try a title, mood, or genre"
          />

          <span>
            Press enter to explore the archive
          </span>
        </div>
      )}

      <main id="top">
        <section className="hero-section">
          <div className="hero-image">
            <img
              src={generatedAssets.survival}
              alt="Atmospheric PC game landscape"
            />
          </div>

          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="copper-dot" />
              PRIVATE PC GAME ARCHIVE / 2026
            </div>

            <h1>
              Enter the worlds
              <br />
              <em>worth remembering.</em>
            </h1>

            <p>
              A visual index of the PC games shaping the next era of
              play. Curated for atmosphere, craft, and the rare feeling
              of finding something new.
            </p>

            <div className="hero-actions">
              <a
                className="button button-copper"
                href="#archive"
              >
                Explore the archive
                <ArrowDownRight size={17} />
              </a>

              <a
                className="text-link"
                href="#originals"
              >
                See our originals
                <ArrowDownRight size={16} />
              </a>
            </div>
          </div>

          <div className="hero-rail">
            <span>SCROLL TO DISCOVER</span>
            <span className="rail-line" />
            <span>01 / 04</span>
          </div>
        </section>

        <section
          className="manifesto"
          id="about"
        >
          <div className="side-label">
            THE POINT OF VIEW
          </div>

          <div className="manifesto-content">
            <Sparkles
              className="spark-icon"
              size={21}
            />

            <h2>
              Not a storefront.
              <br />
              <span>A signal.</span>
            </h2>

            <p>
              PC GL is an editorial archive for the games that stay
              with you. No noise, no inflated promises—just worlds,
              ideas, and the details that make a title impossible to
              forget.
            </p>
          </div>

          <div className="manifesto-stat">
            <strong>01</strong>
            <span>
              Curated visual
              <br />
              discovery
            </span>
          </div>
        </section>

        <section
          className="archive-section"
          id="archive"
        >
          <div className="section-heading">
            <div>
              <div className="eyebrow copper-text">
                THE ARCHIVE / 001
              </div>

              <h2>
                1,500 worlds
                <br />
                <em>to get lost in.</em>
              </h2>
            </div>

            <p>
              Browse a living index of PC games across genres and
              moods. Every cover is an invitation; every title has a
              point of view.
            </p>
          </div>

          <div className="archive-toolbar">
            <div className="filter-label">
              <Filter size={15} />
              FILTER BY
            </div>

            <div className="genre-pills">
              {genres.map((item) => (
                <button
                  key={item}
                  className={
                    genre === item ? "active" : ""
                  }
                  onClick={() => {
                    setGenre(item);
                    setVisible(36);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

            <span className="result-count">
              {String(1500).padStart(4, "0")} TITLES
            </span>
          </div>

          <div className="catalog-grid">
            {catalog
              .slice(0, visible)
              .map((index) => (
                <CatalogCard
                  key={index}
                  index={index}
                  genre={genre}
                />
              ))}
          </div>

          <div className="load-more">
            <span>
              Showing {visible} of 1,500
            </span>

            <button
              className="button button-ghost"
              onClick={() =>
                setVisible(
                  Math.min(visible + 36, 1500),
                )
              }
              disabled={visible >= 1500}
            >
              {visible >= 1500
                ? "All titles loaded"
                : "Load more titles"}

              <ArrowDownRight size={17} />
            </button>
          </div>
        </section>

        <section
          className="originals-section"
          id="originals"
        >
          <div className="originals-intro">
            <div className="eyebrow copper-text">
              THE PRIVATE COLLECTION / 002
            </div>

            <h2>
              Made here.
              <br />
              <em>Shared with you.</em>
            </h2>

            <p>
              Four original concepts from our own studio—each one
              imagined as a complete world, each one ready for its
              next player.
            </p>
          </div>

          <div className="original-list">
            {originalGames.map((game, index) => (
              <article
                className={`original-card ${game.tone}`}
                key={game.title}
              >
                <div className="original-art">
                  <img
                    src={game.image}
                    alt={`${game.title} original game artwork`}
                  />

                  <span className="original-number">
                    0{index + 1}
                  </span>
                </div>

                <div className="original-info">
                  <div className="eyebrow">
                    {game.kicker}
                  </div>

                  <h3>{game.title}</h3>

                  <p>{game.description}</p>

                  {/* Real Windows EXE download */}
                  <a
                    className="button button-copper download-button"
                    href={GAME_DOWNLOAD_URL}
                    download="PC-Gaming.exe"
                  >
                    <Download size={16} />
                    Download game
                  </a>

                  <span className="file-note">
                    WINDOWS / EXE / READY TO PLAY
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="footer">
          <div className="footer-mark">
            <img
              src={generatedAssets.monogram}
              alt=""
            />
            <span>PC GL</span>
          </div>

          <p>Keep the archive close.</p>

          <div className="footer-links">
            <a href="#top">
              Back to top ↑
            </a>

            <span>
              © 2026 PC Gaming Luxe
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}