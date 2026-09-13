// ============================================================
// Structural (locale-independent) data for fully-built-out /places/[slug]
// destination guide pages. All text lives in messages/<locale>.json under
// placeDetails.items.<slug> — edit copy there, edit images/icons/links here.
// A place with no entry here falls back to the lightweight "coming soon"
// DestinationPage template driven by PLACES + places.items alone.
// ============================================================

import { MU, MU_PHOTOS, PORT_LOUIS_PHOTOS, SSR_GARDEN_PHOTOS, CITADEL_PHOTOS } from "@/lib/constants";
import type { PlaceDetailStructural } from "@/types";

// Real activity photos also used on the live /activities pages — reused here for consistent branding.
const PARAGLIDING_CARD = "/activities/paragliding/card.jpeg";
const PARAGLIDING_BANNER = "/activities/paragliding/pg-1.jpg";
const CHAMAREL_SEVEN_COLOURED_EARTHS = "https://upload.wikimedia.org/wikipedia/commons/6/64/Seven_Coloured_Earths%2C_Chamarel%2C_March_2020_%284%29.jpg";
const ALEXANDRA_FALLS_PHOTO = "https://upload.wikimedia.org/wikipedia/commons/9/90/Alexandra_Falls_Mauritius_2019-09-28.jpg";

// Chamarel 7 Coloured Earth destination page — genuine, location-verified Wikimedia Commons photos.
// Elevated/boardwalk viewpoint of the dunes — CC BY-SA 3.0, author Toutaitanous 2
const CHAMAREL_DUNES_ELEVATED = "https://upload.wikimedia.org/wikipedia/commons/c/cd/Chamarel_terre_des_7_couleurs.JPG";
// High-resolution panoramic view of the dunes — CC BY-SA 3.0, author Moongateclimber
const CHAMAREL_DUNES_PANORAMA = "https://upload.wikimedia.org/wikipedia/commons/2/2d/Seven_coloured_earths_mauritius.jpg";
// Genuine photo of Chamarel Waterfall — CC BY-SA 4.0, author Shoestring (WikiVoyage)
const CHAMAREL_WATERFALL_PHOTO = "https://upload.wikimedia.org/wikipedia/commons/b/b8/Chamarel_Waterfall%2C_Black_River_Gorges_National_Park%2C_Mauritius.JPG";
// Second genuine Chamarel Waterfall photo — CC BY-SA 3.0, author Toutaitanous 2
const CHAMAREL_WATERFALL_ALT_PHOTO = "https://upload.wikimedia.org/wikipedia/commons/8/8b/Cascade_de_Chamarel_ile_Maurice.JPG";
// Coffee cherries — no Chamarel-specific coffee plantation photo exists yet; generic but real, CC BY 2.0 (also a US federal government work, Public Domain), author Brian Smith / USFWS
const COFFEE_CHERRIES_GENERIC = "https://upload.wikimedia.org/wikipedia/commons/e/e3/Coffee_cherries_of_varying_ripeness%2C_on_a_tree_in_Colombia_%28by_Brian_Smith%29.jpg";

// Rhumerie de Chamarel destination page — genuine, location-verified Wikimedia Commons photos where they exist.
// Aerial drone photo of the Rhumerie de Chamarel estate/restaurant — CC BY 2.0, author dronepicr
const RHUMERIE_ESTATE_AERIAL = "https://upload.wikimedia.org/wikipedia/commons/c/cd/Rhumerie_de_Chamarel_Restaurant_and_Rum_Distillery_in_Mauritius_%2853697998963%29.jpg";
// Entrance of the Rhumerie de Chamarel distillery — CC BY 2.0, author dronepicr
const RHUMERIE_ENTRANCE = "https://upload.wikimedia.org/wikipedia/commons/b/b9/Entrance_of_the_Rhumerie_de_Chamarel_Rum_Distillery_in_Mauritius_%2853697782426%29.jpg";
// Genuine Mauritius sugarcane harvest photo (1987) — CC BY-SA 2.5, author Hannes Grobe / AWI
const SUGARCANE_MAURITIUS = "https://upload.wikimedia.org/wikipedia/commons/1/15/Sugar_cane_mauritius_hg.jpg";
// No Rhumerie-specific still photo is freely licensed — genuine copper pot stills at a different distillery, CC BY-SA 4.0, author Thechadwix
const COPPER_STILLS_GENERIC = "https://upload.wikimedia.org/wikipedia/commons/3/31/ASW_Distillery%27s_copper_pot_stills%2C_manufactured_by_Vendome_Copper_%26_Brass_Works.jpg";
// No Rhumerie-specific cellar photo is freely licensed — genuine rum barrels (Travellers Distillery, Belize), Public Domain
const RUM_BARRELS_GENERIC = "https://upload.wikimedia.org/wikipedia/en/9/98/Rum_in_barrels_at_travellers_distillery.jpg";

// ── South Tour: Gris Gris / La Roche Qui Pleure (same Souillac headland) ──────
// Genuine photos of the Gris Gris clifftop — CC BY-SA 3.0, author Hansueli Krapf.
// No freely-licensed photo of La Roche Qui Pleure itself exists on Commons; that page
// reuses these, which show the same stretch of coast a few minutes' walk away.
const GRIS_GRIS_CLIFFS = "https://upload.wikimedia.org/wikipedia/commons/5/51/2006-10-03_Gris_Gris_Beach%2C_Mauritius.jpg";
const GRIS_GRIS_WAVES = "https://upload.wikimedia.org/wikipedia/commons/2/23/2006-10-08_Gris_Gris_Beach%2C_Mauritius.jpg";

// ── South Tour: Rochester Falls ──────────────────────────────────────────────
// CC BY-SA 3.0, author Hansueli Krapf
const ROCHESTER_FALLS_PHOTO = "https://upload.wikimedia.org/wikipedia/commons/1/14/2006-10-03_Rochester_Falls%2C_Mauritius.jpg";
const ROCHESTER_FALLS_ALT = "https://upload.wikimedia.org/wikipedia/commons/c/cd/2006-10-03_Rochester_Falls%2C_Mauritius_2.jpg";
// Close-up of the squared basalt columns — CC BY-SA 3.0, author laurence comte
const ROCHESTER_BASALT = "https://upload.wikimedia.org/wikipedia/commons/b/bd/Basalt_Columns_at_Rochester_Falls_in_Mauritius.jpg";
// CC BY-SA 3.0, author Sualkdd
const ROCHESTER_WIDE = "https://upload.wikimedia.org/wikipedia/commons/2/23/Rochester_Falls_-_panoramio.jpg";

// ── South Tour: Alexandra Falls viewpoint ────────────────────────────────────
// All CC BY-SA 4.0, author Z thomas
const ALEXANDRA_FALLS_2 = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Alexandra_Falls_Mauritius_2019-09-28_2.jpg";
const ALEXANDRA_FALLS_3 = "https://upload.wikimedia.org/wikipedia/commons/9/9c/Alexandra_Falls_Mauritius_2019-09-28_3.jpg";
const ALEXANDRA_FALLS_4 = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Alexandra_Falls_Mauritius_2019-09-28_4.jpg";

// ── East Tour: Belle Mare ────────────────────────────────────────────────────
// CC BY-SA 3.0 de, author Arne Müseler
const BELLE_MARE_WIKI = "https://upload.wikimedia.org/wikipedia/commons/d/dd/Mauritius_belle_mare_beach.jpg";
// CC BY 4.0, author Гульнара Бектемировна
const BELLE_MARE_SAND = "https://upload.wikimedia.org/wikipedia/commons/e/e4/Belle_Mare_8.jpg";

// ── East Tour: National History Museum, Mahébourg ────────────────────────────
// All CC BY-SA 3.0, author आशीष भटनागर
const MAHEBOURG_MUSEUM_BUILDING = "https://upload.wikimedia.org/wikipedia/commons/e/ea/National_History_Museum_building%2C_Mahebourg%2C_Mauritius.jpg";
const MAHEBOURG_MUSEUM = "https://upload.wikimedia.org/wikipedia/commons/a/a7/National_History_Museum%2C_Mahebourg%2C_Mauritius.jpg";
const MAHEBOURG_CANNON = "https://upload.wikimedia.org/wikipedia/commons/4/40/A_cannon_in_National_History_Museum%2C_Mahebourg%2C_Mauritius.jpg";
const MAHEBOURG_ANCHOR = "https://upload.wikimedia.org/wikipedia/commons/8/8e/An_anchor_in_National_History_Museum%2C_Mahebourg%2C_Mauritius.jpg";
const MAHEBOURG_RAIL = "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_rail_compartment_in_National_History_Museum%2C_Mahebourg%2C_Mauritius.jpg";
// CC BY-SA 3.0, author Les3corbiers
const MAHEBOURG_NAVAL = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Mus%C3%A9e_naval_de_l%27%C3%AEle_Maurice.JPG";

// ── East Tour: Blue Bay Marine Park ──────────────────────────────────────────
// Blue Bay lagoon — CC BY-SA 4.0, author Shoestring (WikiVoyage)
const BLUE_BAY_LAGOON = "https://upload.wikimedia.org/wikipedia/commons/f/fa/Blue_Lagoon_Beach_Hotel%2C_Blue_Bay%2C_Mauritius.JPG";
// No freely-licensed photo of Blue Bay's own thousand-year-old coral exists — genuine
// Lobophyllia brain coral of the same genus, CC BY-SA 2.0, author Bernard DUPONT
const BRAIN_CORAL_GENERIC = "https://upload.wikimedia.org/wikipedia/commons/4/49/Brain_Coral_%28Lobophyllia_sp.%29_%288480567963%29.jpg";
// No Mauritius-specific green turtle photo is freely licensed — genuine Chelonia mydas
// over a reef, CC BY-SA 3.0, author Brocken Inaglory
const GREEN_TURTLE_GENERIC = "https://upload.wikimedia.org/wikipedia/commons/e/e5/Green_turtle_swimming_over_coral_reefs_in_Kona.jpg";

// ── East Tour: Île aux Aigrettes ─────────────────────────────────────────────
// The reserve seen from offshore — CC BY-SA 4.0, author Shoestring (WikiVoyage)
const ILE_AUX_AIGRETTES_OFFSHORE = "https://upload.wikimedia.org/wikipedia/commons/b/b7/Ile_aux_Aigrettes_Nature_Reserve_from_offshore%2C_Mauritius.JPG";
// CC0, author Abu Shawka
const ILE_AUX_AIGRETTES_ISLAND = "https://upload.wikimedia.org/wikipedia/commons/6/63/Ile_aux_Aigrettes_-_Mauritius.jpg";
// CC BY 2.0, author carrotmadman6
const ILE_AUX_AIGRETTES_FOREST = "https://upload.wikimedia.org/wikipedia/commons/f/fe/Ile_aux_Aigrettes_%286219450442%29.jpg";
// Pink pigeon (Nesoenas mayeri), the endemic species reintroduced here — CC BY-SA 4.0, author Charles J. Sharp
const PINK_PIGEON = "https://upload.wikimedia.org/wikipedia/commons/b/be/Pink_pigeon_%28Nesoenas_mayeri%29_2.jpg";
// Telfair's skink photographed on Île aux Aigrettes itself — CC0, author Abu Shawka
const TELFAIR_SKINK = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Leiolopisma_telfairii_-_skink_on_Ile_aux_Aigrettes_-_Mauritius.jpg";

// ── East Tour: Île aux Cerfs ─────────────────────────────────────────────────
// CC BY-SA 3.0 de, author Arne Müseler
const ILE_AUX_CERFS_AERIAL = "https://upload.wikimedia.org/wikipedia/commons/d/dd/Mauritius_Ile_aux_Cerfs_aerial.jpg";
const ILE_AUX_CERFS_BEACH = "https://upload.wikimedia.org/wikipedia/commons/3/36/Mauritius_%C3%8Ele_aux_Cerfs.jpg";
// CC BY-SA 3.0, author CARRERE Radjiv
const ILE_AUX_CERFS_LAGOON = "https://upload.wikimedia.org/wikipedia/commons/6/6e/Ile_aux_cerfs_%28%28Mauritius_Islands%29.JPG";
// CC BY-SA 3.0, author patano
const ILE_AUX_CERFS_FLAMBOYANT = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flamboyant_tree_-_Ile_aux_Cerfs_-_Mauritius_-_panoramio.jpg";

