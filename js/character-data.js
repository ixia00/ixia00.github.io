/* ============================================================
   character-data.js — 캐릭터 데이터 파일

   ✏️ 캐릭터 추가 방법:
   아래 배열 맨 뒤에 객체 하나 복사해서 추가해.
   character.html 에 자동으로 반영돼!

   이미지: images/characters/ 폴더에 파일 넣고 경로 입력.
   엔진 뱃지: engines 배열에 보유 엔진 넣기.
   샘플 음원: sample 에 파일 경로 입력. 없으면 "".
============================================================ */

const CHARACTER_DATA = [

  /* ✏️ 캐릭터 추가 템플릿:
  {
    id: "캐릭터영문ID",           // 영문 소문자, 띄어쓰기 없이
    name: "캐릭터 이름",
    image: "../images/characters/파일명.png",
    engines: ["V4", "V3"],       // 보유 엔진 뱃지. 순서대로 표시
    libraries: [                 // 라이브러리별 상세 정보
      {
        name: "Power",           // 라이브러리 이름 (없으면 엔진명만)
        engine: "VOCALOID4",
        range: "D2 - E5",        // 음역대. 없으면 ""
        sample: "../audio/캐릭터_Power.mp3"  // 없으면 ""
      },
      {
        name: "Native",
        engine: "VOCALOID4",
        range: "G2 - B4",
        sample: ""
      }
    ]
  },
  */

  {
    id: "gackpo",
    name: "카무이 가쿠포",
    image: "../img/cha/Gackpoidv4_Complete_boxart.webp",
    engines: ["V4 complete"],
    libraries: [
      {
        name: "Power",
        range: "G1 - G4",
        sample: "../audio/test_002_gackpo_v4_power.wav"
      },
      {
        name: "Native",
        range: "B1 - F4",
        sample: "../audio/test_003_gackpo_v4_native.wav"
      },
      {
        name: "Whisper",
        range: "A1 - F4",
        sample: "../audio/test_001_gackpo_v4_whisper.wav"
      }
    ]
  },

  {
    id: "luka",
    name: "메구리네 루카",
    image: "../img/cha/Box_lukav4x.webp",
    engines: ["V4X"],
    libraries: [
      {
        name: "EN Straight",
        range: "B2 - A4",
        sample: "../audio/test_004_luka_v4x_en_straight.wav"
      },
      {
        name: "EN Soft",
        range: "C3 - B4",
        sample: "../audio/test_005_luka_v4x_en_soft.wav"
      },
      {
        name: "Hard",
        range: "F2 - C5",
        sample: "../audio/test_006_luka_v4x_hard.wav"
      },
      {
        name: "Soft",
        range: "F2 - C5",
        sample: "../audio/test_007_luka_v4x_soft.wav"
      }
    ]
  },

  {
    id: "Lily",
    name: "Lily",
    image: "../img/cha/Lily_v3_boxart.webp",
    engines: ["V3"],
    libraries: [
      {
        name: "V3",
        range: "A2 - B4",
        sample: "../audio/test_008_lily_v3.wav"
      },
      {
        name: "Native",
        range: "G2 - C5",
        sample: "../audio/test_009_lily_native.wav"
      }
    ]
  },

  {
    id: "kiyoteru",
    name: "히야마 키요테루",
    image: "../img/cha/v4_kiyoteru_comp_box.jpg",
    engines: ["V4 complete"],
    libraries: [
      {
        name: "Natural",
        range: "B1 - B4",
        sample: "../audio/test_010_kiyoteru_v4_natural.wav"
      },
      {
        name: "Rock",
        range: "D2 - C5",
        sample: "../audio/test_011_kiyoteru_v4_rock.wav"
      }
    ]
  },

  {
    id: "kaito",
    name: "KAITO",
    image: "../img/cha/V3_KAITO_boxart.webp",
    engines: ["V3"],
    libraries: [
      {
        name: "EN",
        range: "E2 - G4",
        sample: "../audio/test_012_kaito_v3_en.wav"
      },
      {
        name: "Straight",
        range: "B1 - B4",
        sample: "../audio/test_013_kaito_v3_straight.wav"
      },
      {
        name: "Soft",
        range: "C2 - B4",
        sample: "../audio/test_014_kaito_v3_soft.wav"
      },
      {
        name: "Whisper",
        range: "C2 - A4",
        sample: "../audio/test_015_kaito_v3_whisper.wav"
      }
    ]
  },

  {
    id: "gumi",
    name: "GUMI",
    image: "../img/cha/AI_Megpoid_boxart.webp",
    engines: ["V6"],
    libraries: [
      {
        name: "V6",
        range: "D3 - C5",
        sample: "../audio/test_016_gumi_v6.wav"
      }
    ]
  },

  {
    id: "koto",
    name: "히비키 코토",
    image: "../img/cha/Hibiki_Koto_Physical.webp",
    engines: ["V6"],
    libraries: [
      {
        name: "V6",
        range: "A2 - G4",
        sample: "../audio/test_017_koto_v6.wav"
      }
    ]
  },

  {
    id: "asa",
    name: "Asa",
    image: "../img/cha/Asa_VOCALOID6_icon.webp",
    engines: ["V6"],
    libraries: [
      {
        name: "V6",
        range: "C3 - G4",
        sample: "../audio/test_018_asa_v6.wav"
      }
    ]
  },

  {
    id: "chika",
    name: "Chika",
    image: "../img/cha/Chika_boxart.webp",
    engines: ["V3"],
    libraries: [
      {
        name: "V3",
        range: "F2 - B4",
        sample: "../audio/test_019_chika_v3.wav"
      }
    ]
  },

  {
    id: "cul",
    name: "CUL",
    image: "../img/cha/Culboxart.webp",
    engines: ["V3"],
    libraries: [
      {
        name: "V3",
        range: "A2 - B4",
        sample: "../audio/test_020_cul_v3.wav"
      }
    ]
  },

  {
    id: "gachapoid",
    name: "류토(가챠포이드)",
    image: "../img/cha/Gachapoid_v3_boxart.webp",
    engines: ["V3"],
    libraries: [
      {
        name: "V3",
        range: "G2 - B4",
        sample: "../audio/test_021_ryuto_v3.wav"
      }
    ]
  },

  {
    id: "IA",
    name: "IA",
    image: "../img/cha/IA_R_boxart_inner_cover.webp",
    engines: ["V6"],
    libraries: [
      {
        name: "V6",
        range: "F2 - A4",
        sample: "../audio/test_022_ia_v6.wav"
      }
    ]
  },

  {
    id: "kokone",
    name: "kokone",
    image: "../img/cha/Kokone_boxart.webp",
    engines: ["V3"],
    libraries: [
      {
        name: "V3",
        range: "F2 - C5",
        sample: "../audio/test_023_kokone_v3.wav"
      }
    ]
  },

  {
    id: "una",
    name: "오토마치 우나",
    image: "../img/cha/Una_v6_box.webp",
    engines: ["V6 complete"],
    libraries: [
      {
        name: "spicy",
        range: "A2 - (B3)B4",
        sample: "../audio/test_024_una_v6_spicy.wav"
      },
      {
        name: "sugar",
        range: "C3 - B4",
        sample: "../audio/test_025_una_v6_sugar.wav"
      }
    ]
  },

  {
    id: "yukari",
    name: "유즈키 유카리",
    image: "../img/cha/vocaloid4_yukari_jun_box.jpg",
    engines: ["V4_JUN"],
    libraries: [
      {
        name: "JUN",
        range: "F2 - A4",
        sample: "../audio/test_026_yukari_v4_jun.wav"
      }
    ]
  },

  {
    id: "akari",
    name: "키즈나 아카리",
    image: "../img/cha/vocaloid4_akari_box.jpg",
    engines: ["V4"],
    libraries: [
      {
        name: "V4",
        range: "C3 - A4",
        sample: "../audio/test_027_akari_v4.wav"
      }
    ]
  },

  {
    id: "vy1",
    name: "vy1",
    image: "../img/cha/VY1_V5.webp",
    engines: ["V5"],
    libraries: [
      {
        name: "V5",
        range: "F2 - D5",
        sample: "../audio/test_028_vy1_v5.wav"
      }
    ]
  },
];
