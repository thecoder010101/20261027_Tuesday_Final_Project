# 프로젝트 작업 규칙

- 이 프로젝트는 Vite 기반의 vanilla JavaScript 프로젝트다.
- HTML, CSS, JavaScript 코드는 각각 별도의 파일로 작성한다.
- 페이지의 정적 HTML 구조는 루트의 `index.html`에 작성한다. JavaScript 파일 안의 HTML 문자열로 페이지 구조를 작성하지 않는다.
- 애플리케이션 CSS와 JavaScript 파일은 `src/` 폴더에 둔다. 기본 파일은 `src/style.css`와 `src/main.js`다.
- HTML에 인라인 스타일, 인라인 JavaScript, 인라인 이벤트 핸들러를 작성하지 않는다. 동작과 이벤트 처리는 JavaScript 파일에서 구현한다.
- `vite.config.js` 같은 빌드 설정 파일은 프로젝트 루트에 둔다. Vite의 기본 `index.html` 진입점을 사용하고 설정을 단순하게 유지한다.
- 외부 JavaScript 라이브러리는 `npm install`로 설치하고 모듈로 가져온다. CDN의 스크립트로 불러오지 않는다.
- 의존성 변경은 `package.json`과 `package-lock.json`에 반영한다.
- 프로젝트는 GitHub에 업로드한 뒤 Netlify로 배포한다. 빌드 명령은 `npm run build`이고 결과물 폴더는 `dist`다.
- `node_modules/`와 `dist/`는 Git에 커밋하지 않는다.
