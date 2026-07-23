"use client";

import { useMemo, useState } from "react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa6";

const images = {
  box: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRGHfkJIicvxsOM5u9R67B6d5QTM396jLspbrRc0hwu3OQcRihsEzKhzJUOtvGWWr8hN0NGpKOhGA5vn0VF-HOktAtT-Gu7bB89m1wJOslewUgLivDmDw_Qo3nZWruv5tntIbk3MoTwr4ivH5m1Sk74Ll6qbZNUw4z9FwYdY9hErLoEzNShBASEcUJirr8dahcRkxEyTGeOx74LNMXpVnMHDoT3aH-8-mv8X83kIrpVSYiGuWnSyzA",
  dj: "/products/dj-basshead.png",
  graf: "/products/graf.png",
  firework: "/products/firework-frankie.png",
  truck: "/products/foodie-truck.png",
  stilt: "/products/stilt-walker-sam.png",
};

type OptionId = "single" | "bundle" | "case";

const purchaseOptions: Array<{
  id: OptionId;
  name: string;
  note: string;
  price: number;
  badge?: string;
}> = [
  {
    id: "single",
    name: "Single box",
    note: "One randomly packed character",
    price: 15.99,
  },
  {
    id: "bundle",
    name: "Bundle of 3",
    note: "Three boxes from the same display",
    price: 44.99,
    badge: "Save 6%",
  },
  {
    id: "case",
    name: "Full sealed case",
    note: "12 boxes · no duplicate standard figures",
    price: 175.99,
    badge: "Best value",
  },
];

const characters = [
  { name: "DJ Basshead", rarity: "Common", odds: "12 standard styles", image: images.dj, tone: "blue" },
  { name: "Graf", rarity: "Common", odds: "12 standard styles", image: images.graf, tone: "yellow" },
  { name: "Firework Frankie", rarity: "Common", odds: "12 standard styles", image: images.firework, tone: "coral" },
  { name: "Foodie Truck", rarity: "Rare", odds: "1 in 72 boxes", image: images.truck, tone: "dark" },
  { name: "Stilt-Walker Sam", rarity: "Secret", odds: "1 in 144 boxes", image: images.stilt, tone: "blue" },
];

const worlds = ["New & featured", "Street Party", "City Foodies", "Sound Crew", "Festival Nights", "Store pickup"];

const relatedCollections = [
  { name: "City Foodies", note: "12 characters", price: 15.99, image: images.truck, tone: "Snack squad" },
  { name: "Sound Crew", note: "Coming soon", price: 16.99, image: images.dj, tone: "Music crew" },
  { name: "Festival Nights", note: "Limited concept", price: 18.99, image: images.firework, tone: "Festival crew" },
];

function money(value: number) {
  return `$${value.toFixed(2)}`;
}