// ── East Tour: Grand River South East waterfall ──────────────────────────────
// All CC BY-SA 4.0, author Z thomas
const GRSE_1 = "https://upload.wikimedia.org/wikipedia/commons/5/55/Grand_river_south_east_Mauritius_2019-09-29.jpg";
const GRSE_2 = "https://upload.wikimedia.org/wikipedia/commons/d/dc/Grand_river_south_east_Mauritius_2019-09-29_2.jpg";
const GRSE_3 = "https://upload.wikimedia.org/wikipedia/commons/e/e3/Grand_river_south_east_Mauritius_2019-09-29_3.jpg";
const GRSE_4 = "https://upload.wikimedia.org/wikipedia/commons/f/f7/Grand_river_south_east_Mauritius_2019-09-29_4.jpg";
// Long-tailed macaques photographed in Mauritius — three distinct animals/groups, so the
// GRSE page's three macaque cards no longer share one photograph.
// CC BY-SA 4.0, author Diego Delso (Black River Gorges)
const MAURITIUS_MACAQUE = "https://upload.wikimedia.org/wikipedia/commons/4/4b/Macaco_cangrejero_%28Macaca_fascicularis%29%2C_parque_nacional_Gargantas_del_R%C3%ADo_Negro%2C_Chamarel%2C_Mauricio%2C_2025-09-25%2C_DD_42.jpg";
// A small troop on a wall above the gorges — CC BY 2.0, author Evgenii
const MU_MACAQUE_TROOP = "https://upload.wikimedia.org/wikipedia/commons/a/ab/Crab-eating_macaques_in_Mauritius.jpg";
// Mother and infant — CC BY-SA 4.0, author Willywaw
const MAURITIUS_MACAQUE_2 = "https://upload.wikimedia.org/wikipedia/commons/9/9f/Monkeys%2C_mother_and_son.jpg";

// ── West Tour: Casela Nature Parks ───────────────────────────────────────────
// CC BY-SA 4.0, author 7oanna
const CASELA_ZEBRAS = "https://upload.wikimedia.org/wikipedia/commons/0/09/Zebras_in_Casela_Nature_Parks%2C_Mauritius.jpg";
// All CC BY 3.0, author pyraniton
const CASELA_PARK_1 = "https://upload.wikimedia.org/wikipedia/commons/5/5b/Casela_nature_park_and_zoo_-_panoramio.jpg";
const CASELA_PARK_2 = "https://upload.wikimedia.org/wikipedia/commons/2/24/Casela_nature_park_and_zoo_-_panoramio_-_pyraniton.jpg";
const CASELA_PARK_3 = "https://upload.wikimedia.org/wikipedia/commons/0/0f/Casela_nature_park_and_zoo_-_panoramio_-_pyraniton_%281%29.jpg";

// ── West Tour: Tamarin Bay ───────────────────────────────────────────────────
// The Tamarin salt pans — CC BY-SA 3.0 de, author Arne Müseler
const TAMARIN_SALT_FIELDS = "https://upload.wikimedia.org/wikipedia/commons/b/bb/Mauritius_tamarin_salt_fields.jpg";

// Activity card photos reused for cross-sell blocks that link to real /activities routes.
// ============================================================================
// IMAGE ACCURACY RULE
// Every photo below must genuinely depict the destination it is used for. Do not
// substitute a visually similar Mauritian scene, and never reuse one attraction's
// photo for another (Chamarel's Seven Coloured Earths is NOT La Vallée des
// Couleurs; Flat Island is NOT Île aux Cerfs). Where no authentic photo of a
// destination exists, leave the slot on a clearly-labelled neutral image and add
// a NEEDS AUTHENTIC PHOTO note rather than misrepresenting the place.
// ============================================================================

// ── South Tour: La Vanille Nature Park (Rivière des Anguilles) ───────────────
// On-site photographs of the park itself, replacing the generic tortoise/crocodile
// stock previously used here. All CC BY-SA 4.0, author Z thomas.
const LV_PARK_1 = "https://upload.wikimedia.org/wikipedia/commons/a/a1/Vanille_nature_park_Mauritius_2019-09-30.jpg";
const LV_PARK_2 = "https://upload.wikimedia.org/wikipedia/commons/0/01/Vanille_nature_park_Mauritius_2019-09-30_2.jpg";
const LV_PARK_3 = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Vanille_nature_park_Mauritius_2019-09-30_3.jpg";
const LV_PARK_4 = "https://upload.wikimedia.org/wikipedia/commons/b/be/Vanille_nature_park_Mauritius_2019-09-30_4.jpg";
const LV_PARK_5 = "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vanille_nature_park_Mauritius_2019-09-30_5.jpg";
const LV_PARK_6 = "https://upload.wikimedia.org/wikipedia/commons/3/3e/Vanille_nature_park_Mauritius_2019-09-30_6.jpg";
const LV_PARK_7 = "https://upload.wikimedia.org/wikipedia/commons/2/2c/Vanille_nature_park_Mauritius_2019-09-30_7.jpg";
const LV_PARK_8 = "https://upload.wikimedia.org/wikipedia/commons/d/d5/Vanille_nature_park_Mauritius_2019-09-30_8.jpg";
const LV_PARK_9 = "https://upload.wikimedia.org/wikipedia/commons/c/c6/Vanille_nature_park_Mauritius_2019-09-30_9.jpg";
const LV_PARK_10 = "https://upload.wikimedia.org/wikipedia/commons/7/7b/Vanille_nature_park_Mauritius_2019-09-30_10.jpg";
const LV_PARK_11 = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Vanille_nature_park_Mauritius_2019-09-30_11.jpg";
// A giant tortoise photographed at La Vanille itself — CC BY-SA 2.0, author Lukas von Daeniken
const LV_TORTOISE = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Giant_Tortoise_at_La_Vanille_Reserve_des_Mascareignes_%2822936462724%29.jpg";

// ── South Tour: Black River Gorges National Park ─────────────────────────────
// Genuine park photography, replacing the Yukon valley / Costa Rican quetzal stock
// previously used here.
// Panoramic view over the gorges — CC BY 2.0, author dronepicr
const BRG_PANORAMA = "https://upload.wikimedia.org/wikipedia/commons/1/19/Panoramic_view_of_the_Black_River_Gorges_National_Park_in_Mauritius_%2853696889097%29.jpg";
// A waterfall inside the national park — CC BY-SA 2.0, author Ludovic Lubeigt
const BRG_WATERFALL = "https://upload.wikimedia.org/wikipedia/commons/6/65/Black_River_Gorges_National_Park_-_Waterfall_%2819428299202%29.jpg";
// Wide forested gorge view — CC BY-SA 3.0, author CEphoto, Uwe Aranas
const BRG_GORGE_VIEW = "https://upload.wikimedia.org/wikipedia/commons/e/e7/Mauritius_Black-River-Gorges-National-Park-01.jpg";
// Ultra-wide park panorama — CC BY-SA 4.0, author 7oanna
const BRG_WIDE = "https://upload.wikimedia.org/wikipedia/commons/2/2a/Black_River_Gorges_National_Park.jpg";
// Park interior, trails and viewpoints — all CC BY-SA 4.0, author Z thomas
const BRG_Z1 = "https://upload.wikimedia.org/wikipedia/commons/f/f0/Black_river_gorges_national_park_2019-09-28.jpg";
const BRG_Z2 = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Black_river_gorges_national_park_2019-09-28_2.jpg";
const BRG_Z3 = "https://upload.wikimedia.org/wikipedia/commons/7/75/Black_river_gorges_national_park_2019-09-28_3.jpg";
const BRG_Z4 = "https://upload.wikimedia.org/wikipedia/commons/0/00/Black_river_gorges_national_park_2019-09-28_4.jpg";
const BRG_Z5 = "https://upload.wikimedia.org/wikipedia/commons/f/fc/Black_river_gorges_national_park_2019-09-28_5.jpg";
const BRG_Z6 = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Black_river_gorges_national_park_2019-09-28_6.jpg";
const BRG_Z7 = "https://upload.wikimedia.org/wikipedia/commons/e/e2/Black_river_gorges_national_park_2019-09-28_7.jpg";
// Forest track through the park — CC BY 2.0, author Adamina
const BRG_TRAIL = "https://upload.wikimedia.org/wikipedia/commons/d/d8/Black_River_Gorges_National_Park%2C_Mauritius.jpg";

// ── Mauritian endemic wildlife (Black River Gorges / Île aux Aigrettes) ──────
// Real endemic species, replacing the resplendent quetzal (a Central American bird)
// previously used to illustrate Mauritian forest birdlife.
// Pink pigeon photographed in Black River Gorges itself — CC BY 2.0, author JuliaC2006
const MU_PINK_PIGEON_BRG = "https://upload.wikimedia.org/wikipedia/commons/8/85/Pink_pigeon_in_Black_River_Gorges_national_park.jpg";
// Echo parakeets photographed in Black River Gorges itself — CC BY 2.0, author JuliaC2006
const MU_ECHO_PARAKEET_BRG = "https://upload.wikimedia.org/wikipedia/commons/1/1d/Echo_parakeets_in_Black_River_Gorges_National_Park.jpg";
// Mauritius kestrel, the island's endemic raptor — CC BY-SA 4.0, author Charles J. Sharp
const MU_KESTREL = "https://upload.wikimedia.org/wikipedia/commons/c/cb/Mauritius_kestrel_%28Falco_punctatus%29.jpg";
// Mauritian flying fox in flight — CC BY-SA 4.0, author Charles J. Sharp
const MU_FLYING_FOX = "https://upload.wikimedia.org/wikipedia/commons/8/84/Mauritian_flying_fox_%28Pteropus_niger%29_in_flight_2.jpg";
// Aldabra giant tortoise photographed on Île aux Aigrettes itself — CC0, author Abu Shawka
const IAA_TORTOISE = "https://upload.wikimedia.org/wikipedia/commons/0/02/Aldabra_tortoise_Ile_aux_Aigrettes_-_Mauritius.jpg";

// ── North Tour: Grand Baie ───────────────────────────────────────────────────
// The bay, its public beaches and the village street — all CC BY-SA 4.0, author Z thomas
const GB_BEACH_1 = "https://upload.wikimedia.org/wikipedia/commons/3/3a/Strand_grand-Baie_2019-09-27.jpg";
const GB_BEACH_2 = "https://upload.wikimedia.org/wikipedia/commons/d/da/Strand_grand-Baie_2019-09-27_2.jpg";
const GB_BEACH_3 = "https://upload.wikimedia.org/wikipedia/commons/7/75/Strand_grand-Baie_2019-09-27_3.jpg";
const GB_STREET = "https://upload.wikimedia.org/wikipedia/commons/a/a6/Stra%C3%9Fe_grand-Baie_2019-09-27.jpg";
const GB_STREET_2 = "https://upload.wikimedia.org/wikipedia/commons/1/14/Stra%C3%9Fe_grand-Baie_2019-09-27_2.jpg";
// Grand Baie's two real shopping places, so the shopping cards stop using beach photos.
// Both CC0, author Karsten Ratzke — no attribution required.
// The Bazar — the local market with its painted gateway and stalls.
const GB_BAZAR = "https://upload.wikimedia.org/wikipedia/commons/0/0d/Grand_Baie%2C_Bazar.JPG";
// The Super U / Grand Baie mall complex — the village's modern retail centre.
const GB_MALL = "https://upload.wikimedia.org/wikipedia/commons/9/9f/Grand_Baie_%2C_Super_U.JPG";

// ── North Tour: Notre Dame Auxiliatrice, Cap Malheureux ──────────────────────
// The actual red-roofed church, replacing the generic church-interior stock.
// All CC BY-SA 4.0, author Z thomas
const CM_CHURCH_1 = "https://upload.wikimedia.org/wikipedia/commons/8/86/Notre_Dame_Auxiliatrice_Cap_Malheureux_2019-09-27.jpg";
const CM_CHURCH_2 = "https://upload.wikimedia.org/wikipedia/commons/1/17/Notre_Dame_Auxiliatrice_Cap_Malheureux_2019-09-27_2.jpg";
const CM_CHURCH_3 = "https://upload.wikimedia.org/wikipedia/commons/f/f1/Notre_Dame_Auxiliatrice_Cap_Malheureux_2019-09-27_3.jpg";
const CM_CHURCH_4 = "https://upload.wikimedia.org/wikipedia/commons/3/3a/Notre_Dame_Auxiliatrice_Cap_Malheureux_2019-09-27_4.jpg";
const CM_CHURCH_5 = "https://upload.wikimedia.org/wikipedia/commons/0/02/Notre_Dame_Auxiliatrice_Cap_Malheureux_2019-09-27_5.jpg";
// Church and bell tower from the lagoon side — CC BY-SA 4.0, author Martin Falbisoner
const CM_CHURCH_LAGOON = "https://upload.wikimedia.org/wikipedia/commons/7/7b/Notre_Dame_Auxiliatrice_at_Cap_Malheureux.JPG";
const CM_CHURCH_LAGOON_2 = "https://upload.wikimedia.org/wikipedia/commons/8/8b/Notre_Dame_Auxiliatrice_at_Cap_Malheureux_2.JPG";

// ── East Tour: Île aux Cerfs / Mahébourg extras ──────────────────────────────
// CC BY-SA 3.0, author MapiVanPelt
const IAC_ISLAND = "https://upload.wikimedia.org/wikipedia/commons/d/d9/%C3%8Ele_aux_Cerfs.JPG";
// CC BY 2.0, author Adamina
const IAC_SHORE = "https://upload.wikimedia.org/wikipedia/commons/a/a5/%C3%8Ele_aux_Cerfs%2C_Mauritius.jpg";
// Mahébourg street — CC BY-SA 2.0, author Mark Fischer
const MAHEBOURG_STREET = "https://upload.wikimedia.org/wikipedia/commons/3/36/Mahebourg_Street_%2816205715731%29.jpg";

