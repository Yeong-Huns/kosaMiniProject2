<%--
  Created by IntelliJ IDEA.
  User: KOSA
  Date: 2024-06-24
  Time: AM 2:34
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java"
         pageEncoding="UTF-8"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
    String contextPath = request.getContextPath();
%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/chat/chatHandler.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.0.2/sockjs.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script>
    <script src="${pageContext.request.contextPath}/js/chat/chatHandler.js"></script>
    <!-- JavaScript로 값을 전달하기 위해 HTML 내에서 변수를 설정 -->
    <c:set var="contextPath" value="${pageContext.request.contextPath}" />
    <c:set var="username" value="${pageContext.request.userPrincipal.name}" />
    <script>
        var contextPath = "${contextPath}";
        var username = null;

        <sec:authorize access="isAuthenticated()">
        username = "${username}";
        </sec:authorize>

        document.addEventListener("DOMContentLoaded", function() {
            console.log("인식된 유저이름 : " + username)
            initializeWebSocket(username, contextPath);
        });
    </script>
</head>
<body>
<!-- 종모양 알림을 위한 요소 -->
<div id="alarmDiv" style="visibility:hidden;">
    <ul id="alarmUL"></ul>
</div>

<!-- 채팅방 목록 모달 -->
<div class="modal fade" id="chatRoomListModal" tabindex="-1" aria-labelledby="chatRoomListModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content chatroom-container">
            <div class="modal-header chatroom-header" id="chatRoomListModalHeader">
                <h5 class="modal-title" id="chatRoomListModalLabel">채팅</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body chatroom-list" id="chatroom-list">
                <!-- 채팅방 리스트 표시 영역 -->
            </div>
        </div>
    </div>
</div>

<!-- 개별 채팅방 모달 -->
<div class="modal fade" id="chatRoomModal" tabindex="-1" aria-labelledby="chatRoomModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg chat-modal-dialog">
        <div class="modal-content chatroom-container">
            <div class="modal-header chatroom-header" id="chatRoomModalHeader">
                <div class="chat-avatar" id="chat-avatar"></div>
                <h5 class="modal-title" id="chatRoomModalLabel"></h5> <!-- Name dynamically updated here -->
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body chat-messages" id="chat-messages">
                <!-- 채팅 메시지 표시 영역 -->
            </div>
            <div class="modal-footer chat-footer">
                <input type="text" id="message-input" class="form-control message-input" placeholder="메시지를 입력하세요...">
                <button class="btn btn-primary send-button" onclick="sendMessage()">전송</button>
            </div>
        </div>
    </div>
</div>

<!-- 알람 아이콘 초기화 -->
<script>
    $(document).ready(function() {
        $('body').append('<i id="alarmIcon" class="fa fa-bell" style="font-size:24px; position: fixed; top: 10px; right: 10px; visibility: hidden;"></i>');
        console.log("알람 초기화 실행 ..")
    });
</script>
</body>
</html>
