import "../styles/global.css";

// 서버 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트
// 공통 레이아웃 역할
const App = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