// ── West Tour: Casela extras ─────────────────────────────────────────────────
// CC BY 4.0, author Гульнара Бектемировна
const CASELA_LANDSCAPE = "https://upload.wikimedia.org/wikipedia/commons/1/13/The_Kasela_Nature_1.jpg";
const CASELA_VIEW = "https://upload.wikimedia.org/wikipedia/commons/6/67/The_Kasela_Nature_2.jpg";
// CC BY-SA 3.0, author Sualkdd
const CASELA_BIG_TREE = "https://upload.wikimedia.org/wikipedia/commons/a/a8/Caselapark_Big_Tree_-_panoramio.jpg";
// Casela's southern white rhinos, photographed in the park's safari section —
// CC BY-SA 4.0, author Varuna annath
const CASELA_RHINOS = "https://upload.wikimedia.org/wikipedia/commons/b/ba/Rhinoc%C3%A9ros1.jpg";

// Casela keeps lions, giraffes, cheetahs and servals, but no freely-licensed photograph
// of *those* animals at Casela exists on Commons (searched: "Casela", "Casela lion",
// "lion Mauritius", "giraffe Mauritius" — the park category holds only rhinos, zebras,
// macaques and some unusable through-the-mesh bird shots). The animal cards below
// therefore use genuine photographs of the correct species so the cards show the animal
// they name, rather than the generic park scenery they showed before. Same approach the
// Blue Bay page already takes for its coral and turtle cards. Replace with MauTravel or
// Casela-supplied photography when available.
// Male lion — CC BY 2.0, author wwarby
const LION_MALE = "https://upload.wikimedia.org/wikipedia/commons/4/49/Male_Lion_on_Rock.jpg";
// Giraffe head close-up — CC0, author Derrick Coetzee
const GIRAFFE_HEAD = "https://upload.wikimedia.org/wikipedia/commons/c/cb/Giraffa_camelopardalis_reticulata_at_Oakland_Zoo_-_close-up_on_head.jpg";
// Cheetah portrait — CC BY 3.0, author Bilby
const CHEETAH_PORTRAIT = "https://upload.wikimedia.org/wikipedia/commons/3/38/Cheetah_portrait_side.jpg";
// Serval — CC BY-SA 4.0, author Raf24
const SERVAL = "https://upload.wikimedia.org/wikipedia/commons/9/91/Leptailurus_serval%2C_Ngorongoro.jpg";

// ── Port Louis: real Mauritian street food ───────────────────────────────────
// Genuine dholl puri, replacing the generic "roti and curry" stock.
// CC BY-SA 4.0, author S.M.Chalon
const DHOLL_PURI = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Mauritian_Dholl_puri_taken_by_Steph_Chalon.jpg";
// A dholl puri street vendor in Mauritius — CC BY-SA 3.0, author Noritaka666
const DHOLL_PURI_VENDOR = "https://upload.wikimedia.org/wikipedia/commons/3/35/Vendeur_de_Dholl_Puri.JPG";
// Dholl puri served with butter-bean curry and rougaille — the standard Mauritian street
// plate, used where a card is about Mauritian food in general rather than one dish.
// CC BY-SA 4.0, author Suyash.dwivedi
const MU_FOOD_PLATE = "https://upload.wikimedia.org/wikipedia/commons/e/e9/Dal-Puri_Food_01.jpg";
// Real Mauritian gâteau piment (chilli cakes) with baguette and tea — CC BY-SA 4.0, author Zuzumelle.
// Replaces generic "golden fried fritters" stock.
const GATEAU_PIMENT = "https://upload.wikimedia.org/wikipedia/commons/0/04/Gato_Pima.jpg";
// A Mauritian roti ("farata") stall — the "ROTI CHAUD Rs 12" case with its fritters and
// chutneys. No photograph of a farata itself is freely licensed, so the card shows the
// vendor it comes from rather than reusing a dholl puri photo for a different dish.
// CC BY-SA 4.0, author Efua Seygua
const FARATA_STALL = "https://upload.wikimedia.org/wikipedia/commons/2/29/Roti_Seller.jpg";
// A Mauritian market fruit stall, prices hand-written in rupees — CC BY 2.0, author Allen Brewer
const MU_FRUIT_STALL = "https://upload.wikimedia.org/wikipedia/commons/8/83/A_fruit_stand_in_Mauritius.jpg";
// Mauritian vegetable samosas (Pamplemousses) — CC0, author Benoît Prieur
const MU_SAMOSAS = "https://upload.wikimedia.org/wikipedia/commons/9/9e/Aux_Quatre_%C3%89pices_%28Pamplemousses%29_-_Des_samossas_aux_l%C3%A9gumes.jpg";
// A plated seafood dish in Mauritius (La Pirogue) — CC BY-SA 2.0, author Giorgio Minguzzi
const MU_SEAFOOD_DISH = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Fish_-_La_Pirogue_-_Mauritius_Island.jpg";

// ── South Tour: Chamarel / Alexandra Falls / Rochester Falls extras ──────────
// Seven Coloured Earths geopark, ultra-wide — CC BY-SA 4.0, author 7oanna
const CHAMAREL_GEOPARK = "https://upload.wikimedia.org/wikipedia/commons/2/2b/Chamarel_Seven_Colored_Earth_Geopark%2C_Mauritius.jpg";
// Seven Coloured Earths — both CC BY-SA 4.0, author Martin Falbisoner
const CHAMAREL_SCE_1 = "https://upload.wikimedia.org/wikipedia/commons/8/8f/Mauritius_Seven_Colored_Earths_1.JPG";
const CHAMAREL_SCE_2 = "https://upload.wikimedia.org/wikipedia/commons/1/1d/Mauritius_Seven_Colored_Earths_2.JPG";
// Chamarel Waterfall — CC BY-SA 4.0, author Martin Falbisoner
const CHAMAREL_FALLS_2 = "https://upload.wikimedia.org/wikipedia/commons/7/7d/Chamarel_Falls_Mauritius_1.JPG";
// Giant tortoises kept at the Seven Coloured Earths site — CC0, author Benoît Prieur
const CHAMAREL_TORTOISE = "https://upload.wikimedia.org/wikipedia/commons/0/0d/Seven_Coloured_Earths%2C_tortoise%2C_Chamarel%2C_March_2020_%285%29.jpg";
// Alexandra Falls, wide stitched panorama — CC BY 2.0, author carrotmadman6
const ALEXANDRA_FALLS_PANO = "https://upload.wikimedia.org/wikipedia/commons/9/9b/DSCN6159_stitch_%286393790167%29.jpg";
// Alexandra Falls from the viewpoint — CC BY 2.0, author Bertahan Luxing
const ALEXANDRA_FALLS_VIEW = "https://upload.wikimedia.org/wikipedia/commons/d/d0/Alexandra_Falls%2C_Mauritius_2018_%2845641821862%29.jpg";
// Rochester Falls — CC BY-SA 2.0, author Lukas von Daeniken
const ROCHESTER_DAENIKEN = "https://upload.wikimedia.org/wikipedia/commons/3/3b/Rochester_Falls_near_Souillac_Savanne_%2823538729186%29.jpg";

// ── North Tour: Caudan Waterfront (Port Louis) ───────────────────────────────
// Benoît Prieur's on-site set is CC0 (no credit required); the rest are credited below.
const CAUDAN_PLAZA_2 = "https://upload.wikimedia.org/wikipedia/commons/d/de/Vue_de_la_place_de_Caudan_Waterfront_%28Port_Louis%29_-_2.jpg";
const CAUDAN_UMBRELLAS = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Caudan_Waterfront_-_d%C3%A9coration_parapluies.jpg";
const CAUDAN_ARTS_CENTRE = "https://upload.wikimedia.org/wikipedia/commons/9/9c/Inscription_Caudan_Arts_Centre_%28Port_Louis%29.jpg";
const CAUDAN_BOOKSHOP = "https://upload.wikimedia.org/wikipedia/commons/5/57/Librairie_Bookcourt_dans_Caudan_Waterfront_%28Port_Louis%29.jpg";
const CAUDAN_2020 = "https://upload.wikimedia.org/wikipedia/commons/4/47/Caudan_Waterfront%2C_February_2020.jpg";
// The shaded umbrella walkway through the mall — CC BY-SA 4.0, author Martin Falbisoner
const CAUDAN_UMBRELLAS_MALL = "https://upload.wikimedia.org/wikipedia/commons/0/08/Umbrellas_at_Caudan_Waterfront_Mall.JPG";
// The waterfront seen across the harbour basin — CC BY-SA 3.0, author B.navez
const CAUDAN_HARBOUR = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Mauritius_Port-Louis_CaudanWaterfront.JPG";
// Quayside walkway — CC BY-SA 4.0, author Z thomas
const CAUDAN_QUAY = "https://upload.wikimedia.org/wikipedia/commons/9/9d/Waterfront_port_Louis_2019-09-27_3.jpg";
// The waterfront and harbour from the water — CC BY 2.0, author carrotmadman6
const CAUDAN_PORT_LOUIS_WF = "https://upload.wikimedia.org/wikipedia/commons/7/72/Port_Louis_Waterfront._%286719488523%29.jpg";

// ── North Tour: Aapravasi Ghat (UNESCO World Heritage Site, Port Louis) ──────
// Suyash Dwivedi's on-site set — all CC BY-SA 4.0.
const AG_02 = "https://upload.wikimedia.org/wikipedia/commons/7/7f/Apravasi_Ghat_Mauritius_02.jpg";
const AG_03 = "https://upload.wikimedia.org/wikipedia/commons/6/6b/Aapravasi_Ghat_Museum%2C_Mauritius_%283%29.jpg";
const AG_04 = "https://upload.wikimedia.org/wikipedia/commons/1/17/Aapravasi_Ghat_Museum%2C_Mauritius_%284%29.jpg";
const AG_06 = "https://upload.wikimedia.org/wikipedia/commons/8/81/Aapravasi_Ghat_Museum%2C_Mauritius_%286%29.jpg";
const AG_10 = "https://upload.wikimedia.org/wikipedia/commons/1/14/Aapravasi_Ghat_Museum%2C_Mauritius_%2810%29.jpg";
const AG_27 = "https://upload.wikimedia.org/wikipedia/commons/a/a8/Aapravasi_Ghat_Museum%2C_Mauritius_%2827%29.jpg";
const AG_42 = "https://upload.wikimedia.org/wikipedia/commons/5/5b/Aapravasi_Ghat_Museum%2C_Mauritius_%2842%29.jpg";
const AG_50 = "https://upload.wikimedia.org/wikipedia/commons/f/f4/Aapravasi_Ghat_Museum%2C_Mauritius_%2850%29.jpg";
const AG_52 = "https://upload.wikimedia.org/wikipedia/commons/9/90/Aapravasi_Ghat_Museum%2C_Mauritius_%2852%29.jpg";
const AG_59 = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Aapravasi_Ghat_Museum%2C_Mauritius_%2859%29.jpg";
// The site's stone steps and remains — all CC BY-SA 4.0, author Z thomas
const AG_Z1 = "https://upload.wikimedia.org/wikipedia/commons/3/35/Aapravasi_Ghat_2019-09-27_%281%29.jpg";
const AG_Z2 = "https://upload.wikimedia.org/wikipedia/commons/a/a1/Aapravasi_Ghat_2019-09-27_%282%29.jpg";
const AG_Z4 = "https://upload.wikimedia.org/wikipedia/commons/f/f8/Aapravasi_Ghat_2019-09-27_%284%29.jpg";
// Museum building and its historic collection — all CC BY-SA 3.0, author आशीष भटनागर
const AG_MUSEUM_WIDE = "https://upload.wikimedia.org/wikipedia/commons/c/c0/Aapravasi_ghat_museum%2C_Port_Louis%2C_Mauritius.jpg";
const AG_COLLECTION = "https://upload.wikimedia.org/wikipedia/commons/f/fe/Historic_collection1_at_Aapravasi_ghat_museum%2C_Port_Louis%2C_Mauritius.jpg";
const AG_MONUMENT = "https://upload.wikimedia.org/wikipedia/commons/d/d4/Old_monument_at_Aapravasi_ghat_museum%2C_Port_Louis%2C_Mauritius.jpg";

// ── North: Péreybère ─────────────────────────────────────────────────────────
// Few freely-licensed photos of Péreybère exist; these are all genuine, on-location shots.
// CC BY-SA 4.0, author Gonzolito
const PB_PLAGE = "https://upload.wikimedia.org/wikipedia/commons/9/98/Plage_de_Pereybere_2016.jpg";
// All CC BY-SA 4.0, author Z thomas
const PB_Z1 = "https://upload.wikimedia.org/wikipedia/commons/5/51/Pereybere_Beach_Mauritius_2019-09-27.jpg";
const PB_Z2 = "https://upload.wikimedia.org/wikipedia/commons/a/a4/Pereybere_Beach_Mauritius_2019-09-27_2.jpg";
const PB_Z3 = "https://upload.wikimedia.org/wikipedia/commons/e/e9/Pereybere_Beach_Mauritius_2019-09-27_3.jpg";
// The public beach, the village street and the hillside above it — all CC BY 3.0, author pyraniton
const PB_PANO = "https://upload.wikimedia.org/wikipedia/commons/6/68/Pereyb%C3%A8re_Beach_-_panoramio.jpg";
const PB_STREET = "https://upload.wikimedia.org/wikipedia/commons/b/ba/Pereyb%C3%A8re%2C_Rue_-_panoramio.jpg";
const PB_VIEW = "https://upload.wikimedia.org/wikipedia/commons/8/8d/Pereyb%C3%A8re_View_Appartments_-_panoramio.jpg";

