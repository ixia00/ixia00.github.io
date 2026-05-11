/* ============================================================
   music-data.js — 커버곡 데이터 파일

   ✏️ 곡 추가 방법:
   아래 배열 맨 앞에 객체 하나 복사해서 추가해.
   홈이랑 music 페이지 둘 다 자동으로 반영돼!

   유튜브 링크: 전체 링크 그대로 붙여넣기 가능
   (https://youtu.be/... 또는 https://www.youtube.com/watch?v=... 둘 다 OK)

   없는 항목은 빈 문자열 "" 로 두면 돼. 버튼이 안 뜨게 처리해줄게.
============================================================ */

const MUSIC_DATA = [

  /* ✏️ 곡 추가 템플릿 (맨 앞에 복사해서 추가):
  {
    id: 3,
    title: "곡 제목",
    voca: "보컬로이드 이름",
    credit: "Composed by 작곡가",       // 없으면 ""
    original_title: "작곡가 — 원곡 제목",
    original_yt: "원곡 유튜브 링크",     // 없으면 ""
    original_nico: "원곡 니코동 링크",   // 없으면 ""
    cover_yt: "내 커버 유튜브 링크",     // 없으면 ""
    cover_nico: "내 커버 니코동 링크",   // 없으면 ""
    vpr1_name: "캐릭터명",              // 없으면 ""
    vpr1_url: "VPR 파일 링크",          // 없으면 ""
    vpr2_name: "",                      // 없으면 ""
    vpr2_url: "",                       // 없으면 ""
  },
  */

  {
    id: 2,
    title: "두 번째 곡 제목",
    voca: "IA",
    credit: "",
    original_title: "작곡가 — 원곡 제목",
    original_yt: "",
    original_nico: "",
    cover_yt: "",
    cover_nico: "",
    vpr1_name: "",
    vpr1_url: "",
    vpr2_name: "",
    vpr2_url: "",
  },

  {
    id: 1,
    title: "첫 번째 곡 제목",
    voca: "하츠네 미쿠",
    credit: "Composed by 작곡가",
    original_title: "작곡가 — 원곡 제목",
    original_yt: "",
    original_nico: "",
    cover_yt: "",
    cover_nico: "",
    vpr1_name: "하츠네 미쿠",
    vpr1_url: "",
    vpr2_name: "",
    vpr2_url: "",
  },

];

/* 유튜브 링크에서 영상 ID 추출 — 건드리지 않아도 돼! */
function getYtId(url) {
  if (!url) return '';
  if (url.includes('v=')) return url.split('v=')[1].split('&')[0];
  if (url.includes('youtu.be/')) return url.split('youtu.be/')[1].split('?')[0];
  return url;
}
