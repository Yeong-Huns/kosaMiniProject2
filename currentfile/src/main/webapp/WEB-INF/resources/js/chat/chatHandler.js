var stompClient = null;
var socket = null;
var currentPath = window.location.pathname;



function connectWebSocket(username, contextPath) {
    if (!username) {
        console.log("Username is not provided. WebSocket connection will not be established.");
        return;
    }
    socket = new SockJS(contextPath + '/ws/chat');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);

        // 개별 채널 구독
        //var encodedUsername = encodeURIComponent(username)
        console.log("인코딩 이름 : " + username)
        stompClient.subscribe('/topic/chat/' + username, function (message) {
            console.log('Received message for new channel: ' + message.body);
            subscribeToRoom(message.body);
        });
    }, function (error) {
        console.error('WebSocket error:', error);
        // 재연결 로직
        setTimeout(function() {
            connectWebSocket(username, contextPath);
        }, 10000); // 5초 후 재연결 시도
    });
}

function sendMessage(senderId, receiverId) {
    //encodedSenderId = encodeURIComponent(senderId);
    //encodedReceiverId = encodeURIComponent(receiverId);

    console.log("Encoded senderId: " + senderId)
    console.log("Encoded receiverId: " + receiverId)

    stompClient.send("/app/chat/subRequest", {}, JSON.stringify({senderId: senderId, receiverId: receiverId}));
}

function subscribeToRoom(channelId) {
    const channel = '/queue/chat/' + channelId;
    stompClient.subscribe(channel, function (message) {
        console.log('Received message in room: ' + message.body);
        handleReceivedMessage(JSON.parse(message.body));
    });
}

function handleReceivedMessage(message) {
    if (currentPath.endsWith("/chatList.jsp")) {
        // chatList.jsp에 있을 경우
        updateChatList(message);
    } else if (currentPath.endsWith("/chat.jsp")) {
        // chat.jsp에 있을 경우
        updateChatWindow(message);
    } else {
        // 다른 페이지에 있을 경우
        showNotification(message);
    }
}

function updateChatList(message) {
    // 채팅 목록 갱신 로직
    console.log('Update chat list with message:', message);
    // TODO: Add logic to update chat list
}

function updateChatWindow(message) {
    // 채팅 창 갱신 로직
    console.log('Update chat window with message:', message);
    // TODO: Add logic to update chat window
}

function showNotification(message) {
    // 알림 표시 로직
    console.log('Show notification with message:', message);
    let newAlarm = '<li scope="col">' + message.senderId + ': ' + message.content + "</li>";
    $('#alarmUL').append(newAlarm);
    $('#alarmDiv').css('visibility', 'visible');

    // 알림 아이콘을 화면 오른쪽 상단에 표시
    $('#alarmIcon').css('visibility', 'visible');
    sessionStorage.setItem('alarmVisible', 'true');

    // 알람 클릭 시 모달 창 열기
    $('#alarmIcon').on('click', function() {
        sessionStorage.setItem('alarmVisible', 'false');
        fetchChatRooms();  // DB에서 채팅방 목록을 불러옴
        $('#chatListModal').modal('show');  // 모달 창 띄우기
    });
}

function fetchChatRooms() {
    // DB에서 채팅방 목록을 불러오는 로직
    fetch('/chat/rooms')
        .then(response => response.json())
        .then(data => {
            console.log('Chat rooms fetched:', data);
            // 이 부분은 모달에서 채팅방 목록을 갱신하는 로직을 추가합니다.
            // 예: $('#chatListContent').html(renderChatRooms(data));
        })
        .catch(error => console.error('Error fetching chat rooms:', error));
}

function initializeWebSocket(username, contextPath) {
    if (username) {
        connectWebSocket(username, contextPath);
    } else {
        console.log("로그인 상태가 아닙니당.");
        logout();
    }

    // 페이지 로드 시 세션 스토리지에 저장된 알림 상태 확인
    if (sessionStorage.getItem('alarmVisible') === 'true') {
        $('#alarmIcon').css('visibility', 'visible');
    }
}

function disconnectWebSocket() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    console.log("Disconnected");
}

function logout() {
    fetch('/logout', {
        method: 'POST'
    })
        .then(response => {
            if (response.ok) {
                sessionStorage.removeItem('username');
                sessionStorage.removeItem('alarmVisible');
                localStorage.removeItem('token');
                disconnectWebSocket();
                window.location.href = '/';
            } else {
                throw new Error('Logout failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// 알람 아이콘 초기화
$(document).ready(function() {
    $('body').append('<i id="alarmIcon" class="fa fa-bell" style="font-size:24px; position: fixed; top: 10px; right: 10px; visibility: hidden;"></i>');
});
