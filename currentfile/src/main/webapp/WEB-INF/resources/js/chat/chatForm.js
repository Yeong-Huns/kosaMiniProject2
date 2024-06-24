var userId = 'userA'; // 현재 로그인한 사용자 ID로 설정

function addDummyChatRooms() {
    var dummyChatRooms = [
        { chatroomno: 1, name: "마라탕후루", lastMessage: "Css참고", time: "오전 1:17", avatar: "영" },
        { chatroomno: 2, name: "손영태", lastMessage: "왕 수고하셨습니다", time: "어제", avatar: "무" },
        { chatroomno: 3, name: "혜화 도담", lastMessage: "파일: [000] agile_2024-06-20.pdf", time: "어제", avatar: "수" },
        { chatroomno: 4, name: "전민재", lastMessage: "https://www.erdcloud.com/d/6WcLPoprbjLq4Qm5t", time: "어제", avatar: "김" },
        { chatroomno: 5, name: "이창섭", lastMessage: "아 약간 지금 저번에 막걸리 뽕임 컨디션 올라옴", time: "어제", avatar: "." },
        { chatroomno: 6, name: "영후이", lastMessage: "Css참고", time: "오전 1:17", avatar: "영" },
        { chatroomno: 7, name: "우리동네닭꼬치", lastMessage: "왕 수고하셨습니다", time: "어제", avatar: "무" },
        { chatroomno: 8, name: "수내역 5번 포차", lastMessage: "파일: [000] agile_2024-06-20.pdf", time: "어제", avatar: "수" },
        { chatroomno: 9, name: "폭탄닭꼬치", lastMessage: "https://www.erdcloud.com/d/6WcLPoprbjLq4Qm5t", time: "어제", avatar: "김" },
        { chatroomno: 10, name: "서대전", lastMessage: "아 약간 지금 저번에 막걸리 뽕임 컨디션 올라옴", time: "어제", avatar: "." },
        { chatroomno: 11, name: "강훈", lastMessage: "Css참고", time: "오전 1:17", avatar: "영" },
        { chatroomno: 12, name: "서리", lastMessage: "왕 수고하셨습니다", time: "어제", avatar: "무" },
        { chatroomno: 13, name: "너는 멍처이", lastMessage: "파일: [000] agile_2024-06-20.pdf", time: "어제", avatar: "수" },
        { chatroomno: 14, name: "나는 원숭이", lastMessage: "https://www.erdcloud.com/d/6WcLPoprbjLq4Qm5t", time: "어제", avatar: "김" },
        { chatroomno: 15, name: "월루", lastMessage: "아 약간 지금 저번에 막걸리 뽕임 컨디션 올라옴", time: "어제", avatar: "." }
    ];

    dummyChatRooms.forEach(function (chatRoom) {
        updateChatRoomList(chatRoom);
    });
}

function updateChatRoomList(chatRoomUpdate) {
    var chatroomList = document.getElementById('chatroom-list');

    var existingChatroom = document.getElementById('chatroom-' + chatRoomUpdate.chatroomno);
    if (existingChatroom) {
        existingChatroom.querySelector('.chatroom-last-message').innerText = chatRoomUpdate.lastMessage;
        existingChatroom.querySelector('.chatroom-time').innerText = chatRoomUpdate.time;
    } else {
        var chatroomItem = document.createElement('div');
        chatroomItem.id = 'chatroom-' + chatRoomUpdate.chatroomno;
        chatroomItem.className = 'chatroom-item';
        chatroomItem.innerHTML = `
                    <div class="chatroom-avatar">${chatRoomUpdate.avatar}</div>
                    <div class="chatroom-content">
                        <div class="chatroom-name">${chatRoomUpdate.name}</div>
                        <div class="chatroom-last-message">${chatRoomUpdate.lastMessage}</div>
                    </div>
                    <div class="chatroom-time">${chatRoomUpdate.time}</div>
                `;
        chatroomItem.onclick = function () {
            openChatRoom(chatRoomUpdate.chatroomno, userId, chatRoomUpdate.name, chatRoomUpdate.avatar);
        };
        chatroomList.appendChild(chatroomItem);
    }
}

function openChatRoom(chatroomno, sender, receiver, avatar) {
    const chatRoomModal = new bootstrap.Modal(document.getElementById('chatRoomModal'));
    const chatRoomModalLabel = document.getElementById('chatRoomModalLabel');
    const chatAvatar = document.getElementById('chat-avatar');
    chatRoomModalLabel.textContent = receiver;
    chatAvatar.textContent = avatar;
    chatRoomModal.show();

    // addDummyMessages를 통해 메시지 추가
    addDummyMessages();
}

function addDummyMessages() {
    var dummyMessages = [
        { sender: '홍길동', content: "이거했는데 하고도모르겠어서 찾아보는중 ㅋㅋㅋㅋㅋ", time: "오전 10:13" },
        { sender: 'userA', content: "응", time: "오전 10:13" },
        { sender: '홍길동', content: "이거 어떻게생겨먹은거야", time: "오전 10:14" },
        { sender: 'userA', content: "HttpSession session 하고", time: "오전 10:14" },
        { sender: 'userA', content: "session.getRemoteAttr 해서 IP 따고\n그걸로 비교 검증하는거 아님?", time: "오전 10:14" },
        { sender: 'userA', content: "한번 코드 보내줄래?\n나 이거", time: "오전 10:14" },
        { sender: '홍길동', content: "이거했는데 하고도모르겠어서 찾아보는중 ㅋㅋㅋㅋㅋ", time: "오전 10:15" }
    ];

    var chatMessagesContainer = document.getElementById('chat-messages');
    chatMessagesContainer.innerHTML = ''; // 초기화

    dummyMessages.forEach(function (message) {
        showMessage(message);
    });
}

function showMessage(message) {
    var messageElement = document.createElement('div');
    messageElement.className = 'chat-message ' + (message.sender === 'userA' ? 'sent' : 'received');
    messageElement.innerHTML = `
                <div class="message-content">
                    <div>${message.content.replace(/\n/g, '<br>')}</div>
                    <div class="chat-time">${message.time}</div>
                </div>
            `;
    document.getElementById('chat-messages').appendChild(messageElement);
    document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;
}

function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var messageContent = messageInput.value.trim();
    if (messageContent !== '') {
        var newMessage = {
            sender: 'userA',
            content: messageContent,
            time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: true })
        };
        showMessage(newMessage);
        messageInput.value = '';
    }
}

// 드래그 가능한 모달
function makeModalDraggable(modalId, modalHeaderId) {
    const modal = document.getElementById(modalId);
    const header = document.getElementById(modalHeaderId);

    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    header.onmousedown = function (e) {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        const rect = modal.getBoundingClientRect();
        initialLeft = rect.left;
        initialTop = rect.top;

        document.onmousemove = function (e) {
            if (isDragging) {
                const currentX = e.clientX;
                const currentY = e.clientY;
                const deltaX = currentX - startX;
                const deltaY = currentY - startY;
                modal.style.left = initialLeft + deltaX + 'px';
                modal.style.top = initialTop + deltaY + 'px';
                modal.style.position = 'absolute';
            }
        };

        document.onmouseup = function () {
            isDragging = false;
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}

document.addEventListener('DOMContentLoaded', function () {
    addDummyChatRooms();
    makeModalDraggable('chatRoomListModal', 'chatRoomListModalHeader');
    makeModalDraggable('chatRoomModal', 'chatRoomModalHeader');
});