// ── North: Mont Choisy ───────────────────────────────────────────────────────
// All CC BY-SA 4.0, author Z thomas
const MC_Z1 = "https://upload.wikimedia.org/wikipedia/commons/5/57/Mont_choisy_Mauritius_2019-09-27.jpg";
const MC_Z2 = "https://upload.wikimedia.org/wikipedia/commons/c/c9/Mont_choisy_Mauritius_2019-09-27_2.jpg";
const MC_Z4 = "https://upload.wikimedia.org/wikipedia/commons/f/f6/Mont_choisy_Mauritius_2019-09-27_4.jpg";
// CC BY-SA 4.0, author Fenous
const MC_FENOUS = "https://upload.wikimedia.org/wikipedia/commons/f/f0/Mont_Choisy%2C_Mauritius.jpeg";
// Beachgoers under the filao trees — both CC BY-SA 4.0, author Ifeatu Nnaobi
const MC_CHILLING = "https://upload.wikimedia.org/wikipedia/commons/f/f2/Chilling_on_mon_choisy_beach_Mauritius.jpg";
const MC_GUESTS = "https://upload.wikimedia.org/wikipedia/commons/3/36/Guests_enjoy_Mont_choisy_beach_Mauritius.jpg";
// Aerials over the bay — all CC BY 2.0, author dronepicr
const MC_YACHT = "https://upload.wikimedia.org/wikipedia/commons/1/17/Yacht_anchored_at_Mont_Choisy_Beach%2C_Mauritius_%2853697995948%29.jpg";
const MC_SUNSET = "https://upload.wikimedia.org/wikipedia/commons/9/95/Sunset_at_Mont_Choisy_Beach%2C_Mauritius_%2853696897517%29.jpg";
const MC_AERIAL_BOTH = "https://upload.wikimedia.org/wikipedia/commons/6/69/Aerial_view_of_the_Mon_Choisy_Beach_and_Trou_aux_Biches_Beach_in_Mauritius_%2853698215480%29.jpg";
// The public beach — Public Domain, author Shoestring (WikiVoyage)
const MC_PUBLIC_BEACH = "https://upload.wikimedia.org/wikipedia/commons/0/01/Public_beach_Mont_Choisy.JPG";
// The Blue Safari submarine, which operates off this stretch of coast — Public Domain, author Shoestring (WikiVoyage)
const MC_SUBMARINE = "https://upload.wikimedia.org/wikipedia/commons/3/3a/Blue_Safari_submarine_tour.JPG";

// ── North: Trou aux Biches ───────────────────────────────────────────────────
// dronepicr's aerial set over the bay — all CC BY 2.0.
const TB_AERIAL = "https://upload.wikimedia.org/wikipedia/commons/d/dc/Aerial_view_of_Trou-aux-Biches%2C_Mauritius_%2853697980183%29.jpg";
const TB_COASTLINE = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Aerial_view_of_the_Trou-aux-Biches_coastline%2C_Mauritius_%2853696881147%29.jpg";
const TB_BEACH_AERIAL = "https://upload.wikimedia.org/wikipedia/commons/7/71/Aerial_view_of_the_Trou_aux_Biches_Beach%2C_Mauritius_%2853697771176%29.jpg";
const TB_BEACH_SOUTH = "https://upload.wikimedia.org/wikipedia/commons/b/bb/Aerial_view_of_the_Trou_aux_Biches_Beach_in_Mauritius%2C_as_seen_from_the_south_%2853698114274%29.jpg";
const TB_BEACH_NORTH = "https://upload.wikimedia.org/wikipedia/commons/1/10/Trou_aux_Biches_Beach_in_Mauritius%2C_a_view_from_the_north_%2853698229530%29.jpg";
const TB_TURQUOISE = "https://upload.wikimedia.org/wikipedia/commons/5/52/Turquoise_waters_at_Trou_aux_Biches_Beach%2C_Mauritius_%2853696897047%29.jpg";
const TB_YACHTS = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Yachts_at_the_Trou_aux_Biches_Beach%2C_Mauritius_%2853698228340%29.jpg";
const TB_WATERSKI = "https://upload.wikimedia.org/wikipedia/commons/d/d7/Water_skiing_near_the_Trou_aux_Biches_Beach%2C_Mauritius_%2853696896277%29.jpg";
const TB_DIVING_PLATFORM = "https://upload.wikimedia.org/wikipedia/commons/a/a2/Top-down_view_of_a_diving_platform_near_Trou_aux_Biches%2C_Mauritius_%2853697997668%29.jpg";
const TB_VOLLEYBALL = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Beach_volleyball_court_on_the_Trou_aux_Biches_Beach_in_Mauritius_%2853698112349%29.jpg";
const TB_LANDSCAPE = "https://upload.wikimedia.org/wikipedia/commons/4/4d/Aerial_view_of_the_landscape_at_the_Trou_aux_Biches_Beach%2C_Mauritius_%2853696883652%29.jpg";
// Sunset over the lagoon — CC BY 3.0, author otterboris
const TB_SUNSET = "https://upload.wikimedia.org/wikipedia/commons/a/ae/MAURITIUS_ISLAND%2C_SUNSET_FROM_HOTEL_TROU_AUX_BICHES%2C_OCTOBER_2013_-_panoramio.jpg";
// Beach level, looking along the sand — CC BY-SA 2.0, author Lukas von Daeniken
const TB_DAENIKEN = "https://upload.wikimedia.org/wikipedia/commons/e/e9/Trou_Aux_Biches_%2823455730942%29.jpg";

// ── Southwest Tour: Le Morne Brabant ─────────────────────────────────────────
// Genuine Le Morne photographs, so the experience cards stop reusing the same three
// Unsplash frames. No freely-licensed photo of the Le Morne summit trail itself exists
// on Commons, so the hiking card keeps a real photo of the mountain rather than
// borrowing a trail from a different Mauritian peak.
// The beach with the mountain behind it — CC BY 2.0, author dronepicr
const LM_BEACH_MOUNTAIN = "https://upload.wikimedia.org/wikipedia/commons/b/b5/Le_Morne_Beach_with_Le_Morne_Brabant_Mountain_in_the_background%2C_Mauritius_%2853698223315%29.jpg";
// Aerial of the whole peninsula — mountain, lagoon, reef and beach — CC BY 2.0, author dronepicr
const LM_AERIAL_PENINSULA = "https://upload.wikimedia.org/wikipedia/commons/9/94/Aerial_view_of_the_peninsula_Le_Morne_in_Mauritius_%2853698115579%29.jpg";
// The wide aerial over the reef channels at the southwest tip — CC BY 2.0, author dronepicr
const LM_AERIAL_REEF = "https://upload.wikimedia.org/wikipedia/commons/4/4f/Underwater_waterfall_at_the_southwest_tip_of_Mauritius_%2853697786471%29.jpg";
// The mountain seen across the lagoon — CC BY-SA 4.0, author LisanneD
const LM_MOUNTAIN_LAGOON = "https://upload.wikimedia.org/wikipedia/commons/a/ac/Le_Morne_Brabant.jpg";

// ── West Tour: Tamarin Bay ───────────────────────────────────────────────────
// The bay itself — river mouth, shoreline and Montagne du Rempart behind it, which is
// what makes Tamarin recognisable. CC BY-SA 4.0, author Stan1980
const TAMARIN_BAY = "https://upload.wikimedia.org/wikipedia/commons/9/98/Tamarin.jpg";

// ── East Tour: extra Grand River South East waterfall photos ─────────────────
// All categorised on Commons under "Grand River South East, Waterfalls" — CC BY 3.0, author otterboris.
// Added so no two cards on the GRSE page share a photo.
const GRSE_CLOSEUP = "https://upload.wikimedia.org/wikipedia/commons/8/82/MAURITIUS_WATERFALL_1_-_panoramio.jpg";
const GRSE_GORGE = "https://upload.wikimedia.org/wikipedia/commons/7/72/MAURITIUS_WATERFALL_3_-_panoramio.jpg";
// A boat approaching the fall up the estuary — the trip the page actually describes.
const GRSE_BOAT_APPROACH = "https://upload.wikimedia.org/wikipedia/commons/5/55/MAURITIUS_WATERFALL_5_-_panoramio.jpg";

// ── East Tour: Île aux Aigrettes extras ──────────────────────────────────────
// Mauritius olive white-eye (Zosterops chloronothos), the species the card names —
// CC BY-SA 4.0, author Charles J. Sharp. Replaces a Mauritius kestrel photo, a different bird.
const MU_OLIVE_WHITE_EYE = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Mauritius_olive_white-eye_%28Zosterops_chloronothos%29.jpg";
// The reserve's landing dock, where every guided visit starts — CC BY-SA 3.0, author Abu Shawka
const IAA_DOCK = "https://upload.wikimedia.org/wikipedia/commons/c/c1/Dock_at_Ile_aux_Aigrettes.jpg";

const HIKING_CARD = "/activities/hiking-adventures/card.jpeg";
const WATERFALL_TREK_CARD = "/activities/waterfall-river-treks/card.jpeg";
const WILD_SOUTH_CARD = "/activities/wild-south-experience/card.jpeg";
const MANGROVE_CARD = "/activities/mangrove-kayaking/card.jpeg";

