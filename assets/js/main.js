// JavaScript 파일 (필요시 사용)

// Giscus 댓글 시스템 오류 처리
window.addEventListener('load', function() {
    // Giscus 스크립트 로드 확인
    setTimeout(function() {
        const giscusFrame = document.querySelector('iframe[src*="giscus.app"]');
        if (!giscusFrame) {
            const giscusContainer = document.querySelector('.giscus-container');
            if (giscusContainer) {
                const errorMsg = document.createElement('p');
                errorMsg.style.cssText = 'color: #666; text-align: center; padding: 2rem; background: #f5f5f5; border-radius: 6px;';
                errorMsg.innerHTML = '댓글 기능을 사용하려면 GitHub 저장소에서 Discussions를 활성화하고 Giscus 앱을 설치해주세요.<br><a href="https://github.com/apps/giscus" target="_blank" style="color: #2A6EF7;">Giscus 앱 설치하기</a>';
                giscusContainer.appendChild(errorMsg);
            }
        }
    }, 3000);
});