export default function Home() {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<OptionId | null>(null);
  const [selectedBox, setSelectedBox] = useState<number | "random" | null>(null);
  const [activePurchaseStep, setActivePurchaseStep] = useState<0 | 1 | 2>(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [toast, setToast] = useState("");

  const option = purchaseOptions.find((item) => item.id === selectedOption) ?? purchaseOptions[0];
  const purchaseReady = selectedOption !== null && (selectedOption !== "single" || selectedBox !== null);
  const total = useMemo(() => option.price * quantity, [option.price, quantity]);
  const cartSubtotal = useMemo(() => option.price * cartQuantity, [option.price, cartQuantity]);
  const gallery = [
    { src: images.box, alt: "Tiny Wonders Street Party blind box packaging" },
    { src: images.dj, alt: "DJ Basshead collectible figure" },
    { src: images.graf, alt: "Graf collectible figure" },
    { src: images.firework, alt: "Firework Frankie collectible figure" },
    { src: images.truck, alt: "Foodie Truck collectible figure" },
    { src: images.stilt, alt: "Stilt-Walker Sam collectible figure" },
  ];

  function notify(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2600);
  }

  function selectOption(id: OptionId) {
    setSelectedOption(id);
    setSelectedBox(null);
    setQuantity(1);
    setActivePurchaseStep(2);
  }

  function addToCart() {
    setCartQuantity((count) => count + quantity);
    setCartOpen(true);
  }

  return (
    <div className="storefront-shell">
      <div className="announcement">
        <span>Free delivery over $100</span>
        <span className="announcement-divider" />
        <span>Beirut pickup available</span>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <button className="icon-button menu-button" aria-label="Open navigation" onClick={() => notify("Menu preview")}>☰</button>
          <button className="header-search" onClick={() => notify("Search preview")} aria-label="Search Tiny Wonders">
            <span>Search Tiny Wonders</span>
            <strong aria-hidden="true">⌕</strong>
          </button>
          <a className="wordmark" href="#top" aria-label="Tiny Wonders home">
            <span>Tiny</span>
            <strong>Wonders</strong>
          </a>
          <div className="header-actions">
            <button className="text-action" onClick={() => notify("Support preview")}>Support</button>
            <button className="text-action" onClick={() => notify("Account preview")}>Account</button>
            <button
              className={`icon-button heart-button ${wishlist ? "is-active" : ""}`}
              aria-label={wishlist ? "Remove from wishlist" : "Add to wishlist"}
              aria-pressed={wishlist}
              onClick={() => {
                setWishlist((value) => !value);
                notify(wishlist ? "Removed from wishlist" : "Saved to wishlist");
              }}
            >
              {wishlist ? "♥" : "♡"}
            </button>
            <button className="bag-button" onClick={() => setCartOpen(true)} aria-label={`Open bag with ${cartQuantity} items`}>
              Bag <span>{cartQuantity}</span>
            </button>
          </div>
        </div>
      </header>

      <nav className="world-strip" aria-label="Shop Tiny Wonders collections">
        <div>
          {worlds.map((world, index) => (
            <a key={world} href={index === 0 ? "#related" : index === 1 ? "#top" : index === 5 ? "#delivery" : "#related"}>
              {world}
              {index === 0 && <span aria-hidden="true">New</span>}
            </a>
          ))}
        </div>
      </nav>

      <main id="top" className="product-page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="#top">Home</a><span>/</span><a href="#purchase">Blind boxes</a><span>/</span><strong>Street Party Series</strong>
        </nav>

        <div className="gallery-column">
        <section className="product-gallery" aria-label="Product gallery">
          <div className="gallery-stage">
            <button className="gallery-zoom-trigger" onClick={() => setZoomOpen(true)} aria-label="Open larger product image">
              <img src={gallery[galleryIndex].src} alt={gallery[galleryIndex].alt} />
            </button>
            <button
              className="gallery-arrow previous"
              aria-label="Previous product image"
              onClick={() => setGalleryIndex((galleryIndex + gallery.length - 1) % gallery.length)}
            >
              ‹
            </button>
            <button
              className="gallery-arrow next"
              aria-label="Next product image"
              onClick={() => setGalleryIndex((galleryIndex + 1) % gallery.length)}
            >
              ›
            </button>
            <span className="gallery-counter">{galleryIndex + 1} / {gallery.length}</span>
            <button className="zoom-label" onClick={() => setZoomOpen(true)}>↗ Zoom</button>
            <div className="gallery-sticker" aria-hidden="true"><strong>12</strong><span>characters</span></div>
          </div>
          <div className="gallery-thumbnails">
            {gallery.map((item, index) => (
              <button
                key={item.alt}
                className={index === galleryIndex ? "thumbnail is-active" : "thumbnail"}
                onClick={() => setGalleryIndex(index)}
                aria-label={`View image ${index + 1}`}
                aria-pressed={index === galleryIndex}
              >
                <img src={item.src} alt="" />
              </button>
            ))}
          </div>
          <div className="gallery-note">
            <span className="note-icon">✓</span>
            Original concept artwork · production imagery to be supplied by AMB
          </div>
        </section>

        </div>

        <section className="product-panel">
          <div className="eyebrow-row">
            <span className="pill pill-yellow">Collectible series</span>
            <span className="pill pill-blue">Just arrived</span>
            <button className="share-button" onClick={() => notify("Share link copied")}>Share</button>
          </div>
          <p className="collection-kicker">Tiny Wonders collectibles</p>
          <h1>Street Party Series Blind Box</h1>
          <p className="product-summary">A pocket-sized celebration of Beirut street culture, with twelve characters to discover and rare editions hidden in the series.</p>
          <div className="rating-row">
            <span className="stars" aria-label="4.9 out of 5 stars">★★★★★</span>
            <a href="#reviews">4.9 · 120 reviews</a>
          </div>
          <div className="price-row">
            <strong>{selectedOption ? money(option.price) : `From ${money(purchaseOptions[0].price)}`}</strong>
            <span>{selectedOption ? selectedOption === "single" ? "per box" : "per selection" : "Choose a format below"}</span>
          </div>
          <p className="rewards-line"><span>W</span> Earn 16 Wonder Points with this purchase</p>
          <p className="stock-line"><span /> In stock · usually ships within 24 hours</p>

          <div id="purchase" className="purchase-flow">
            <section className={`purchase-step ${activePurchaseStep === 1 ? "is-open" : selectedOption ? "is-complete" : ""}`}>
              <button
                type="button"
                className="purchase-step-toggle"
                onClick={() => setActivePurchaseStep((step) => step === 1 ? 0 : 1)}
                aria-expanded={activePurchaseStep === 1}
              >
                <span className="step-number">1</span>
                <span className="purchase-step-title">
                  <strong>Choose your format</strong>
                  <small>{selectedOption ? `${option.name} · ${money(option.price)}` : "Select a format to continue"}</small>
                </span>
                <span className="step-action">{activePurchaseStep === 1 ? "Close" : selectedOption ? "Edit" : "Choose"}</span>
              </button>

              {activePurchaseStep === 1 && (
                <div className="purchase-step-body">
                  <div className="purchase-options" role="radiogroup" aria-label="Purchase format">
                    {purchaseOptions.map((item) => (
                      <button
                        key={item.id}
                        className={selectedOption === item.id ? "purchase-card is-selected" : "purchase-card"}
                        onClick={() => selectOption(item.id)}
                        role="radio"
                        aria-checked={selectedOption === item.id}
                      >
                        <span className="radio-dot" />
                        <span className="purchase-copy">
                          <span className="purchase-title">
                            {item.name}
                            {item.badge && <em>{item.badge}</em>}
                          </span>
                          <small>{item.note}</small>
                        </span>
                        <strong>{money(item.price)}</strong>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </section>

            <section className={`purchase-step ${activePurchaseStep === 2 ? "is-open" : ""}`}>
              <button
                type="button"
                className="purchase-step-toggle"
                onClick={() => setActivePurchaseStep((step) => step === 2 ? 0 : 2)}
                aria-expanded={activePurchaseStep === 2}
                disabled={selectedOption === null}
              >
                <span className="step-number">2</span>
                <span className="purchase-step-title">
                  <strong>{selectedOption === "single" ? "Choose assignment" : "Assignment details"}</strong>
                  <small>{selectedOption === null ? "Available after choosing a format" : selectedOption === "single" ? selectedBox === null ? "Select a display position" : selectedBox === "random" ? "Random store assignment" : `Display position ${selectedBox}` : "Store assigned"}</small>
                </span>
                <span className="step-action">{activePurchaseStep === 2 ? "Close" : selectedOption ? "Edit" : "Next"}</span>
              </button>

              {activePurchaseStep === 2 && (
                <div className="purchase-step-body box-selection-card">
                  {selectedOption === "single" ? (
                    <>
                      <p className="helper-text">Choose a display position or let the store assign one randomly. The figure inside remains unknown until opened.</p>
                      <div className="box-grid" aria-label="Display box positions">
                        {Array.from({ length: 12 }, (_, index) => index + 1).map((number) => (
                          <button
                            key={number}
                            className={selectedBox === number ? "box-position is-selected" : "box-position"}
                            onClick={() => setSelectedBox(number)}
                            aria-pressed={selectedBox === number}
                          >
                            <span>{number}</span>
                          </button>
                        ))}
                      </div>
                      <button
                        className={selectedBox === "random" ? "random-button is-selected" : "random-button"}
                        onClick={() => setSelectedBox("random")}
                        aria-pressed={selectedBox === "random"}
                      >
                        <span>↝</span>
                        Random store assignment
                      </button>
                      <p className="selection-result">
                        {selectedBox === null ? "Choose a position or random assignment to continue." : selectedBox === "random" ? "The store will assign an available box." : `Display position ${selectedBox} selected.`}
                      </p>
                    </>
                  ) : (
                    <div className="allocation-message">
                      <span>✓</span>
                      <div>
                        <strong>{selectedOption === "case" ? "Factory-sealed case" : "Grouped store assignment"}</strong>
                        <p>{selectedOption === "case" ? "Your case remains sealed. Standard figures are supplied without duplicates where the manufacturer guarantee applies." : "Three available positions will be assigned together. Contents are still packed randomly by the manufacturer."}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </section>
          </div>

          {purchaseReady && (
            <div className="purchase-checkout">
              <div className="quantity-total">
                <div>
                  <span>Quantity</span>
                  <div className="quantity-control">
                    <button aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button>
                    <strong>{quantity}</strong>
                    <button aria-label="Increase quantity" onClick={() => setQuantity((value) => Math.min(6, value + 1))}>+</button>
                  </div>
                </div>
                <div className="total-line">
                  <span>Total</span>
                  <strong>{money(total)}</strong>
                </div>
              </div>

              <div className="desktop-cta">
                <button className="secondary-cta" onClick={addToCart}>Add to bag</button>
                <button className="primary-cta" onClick={() => notify("Checkout flow would open here")}>Buy now</button>
              </div>

              <div className="confidence-row" aria-label="Purchase benefits">
                <span><b>✓</b> Authenticity checked</span>
                <span><b>↺</b> Defect support</span>
                <span><b>⌖</b> Local pickup</span>
              </div>
            </div>
          )}

          <dl className="product-facts">
            <div><dt>Artist</dt><dd>Tiny Wonders Studio</dd></div>
            <div><dt>Collection</dt><dd>Street Party · 2026</dd></div>
            <div><dt>Inside</dt><dd>1 sealed figure</dd></div>
          </dl>

          <div className="transparency-note">
            <strong>Know before you buy</strong>
            <p>Each box is sealed and packed randomly by the manufacturer. Choosing a display position does not change the stated chances. Opened blind-box products are only returnable if defective.</p>
          </div>
        </section>

        <section id="related" className="related-section full-width-section">
          <div className="section-intro related-intro">
            <div>
              <p className="collection-kicker">You may also like</p>
              <h2>More tiny worlds to explore.</h2>
            </div>
            <button onClick={() => notify("Full collection page preview")}>View all collections →</button>
          </div>
          <div className="related-grid">
            {relatedCollections.map((collection) => (
              <article className="related-card" key={collection.name}>
                <button className="related-image" onClick={() => notify(`${collection.name} product preview`)}>
                  <img src={collection.image} alt={`${collection.name} collection concept`} loading="lazy" />
                  <span>{collection.note}</span>
                </button>
                <div>
                  <p>{collection.tone}</p>
                  <h3>{collection.name}</h3>
                  <strong>From {money(collection.price)}</strong>
                </div>
                <button className="quick-add" onClick={() => notify(`${collection.name} quick add preview`)} aria-label={`Quick add ${collection.name}`}>+</button>
              </article>
            ))}
          </div>
        </section>

        <section id="lineup" className="lineup-section full-width-section">
          <div className="section-intro">
            <div>
              <p className="collection-kicker">Meet the collection</p>
              <h2>Meet the Street Party crew.</h2>
            </div>
            <p>Every probability is shown clearly so collectors can make an informed choice.</p>
          </div>
          <div className="character-grid">
            {characters.map((character) => (
              <article className="character-card" key={character.name}>
                <div className="character-image">
                  <img src={character.image} alt={`${character.name} collectible figure`} loading="lazy" />
                  <span className={`rarity rarity-${character.tone}`}>{character.rarity}</span>
                </div>
                <h3>{character.name}</h3>
                <p>{character.odds}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="delivery" className="store-information full-width-section">
          <div className="store-services">
            <p className="collection-kicker">Store services</p>
            <h2>From our shelf to yours.</h2>
            <p className="store-services-intro">Simple delivery and pickup choices for collectors across Lebanon.</p>
            <div className="service-list">
              <article><span>01</span><div><h3>Home delivery</h3><p>Estimated 2–3 business days.</p></div></article>
              <article><span>02</span><div><h3>Beirut pickup</h3><p>Reserve online and collect in store.</p></div></article>
              <article><span>03</span><div><h3>Collector-safe packaging</h3><p>Outer boxes protected for transport.</p></div></article>
            </div>
          </div>

          <div className="details-section">
            <p className="collection-kicker">Good to know</p>
            <details>
              <summary>Product details <span>+</span></summary>
              <p>One sealed collector figure from the Street Party Series. Final materials, dimensions, care instructions and age guidance will be supplied by AMB with the production catalogue.</p>
            </details>
            <details>
              <summary>Shipping and returns <span>+</span></summary>
              <p>Delivery estimates, store pickup availability and return eligibility would be calculated from the customer’s location and the final AMB policies.</p>
            </details>
            <details>
              <summary>Blind-box probabilities <span>+</span></summary>
              <p>Standard characters share the regular assortment. Rare and secret odds are shown in the collection lineup; choosing a display position never changes those odds.</p>
            </details>
          </div>
        </section>

        <section id="reviews" className="reviews-section full-width-section" aria-label="Review module preview">
          <header className="reviews-header">
            <div>
              <p className="collection-kicker">Customer reviews</p>
              <h2>Loved by collectors.</h2>
            </div>
            <div className="review-summary">
              <strong>4.9</strong>
              <div><span className="stars" aria-hidden="true">★★★★★</span><small>120 concept reviews</small></div>
            </div>
            <button onClick={() => notify("Review form preview")}>Write a review</button>
          </header>
          <div className="review-list">
            <article>
              <div><span className="review-avatar">MA</span><strong>Maya A.</strong><em>Verified sample</em></div>
              <p>“The packaging feels considered, and the probability information is much clearer than most collector stores.”</p>
            </article>
            <article>
              <div><span className="review-avatar">RK</span><strong>Rami K.</strong><em>Verified sample</em></div>
              <p>“Pickup and delivery choices are easy to understand, especially on mobile.”</p>
            </article>
          </div>
        </section>

      </main>

      <div className="back-to-top">
        <a href="#top"><span aria-hidden="true">↑</span> Back to top</a>
      </div>

      <section className="footer-social" aria-label="Social links">
        <div>
          <strong>Follow Tiny Wonders</strong>
          <nav>
            <button className="social-instagram" onClick={() => notify("Instagram preview")} aria-label="Instagram" />
            <button className="social-tiktok" onClick={() => notify("TikTok preview")} aria-label="TikTok"><FaTiktok aria-hidden="true" /></button>
            <button className="social-facebook" onClick={() => notify("Facebook preview")} aria-label="Facebook" />
          </nav>
          <p>Collectible stories, new characters and Beirut store updates.</p>
        </div>
      </section>

      <section className="club-banner">
        <div className="club-banner-inner">
          <div>
            <p className="collection-kicker">Wonder Club</p>
            <h2>Join the Wonder Club</h2>
            <p>Get first access to new series, store events and member rewards.</p>
          </div>
          <form onSubmit={(event) => { event.preventDefault(); notify("Wonder Club signup preview"); }}>
            <label htmlFor="club-email">Email address</label>
            <div><input id="club-email" type="email" placeholder="you@example.com" required /><button type="submit">Join the club</button></div>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <a className="wordmark footer-wordmark" href="#top"><span>Tiny</span><strong>Wonders</strong></a>
          <p>Small characters. Big city stories. An original storefront concept prepared for AMB Group.</p>
        </div>
        <div><strong>Shop</strong><a href="#related">New arrivals</a><a href="#lineup">Characters</a><a href="#purchase">Blind boxes</a><button onClick={() => notify("Gift card preview")}>Gift cards</button></div>
        <div><strong>Support</strong><a href="#delivery">Delivery & pickup</a><a href="#reviews">Returns</a><button onClick={() => notify("Order tracking preview")}>Track an order</button><button onClick={() => notify("FAQ preview")}>FAQs</button><a href="#lineup">Authenticity & odds</a></div>
        <div><strong>About</strong><span>Beirut, Lebanon</span><button onClick={() => notify("Store locator preview")}>Find a store</button><button onClick={() => notify("Contact preview")}>Contact us</button><button onClick={() => notify("Artist preview")}>Artists</button></div>
        <small>© 2026 Tiny Wonders concept · Product, policy and compliance content to be finalized with AMB Group.</small>
      </footer>

      <button className="whatsapp-button social-whatsapp" onClick={() => notify("WhatsApp contact will be connected by AMB")} aria-label="Contact Tiny Wonders on WhatsApp">
        <FaWhatsapp aria-hidden="true" />
        <span>WhatsApp</span>
      </button>

      {purchaseReady && (
        <div className="mobile-purchase-bar">
          <div><span>Total</span><strong>{money(total)}</strong></div>
          <button className="secondary-cta" onClick={addToCart}>Add</button>
          <button className="primary-cta" onClick={() => notify("Checkout flow would open here")}>Buy now</button>
        </div>
      )}

      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        <a href="#top">Home</a>
        <a className="is-active" href="#purchase">Shop</a>
        <button onClick={() => setWishlist((value) => !value)}>{wishlist ? "Saved ♥" : "Wishlist"}</button>
        <button onClick={() => notify("Profile preview")}>Profile</button>
      </nav>

      {cartOpen && (
        <div className="drawer-backdrop" role="presentation" onMouseDown={() => setCartOpen(false)}>
          <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Shopping bag" onMouseDown={(event) => event.stopPropagation()}>
            <div className="drawer-header">
              <div><span>Your bag</span><strong>{cartQuantity} item{cartQuantity === 1 ? "" : "s"}</strong></div>
              <button aria-label="Close bag" onClick={() => setCartOpen(false)}>×</button>
            </div>

            {cartQuantity > 0 ? (
              <>
                <div className="drawer-product">
                  <img src={images.box} alt="Tiny Wonders Street Party box" />
                  <div className="drawer-product-info">
                    <strong>Street Party Series</strong>
                    <p>{option.name}</p>
                    {selectedOption === "single" && <small>{selectedBox === "random" ? "Random store assignment" : `Display position ${selectedBox}`}</small>}
                    <div className="drawer-item-actions">
                      <div className="drawer-quantity" aria-label="Cart item quantity">
                        <button
                          aria-label="Decrease cart quantity"
                          disabled={cartQuantity === 1}
                          onClick={() => setCartQuantity((value) => Math.max(1, value - 1))}
                        >−</button>
                        <strong aria-live="polite">{cartQuantity}</strong>
                        <button
                          aria-label="Increase cart quantity"
                          onClick={() => setCartQuantity((value) => Math.min(12, value + 1))}
                        >+</button>
                      </div>
                      <button className="remove-item" onClick={() => setCartQuantity(0)}>Remove</button>
                    </div>
                  </div>
                  <strong className="drawer-line-total">{money(cartSubtotal)}</strong>
                </div>
                <div className="drawer-summary">
                  <div><span>Subtotal</span><strong>{money(cartSubtotal)}</strong></div>
                  <small>Shipping is calculated at checkout.</small>
                </div>
                <div className="shipping-progress"><span style={{ width: `${Math.min(100, (cartSubtotal / 100) * 100)}%` }} /></div>
                <p className="shipping-copy">{cartSubtotal >= 100 ? "You qualify for free delivery." : `${money(100 - cartSubtotal)} away from free delivery.`}</p>
                <button className="primary-cta drawer-checkout" onClick={() => notify("Checkout flow would open here")}>Continue to checkout</button>
              </>
            ) : (
              <div className="empty-bag">
                <span>TW</span>
                <h2>Your bag is empty</h2>
                <p>Choose a format and add it to your bag to see it here.</p>
                <button className="primary-cta" onClick={() => setCartOpen(false)}>Continue shopping</button>
              </div>
            )}
            <button className="continue-shopping" onClick={() => setCartOpen(false)}>Continue shopping</button>
          </aside>
        </div>
      )}

      {zoomOpen && (
        <div className="zoom-backdrop" role="presentation" onMouseDown={() => setZoomOpen(false)}>
          <div className="zoom-dialog" role="dialog" aria-modal="true" aria-label="Larger product image" onMouseDown={(event) => event.stopPropagation()}>
            <button className="zoom-close" aria-label="Close larger image" onClick={() => setZoomOpen(false)}>×</button>
            <img src={gallery[galleryIndex].src} alt={gallery[galleryIndex].alt} />
          </div>
        </div>
      )}

      {toast && <div className="toast" role="status">{toast}</div>}
    </div>
  );
}
