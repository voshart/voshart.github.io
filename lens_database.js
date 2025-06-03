// File: lens_database.js

// --- Lens and Camera System Data ---
const LENSES_BY_SYSTEM = {
    'sony_e_ff': {
        systemName: "Sony E (Full Frame)", flangeDistance: 18, sensorWidth: 36, sensorHeight: 24, typicalMegapixels: 45,
        lenses: {
            'laowa_25mm_f2_8_2_5_5x_ultra_macro_2_5x': { name: "Venus Laowa 25mm f/2.8 2.5-5X Ultra Macro (at 2.5x)", f: 25, f_nominal_aperture: 2.8, lensResolution_lp_mm: null, NM: 2.5, PL: 82, MFD: 234, d_P2_front_mm: -10, reversedMagEstimateManual: null, reversedApertureControlNotes: "Manual aperture. Not designed for reversal.", suitabilityManualReversalRating: "Not Applicable" },
            'laowa_25mm_f2_8_2_5_5x_ultra_macro_5_0x': { name: "Venus Laowa 25mm f/2.8 2.5-5X Ultra Macro (at 5.0x)", f: 25, f_nominal_aperture: 2.8, lensResolution_lp_mm: null, NM: 5.0, PL: 137, MFD: 173, d_P2_front_mm: -10, reversedMagEstimateManual: null, reversedApertureControlNotes: "Manual aperture. Not designed for reversal.", suitabilityManualReversalRating: "Not Applicable" },
            'sony_fe_90mm_f2_8_macro_g_oss': { name: "Sony FE 90mm f/2.8 Macro G OSS", f: 90, f_nominal_aperture: 2.8, lensResolution_lp_mm: null, NM: 1.0, PL: 130.5 - 18, MFD: 280, d_P2_front_mm: (90*(1+1/1)) - 149.5, reversedMagEstimateManual: "~0.6:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'sigma_70mm_f2_8_dg_macro_art_se': { name: "Sigma 70mm f/2.8 DG Macro Art (Sony E)", f: 70, f_nominal_aperture: 2.8, lensResolution_lp_mm: null, NM: 1.0, PL: 105.8, MFD: 258, d_P2_front_mm: (70*(1+1/1)) - 126.55, reversedMagEstimateManual: "~0.8:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'sigma_105mm_f2_8_dg_dn_macro_art_se': { name: "Sigma 105mm F2.8 DG DN Macro Art (Sony E)", f: 105, f_nominal_aperture: 2.8, lensResolution_lp_mm: null, NM: 1.0, PL: 133.6, MFD: 295, d_P2_front_mm: (105*(1+1/1)) - 141, reversedMagEstimateManual: "~0.5:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'laowa_100mm_f2_8_2x_macro_sony_fe': { name: "Laowa 100mm f/2.8 2x Ultra Macro APO (Sony FE)", f: 100, f_nominal_aperture: 2.8, lensResolution_lp_mm: null, NM: 2.0, PL: 155, MFD: 247, d_P2_front_mm: (100*(1+1/2.0)) - 80, reversedMagEstimateManual: "~0.5:1", reversedApertureControlNotes: "Manual aperture ring present", suitabilityManualReversalRating: "Good" },
            'sony_fe_50mm_f2_8_macro': { name: "Sony FE 50mm f/2.8 Macro", f: 50, f_nominal_aperture: 2.8, lensResolution_lp_mm: null, NM: 1.0, PL: 71, MFD: 160, d_P2_front_mm: (50*(1+1/1)) - 36, reversedMagEstimateManual: "~1.1:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'sony_fe_20mm_f1_8_g_ext_poc': { name: "Sony FE 20mm f/1.8 G", f: 20, f_nominal_aperture: 1.8, lensResolution_lp_mm: null, NM: 0.2, PL: 84.7, MFD: 190, d_P2_front_mm: null, reversedMagEstimateManual: "~3.2:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'sony_fe_40mm_f2_5_g_ext_poc': { name: "Sony FE 40mm f/2.5 G", f: 40, f_nominal_aperture: 2.5, lensResolution_lp_mm: null, NM: 0.2, PL: 45, MFD: 280, d_P2_front_mm: null, reversedMagEstimateManual: "~1.5:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'sony_fe_55mm_f1_8_za': { name: "Sony Sonnar T* FE 55mm f/1.8 ZA", f: 55, f_nominal_aperture: 1.8, lensResolution_lp_mm: null, NM: 0.14, PL: 70.5, MFD: 500, d_P2_front_mm: null, reversedMagEstimateManual: "~1.0:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'sony_fe_28mm_f2': { name: "Sony FE 28mm f/2", f: 28, f_nominal_aperture: 2.0, lensResolution_lp_mm: null, NM: 0.13, PL: 64, MFD: 290, d_P2_front_mm: null, reversedMagEstimateManual: "~2.4:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'sony_fe_12_24mm_f4_g': { name: "Sony FE 12-24mm f/4 G", f: 12, f_nominal_aperture: 4.0, lensResolution_lp_mm: null, NM: 0.14, PL: 117.4, MFD: 280, d_P2_front_mm: null, reversedMagEstimateManual: "~4.5:1 (at 12mm), ~2.0:1 (at 24mm)", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" }
        }
    },
    'nikon_z_ff': {
        systemName: "Nikon Z (Full Frame)", flangeDistance: 16, sensorWidth: 36, sensorHeight: 24, typicalMegapixels: 45,
        lenses: {
            'laowa_25mm_f2_8_2_5_5x_ultra_macro_2_5x_nz': { name: "Venus Laowa 25mm f/2.8 2.5-5X Ultra Macro (at 2.5x)", f: 25, f_nominal_aperture: 2.8, lensResolution_lp_mm: null, NM: 2.5, PL: 82, MFD: 234, d_P2_front_mm: -10, reversedMagEstimateManual: null, reversedApertureControlNotes: "Manual aperture. Not designed for reversal.", suitabilityManualReversalRating: "Not Applicable" },
            'laowa_25mm_f2_8_2_5_5x_ultra_macro_5_0x_nz': { name: "Venus Laowa 25mm f/2.8 2.5-5X Ultra Macro (at 5.0x)", f: 25, f_nominal_aperture: 2.8, lensResolution_lp_mm: null, NM: 5.0, PL: 137, MFD: 173, d_P2_front_mm: -10, reversedMagEstimateManual: null, reversedApertureControlNotes: "Manual aperture. Not designed for reversal.", suitabilityManualReversalRating: "Not Applicable" },
            // ... (other Nikon Z FF lenses from your original data)
            'nikon_z_mc_105mm_f2_8_vr_s': { name: "Nikon NIKKOR Z MC 105mm f/2.8 VR S", f: 105, f_nominal_aperture: 2.8, lensResolution_lp_mm: null, NM: 1.0, PL: 140, MFD: 290, d_P2_front_mm: (105*(1+1/1)) - 150, reversedMagEstimateManual: "~0.5:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'nikon_z_mc_50mm_f2_8': { name: "Nikon NIKKOR Z MC 50mm f/2.8", f: 50, f_nominal_aperture: 2.8, lensResolution_lp_mm: null, NM: 1.0, PL: 66, MFD: 160, d_P2_front_mm: (50*(1+1/1)) - 56, reversedMagEstimateManual: "~1.1:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'laowa_100mm_f2_8_2x_macro_nikon_z': { name: "Laowa 100mm f/2.8 2X Ultra Macro APO (Nikon Z)", f: 100, f_nominal_aperture: 2.8, lensResolution_lp_mm: null, NM: 2.0, PL: 155, MFD: 247, d_P2_front_mm: (100*(1+1/2))-80, reversedMagEstimateManual: "~0.5:1", reversedApertureControlNotes: "Manual aperture ring present", suitabilityManualReversalRating: "Good" },
            'nikon_z_50mm_f1_8_s': { name: "Nikon NIKKOR Z 50mm f/1.8 S", f: 50, f_nominal_aperture: 1.8, lensResolution_lp_mm: null, NM: 0.15, PL: 86.5, MFD: 400, d_P2_front_mm: null, reversedMagEstimateManual: "~1.1:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'nikon_z_85mm_f1_8_s': { name: "Nikon NIKKOR Z 85mm f/1.8 S", f: 85, f_nominal_aperture: 1.8, lensResolution_lp_mm: null, NM: 0.12, PL: 99, MFD: 800, d_P2_front_mm: null, reversedMagEstimateManual: "~0.6:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'nikon_z_20mm_f1_8_s_ext_poc': { name: "Nikon NIKKOR Z 20mm f/1.8 S", f: 20, f_nominal_aperture: 1.8, lensResolution_lp_mm: null, NM: 0.19, PL: 108.5, MFD: 200, d_P2_front_mm: null, reversedMagEstimateManual: "~3.2:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'nikon_z_40mm_f2_ext_poc': { name: "Nikon NIKKOR Z 40mm f/2", f: 40, f_nominal_aperture: 2.0, lensResolution_lp_mm: null, NM: 0.17, PL: 45.5, MFD: 290, d_P2_front_mm: null, reversedMagEstimateManual: "~1.5:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'nikon_z_24_70mm_f4_s': { name: "Nikon NIKKOR Z 24-70mm f/4 S", f: 24, f_nominal_aperture: 4.0, lensResolution_lp_mm: null, NM: 0.3, PL: 88.5, MFD: 300, d_P2_front_mm: null, reversedMagEstimateManual: "~2.5:1 (at 24mm), ~0.8:1 (at 70mm)", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" }
        }
    },
    'canon_rf_ff': {
        systemName: "Canon RF (Full Frame)", flangeDistance: 20, sensorWidth: 36, sensorHeight: 24, typicalMegapixels: 45,
        lenses: {
            'laowa_25mm_f2_8_2_5_5x_ultra_macro_2_5x_crf': { name: "Venus Laowa 25mm f/2.8 2.5-5X Ultra Macro (at 2.5x)", f: 25, f_nominal_aperture: 2.8, lensResolution_lp_mm: null, NM: 2.5, PL: 82, MFD: 234, d_P2_front_mm: -10, reversedMagEstimateManual: null, reversedApertureControlNotes: "Manual aperture. Not designed for reversal.", suitabilityManualReversalRating: "Not Applicable" },
            'laowa_25mm_f2_8_2_5_5x_ultra_macro_5_0x_crf': { name: "Venus Laowa 25mm f/2.8 2.5-5X Ultra Macro (at 5.0x)", f: 25, f_nominal_aperture: 2.8, lensResolution_lp_mm: null, NM: 5.0, PL: 137, MFD: 173, d_P2_front_mm: -10, reversedMagEstimateManual: null, reversedApertureControlNotes: "Manual aperture. Not designed for reversal.", suitabilityManualReversalRating: "Not Applicable" },
            // ... (other Canon RF FF lenses from your original data)
            'canon_rf_100mm_f2_8l_macro_is_usm': { name: "Canon RF 100mm F2.8L Macro IS USM", f: 100, f_nominal_aperture: 2.8, lensResolution_lp_mm: null, NM: 1.4, PL: 148, MFD: 260, d_P2_front_mm: (100 * (1 + 1/1.4)) - 85, reversedMagEstimateManual: "~0.5:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'canon_rf_85mm_f2_macro_is_stm': { name: "Canon RF 85mm F2 Macro IS STM", f: 85, f_nominal_aperture: 2.0, lensResolution_lp_mm: null, NM: 0.5, PL: 90.5, MFD: 350, d_P2_front_mm: (85*(1+1/0.5)) - 231.7, reversedMagEstimateManual: "~0.6:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'canon_rf_35mm_f1_8_macro_is_stm': { name: "Canon RF 35mm F1.8 Macro IS STM", f: 35, f_nominal_aperture: 1.8, lensResolution_lp_mm: null, NM: 0.5, PL: 62.8, MFD: 170, d_P2_front_mm: (35*(1+1/0.5)) - 89.7, reversedMagEstimateManual: "~1.8:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'laowa_85mm_f5_6_2x_macro_canon_rf': { name: "Laowa 85mm f/5.6 2x Ultra Macro APO (Canon RF)", f: 85, f_nominal_aperture: 5.6, lensResolution_lp_mm: null, NM: 2.0, PL: 81, MFD: 163, d_P2_front_mm: (85*(1+1/2)) - 60, reversedMagEstimateManual: "~0.6:1", reversedApertureControlNotes: "Manual aperture ring present", suitabilityManualReversalRating: "Good" },
            'canon_rf_50mm_f1_2l_usm': { name: "Canon RF 50mm F1.2L USM", f: 50, f_nominal_aperture: 1.2, lensResolution_lp_mm: null, NM: 0.19, PL: 108.0, MFD: 400, d_P2_front_mm: null, reversedMagEstimateManual: "~1.1:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'canon_rf_16mm_f2_8_stm_ext_poc': { name: "Canon RF 16mm f/2.8 STM", f: 16, f_nominal_aperture: 2.8, lensResolution_lp_mm: null, NM: 0.26, PL: 40.1, MFD: 130, d_P2_front_mm: null, reversedMagEstimateManual: "~3.8:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" },
            'canon_rf_28mm_f2_8_stm_pancake_ext_poc': { name: "Canon RF 28mm f/2.8 STM", f: 28, f_nominal_aperture: 2.8, lensResolution_lp_mm: null, NM: 0.17, PL: 24.7, MFD: 230, d_P2_front_mm: null, reversedMagEstimateManual: "~2.4:1", reversedApertureControlNotes: "Requires compatible auto adapter for aperture control", suitabilityManualReversalRating: "Not Ideal" }
        }
    },
    'sony_e_apsc': {
        systemName: "Sony E (APS-C)", flangeDistance: 18, sensorWidth: 23.5, sensorHeight: 15.6, typicalMegapixels: 26,
        lenses: { /* ... existing Sony E APS-C lenses ... */ }
    },
    'nikon_z_apsc': {
        systemName: "Nikon Z (APS-C)", flangeDistance: 16, sensorWidth: 23.5, sensorHeight: 15.6, typicalMegapixels: 21,
        lenses: { /* ... existing Nikon Z APS-C lenses ... */ }
    },
    'canon_rf_apsc': {
        systemName: "Canon RF (APS-C)", flangeDistance: 20, sensorWidth: 22.3, sensorHeight: 14.9, typicalMegapixels: 24,
        lenses: { /* ... existing Canon RF APS-C lenses ... */ }
    },
    'm43': {
        systemName: "Micro Four Thirds", flangeDistance: 19.25, sensorWidth: 17.3, sensorHeight: 13, typicalMegapixels: 20,
        lenses: { /* ... existing M43 lenses ... */ }
    },
    'canon_ef_apsc': {
        systemName: "Canon EF-S (APS-C DSLR)", flangeDistance: 44, sensorWidth: 22.3, sensorHeight: 14.9, typicalMegapixels: 24,
        lenses: { /* ... existing Canon EF-S lenses ... */ }
    },
    'vintage_lens_ff_adaptable': {
        systemName: "Vintage Lenses (Adaptable to FF)", flangeDistance: 44, sensorWidth: 36, sensorHeight: 24, typicalMegapixels: 24,
        lenses: { /* ... existing vintage lenses ... */ }
    },
    'enlarger_lens_adaptable': {
        systemName: "Enlarger Lenses (for Bellows/Adapters)", flangeDistance: 25, sensorWidth: 36, sensorHeight: 24, typicalMegapixels: 24,
        lenses: { /* ... existing enlarger lenses ... */ }
    }
};

// --- Microscope Objective Data ---
const MICROSCOPE_OBJECTIVES_DATA = {
    'mo_4x_010_160_achro': {
        name: "4x NA 0.10 Achromat (DIN 160mm)", type: 'finite_microscope',
        M_obj: 4, NA: 0.10, standardFiniteTubeLength: 160,
        WD_obj_mm: 26.0, PL_obj_body_mm: 29.20, imageCircle_mm: 20,
        isPlan: false, theoretical_lp_mm_sensor: 74.5, sourceRef: "Edmund Optics (#33-436)"
    },
    'mo_10x_025_160_achro': {
        name: "10x NA 0.25 Achromat (DIN 160mm)", type: 'finite_microscope',
        M_obj: 10, NA: 0.25, standardFiniteTubeLength: 160,
        WD_obj_mm: 4.4, PL_obj_body_mm: 38.70, imageCircle_mm: 20,
        isPlan: false, theoretical_lp_mm_sensor: 74.5, sourceRef: "Edmund Optics (#33-437)"
    },
    'mo_40x_065_160_achro': {
        name: "40x NA 0.65 Achromat (DIN 160mm)", type: 'finite_microscope',
        M_obj: 40, NA: 0.65, standardFiniteTubeLength: 160,
        WD_obj_mm: 0.6, PL_obj_body_mm: 44.50, imageCircle_mm: 20,
        isPlan: false, theoretical_lp_mm_sensor: 48.4, sourceRef: "Edmund Optics (#36-038)"
    },
    'mo_10x_025_160_plan': {
        name: "10x NA 0.25 Plan Achromat (DIN 160mm)", type: 'finite_microscope',
        M_obj: 10, NA: 0.25, standardFiniteTubeLength: 160,
        WD_obj_mm: 1.5, PL_obj_body_mm: 44.00, imageCircle_mm: 20,
        isPlan: true, theoretical_lp_mm_sensor: 74.5, sourceRef: "Edmund Optics (#43-907)"
    },
    'mo_40x_065_160_plan': {
        name: "40x NA 0.65 Plan Achromat (DIN 160mm)", type: 'finite_microscope',
        M_obj: 40, NA: 0.65, standardFiniteTubeLength: 160,
        WD_obj_mm: 0.3, PL_obj_body_mm: 46.00, imageCircle_mm: 20,
        isPlan: true, theoretical_lp_mm_sensor: 48.4, sourceRef: "Edmund Optics (#43-908)"
    },
    'mo_10x_025_160_amscope_plan': {
        name: "10x NA 0.25 Plan Achromat (AmScope DIN 160mm)", type: 'finite_microscope',
        M_obj: 10, NA: 0.25, standardFiniteTubeLength: 160,
        WD_obj_mm: 5.84, PL_obj_body_mm: 44.00, imageCircle_mm: 19,
        isPlan: true, theoretical_lp_mm_sensor: 74.5, sourceRef: "AmScope (Representative)"
    },
    'mo_40x_065_160_amscope_plan': {
        name: "40x NA 0.65 Plan Achromat (AmScope DIN 160mm)", type: 'finite_microscope',
        M_obj: 40, NA: 0.65, standardFiniteTubeLength: 160,
        WD_obj_mm: 0.633, PL_obj_body_mm: 46.00, imageCircle_mm: 19,
        isPlan: true, theoretical_lp_mm_sensor: 48.4, sourceRef: "AmScope (Representative)"
    }
};

// --- Macro Accessory Data ---
const MACRO_ACCESSORIES_DATA = {
    'none': { name: "No Accessory", length: 0, type: 'none' },
    'et10mm': { name: "10mm Extension Tube", length: 10, type: 'tube' },
    'et12mm': { name: "12mm Extension Tube", length: 12, type: 'tube' },
    'et16mm': { name: "16mm Extension Tube", length: 16, type: 'tube' },
    'et20mm': { name: "20mm Extension Tube", length: 20, type: 'tube' },
    'et25mm': { name: "25mm Extension Tube", length: 25, type: 'tube' },
    'et36mm': { name: "36mm Extension Tube", length: 36, type: 'tube' },
    'et48mm': { name: "48mm (12+36)", length: 48, type: 'tube' },
    'et52mm': { name: "52mm (16+36)", length: 52, type: 'tube' },
    'et56mm': { name: "56mm (20+36)", length: 56, type: 'tube' },
    'et68mm': { name: "68mm (12+20+36)", length: 68, type: 'tube' },
    'et72mm': { name: "72mm (36x2)", length: 72, type: 'tube' },
    'reversal_mount': { name: "Lens Reversal Mount", length: 8, type: 'reversal', effect_note: "Magnification highly variable. Uses estimate if available." },
    'raynox_dcr_250': { name: "Raynox DCR-250 (+8 Diopter)", length: 0, type: 'diopter', power: 8, effect_note: "Adds +8 diopters of optical power." }
};

// --- Object Dimension Constants (mm) ---
const QUARTER_DIAMETER_MM = 24.26;
const RICE_LENGTH_MM = 6;
const RICE_WIDTH_MM = 1.5;
const BANANA_LENGTH_MM = 180;
const BANANA_WIDTH_MM = 35;
const TARGET_SQUARE_OUTER_MM = 1.0;
// TARGET_SQUARE_INNER_UM removed as per user request
const TARDIGRADE_LENGTH_MM = 0.4;
const TARDIGRADE_WIDTH_MM = TARDIGRADE_LENGTH_MM * (200/160); // Based on tardigrade SVG viewBox aspect ratio

// --- Practical Limit Constants ---
const MIN_PRACTICAL_OBJECT_DISTANCE_PP = 5;
const MIN_PRACTICAL_WORKING_DISTANCE = 1;