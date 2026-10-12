/* ═══════════════════════════════════════════════════════════
   MENTAKI MOUNT VILLAGE — TOUR DATA
   FSM Jayapena & Co.  |  Reka Jadi Sdn Bhd  |  FSM-2026-014

   Panorama set: REV05, rendered 12.10.2026 — 15 views.
   4096 x 2048 mono equirectangular, 3.5–6.0 MB each.

   INTERIOR — carried over complete from the previous set: north,
   pin on the plan, doorways and material hotspots. REV05 kept the
   same camera positions indoors, so those angles still land.

   EXTERIOR — read off the REV05 panoramas themselves. Every
   material hotspot and every doorway was placed by locating the
   feature in the image and measuring its bearing, so they land
   without a north being set.

   ONE THING LEFT
   The exteriors have no pin on the floor plan, because a pin says
   where the camera stands on the drawing and that cannot be read
   from the panorama. Add them in Shift+E when convenient. Leave
   each exterior's north at 0 — the hotspots are measured against
   it, so turning it shifts them all. Open the tour, press Shift+E, and set
   them the way you did the others. Until then they simply show no
   markers — nothing breaks.
   ═══════════════════════════════════════════════════════════ */

window.TOUR = {

  /* ─── 1 · PROJECT ─────────────────────────────────────── */

  project: "Mentaki Mount Village",
  client:  "Disediakan untuk Reka Jadi Sdn Bhd — Tuan Yahaya",
  cover:   "MMV_Cover_Page.png",

  thumbFolder: "thumbs",

  // logo: "logo.png",

  /* Ambient highland sound. Silent until the client turns it on
     with the speaker button in the bottom bar.                */
  audio: "ambience.mp3",
  audioVolume: 0.32,

  info:
    "# Mentaki Mount Village\n" +
    "A highland cafe development at Lot 063107808 & 063107817, Kundasang, Ranau, Sabah — sited so that Gunung Kinabalu reads to the right of the front elevation.\n" +
    "# Design language\n" +
    "Contemporary industrial. Reclaimed red face brick, board-formed and polished concrete, warm pine and dark-stained timber, walnut tables, wishbone chairs, and sculptural rattan pendants.\n" +
    "# Materials\n" +
    "Tap any orange marker to see the finish as visualised, its specification, and the Sabah supplier researched for it. Supplier references must be confirmed by quotation before appointment.\n" +
    "# Using this tour\n" +
    "Drag to look around. Pinch or scroll to zoom. Tap the arrows to walk between spaces. The floor plan shows where you are standing and which way you are facing.\n" +
    "Prepared by FSM Jayapena & Co. · Drawn by Nurazwa Binti Mohd Iruan · Checked by Mahmood · REV05, 12.10.2026",

  /* ─── 2 · MATERIAL LIBRARY ────────────────────────────── */

  materials: {

    /* ── dining hall & lounge ── */
    "BR-01": { title: "Reclaimed Red Face Brick", zone: "Dining Hall",
      desc: "Clay face brick, natural red, raked joint. Exposed internal feature wall.",
      appears: "3D-IN-01, 02, 03, 05",
      supplier: "Kee Kiong A 2 Z Sdn Bhd", loc: "Inanam, Kota Kinabalu",
      contact: "WhatsApp 011-6498 3218",
      ref: "Phomi Flexible Clay Brick, R Series", link: "keekiong.com.my/aluminium/",
      status: "Verify" },

    "TB-01": { title: "Dark Stained Timber Beam", zone: "Dining Hall",
      desc: "Solid timber coffered ceiling beam and lining, dark walnut stain, matt.",
      appears: "3D-IN-01, 02, 05",
      supplier: "Kiong Sing (Sabah) Sdn Bhd", loc: "Mile 7 Jln Tuaran, Inanam, KK",
      contact: "088-428 888",
      ref: "Sawn hardwood — beam & ceiling lining, stained on site",
      link: "kiongsingsabah.com", status: "Verify" },

    "TB-02": { title: "Natural Pine Board Wall", zone: "Dining Hall",
      desc: "Horizontal pine board cladding, clear seal, natural tone.",
      appears: "3D-IN-01, 02",
      supplier: "Kiong Sing (Sabah) Sdn Bhd", loc: "Mile 7 Jln Tuaran, Inanam, KK",
      contact: "088-428 888",
      ref: "Pine board wall cladding — confirm profile & grade",
      link: "kiongsingsabah.com", status: "Verify" },

    "FL-01": { title: "Polished Concrete Floor", zone: "Dining Hall",
      desc: "Power-float concrete, mechanical polish, light grey, sealed.",
      appears: "3D-IN-01 to 05",
      supplier: "Main contractor — site works", loc: "Kundasang / Ranau",
      contact: "To be appointed",
      ref: "Site-applied. No product supply.", status: "N/A" },

    "ST-01": { title: "Grey Stacked Stone", zone: "Dining Hall",
      desc: "Split-face stone cladding, grey basalt tone, dry-stack pattern.",
      appears: "3D-IN-03, 04, 05",
      supplier: "Kee Kiong A 2 Z Sdn Bhd", loc: "Inanam, Kota Kinabalu",
      contact: "WhatsApp 011-6498 3218",
      ref: "Phomi Flexible Clay Stone Series", link: "keekiong.com.my/aluminium/",
      status: "Verify" },

    "LT-01": { title: "Surface Downlight", zone: "Dining Hall",
      desc: "Round surface-mounted downlight, matt black housing, warm 3000K.",
      appears: "3D-IN-01, 05",
      supplier: "HAG Store Sdn Bhd", loc: "Taman Suria, Penampang",
      contact: "088-717 755 / WA 010-237 1555",
      ref: "HAG 303 / 505 COB Surface Downlight 3W-5W, 3000K — RM13.90",
      link: "hag-store.com/product-category/lighting/", status: "Confirmed" },

    "LT-02": { title: "Caged Lantern Sconce", zone: "Dining Hall",
      desc: "Wall-mounted caged lantern, black frame, amber lamp.",
      appears: "3D-IN-01, 02, 03",
      supplier: "HAG Store Sdn Bhd", loc: "Taman Suria, Penampang",
      contact: "088-717 755 / WA 010-237 1555",
      ref: "Caged lantern wall sconce — confirm SKU in store",
      link: "hag-store.com/product-category/lighting/", status: "Verify" },

    "FN-01": { title: "Wishbone Dining Chair", zone: "Dining Hall",
      desc: "Solid timber frame, woven paper-cord seat, natural finish.",
      appears: "3D-IN-01 to 05",
      supplier: "Riivo & Co (KK Home)", loc: "Pavilion Bundusan, Kota Kinabalu",
      contact: "088-739 228",
      ref: "Hospitality dining chair, make-to-order", link: "riivohome.com",
      status: "Verify" },

    /* ── glass pavilion ── */
    "FL-02": { title: "Timber Deck Flooring", zone: "Glass Pavilion",
      desc: "Hardwood strip flooring, deep red-brown stain, gloss seal.",
      appears: "3D-IN-06, 07, 08",
      supplier: "Elegant Floor", loc: "Lintas Jaya Uptownship, Kota Kinabalu",
      contact: "088-720 378 / WA 016-844 2233",
      ref: "Solid hardwood / engineered strip flooring — confirm species & size",
      link: "elegantfloorkk.com", status: "Confirmed" },

    "GL-01": { title: "Black Steel Frame Glazing", zone: "Glass Pavilion",
      desc: "Slim steel-look framing, matt black, clear double glazing.",
      appears: "3D-IN-06, 07, 08",
      supplier: "Kee Kiong A 2 Z Sdn Bhd", loc: "Inanam, Kota Kinabalu",
      contact: "WhatsApp 011-6498 3218",
      ref: "Performance Series window/door, 1.6mm frame, matte black powder coat",
      link: "keekiong.com.my/aluminium/product/aluminium-window-door/",
      status: "Confirmed" },

    "LT-03": { title: "Black Track Spotlight", zone: "Glass Pavilion",
      desc: "Surface track system, adjustable spot head, matt black.",
      appears: "3D-IN-06, 07, 08",
      supplier: "HAG Store Sdn Bhd", loc: "Taman Suria, Penampang",
      contact: "088-717 755 / WA 010-237 1555",
      ref: "Track Light & Rail range — confirm matt black SKU",
      link: "hag-store.com/product-category/lighting/", status: "Verify" },

    "FN-02": { title: "Upholstered Lounge Chair", zone: "Glass Pavilion",
      desc: "Tub-form lounge chair, textured taupe fabric, timber legs.",
      appears: "3D-IN-06, 07, 08",
      supplier: "Riivo & Co (KK Home)", loc: "Pavilion Bundusan, Kota Kinabalu",
      contact: "088-739 228",
      ref: "Upholstered lounge/tub chair, hospitality grade, make-to-order",
      link: "riivohome.com", status: "Verify" },

    "RG-01": { title: "Plain Wool Area Rug", zone: "Glass Pavilion",
      desc: "Flat-weave rug, off-white, low pile.",
      appears: "3D-IN-06, 07, 08",
      supplier: "New Tech Furniture Sdn Bhd", loc: "8 outlets across Sabah",
      contact: "See website",
      ref: "Plain flat-weave area rug — confirm size & colour",
      link: "newtechfurniture.com.my", status: "Verify" },

    /* ── washroom ── */
    "TL-01": { title: "Vertical Ceramic Wall Tile", zone: "Washroom",
      desc: "Stack-bond vertical format tile, warm grey, matt glaze.",
      appears: "3D-IN-12, 13, 14",
      supplier: "Feruni Ceramiche Retail Store KK",
      loc: "Nountun Ind. Estate, Mile 5.5 Jln Tuaran, KK", contact: "012-661 0339",
      ref: "Stone X, 300x600mm glazed porcelain 9mm, matt — Grigio / Light Grey",
      link: "feruni.com/product/stone-x/", status: "Confirmed" },

    "TB-03": { title: "Fluted Timber Panel", zone: "Washroom",
      desc: "Vertical fluted timber batten panel, medium brown stain.",
      appears: "3D-IN-12, 13, 14",
      supplier: "GRM Biowood Sabah", loc: "Inanam Township, Jln Tuaran Bypass, KK",
      contact: "088-427 488",
      ref: "Biowood Louver 150x35 / Wall Panel — WPC, waterproof, anti-termite",
      link: "sabah-biowood.my", status: "Confirmed" },

    "FL-03": { title: "Terrazzo Floor Finish", zone: "Washroom",
      desc: "Cast terrazzo, warm aggregate, ground and sealed.",
      appears: "3D-IN-11 to 14",
      supplier: "GNG Tiles / Apex Ceramics KK", loc: "Kolombong KK / Penampang",
      contact: "088-388 150 / 088-711 355",
      ref: "Terrazzo N06, 300x600mm terrazzo tile",
      link: "terracotta.com.my/product/terrazzo-n06-size-300-x-600m/",
      status: "Confirmed" },

    "SW-01": { title: "Counter-Top Basin & Vanity", zone: "Washroom",
      desc: "Rectangular counter-top basin, timber vanity top, open shelf.",
      appears: "3D-IN-12, 13, 14",
      supplier: "Kekalboleh Sdn Bhd", loc: "Mile 5.5 Jln Kolombong, Kota Kinabalu",
      contact: "088-385 555 / 013-886 7570",
      ref: "Counter-top rectangular basin — LESSO / ViP / ANA range",
      link: "kekalboleh.com/product-category/sanitary-ware/", status: "Confirmed" },

    "SW-02": { title: "WC & Hand Bidet Spray", zone: "Washroom",
      desc: "Close-coupled WC, soft-close seat, chrome hand spray.",
      appears: "3D-IN-12, 14",
      supplier: "Kekalboleh Sdn Bhd", loc: "Mile 5.5 Jln Kolombong, Kota Kinabalu",
      contact: "088-385 555 / 013-886 7570",
      ref: "Close-coupled WC + hand bidet spray. Alt: Fung Hing (TOTO Sabah) 088-216 805",
      link: "kekalboleh.com/product-category/sanitary-ware/", status: "Confirmed" },

    "MR-01": { title: "Round Strap Mirror", zone: "Washroom",
      desc: "Circular mirror, white leather strap hanger.",
      appears: "3D-IN-13",
      supplier: "Riivo & Co (KK Home)", loc: "Pavilion Bundusan, Kota Kinabalu",
      contact: "088-739 228",
      ref: "Round strap mirror — confirm diameter & strap finish",
      link: "riivohome.com", status: "Verify" },

    /* ── surau ── */
    "TB-04": { title: "CNC Herringbone Screen", zone: "Surau",
      desc: "Laser/CNC-cut timber panel, herringbone motif, natural oak.",
      appears: "3D-IN-15, 16",
      supplier: "Kee Kiong A 2 Z Sdn Bhd", loc: "Inanam, Kota Kinabalu",
      contact: "WhatsApp 011-6498 3218",
      ref: "CNC screen — fabricate in aluminium, matte black powder coat in-house",
      link: "keekiong.com.my/aluminium/", status: "Verify" },

    "GR-01": { title: "Carved Screen Door Insert", zone: "Surau",
      desc: "Geometric CNC screen insert to timber door leaf, black finish.",
      appears: "3D-IN-16",
      supplier: "Laser Cut Sabah", loc: "Papar, Sabah", contact: "See Facebook page",
      ref: "CNC / laser-cut screen insert to door leaf",
      link: "facebook.com/LaserCutSabah/", status: "Verify" },

    "FL-04": { title: "Herringbone Timber Floor", zone: "Surau",
      desc: "Engineered timber, herringbone lay, light natural tone.",
      appears: "3D-IN-15, 16",
      supplier: "Elegant Floor", loc: "Lintas Jaya Uptownship, Kota Kinabalu",
      contact: "088-720 378 / WA 016-844 2233",
      ref: "Engineered timber, herringbone lay — confirm block size",
      link: "elegantfloorkk.com", status: "Confirmed" },

    "TZ-01": { title: "Terrazzo Ablution Bench", zone: "Surau",
      desc: "Cast terrazzo bench and step, exposed aggregate, sealed.",
      appears: "3D-IN-16",
      supplier: "GNG Tiles / Apex Ceramics KK", loc: "Kolombong KK / Penampang",
      contact: "088-388 150 / 088-711 355",
      ref: "Terrazzo tile to bench & step. No in-situ terrazzo contractor in Sabah.",
      link: "terracotta.com.my/terrazzo-tile/", status: "Confirmed" },

    "SJ-01": { title: "Prayer Mat (Sejadah)", zone: "Surau",
      desc: "Loose prayer mats, traditional red motif. Supplied loose by operator.",
      appears: "3D-IN-15",
      supplier: "Supplied loose by operator",
      ref: "Not a construction package item.", status: "N/A" },

    "WL-01": { title: "Textured Plaster Wall", zone: "Surau",
      desc: "Fine sand-texture render, off-white, matt emulsion.",
      appears: "3D-IN-15, 16",
      supplier: "Main contractor — wet trades", loc: "Kundasang / Ranau",
      contact: "To be appointed",
      ref: "Site-applied. No product supply.", status: "N/A" },

    /* ── exterior envelope ── */
    "BR-02": { title: "External Face Brick", zone: "Exterior",
      desc: "Clay face brick to external walls, natural red, flush joint.",
      appears: "3D-EX-01 to 08",
      supplier: "Hap Seng Clay Products Sdn Bhd", loc: "Plaza Shell, Kota Kinabalu",
      contact: "088-355 978",
      ref: "Common Solid Brick — note: common brick, not a facing-brick range",
      link: "hapseng.com.my/en/our-business/building-materials.html",
      status: "Confirmed" },

    "AL-01": { title: "Black Aluminium Frame", zone: "Exterior",
      desc: "Powder-coated aluminium window and door frames, matt black.",
      appears: "3D-EX-01 to 08",
      supplier: "Kee Kiong A 2 Z Sdn Bhd", loc: "Inanam, Kota Kinabalu",
      contact: "WhatsApp 011-6498 3218",
      ref: "Performance Series aluminium, matte black powder coat confirmed",
      link: "keekiong.com.my/aluminium/product/aluminium-window-door/",
      status: "Confirmed" },

    "RF-01": { title: "Metal Roof Sheet", zone: "Exterior",
      desc: "Low-pitch metal roof sheeting, dark grey, concealed fixing.",
      appears: "3D-EX-04, 07, 08",
      supplier: "Colform Group Berhad", loc: "KKIP Timur, Tuaran / Sandakan",
      contact: "088-472 221",
      ref: "LYSAGHT KLIP-LOK OPTIMA concealed-fix, 980mm cover, COLORBOND matt dark grey",
      link: "lysaghtasean.com/my/en/products-and-solutions/roofing-and-walling/",
      status: "Confirmed" },

    "TB-05": { title: "Timber Pergola Structure", zone: "Exterior",
      desc: "Solid timber pergola beams and rafters, clear exterior seal.",
      appears: "3D-EX-02, 07",
      supplier: "Canaan Trading (S) Sdn Bhd",
      loc: "Pusat Industri Kolombong, Kota Kinabalu",
      contact: "088-388 037 / 016-582 3333",
      ref: "Structural hardwood for pergola — confirm species & section",
      link: "canaantrading.my/products/", status: "Verify" },

    "PV-01": { title: "Concrete Apron & Walkway", zone: "Exterior",
      desc: "Broom-finish concrete paving to entry apron and walkway.",
      appears: "3D-EX-01, 02, 06",
      supplier: "Main contractor — site works", loc: "Kundasang / Ranau",
      contact: "To be appointed",
      ref: "Site-cast. No product supply.", status: "N/A" },

    "BL-01": { title: "Stainless Cable Balustrade", zone: "Exterior",
      desc: "Horizontal stainless cable balustrade with metal posts, roof deck.",
      appears: "3D-EX-07, 08",
      supplier: "Kee Kiong A 2 Z Sdn Bhd", loc: "Inanam, Kota Kinabalu",
      contact: "WhatsApp 011-6498 3218",
      ref: "Stainless cable balustrade — fabricate to detail",
      link: "keekiong.com.my/aluminium/", status: "Verify" }

  },

  /* ─── 3 · FLOOR PLAN ──────────────────────────────────── */

  plan: {
    image:    "plan_v2.jpg",
    title:    "Floor Plan",
    rotation: 0,
    size:     "300px",
    zoom:     14
  },

  /* ─── 4 · VIEWS ───────────────────────────────────────────
     EXTERIOR — seven framings from the REV05 set. They open and
     look around fine; they have no north, pin or doorways yet.
     Set them in Shift+E when you have a moment.

     INTERIOR — carried over complete from the previous set.
     ─────────────────────────────────────────────────────── */

  views: [

    { id: "front",
      file: "mmv-ext-01-front.jpg",
      name: "Front Elevation",
      group: "Exterior",
      heading: 0,
      north: 0,
      links: [
        { to: "dining",     yaw: 285, pitch: -5 },
        { to: "entrance",   yaw: 330, pitch: -5 },
        { to: "side",       yaw: 225, pitch: -5 },
        { to: "washfemale", yaw: 240, pitch: -5 },
        { to: "washmale",   yaw: 231, pitch: -5 }
      ],
      spots: [
        { yaw: 232, pitch:   0, mat: "BR-02" },
        { yaw: 270, pitch:   0, mat: "AL-01" },
        { yaw: 275, pitch:  14, mat: "BL-01" },
        { yaw: 313, pitch:   5, mat: "TB-05" },
        { yaw: 250, pitch: -22, mat: "PV-01" }
      ] },

    { id: "entrance",
      file: "mmv-ext-02-entrance.jpg",
      name: "Entrance Approach",
      group: "Exterior",
      heading: 0,
      north: 0,
      links: [
        { to: "front",    yaw: 250, pitch: -5 },
        { to: "pavilion", yaw: 300, pitch: -5 },
        { to: "sideentry", yaw: 200, pitch: -5 }
      ],
      spots: [
        { yaw: 262, pitch:   0, mat: "BR-02" },
        { yaw: 298, pitch:   0, mat: "GL-01" },
        { yaw: 258, pitch:  10, mat: "RF-01" },
        { yaw: 278, pitch:   6, mat: "TB-05" },
        { yaw: 255, pitch: -18, mat: "PV-01" }
      ] },

    { id: "pavilionext",
      file: "mmv-ext-03-pavilion.jpg",
      name: "Glass Pavilion — Exterior",
      group: "Exterior",
      heading: 0,
      north: 0,
      links: [
        { to: "rear",     yaw: 250, pitch: -5 },
        { to: "pavilion", yaw: 268, pitch: -5 }
      ],
      spots: [
        { yaw: 265, pitch:   0, mat: "GL-01" },
        { yaw: 278, pitch:   0, mat: "AL-01" },
        { yaw: 270, pitch:   9, mat: "RF-01" },
        { yaw: 262, pitch: -14, mat: "FL-02" }
      ] },

    { id: "rear",
      file: "mmv-ext-04-rear.jpg",
      name: "Rear Elevation",
      group: "Exterior",
      heading: 0,
      north: 0,
      links: [
        { to: "pavilionext", yaw: 235, pitch: -5 },
        { to: "side",        yaw: 300, pitch: -5 },
        { to: "roof",        yaw: 262, pitch:  2 }
      ],
      spots: [
        { yaw: 242, pitch:   0, mat: "GL-01" },
        { yaw: 285, pitch:   0, mat: "BR-02" },
        { yaw: 263, pitch:   0, mat: "AL-01" },
        { yaw: 288, pitch:  12, mat: "BL-01" },
        { yaw: 280, pitch:  10, mat: "RF-01" }
      ] },

    { id: "side",
      file: "mmv-ext-05-side.jpg",
      name: "Side Elevation",
      group: "Exterior",
      heading: 0,
      north: 0,
      links: [
        { to: "rear",  yaw: 240, pitch: -5 },
        { to: "front", yaw: 310, pitch: -5 }
      ],
      spots: [
        { yaw: 240, pitch:   0, mat: "GL-01" },
        { yaw: 278, pitch:   0, mat: "BR-02" },
        { yaw: 283, pitch:   0, mat: "AL-01" },
        { yaw: 272, pitch:  11, mat: "BL-01" },
        { yaw: 265, pitch:   9, mat: "RF-01" },
        { yaw: 308, pitch: -14, mat: "PV-01" }
      ] },

    { id: "sideentry",
      file: "mmv-ext-06-end.jpg",
      name: "Side Entrance",
      group: "Exterior",
      heading: 0,
      north: 0,
      links: [
        { to: "suraufemale", yaw: 234, pitch: -5 },
        { to: "suraumale",   yaw: 247, pitch: -5 },
        { to: "entrance",    yaw: 290, pitch: -5 }
      ],
      spots: [
        { yaw: 240, pitch:   0, mat: "BR-02" },
        { yaw: 246, pitch:   0, mat: "AL-01" },
        { yaw: 243, pitch:  12, mat: "BL-01" },
        { yaw: 238, pitch:  10, mat: "RF-01" },
        { yaw: 258, pitch: -16, mat: "PV-01" }
      ] },

    /* The balustrade wraps the whole deck and the decking runs
       underfoot in every direction, so these land correctly
       whichever way you happen to be facing.                  */
    { id: "roof",
      file: "mmv-ext-07-roof-terrace.jpg",
      name: "Roof Terrace",
      group: "Exterior",
      heading: 0,
      north: 0,
      links: [
        { to: "rear", yaw: 318, pitch: -8 }
      ],
      spots: [
        { yaw: 120, pitch:  -2, mat: "BL-01" },
        { yaw: 180, pitch: -30, mat: "FL-02" },
        { yaw: 318, pitch:  -6, mat: "AL-01" }
      ] },

    { id: "pavilion",
      file: "mmv-int-01-glass-pavilion.jpg",
      name: "Glass Pavilion",
      group: "Interior",
      heading: 0,
      north: 157,
      pin: { x: 0.710, y: 0.352 },
      links: [
        { to: "dining",   yaw: 232.8, pitch: -4.0 },
        { to: "entrance", yaw: 111.7, pitch: -4.0 }
      ],
      spots: [
        { yaw: 181.5, pitch: 0, mat: "BR-02" },
        { yaw: 193.6, pitch: 0, mat: "GL-01" },
        { yaw: 289.6, pitch: 0, mat: "FL-02" },
        { yaw: 117.2, pitch: 0, mat: "LT-03" },
        { yaw: 13.7,  pitch: 0, mat: "FN-02" },
        { yaw: 75.4,  pitch: 0, mat: "RG-01" }
      ] },

    { id: "dining",
      file: "mmv-int-02-dining-hall.jpg",
      name: "Dining Hall",
      group: "Interior",
      heading: 0,
      north: 10,
      pin: { x: 0.559, y: 0.731 },
      links: [
        { to: "kitchen",  yaw: 321.7, pitch: -4.0 },
        { to: "pavilion", yaw: 12.1,  pitch: -4.0 },
        { to: "front",    yaw: 215.0, pitch: -4.0 },
        { to: "office",   yaw: 280.7, pitch: -4.0 }
      ],
      spots: [
        { yaw: 272.8, pitch: 0, mat: "BR-01" },
        { yaw: 274.8, pitch: 0, mat: "TB-01" },
        { yaw: 304.1, pitch: 0, mat: "TB-02" },
        { yaw: 309.8, pitch: 0, mat: "FL-01" },
        { yaw: 105.0, pitch: 0, mat: "ST-01" },
        { yaw: 313.3, pitch: 0, mat: "LT-01" },
        { yaw: 345.4, pitch: 0, mat: "LT-02" },
        { yaw: 87.5,  pitch: 0, mat: "FN-01" }
      ] },

    { id: "kitchen",
      file: "mmv-int-05-kitchen.jpg",
      name: "Kitchen",
      group: "Interior",
      heading: 0,
      north: 54,
      pin: { x: 0.456, y: 0.567 },
      links: [
        { to: "dining", yaw: 38.3, pitch: -4.0 },
        { to: "dining", yaw: 93.5, pitch: -4.0 }
      ],
      spots: [
        { yaw: 64.4,  pitch: 0, mat: "FL-01" },
        { yaw: 130.8, pitch: 0, mat: "BR-01" },
        { yaw: 268.9, pitch: 0, mat: "AL-01" },
        { yaw: 272.7, pitch: 0, mat: "LT-01" }
      ] },

    { id: "office",
      file: "mmv-int-06-admin-office.jpg",
      name: "Admin Office",
      group: "Interior",
      heading: 0,
      north: 245,
      pin: { x: 0.320, y: 0.731 },
      links: [
        { to: "dining", yaw: 79.3, pitch: -4.0 }
      ],
      spots: [
        { yaw: 183.0, pitch: 0, mat: "FL-04" },
        { yaw: 124.7, pitch: 0, mat: "WL-01" },
        { yaw: 193.2, pitch: 0, mat: "AL-01" },
        { yaw: 186.7, pitch: 0, mat: "BR-02" },
        { yaw: 187.0, pitch: 0, mat: "LT-01" }
      ] },

    { id: "washfemale",
      file: "mmv-int-07-washroom-female.jpg",
      name: "Washroom — Female",
      group: "Interior",
      heading: 0,
      north: 43,
      pin: { x: 0.235, y: 0.724 },
      links: [
        { to: "front", yaw: 203.0, pitch: -4.0 }
      ],
      spots: [
        { yaw: 36.8,  pitch: 0, mat: "TL-01" },
        { yaw: 23.6,  pitch: 0, mat: "TB-03" },
        { yaw: 4.9,   pitch: 0, mat: "FL-03" },
        { yaw: 286.6, pitch: 0, mat: "SW-01" },
        { yaw: 346.8, pitch: 0, mat: "SW-02" },
        { yaw: 278.5, pitch: 0, mat: "MR-01" }
      ] },

    { id: "washmale",
      file: "mmv-int-08-washroom-male.jpg",
      name: "Washroom — Male",
      group: "Interior",
      heading: 0,
      north: 128,
      pin: { x: 0.173, y: 0.731 },
      links: [
        { to: "front", yaw: 161.5, pitch: -4.0 }
      ],
      spots: [
        { yaw: 316.3, pitch: 0, mat: "TL-01" },
        { yaw: 327.8, pitch: 0, mat: "TB-03" },
        { yaw: 10.9,  pitch: 0, mat: "FL-03" },
        { yaw: 62.3,  pitch: 0, mat: "SW-01" },
        { yaw: 4.7,   pitch: 0, mat: "SW-02" },
        { yaw: 90.0,  pitch: 0, mat: "MR-01" }
      ] },

    { id: "suraufemale",
      file: "mmv-int-03-surau-female.jpg",
      name: "Surau — Female",
      group: "Interior",
      heading: 0,
      north: 167,
      pin: { x: 0.114, y: 0.685 },
      links: [
        { to: "sideentry", yaw: 293.9, pitch: -4.0 }
      ],
      spots: [
        { yaw: 143.6, pitch: 0, mat: "TB-04" },
        { yaw: 294.2, pitch: 0, mat: "GR-01" },
        { yaw: 328.8, pitch: 0, mat: "FL-04" },
        { yaw: 140.7, pitch: 0, mat: "TZ-01" },
        { yaw: 84.9,  pitch: 0, mat: "SJ-01" },
        { yaw: 88.8,  pitch: 0, mat: "WL-01" }
      ] },

    { id: "suraumale",
      file: "mmv-int-04-surau-male.jpg",
      name: "Surau — Male",
      group: "Interior",
      heading: 0,
      north: 192,
      pin: { x: 0.114, y: 0.796 },
      links: [
        { to: "sideentry", yaw: 257.7, pitch: -4.0 }
      ],
      spots: [
        { yaw: 1.0,   pitch: 0, mat: "TB-04" },
        { yaw: 257.3, pitch: 0, mat: "GR-01" },
        { yaw: 218.0, pitch: 0, mat: "FL-04" },
        { yaw: 359.8, pitch: 0, mat: "TZ-01" },
        { yaw: 73.0,  pitch: 0, mat: "SJ-01" },
        { yaw: 85.4,  pitch: 0, mat: "WL-01" }
      ] }

  ]
};
