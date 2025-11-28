// JavaScript 파일 (필요시 사용)

// Utterances 댓글 시스템 한글화 및 오류 처리
window.addEventListener('load', function() {
    // Utterances iframe 로드 확인 및 한글화
    setTimeout(function() {
        const utterancesFrame = document.querySelector('iframe[src*="utteranc.es"]');
        if (utterancesFrame) {
            // Utterances iframe이 로드되면 한글 메시지 추가
            utterancesFrame.onload = function() {
                try {
                    const utterancesDoc = utterancesFrame.contentDocument || utterancesFrame.contentWindow.document;
                    // 한글 인터페이스 요소 찾아서 변경
                    const placeholder = utterancesDoc.querySelector('textarea[placeholder]');
                    if (placeholder && placeholder.placeholder.includes('Leave a comment')) {
                        placeholder.placeholder = '댓글을 남겨주세요...';
                    }
                } catch (e) {
                    // Cross-origin 제한으로 접근 불가능할 수 있음 (정상)
                    console.log('Utterances iframe loaded');
                }
            };
        } else {
            // Utterances가 로드되지 않은 경우 안내 메시지
            const container = document.getElementById('utterances-container');
            if (container && !container.querySelector('iframe')) {
                const errorMsg = document.createElement('div');
                errorMsg.style.cssText = 'color: #666; text-align: center; padding: 2rem; background: #f5f5f5; border-radius: 6px; margin-top: 1rem;';
                errorMsg.innerHTML = '<p style="margin-bottom: 1rem;">댓글 기능을 사용하려면 GitHub 저장소에 Utterances 앱을 설치해주세요.</p><a href="https://github.com/apps/utterances" target="_blank" style="color: #2A6EF7; text-decoration: none; font-weight: 600;">Utterances 앱 설치하기 →</a>';
                container.appendChild(errorMsg);
            }
        }
    }, 2000);
});

