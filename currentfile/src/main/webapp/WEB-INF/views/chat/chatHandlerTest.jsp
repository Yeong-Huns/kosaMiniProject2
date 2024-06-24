<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%--
  Created by IntelliJ IDEA.
  User: KOSA
  Date: 2024-06-24
  Time: AM 4:11
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ include file="../chat/chatHandler.jsp" %>
<!DOCTYPE html>
<html>

<head>
    <title>Chat Room List</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

</head>

<body>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#chatRoomListModal" onclick="startChat()">
    채팅 시작
</button>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
<!-- JavaScript로 값을 전달하기 위해 HTML 내에서 변수를 설정 -->
<c:set var="username" value="${pageContext.request.userPrincipal.name}" />

<script type="text/javascript">
        var receiverId = "sonjoung@gmail.com";
        var senderId = "${username}"; // JSP 태그를 통해 값 할당

        document.addEventListener("DOMContentLoaded", function() {
                console.log("Sender ID: " + senderId); // 디버깅 로그 추가
                console.log("Receiver ID: " + receiverId);
        });

        function startChat() {
                sendMessage(senderId, receiverId);
        }
</script>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

</body>

</html>
