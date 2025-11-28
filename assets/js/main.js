// JavaScript 파일 (필요시 사용)

// Utterances 댓글 시스템 한글화 및 오류 처리
window.addEventListener('load', function() {
    // Utterances iframe 로드 확인 및 한글화
    setTimeout(function() {
        const utterancesFrame = document.querySelector('iframe[src*="utteranc.es"]');
        if (utterancesFrame) {
            // iframe에 번역 가능 속성 추가
            utterancesFrame.setAttribute('translate', 'yes');
            utterancesFrame.setAttribute('lang', 'en');
            
            // Utterances iframe이 로드되면 처리
            utterancesFrame.onload = function() {
                try {
                    // iframe 내부에 번역 힌트 추가 시도
                    const utterancesDoc = utterancesFrame.contentDocument || utterancesFrame.contentWindow.document;
                    if (utterancesDoc) {
                        // iframe 내부 HTML에 lang 속성 추가
                        const iframeHtml = utterancesDoc.documentElement;
                        if (iframeHtml) {
                            iframeHtml.setAttribute('lang', 'en');
                            iframeHtml.setAttribute('translate', 'yes');
                        }
                    }
                } catch (e) {
                    // Cross-origin 제한으로 접근 불가능할 수 있음 (정상)
                    console.log('Utterances iframe loaded - translation ready');
                }
            };
            
            // 이미 로드된 경우에도 처리
            if (utterancesFrame.contentDocument) {
                utterancesFrame.onload();
            }
        } else {
            // Utterances가 로드되지 않은 경우 안내 메시지
            setTimeout(function() {
                const container = document.getElementById('utterances-container');
                if (container && !container.querySelector('iframe')) {
                    const errorMsg = document.createElement('div');
                    errorMsg.className = 'comments-error';
                    errorMsg.innerHTML = `
                        <div style="color: #666; text-align: center; padding: 2rem; background: #f5f5f5; border-radius: 6px; margin-top: 1rem;">
                            <p style="margin-bottom: 1rem; font-weight: 600;">댓글 기능을 사용하려면 GitHub 저장소에 Utterances 앱을 설치해주세요.</p>
                            <p style="margin-bottom: 1rem; font-size: 0.9rem; color: #888;">또는 크롬 브라우저의 자동 번역 기능을 사용하여 영어 인터페이스를 한글로 번역할 수 있습니다.</p>
                            <a href="https://github.com/apps/utterances" target="_blank" style="color: #2A6EF7; text-decoration: none; font-weight: 600; display: inline-block; margin-top: 0.5rem;">Utterances 앱 설치하기 →</a>
                        </div>
                    `;
                    container.appendChild(errorMsg);
                }
            }, 3000);
        }
    }, 1000);
    
    // 크롬 번역 힌트 추가
    if (navigator.userAgent.indexOf('Chrome') > -1) {
        document.body.setAttribute('translate', 'yes');
    }
});