export const PLACE_DETAILS: Record<string, PlaceDetailStructural> = {
  "le-morne-brabant": {
    slug: "le-morne-brabant",
    // The three verified real Le Morne photos on file — mountain, aerial lagoon, resort/coast (see MU_PHOTOS comment)
    heroImage: MU(MU_PHOTOS.leMorneAerial, 1920),
    quickInfoIcons: ["MapPin", "Mountain", "Trophy", "Compass", "Star", "Footprints"],
    discoverImage: MU(MU_PHOTOS.leMorneMountain, 1600),
    whyVisitImages: [MU(MU_PHOTOS.leMorneMountain, 1200), MU(MU_PHOTOS.leMorneResort, 1200), MU(MU_PHOTOS.leMorneAerial, 1200), MU(MU_PHOTOS.leMorneMountain, 1200)],
    // "Make Your Le Morne Visit Unforgettable" — real links to the existing Paragliding + Dolphin Watching activity pages
    crossSell: [
      { image: PARAGLIDING_CARD, href: "/activities/paragliding" },
      { image: MU(MU_PHOTOS.dolphinsTamarin, 1600), href: "/activities/dolphin-encounter" },
    ],
    // "Experience Le Morne" — Admire the Mountain / Hiking Trail / Beach / Lagoon / Photography / History.
    // One distinct, genuine Le Morne photograph per card; previously three Unsplash frames
    // were repeated across all six.
    activityImages: [
      MU(MU_PHOTOS.leMorneMountain, 1200), // Admire the Mountain
      LM_MOUNTAIN_LAGOON,                  // Hiking Trail — the mountain itself; no trail photo is freely licensed
      LM_BEACH_MOUNTAIN,                   // Relax on the Beach — Le Morne beach with the mountain behind
      LM_AERIAL_PENINSULA,                 // Discover the Lagoon — aerial: mountain, lagoon, reef
      LM_AERIAL_REEF,                      // Photography — the iconic wide aerial of the peninsula
      MU(MU_PHOTOS.leMorneAerial, 1200),   // Learn the History — the cultural landscape
    ],
    // "Mountain Meets Ocean" experience spotlight
    experienceImage: MU(MU_PHOTOS.leMorneAerial, 1920),
    // Paragliding feature banner — real MauTravel paragliding photo, links to the existing Paragliding page
    peakImage: PARAGLIDING_BANNER,
    peakHref: "/activities/paragliding",
    // "More to Experience Around Le Morne" — real links to existing activity + destination pages
    waterfalls: [
      { image: MU(MU_PHOTOS.dolphinsTamarin, 1600), href: "/activities/dolphin-encounter" },
      { image: PARAGLIDING_CARD, href: "/activities/paragliding" },
      { image: CHAMAREL_SEVEN_COLOURED_EARTHS, href: "/places/chamarel" },
      { image: MU(MU_PHOTOS.blackRiverGorges, 1600), href: "/places/black-river-gorges" },
      { image: ALEXANDRA_FALLS_PHOTO, href: "/places/alexandra-falls" },
    ],
    // "A Mountain That Carries a Powerful Story" (Symbol of Freedom)
    conservationImage: MU(MU_PHOTOS.leMorneMountain, 1600),
    nearbySlugs: ["black-river-gorges", "chamarel", "alexandra-falls", "la-vallee-des-couleurs"],
  },

  "grand-baie": {
    slug: "grand-baie",
    // The one verified real Grand Baie photo on file — lagoon, boats, waterfront (see MU_PHOTOS comment)
    heroImage: MU(MU_PHOTOS.grandBaie, 1920),
    quickInfoIcons: ["MapPin", "Clock", "Users", "Star", "Compass", "MapPin"],
    // Overview — the actual bay: turquoise lagoon, moored boats and yachts, and the
    // waterfront village behind. Replaces a generic Mauritius catamaran shot.
    discoverImage: GB_BEACH_1,
    // Why Visit — Coastal Setting / Food & Nightlife / Shopping. ("Water Activities" was
    // removed: the Boat Trips section below covers it properly.)
    whyVisitImages: [GB_BEACH_2, MU(MU_PHOTOS.mauritiusSunset, 1200), GB_STREET_2],
    experienceImage: MU(MU_PHOTOS.grandBaie, 1920),
    // "Boat Trips & Ocean Experiences" — no live snorkelling/diving/fishing/sunset-cruise or
    // catamaran product pages exist yet (catamaran is currently commented out in ACTIVITIES),
    // so these render as plain image+text cards with no button — no routes invented.
    featuredAttractions: [
      { image: MU(MU_PHOTOS.catamaran, 1200) },
      { image: MU(MU_PHOTOS.flatIsland, 1200) },
      { image: MU(MU_PHOTOS.snorkellingBlueBay, 1200) },
      { image: MU(MU_PHOTOS.snorkellingBlueBay, 1200) },
      { image: MU(MU_PHOTOS.grandBaie, 1200) },
      { image: MU(MU_PHOTOS.mauritiusSunset, 1200) },
    ],
    // No "Top Things to Do" grid: all seven of its cards restated a section that already
    // covers the same ground in more detail — boat trips and water sports (Boat Trips &
    // Ocean Experiences), shopping (Shopping in Grand Baie), dining (Taste Grand Baie),
    // nightlife (Experience the Atmosphere) and nearby beaches (Beaches Near Grand Baie).
    // "Experience the Atmosphere" sunset section
    peakImage: MU(MU_PHOTOS.mauritiusSunset, 1920),
    // "Beaches Near Grand Baie" — real internal links to the three nearby beach pages below.
    // The fourth card was Grand Baie's own beach, which is neither nearby nor new information.
    waterfalls: [
      { image: MU(MU_PHOTOS.flatIsland, 1600), href: "/places/pereybere" },
      { image: MU(MU_PHOTOS.islandCoast, 1600), href: "/places/mont-choisy" },
      { image: MU(MU_PHOTOS.rockyBeach, 1600), href: "/places/trou-aux-biches" },
    ],
    // "Shopping in Grand Baie" — Local Boutiques / Modern Shopping / Local Markets, each
    // shown by the real Grand Baie place it describes: the village shopping street, the
    // Super U mall complex and the Bazar. The "Souvenirs & Crafts" card was removed: no
    // freely-licensed photograph of Grand Baie souvenirs or crafts exists, and the brief
    // was to drop the card rather than illustrate it with something irrelevant.
    encounterImages: [GB_STREET, GB_MALL, GB_BAZAR],
    // "Taste Grand Baie" — Mauritian Flavours / Seafood / Waterfront Dining / Cafés &
    // Casual Dining. The seafood card now shows seafood instead of the lagoon.
    highlightImages: [DHOLL_PURI, MU_SEAFOOD_DISH, GB_BEACH_3, DHOLL_PURI_VENDOR],
    nearbySlugs: ["pereybere", "mont-choisy", "trou-aux-biches", "cap-malheureux", "pamplemousses-botanical-garden", "port-louis"],
  },

  // Slug kept as "cap-malheureux" (already the North Tour card + every other page's
  // nearbySlugs reference it) — this is now the rich Notre Dame Auxiliatrice page itself,
  // the same way "citadel-fortress" is a landmark page rather than a separate village stub.
  "cap-malheureux": {
    slug: "cap-malheureux",
    // The one verified real photo — aerial, red roof + lagoon + coastline (see MU_PHOTOS comment)
    heroImage: MU(MU_PHOTOS.capMalheureux, 1920),
    quickInfoIcons: ["MapPin", "Clock", "Users", "Star", "Compass", "MapPin"],
    discoverImage: MU(MU_PHOTOS.capMalheureux, 1600),
    whyVisitImages: [MU(MU_PHOTOS.capMalheureux, 1200), MU(MU_PHOTOS.capMalheureuxBoats, 1200), CM_CHURCH_LAGOON, CM_CHURCH_1],
    experienceImage: MU(MU_PHOTOS.capMalheureux, 1920),
    // "From Grand Baie to Cap Malheureux" — real link to the Grand Baie page; the second
    // card is this same destination, so it has no href/anchorId (renders without a button).
    featuredAttractions: [
      { image: MU(MU_PHOTOS.grandBaie, 1200), href: "/places/grand-baie" },
      { image: CM_CHURCH_5 },
    ],
    // "Capture One of Mauritius' Classic Views" — the required Things To Do grid, repurposed
    // for photography subjects since this page has no separate booked activities.
    activityImages: [
      MU(MU_PHOTOS.capMalheureux, 1200),
      MU(MU_PHOTOS.capMalheureux, 1200),
      MU(MU_PHOTOS.capMalheureuxBoats, 1200),
      CM_CHURCH_2,
      MU(MU_PHOTOS.mauritiusSunset, 1200),
    ],
    // "Views Toward Coin de Mire" dramatic single section
    peakImage: MU(MU_PHOTOS.capMalheureux, 1920),
    // "Discover Cap Malheureux" village grid — no dedicated sub-location pages, so no hrefs
    // No "More Than Just a Church" grid: the fishing village, the lagoon views, Coin de
    // Mire, the rocky shoreline and local life are all already in Discover, Why Visit,
    // the photography cards and the timeline.
    // "Step Inside Notre Dame Auxiliatrice" — the actual red-roofed church, replacing the
    // generic chapel-interior stock previously used here.
    encounterImages: [CM_CHURCH_3, CM_CHURCH_LAGOON_2, CM_CHURCH_4],
    // "Faith, Romance & the Sea"
    highlightImages: [MU(MU_PHOTOS.capMalheureux, 1600), MU(MU_PHOTOS.capMalheureuxBoats, 1600)],
    nearbySlugs: ["grand-baie", "pereybere", "mont-choisy", "trou-aux-biches", "pamplemousses-botanical-garden", "port-louis"],
  },

  "citadel-fortress": {
    slug: "citadel-fortress",
    heroImage: CITADEL_PHOTOS.heroAerial,
    quickInfoIcons: ["MapPin", "Clock", "Users", "Star", "Calendar", "Compass"],
    discoverImage: CITADEL_PHOTOS.viewFromFort,
    // Panoramic Views / Historic Fortress / Basalt Architecture / Photography
    whyVisitImages: [
      CITADEL_PHOTOS.viewFromFort,
      CITADEL_PHOTOS.fortSilhouette,
      CITADEL_PHOTOS.basaltWalls,
      CITADEL_PHOTOS.champDeMars,
    ],
    featuredAttractions: [
      { image: CITADEL_PHOTOS.basaltWalls },
      { image: CITADEL_PHOTOS.basaltWalls },
      { image: CITADEL_PHOTOS.entranceCannons },
      { image: CITADEL_PHOTOS.viewFromFort },
      { image: CITADEL_PHOTOS.champDeMars },
      { image: CITADEL_PHOTOS.fortSilhouette },
    ],
    experienceImage: CITADEL_PHOTOS.viewFromFort,
    // No "The Architecture" grid: all six cards (walls, arches, ramparts, military spaces,
    // cannons, observation points) were already covered by What to See at Fort Adelaide,
    // and it reused three photos twice over. Its one distinctive point — that the basalt
    // construction reflects British colonial military engineering — moved into Discover.
    peakImage: CITADEL_PHOTOS.heroAerial,
    waterfalls: [
      { image: PORT_LOUIS_PHOTOS.centralMarket, href: "/places/port-louis#experience" },
      { image: PORT_LOUIS_PHOTOS.caudanWaterfront, href: "/places/caudan-waterfront" },
      { image: PORT_LOUIS_PHOTOS.aapravasiGhat, href: "/places/aapravasi-ghat" },
      { image: PORT_LOUIS_PHOTOS.chinatown, href: "/places/port-louis" },
      { image: PORT_LOUIS_PHOTOS.naturalHistoryMuseum, href: "/places/port-louis" },
    ],
    highlightImages: [CITADEL_PHOTOS.champDeMars, CITADEL_PHOTOS.heroAerial, CITADEL_PHOTOS.basaltWalls],
    // No pricing/externalBookingUrl — no reliable current entrance fee; uses `visiting*` copy instead.
    parentPlaceSlug: "port-louis",
    nearbySlugs: ["port-louis", "pamplemousses-botanical-garden", "grand-baie", "cap-malheureux", "caudan-waterfront"],
  },

  "pamplemousses-botanical-garden": {
    slug: "pamplemousses-botanical-garden",
    heroImage: SSR_GARDEN_PHOTOS.giantWaterLilies,
    quickInfoIcons: ["MapPin", "Clock", "Users", "Star", "Calendar", "Ticket"],
    discoverImage: SSR_GARDEN_PHOTOS.palmAvenue,
    featuredAttractions: [
      { image: SSR_GARDEN_PHOTOS.giantWaterLilies, anchorId: "experience" },
      { image: SSR_GARDEN_PHOTOS.lotusPond },
      { image: SSR_GARDEN_PHOTOS.palmAvenue },
      { image: SSR_GARDEN_PHOTOS.grandBassin },
      { image: SSR_GARDEN_PHOTOS.historicTree },
      { image: SSR_GARDEN_PHOTOS.monPlaisir },
    ],
    whyVisitImages: [
      SSR_GARDEN_PHOTOS.giantWaterLilies,
      SSR_GARDEN_PHOTOS.exoticPlant,
      SSR_GARDEN_PHOTOS.monPlaisir,
      MU(MU_PHOTOS.pamplemousses, 1200),
    ],
    // No "Garden Discovery" grid: every one of its six cards restated Why Visit, Top Places
    // to See in the Garden, The Giant Water Lilies or the garden history timeline, using the
    // same six photographs those sections already use.
    experienceImage: SSR_GARDEN_PHOTOS.giantWaterLilies,
    // No "trails"/"peak"/"waterfalls"/"encounters"/"conservation-as-conservation" — uses experienceSpotlight + timeline + highlights (ponds) instead; `conservation*` fields are repurposed as the "Peaceful Stop" section.
    highlightImages: [SSR_GARDEN_PHOTOS.giantWaterLilies, SSR_GARDEN_PHOTOS.lotusPond, SSR_GARDEN_PHOTOS.grandBassin],
    conservationImage: SSR_GARDEN_PHOTOS.palmAvenue,
    externalBookingUrl: "https://ssrbg.govmu.org/ssrbg/",
    externalBookingDomain: "ssrbg.govmu.org",
    nearbySlugs: ["port-louis", "grand-baie", "cap-malheureux", "caudan-waterfront", "citadel-fortress"],
  },

  "port-louis": {
    slug: "port-louis",
    // Elevated panoramic view from Signal Hill — city, harbour and mountains
    heroImage: MU(MU_PHOTOS.portLouisSkyline, 1920),
    quickInfoIcons: ["MapPin", "Clock", "Users", "Star", "Compass", "Ticket"],
    discoverImage: MU(MU_PHOTOS.portLouisHarbour, 1600),
    featuredAttractions: [
      { image: PORT_LOUIS_PHOTOS.centralMarket, anchorId: "experience" },
      { image: PORT_LOUIS_PHOTOS.caudanWaterfront, href: "/places/caudan-waterfront" },
      { image: PORT_LOUIS_PHOTOS.fortAdelaide, href: "/places/citadel-fortress" },
      { image: PORT_LOUIS_PHOTOS.aapravasiGhat, href: "/places/aapravasi-ghat" },
      { image: PORT_LOUIS_PHOTOS.chinatown },
      { image: PORT_LOUIS_PHOTOS.naturalHistoryMuseum },
    ],
    // History & Heritage / Local Culture / Mauritian Food / Shopping & Waterfront —
    // the food card now shows food rather than the market building.
    whyVisitImages: [
      PORT_LOUIS_PHOTOS.colonialStreet,
      PORT_LOUIS_PHOTOS.chinatown,
      MU_FOOD_PLATE,
      PORT_LOUIS_PHOTOS.caudanWaterfront,
    ],
    // "Taste Port Louis" — Dholl Puri / Gâteau Piment / Farata / Fresh Tropical Fruit /
    // Local Snacks. Each card now shows its own dish, photographed in Mauritius; the
    // previous set repeated dholl puri three times and used the market building for fruit.
    activityImages: [
      DHOLL_PURI,
      GATEAU_PIMENT,
      FARATA_STALL,
      MU_FRUIT_STALL,
      MU_SAMOSAS,
    ],
    // Full-bleed "Experience the Heart of Port Louis" — the market's stalls, which is what
    // the copy describes, rather than the exterior used on the Central Market card above.
    experienceImage: PORT_LOUIS_PHOTOS.centralMarketStalls,
    // No "trails"/"peak"/"waterfalls"/"encounters"/"conservation" on this page — uses experienceSpotlight + timeline + highlights (heritage) instead.
    highlightImages: [PORT_LOUIS_PHOTOS.aapravasiGhat, PORT_LOUIS_PHOTOS.fortAdelaide],
    // No externalBookingUrl/pricing — a city with no entrance fee; uses `visiting*` copy instead.
    nearbySlugs: ["pamplemousses-botanical-garden", "grand-baie", "cap-malheureux", "caudan-waterfront", "citadel-fortress"],
  },

  "la-vallee-des-couleurs": {
    slug: "la-vallee-des-couleurs",
    // ⚠ NEEDS AUTHENTIC PHOTOS — no freely-licensed photograph of La Vallée des
    // Couleurs exists on Wikimedia Commons (searched: "La Vallee des Couleurs",
    // "Chamouny" — zero results). This page previously used Chamarel's Seven
    // Coloured Earths for its hero card, discover block and "The 23 Coloured Earth"
    // feature. That is a DIFFERENT attraction — Chamarel has seven colours, this
    // park has twenty-three — so those have been removed rather than left in place.
    // The slots below now hold neutral, genuine southern-Mauritius nature photos that
    // do not depict any other named attraction. Replace with MauTravel-owned or
    // licensed photography of the park itself when available.
    heroImage: MU(MU_PHOTOS.coastForest, 1920),
    quickInfoIcons: ["MapPin", "Clock", "Users", "Star", "Compass", "Ticket"],
    discoverImage: MU(MU_PHOTOS.greenCoast, 1600),
    featuredAttractions: [
      // "The 23 Coloured Earth" — deliberately NOT Chamarel's dunes.
      { image: MU(MU_PHOTOS.coastForest, 1600), anchorId: "discover" },
      { image: WATERFALL_TREK_CARD, anchorId: "activities" },
    ],
    // Activity cards illustrate the named activity, not the park's own installations.
    // MauTravel-owned southern-Mauritius adventure photography where it exists.
    // Quad Biking / Zipline / Nepalese Bridge / Bicycle Zipline / 4×4 Expedition.
    // The Mountain Luge Kart card was removed at the client's request.
    activityImages: [
      MU(MU_PHOTOS.quadBikingGeneric, 1200),
      MU(MU_PHOTOS.ziplineGeneric, 1200),
      MU(MU_PHOTOS.suspensionBridgeGeneric, 1200),
      MU(MU_PHOTOS.bicycleZiplineGeneric, 1200),
      WILD_SOUTH_CARD,
    ],
    externalBookingUrl: "https://vallepark.com/book-your-adventure/",
    externalBookingDomain: "vallepark.com",
    nearbySlugs: ["gris-gris", "rochester-falls", "black-river-gorges", "chamarel", "alexandra-falls"],
  },

  "la-vanille-nature-park": {
    slug: "la-vanille-nature-park",
    // All slots now use on-site photographs of La Vanille itself (Z thomas / Lukas von
    // Daeniken) instead of the generic tortoise, Nile crocodile, Triceratops-skeleton
    // and great-auk stock previously used here.
    heroImage: LV_TORTOISE,
    quickInfoIcons: ["MapPin", "Clock", "Users", "Star", "Leaf", "Calendar"],
    discoverImage: LV_PARK_1,
    // No "featuredAttractions" for this page — it uses whyVisit + highlights instead.
    activityImages: [LV_PARK_2, LV_PARK_3, LV_PARK_4, LV_PARK_5, LV_PARK_6, LV_PARK_7],
    whyVisitImages: [LV_TORTOISE, MU(MU_PHOTOS.laVanille, 1200), LV_PARK_8, LV_PARK_9],
    encounterImages: [LV_PARK_10, LV_PARK_11, MU(MU_PHOTOS.laVanille, 1200), LV_PARK_2],
    highlightImages: [LV_TORTOISE, LV_PARK_3, LV_PARK_4],
    externalBookingUrl: "https://www.lavanillenaturepark.com/acheter-un-billet",
    externalBookingDomain: "lavanillenaturepark.com",
    nearbySlugs: ["gris-gris", "rochester-falls", "la-vallee-des-couleurs", "black-river-gorges", "chamarel"],
  },

  "black-river-gorges": {
    slug: "black-river-gorges",
    // Genuine, location-verified photo of Black River Gorges National Park (see MU_PHOTOS comment)
    heroImage: MU(MU_PHOTOS.blackRiverGorges, 1920),
    quickInfoIcons: ["MapPin", "Trees", "Users", "Mountain", "Footprints", "Trophy"],
    // All slots now use genuine Black River Gorges photography instead of the Kluane
    // (Yukon) valley, resplendent quetzal and assorted misty-forest stock previously
    // used here. Birdlife is illustrated with Mauritian endemics photographed in the
    // park itself.
    discoverImage: BRG_Z5,
    // No "featuredAttractions", "encounters" or plain "highlights" on this page — uses whyVisit + trails + peak + waterfalls instead.
    activityImages: [BRG_TRAIL, BRG_Z1, MU_ECHO_PARAKEET_BRG, BRG_Z3, BRG_WATERFALL, MU_FLYING_FOX],
    whyVisitImages: [BRG_PANORAMA, BRG_Z2, MU_PINK_PIGEON_BRG, BRG_WIDE],
    trailDifficultyLevels: ["easy", "moderate", "moderate", "moderate", "moderate", "strenuous"],
    // BRG_PANORAMA is 3.6:1 and loses ~80% of its width in a tall mobile hero, so the
    // full-bleed slot uses the standard-ratio gorge view instead.
    peakImage: BRG_GORGE_VIEW,
    waterfalls: [
      { image: ALEXANDRA_FALLS_PHOTO, href: "/places/alexandra-falls" },
      { image: BRG_Z4 },
      { image: BRG_Z7 },
    ],
    conservationImage: MU_KESTREL,
    // No externalBookingUrl/pricing — a national park with no entrance fee; uses `visiting*` copy instead.
    nearbySlugs: ["alexandra-falls", "chamarel", "la-vallee-des-couleurs", "rochester-falls", "gris-gris", "la-vanille-nature-park"],
  },

  "chamarel": {
    slug: "chamarel",
    // Ground-level view of the dunes with surrounding greenery — CC0, public domain
    heroImage: CHAMAREL_SEVEN_COLOURED_EARTHS,
    quickInfoIcons: ["MapPin", "Clock", "Users", "Star", "Compass", "Leaf"],
    // Upgraded from an 828px upload to a full-resolution dunes photo.
    discoverImage: CHAMAREL_SCE_1,
    // "Why Visit Chamarel?" — Seven Coloured Earth / Chamarel Waterfall / Volcanic Geology / Giant Tortoises
    whyVisitImages: [CHAMAREL_DUNES_PANORAMA, CHAMAREL_WATERFALL_PHOTO, CHAMAREL_SCE_1, CHAMAREL_TORTOISE],
    // "Add More Adventure to Your Mauritius Holiday" — real links to the existing Paragliding + Dolphin Watching activity pages
    crossSell: [
      { image: PARAGLIDING_CARD, href: "/activities/paragliding" },
      { image: MU(MU_PHOTOS.dolphinsTamarin, 1600), href: "/activities/dolphin-encounter" },
    ],
    // "More Than the Coloured Earth" — Waterfall Viewpoints / Dunes / Tortoise Park / Endemic Garden / Viewpoint Café / Dunes Boutique
    // No dedicated café/boutique photos exist — reusing the verified dunes photo for the boutique card (souvenirs themed on the coloured earth).
    activityImages: [
      CHAMAREL_WATERFALL_PHOTO,
      CHAMAREL_SEVEN_COLOURED_EARTHS,
      CHAMAREL_TORTOISE,
      CHAMAREL_DUNES_ELEVATED,
      CHAMAREL_SCE_2,
      CHAMAREL_GEOPARK,
    ],
    // "Meet the Tortoises & Discover Chamarel Coffee" — no hrefs (no dedicated pages), no pricing implied
    featuredAttractions: [
      { image: CHAMAREL_TORTOISE },
      { image: COFFEE_CHERRIES_GENERIC },
    ],
    // "Seven Colours. Millions of Years." experience spotlight
    experienceImage: CHAMAREL_DUNES_PANORAMA,
    // "Chamarel Waterfall" dramatic full-bleed section — no peakHref (viewpoints only, not a
    // bookable/walkable route). Upgraded from a 640x480 upload, which was far too soft full-bleed.
    peakImage: CHAMAREL_FALLS_2,
    // "Capture the Colours of Mauritius" photography grid — Coloured Dunes / Chamarel Waterfall / Giant Tortoises / Tropical Landscapes
    encounterImages: [CHAMAREL_SEVEN_COLOURED_EARTHS, CHAMAREL_WATERFALL_ALT_PHOTO, CHAMAREL_TORTOISE, CHAMAREL_GEOPARK],
    // "Exploring the Geopark" — By Car (waterfall / dunes) and On Foot, reusing the trails grid for getting-around info
    trailDifficultyLevels: ["easy", "easy", "moderate"],
    // "A Landscape Built by Volcanoes" — repurposing the conservation slot for the lava/geology-of-the-waterfall explainer
    conservationImage: CHAMAREL_WATERFALL_ALT_PHOTO,
    externalBookingUrl: "https://www.chamarel7colouredearth.com/geopark",
    externalBookingDomain: "chamarel7colouredearth.com",
    nearbySlugs: ["le-morne-brabant", "black-river-gorges", "alexandra-falls", "la-vallee-des-couleurs"],
  },

  "rhumerie-de-chamarel": {
    slug: "rhumerie-de-chamarel",
    heroImage: RHUMERIE_ESTATE_AERIAL,
    quickInfoIcons: ["MapPin", "Clock", "Users", "Star", "Compass", "Calendar"],
    discoverImage: RHUMERIE_ENTRANCE,
    // Sits "inside" the Chamarel destination — adds a breadcrumb level and a prominent "Explore Chamarel" link.
    parentPlaceSlug: "chamarel",
    // "Why Visit the Distillery?" — Sugarcane to Rum / Copper Stills / Oak-Barrel Ageing / Guided Tasting
    whyVisitImages: [SUGARCANE_MAURITIUS, COPPER_STILLS_GENERIC, RUM_BARRELS_GENERIC, RHUMERIE_ESTATE_AERIAL],
    // "What You'll Discover" guided-tour steps — Sugarcane / Fermentation / Distillation / Ageing / Bottling / Tasting
    activityImages: [SUGARCANE_MAURITIUS, RHUMERIE_ENTRANCE, COPPER_STILLS_GENERIC, RUM_BARRELS_GENERIC, RHUMERIE_ESTATE_AERIAL, COPPER_STILLS_GENERIC],
    // "Add More to Your Southwest Adventure" — real links to the existing Paragliding + Dolphin Watching activity pages
    crossSell: [
      { image: PARAGLIDING_CARD, href: "/activities/paragliding" },
      { image: MU(MU_PHOTOS.dolphinsTamarin, 1600), href: "/activities/dolphin-encounter" },
    ],
    // "Inside the Distillery" experience spotlight — dark, copper-toned full-bleed section
    experienceImage: COPPER_STILLS_GENERIC,
    // "Inside the Ageing Cellar" full-bleed feature — no peakHref, purely informational
    peakImage: RUM_BARRELS_GENERIC,
    // "Discover the House's Different Styles" tasting grid — White / Wood-Aged / Aged / Flavoured / Liqueurs
    encounterImages: [RHUMERIE_ESTATE_AERIAL, COPPER_STILLS_GENERIC, RUM_BARRELS_GENERIC, RHUMERIE_ENTRANCE, SUGARCANE_MAURITIUS],
    // "Architecture & Setting" — Natural Stone / Warm Timber / Water Features / Tropical Landscape
    highlightImages: [RHUMERIE_ENTRANCE, RHUMERIE_ESTATE_AERIAL, SUGARCANE_MAURITIUS, RHUMERIE_ESTATE_AERIAL],
    // "Extend Your Visit With Lunch" (L'Alchimiste) — informational only, no external href (next-intl Link cannot safely carry an external URL)
    waterfalls: [{ image: RHUMERIE_ENTRANCE }],
    // "Grown in Chamarel" — repurposing the conservation slot for the sugarcane-estate story
    conservationImage: SUGARCANE_MAURITIUS,
    externalBookingUrl: "https://www.rhumeriedechamarel.com/en/",
    externalBookingDomain: "rhumeriedechamarel.com",
    nearbySlugs: ["le-morne-brabant", "black-river-gorges", "alexandra-falls", "la-vallee-des-couleurs"],
  },

  // ══ South Tour — the four stops that had no dedicated page ══════════════════

  "gris-gris": {
    slug: "gris-gris",
    heroImage: GRIS_GRIS_CLIFFS,
    // Location / Time Needed / Entrance / Best For / Swimming / Facilities
    quickInfoIcons: ["MapPin", "Clock", "Ticket", "Star", "Compass", "Leaf"],
    discoverImage: GRIS_GRIS_WAVES,
    whyVisitImages: [GRIS_GRIS_WAVES, GRIS_GRIS_CLIFFS, MU(MU_PHOTOS.rockyBeach, 1200), MU(MU_PHOTOS.islandCoast, 1200)],
    crossSell: [
      { image: WILD_SOUTH_CARD, href: "/activities/wild-south-experience" },
      { image: WATERFALL_TREK_CARD, href: "/activities/waterfalls-river-treks" },
    ],
    activityImages: [GRIS_GRIS_CLIFFS, GRIS_GRIS_WAVES, MU(MU_PHOTOS.rockyBeach, 1200), MU(MU_PHOTOS.islandCoast, 1200)],
    highlightImages: [GRIS_GRIS_WAVES, GRIS_GRIS_CLIFFS, MU(MU_PHOTOS.coastForest, 1200)],
    nearbySlugs: ["la-roche-qui-pleure", "rochester-falls", "la-vanille-nature-park", "alexandra-falls"],
  },

  "la-roche-qui-pleure": {
    slug: "la-roche-qui-pleure",
    // Same Souillac headland as Gris Gris — see the GRIS_GRIS_* comment above.
    heroImage: GRIS_GRIS_WAVES,
    // Location / Time Needed / Entrance / Best For / Swimming / Combines With
    quickInfoIcons: ["MapPin", "Clock", "Ticket", "Star", "Compass", "Footprints"],
    discoverImage: GRIS_GRIS_CLIFFS,
    whyVisitImages: [GRIS_GRIS_CLIFFS, GRIS_GRIS_WAVES, MU(MU_PHOTOS.rockyBeach, 1200), MU(MU_PHOTOS.coastForest, 1200)],
    crossSell: [
      { image: WILD_SOUTH_CARD, href: "/activities/wild-south-experience" },
      { image: HIKING_CARD, href: "/activities/hiking-adventures" },
    ],
    activityImages: [GRIS_GRIS_WAVES, GRIS_GRIS_CLIFFS, MU(MU_PHOTOS.rockyBeach, 1200), MU(MU_PHOTOS.islandCoast, 1200)],
    highlightImages: [MU(MU_PHOTOS.rockyBeach, 1200), MU(MU_PHOTOS.islandCoast, 1200), GRIS_GRIS_CLIFFS],
    nearbySlugs: ["gris-gris", "rochester-falls", "la-vanille-nature-park", "alexandra-falls"],
  },

  "rochester-falls": {
    slug: "rochester-falls",
    heroImage: ROCHESTER_FALLS_PHOTO,
    // Location / Time Needed / Entrance / Access / Best For / Best Season
    quickInfoIcons: ["MapPin", "Clock", "Ticket", "Footprints", "Star", "Calendar"],
    discoverImage: ROCHESTER_BASALT,
    whyVisitImages: [ROCHESTER_BASALT, ROCHESTER_FALLS_ALT, ROCHESTER_WIDE, ROCHESTER_DAENIKEN],
    crossSell: [
      { image: WATERFALL_TREK_CARD, href: "/activities/waterfalls-river-treks" },
      { image: WILD_SOUTH_CARD, href: "/activities/wild-south-experience" },
    ],
    // No "Things to Do" grid: the columnar basalt, the photography and the short walk are
    // covered by Why Visit, What to Look For and Discover. Its one practical detail — the
    // roadside fruit vendors by the parking area — moved into Before You Go.
    highlightImages: [ROCHESTER_BASALT, ROCHESTER_FALLS_ALT, SUGARCANE_MAURITIUS],
    nearbySlugs: ["gris-gris", "la-roche-qui-pleure", "la-vanille-nature-park", "la-vallee-des-couleurs"],
  },

  "alexandra-falls": {
    slug: "alexandra-falls",
    heroImage: ALEXANDRA_FALLS_PHOTO,
    // Location / Time Needed / Entrance / Access / Best For / Facilities
    quickInfoIcons: ["MapPin", "Clock", "Ticket", "Footprints", "Star", "Trees"],
    discoverImage: ALEXANDRA_FALLS_2,
    whyVisitImages: [ALEXANDRA_FALLS_3, MU(MU_PHOTOS.blackRiverGorges, 1200), MU_PINK_PIGEON_BRG, BRG_GORGE_VIEW],
    crossSell: [
      { image: HIKING_CARD, href: "/activities/hiking-adventures" },
      { image: WATERFALL_TREK_CARD, href: "/activities/waterfalls-river-treks" },
    ],
    activityImages: [ALEXANDRA_FALLS_PHOTO, ALEXANDRA_FALLS_4, MU_ECHO_PARAKEET_BRG, ALEXANDRA_FALLS_VIEW],
    highlightImages: [ALEXANDRA_FALLS_2, ALEXANDRA_FALLS_PANO, BRG_Z6],
    nearbySlugs: ["black-river-gorges", "chamarel", "la-vallee-des-couleurs", "le-morne-brabant"],
  },

  // ══ East Tour — none of these six had a dedicated page ══════════════════════

  "belle-mare-beach": {
    slug: "belle-mare-beach",
    heroImage: MU(MU_PHOTOS.belleMare, 1920),
    // Location / Time Needed / Entrance / Best For / Lagoon / Facilities
    quickInfoIcons: ["MapPin", "Clock", "Ticket", "Star", "Compass", "Leaf"],
    discoverImage: BELLE_MARE_WIKI,
    whyVisitImages: [BELLE_MARE_SAND, MU(MU_PHOTOS.belleMare, 1200), MU(MU_PHOTOS.greenCoast, 1200), MU(MU_PHOTOS.islandCoast, 1200)],
    crossSell: [
      { image: MU(MU_PHOTOS.snorkellingBlueBay, 1600), href: "/activities/underwater-walk" },
      { image: MU(MU_PHOTOS.parasailingGeneric, 1600), href: "/activities/parasailing" },
    ],
    activityImages: [
      MU(MU_PHOTOS.belleMare, 1200),
      BELLE_MARE_WIKI,
      MU(MU_PHOTOS.snorkellingBlueBay, 1200),
      BELLE_MARE_SAND,
      MU(MU_PHOTOS.greenCoast, 1200),
      MU(MU_PHOTOS.flatIsland, 1200),
    ],
    highlightImages: [MU(MU_PHOTOS.belleMare, 1200), BELLE_MARE_SAND, MU(MU_PHOTOS.islandCoast, 1200)],
    nearbySlugs: ["ile-aux-cerfs", "blue-bay-marine-park", "mahebourg-history-museum", "grse-waterfall"],
  },

  "mahebourg-history-museum": {
    slug: "mahebourg-history-museum",
    heroImage: MAHEBOURG_MUSEUM_BUILDING,
    // Location / Time Needed / Admission / Managed By / Best For / Please Note
    quickInfoIcons: ["MapPin", "Clock", "Ticket", "Users", "Star", "Calendar"],
    discoverImage: MAHEBOURG_MUSEUM,
    whyVisitImages: [MAHEBOURG_MUSEUM_BUILDING, MAHEBOURG_ANCHOR, MAHEBOURG_CANNON, MAHEBOURG_NAVAL],
    activityImages: [
      MAHEBOURG_CANNON,
      MAHEBOURG_ANCHOR,
      MAHEBOURG_NAVAL,
      MAHEBOURG_STREET,
      MAHEBOURG_RAIL,
    ],
    externalBookingUrl: "https://mauritiusmuseums.govmu.org/mauritiusmuseums/",
    externalBookingDomain: "mauritiusmuseums.govmu.org",
    nearbySlugs: ["blue-bay-marine-park", "ile-aux-aigrettes", "ile-aux-cerfs", "belle-mare-beach"],
  },

  "blue-bay-marine-park": {
    slug: "blue-bay-marine-park",
    heroImage: MU(MU_PHOTOS.snorkellingBlueBay, 1920),
    // Location / Time Needed / Beach Access / Boat Trips / Protected Since / Best For
    quickInfoIcons: ["MapPin", "Clock", "Ticket", "Compass", "Leaf", "Star"],
    discoverImage: BLUE_BAY_LAGOON,
    whyVisitImages: [MU(MU_PHOTOS.snorkellingBlueBay, 1200), BRAIN_CORAL_GENERIC, BLUE_BAY_LAGOON, MU(MU_PHOTOS.flatIsland, 1200)],
    crossSell: [
      { image: MU(MU_PHOTOS.snorkellingBlueBay, 1600), href: "/activities/underwater-walk" },
      { image: MANGROVE_CARD, href: "/activities/mangrove-kayaking" },
    ],
    activityImages: [
      MU(MU_PHOTOS.snorkellingBlueBay, 1200),
      BLUE_BAY_LAGOON,
      MU(MU_PHOTOS.islandCoast, 1200),
      GREEN_TURTLE_GENERIC,
      MU(MU_PHOTOS.flatIsland, 1200),
    ],
    // "What Lives in the Park" — brain coral / reef fish / green turtles / seagrass & mangrove
    encounterImages: [BRAIN_CORAL_GENERIC, MU(MU_PHOTOS.snorkellingBlueBay, 1200), GREEN_TURTLE_GENERIC, MU(MU_PHOTOS.greenCoast, 1200)],
    conservationImage: BLUE_BAY_LAGOON,
    nearbySlugs: ["ile-aux-aigrettes", "mahebourg-history-museum", "ile-aux-cerfs", "belle-mare-beach"],
  },

  "ile-aux-aigrettes": {
    slug: "ile-aux-aigrettes",
    heroImage: ILE_AUX_AIGRETTES_OFFSHORE,
    // Location / Time Needed / Access / Boat Crossing / Managed By / Best For
    quickInfoIcons: ["MapPin", "Clock", "Ticket", "Compass", "Users", "Star"],
    discoverImage: ILE_AUX_AIGRETTES_ISLAND,
    // Why Visit — Species Back From the Brink / The Last Coastal Forest / Giant Tortoises
    // with a Job / Guided by People Who Know It (the reserve's landing dock, where every
    // guided visit starts, instead of a skink that belongs to the species grid below).
    whyVisitImages: [PINK_PIGEON, ILE_AUX_AIGRETTES_FOREST, IAA_TORTOISE, IAA_DOCK],
    // No "What You'll Do on the Island" grid: its five cards repeated the species grid
    // below (tortoises, endemic birds, ebony) and the visiting notes (guided walk, boat
    // crossing), and reused the same five photographs to do it.
    // "Species You May Encounter" — pink pigeon / tortoise / skink / olive white-eye / ebony forest
    encounterImages: [
      PINK_PIGEON,
      IAA_TORTOISE,
      TELFAIR_SKINK,
      MU_OLIVE_WHITE_EYE,
      ILE_AUX_AIGRETTES_FOREST,
    ],
    conservationImage: ILE_AUX_AIGRETTES_FOREST,
    externalBookingUrl: "https://www.mauritian-wildlife.org/Ileauxaigrettes",
    externalBookingDomain: "mauritian-wildlife.org",
    nearbySlugs: ["blue-bay-marine-park", "mahebourg-history-museum", "ile-aux-cerfs", "belle-mare-beach"],
  },

  "ile-aux-cerfs": {
    slug: "ile-aux-cerfs",
    heroImage: ILE_AUX_CERFS_AERIAL,
    // Location / Time Needed / Access / Island Size / Best For / Facilities
    quickInfoIcons: ["MapPin", "Clock", "Compass", "Trees", "Star", "Leaf"],
    discoverImage: ILE_AUX_CERFS_BEACH,
    whyVisitImages: [ILE_AUX_CERFS_LAGOON, ILE_AUX_CERFS_AERIAL, IAC_SHORE, IAC_ISLAND],
    crossSell: [
      { image: MU(MU_PHOTOS.parasailingGeneric, 1600), href: "/activities/parasailing" },
      { image: MU(MU_PHOTOS.snorkellingBlueBay, 1600), href: "/activities/underwater-walk" },
    ],
    activityImages: [
      ILE_AUX_CERFS_BEACH,
      ILE_AUX_CERFS_LAGOON,
      IAC_ISLAND,
      MU(MU_PHOTOS.paradisBCR, 1200),
      ILE_AUX_CERFS_FLAMBOYANT,
      GRSE_1,
    ],
    highlightImages: [ILE_AUX_CERFS_AERIAL, ILE_AUX_CERFS_LAGOON, ILE_AUX_CERFS_FLAMBOYANT],
    nearbySlugs: ["grse-waterfall", "belle-mare-beach", "blue-bay-marine-park", "mahebourg-history-museum"],
  },

  "grse-waterfall": {
    slug: "grse-waterfall",
    heroImage: GRSE_1,
    // Location / Time Needed / Access / Cost / Best For / Combines With
    quickInfoIcons: ["MapPin", "Clock", "Compass", "Ticket", "Star", "Footprints"],
    discoverImage: GRSE_2,
    // Every card below now has its own photograph. Previously GRSE_2, GRSE_3, GRSE_4 and the
    // macaque were each shared by two or three cards across the page.
    // Why Visit — Seen from the Water / River Meets Lagoon / Wild Macaques
    whyVisitImages: [GRSE_3, GRSE_4, MAURITIUS_MACAQUE],
    // What to Expect — Boat Approach / Photograph the Fall / Look for Macaques / Take in the Estuary
    activityImages: [GRSE_BOAT_APPROACH, GRSE_CLOSEUP, MU_MACAQUE_TROOP, GRSE_GORGE],
    // On the River — Longest River / Estuary Banks / Resident Macaques
    highlightImages: [GRSE_1, GRSE_2, MAURITIUS_MACAQUE_2],
    nearbySlugs: ["ile-aux-cerfs", "belle-mare-beach", "blue-bay-marine-park", "mahebourg-history-museum"],
  },

  // ══ West Tour — none of these three had a dedicated page ════════════════════

  "flic-en-flac-beach": {
    slug: "flic-en-flac-beach",
    heroImage: MU(MU_PHOTOS.flicEnFlac, 1920),
    // Location / Time Needed / Entrance / Best For / Lagoon / Facilities
    quickInfoIcons: ["MapPin", "Clock", "Ticket", "Star", "Compass", "Leaf"],
    discoverImage: MU(MU_PHOTOS.flicEnFlacCity, 1600),
    whyVisitImages: [
      MU(MU_PHOTOS.mauritiusSunset, 1200),
      MU(MU_PHOTOS.flicEnFlac, 1200),
      MU(MU_PHOTOS.snorkellingBlueBay, 1200),
      MU(MU_PHOTOS.dinarobinPalms, 1200),
    ],
    crossSell: [
      { image: MU(MU_PHOTOS.dolphinsTamarin, 1600), href: "/activities/dolphin-encounter" },
      { image: MU(MU_PHOTOS.parasailingGeneric, 1600), href: "/activities/parasailing" },
    ],
    activityImages: [
      MU(MU_PHOTOS.flicEnFlac, 1200),
      MU(MU_PHOTOS.snorkellingBlueBay, 1200),
      MU(MU_PHOTOS.mauritiusSunset, 1200),
      MU(MU_PHOTOS.underwaterWaterfall, 1200),
      MU(MU_PHOTOS.flicEnFlacCity, 1200),
      MU(MU_PHOTOS.dinarobinPalms, 1200),
    ],
    highlightImages: [MU(MU_PHOTOS.dinarobinPalms, 1200), MU(MU_PHOTOS.snorkellingBlueBay, 1200), MU(MU_PHOTOS.mauritiusSunset, 1200)],
    nearbySlugs: ["tamarin-bay", "casela-world-of-adventures", "le-morne-brabant", "black-river-gorges"],
  },

  "casela-world-of-adventures": {
    slug: "casela-world-of-adventures",
    heroImage: MU(MU_PHOTOS.casela, 1920),
    // Location / Time Needed / Opening Hours / Tickets / Best For / Closed
    quickInfoIcons: ["MapPin", "Clock", "Calendar", "Ticket", "Star", "Compass"],
    discoverImage: CASELA_PARK_1,
    whyVisitImages: [CASELA_PARK_1, CASELA_ZEBRAS, CASELA_LANDSCAPE, MU(MU_PHOTOS.casela, 1200)],
    // African Safari / Bird Kingdom / Predator Viewing / Toboggan / Quads / Family Zone.
    // The three animal cards show animals: Casela's own zebras, its ostrich, and a serval
    // (one of the small cats named on the Predator Viewing card) in place of a park view.
    activityImages: [
      CASELA_ZEBRAS,
      MU(MU_PHOTOS.casela, 1200),
      SERVAL,
      CASELA_VIEW,
      CASELA_BIG_TREE,
      CASELA_PARK_3,
    ],
    // "Close Animal Encounters" — big cats / rhino / giraffe / small cats. Each card now
    // shows the animal it names instead of a general park view: the rhinos are Casela's
    // own, the other three are genuine photos of the species (see the note by LION_MALE).
    encounterImages: [LION_MALE, CASELA_RHINOS, GIRAFFE_HEAD, CHEETAH_PORTRAIT],
    externalBookingUrl: "https://caselaparks.com/",
    externalBookingDomain: "caselaparks.com",
    nearbySlugs: ["flic-en-flac-beach", "tamarin-bay", "black-river-gorges", "le-morne-brabant"],
  },

  "tamarin-bay": {
    slug: "tamarin-bay",
    heroImage: MU(MU_PHOTOS.dolphinsTamarin, 1920),
    // Location / Time Needed / Beach Access / Dolphin Trips / Best For / Swimming
    quickInfoIcons: ["MapPin", "Clock", "Ticket", "Compass", "Star", "Leaf"],
    // Overview — Tamarin Bay itself: the river mouth, the shoreline and Montagne du Rempart
    // behind it, rather than the salt pans (which stay below on their own card).
    discoverImage: TAMARIN_BAY,
    whyVisitImages: [
      MU(MU_PHOTOS.dolphinsTamarin, 1200),
      MU(MU_PHOTOS.rockyBeach, 1200),
      TAMARIN_SALT_FIELDS,
      MU(MU_PHOTOS.coastForest, 1200),
    ],
    crossSell: [
      { image: MU(MU_PHOTOS.dolphinsTamarin, 1600), href: "/activities/dolphin-encounter" },
      { image: MU(MU_PHOTOS.parasailingGeneric, 1600), href: "/activities/parasailing" },
    ],
    activityImages: [
      MU(MU_PHOTOS.dolphinsTamarin, 1200),
      MU(MU_PHOTOS.rockyBeach, 1200),
      TAMARIN_SALT_FIELDS,
      MU(MU_PHOTOS.coastForest, 1200),
      MU(MU_PHOTOS.mauritiusSunset, 1200),
    ],
    // "Watching Dolphins the Right Way" responsible-wildlife section
    conservationImage: MU(MU_PHOTOS.dolphinsTamarin, 1600),
    nearbySlugs: ["flic-en-flac-beach", "casela-world-of-adventures", "le-morne-brabant", "black-river-gorges"],
  },

  "caudan-waterfront": {
    slug: "caudan-waterfront",
    heroImage: CAUDAN_HARBOUR,
    // Location / Time Needed / Entrance / Best For / Known For / Opening
    quickInfoIcons: ["MapPin", "Clock", "Ticket", "Star", "Compass", "Calendar"],
    discoverImage: PORT_LOUIS_PHOTOS.caudanWaterfront,
    whyVisitImages: [CAUDAN_UMBRELLAS_MALL, CAUDAN_HARBOUR, CAUDAN_ARTS_CENTRE, CAUDAN_PLAZA_2],
    // No "What to See" grid: five of its six cards restated Why Visit and How to Spend
    // Your Time (arts centre, craft market, quays, promenade) or the history in Discover
    // (the old observatory). The one thing it alone named — the coloured umbrella walkway —
    // has moved into the Why Visit card about getting your bearings.
    experienceImage: CAUDAN_PORT_LOUIS_WF,
    activityImages: [
      CAUDAN_PLAZA_2,
      CAUDAN_UMBRELLAS_MALL,
      CAUDAN_QUAY,
      CAUDAN_BOOKSHOP,
      CAUDAN_2020,
      CAUDAN_HARBOUR,
    ],
    // Caudan opened in the 1990s on reclaimed dockland — short timeline, not a colonial-era site.
    highlightImages: [CAUDAN_UMBRELLAS, CAUDAN_QUAY, CAUDAN_HARBOUR],
    waterfalls: [
      { image: PORT_LOUIS_PHOTOS.centralMarket, href: "/places/port-louis#experience" },
      { image: PORT_LOUIS_PHOTOS.aapravasiGhat, href: "/places/aapravasi-ghat" },
      { image: CITADEL_PHOTOS.heroAerial, href: "/places/citadel-fortress" },
      { image: PORT_LOUIS_PHOTOS.chinatown, href: "/places/port-louis" },
    ],
    // No entrance fee and no single operator to link to — the site is an open public precinct.
    parentPlaceSlug: "port-louis",
    nearbySlugs: ["port-louis", "citadel-fortress", "aapravasi-ghat", "pamplemousses-botanical-garden", "grand-baie"],
  },

  "aapravasi-ghat": {
    slug: "aapravasi-ghat",
    heroImage: AG_02,
    // Location / Time Needed / Entrance / Best For / Status / Inscribed
    quickInfoIcons: ["MapPin", "Clock", "Ticket", "Star", "Trophy", "Calendar"],
    discoverImage: PORT_LOUIS_PHOTOS.aapravasiGhat,
    whyVisitImages: [AG_Z1, AG_MUSEUM_WIDE, AG_COLLECTION, AG_MONUMENT],
    featuredAttractions: [
      { image: AG_Z1 },
      { image: AG_03 },
      { image: AG_04 },
      { image: AG_MUSEUM_WIDE },
      { image: AG_COLLECTION },
      { image: AG_27 },
    ],
    experienceImage: AG_Z2,
    activityImages: [AG_06, AG_10, AG_42, AG_50, AG_52],
    highlightImages: [AG_59, AG_Z4, AG_MONUMENT],
    // Managed by the Aapravasi Ghat Trust Fund, which publishes current visiting information.
    externalBookingUrl: "https://aapravasighat.org/",
    externalBookingDomain: "aapravasighat.org",
    parentPlaceSlug: "port-louis",
    nearbySlugs: ["port-louis", "caudan-waterfront", "citadel-fortress", "pamplemousses-botanical-garden", "grand-baie"],
  },

  pereybere: {
    slug: "pereybere",
    heroImage: PB_PLAGE,
    // Location / Time Needed / Entrance / Best For / Lagoon / Facilities
    quickInfoIcons: ["MapPin", "Clock", "Ticket", "Star", "Compass", "Trees"],
    discoverImage: PB_Z1,
    whyVisitImages: [PB_Z2, PB_PANO, PB_Z3, PB_STREET],
    crossSell: [
      { image: MU(MU_PHOTOS.snorkellingBlueBay, 1600), href: "/activities/underwater-walk" },
      { image: MU(MU_PHOTOS.catamaran, 1600), href: "/activities/catamaran-cruise" },
    ],
    activityImages: [PB_PLAGE, PB_Z1, PB_PANO, PB_STREET, PB_Z3, PB_VIEW],
    highlightImages: [PB_Z2, PB_VIEW, PB_PANO],
    nearbySlugs: ["grand-baie", "cap-malheureux", "mont-choisy", "trou-aux-biches"],
  },

  "mont-choisy": {
    slug: "mont-choisy",
    heroImage: MC_AERIAL_BOTH,
    // Location / Time Needed / Entrance / Best For / Beach Length / Facilities
    quickInfoIcons: ["MapPin", "Clock", "Ticket", "Star", "Compass", "Trees"],
    discoverImage: MC_Z1,
    whyVisitImages: [MC_CHILLING, MC_Z2, MC_SUNSET, MC_GUESTS],
    featuredAttractions: [
      { image: MC_PUBLIC_BEACH },
      { image: MC_CHILLING },
      { image: MC_SUBMARINE },
      { image: MC_YACHT },
    ],
    crossSell: [
      { image: MU(MU_PHOTOS.catamaran, 1600), href: "/activities/catamaran-cruise" },
      { image: MU(MU_PHOTOS.parasailingGeneric, 1600), href: "/activities/parasailing" },
    ],
    activityImages: [MC_Z1, MC_GUESTS, MC_Z4, MC_SUBMARINE, MC_SUNSET, MC_FENOUS],
    highlightImages: [MC_SUNSET, MC_AERIAL_BOTH, MC_Z2],
    nearbySlugs: ["trou-aux-biches", "grand-baie", "pereybere", "cap-malheureux"],
  },

  "trou-aux-biches": {
    slug: "trou-aux-biches",
    heroImage: TB_BEACH_AERIAL,
    // Location / Time Needed / Entrance / Best For / Lagoon / Facilities
    quickInfoIcons: ["MapPin", "Clock", "Ticket", "Star", "Compass", "Trees"],
    discoverImage: TB_TURQUOISE,
    whyVisitImages: [TB_TURQUOISE, TB_DIVING_PLATFORM, TB_SUNSET, TB_DAENIKEN],
    featuredAttractions: [
      { image: TB_BEACH_NORTH },
      { image: TB_DIVING_PLATFORM },
      { image: TB_YACHTS },
      { image: TB_VOLLEYBALL },
      { image: TB_WATERSKI },
      { image: TB_SUNSET },
    ],
    experienceImage: TB_COASTLINE,
    crossSell: [
      { image: MU(MU_PHOTOS.snorkellingBlueBay, 1600), href: "/activities/underwater-walk" },
      { image: MU(MU_PHOTOS.catamaran, 1600), href: "/activities/catamaran-cruise" },
    ],
    activityImages: [TB_TURQUOISE, TB_DIVING_PLATFORM, TB_WATERSKI, TB_YACHTS, TB_VOLLEYBALL, TB_BEACH_SOUTH],
    highlightImages: [TB_SUNSET, TB_AERIAL, TB_LANDSCAPE],
    nearbySlugs: ["mont-choisy", "grand-baie", "pereybere", "cap-malheureux"],
  },
};
