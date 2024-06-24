package org.omsf.chatRoom.controller;

import lombok.RequiredArgsConstructor;
import org.omsf.chatRoom.model.SubscribeRequest;
import org.omsf.chatRoom.model.chat.ChatRoom;
import org.omsf.chatRoom.service.ChatService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * packageName    : org.omsf.chatRoom.controller
 * fileName       : ChatRoomController
 * author         : Yeong-Huns
 * date           : 2024-06-18
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-06-18        Yeong-Huns       최초 생성
 */
@RequiredArgsConstructor
@Controller
@RequestMapping("/chat")
public class ChatRoomController {
    private static final Logger log = LoggerFactory.getLogger(ChatRoomController.class);
    private final SimpMessagingTemplate messagingTemplate;
    private final ChatService chatService;



    @GetMapping("/room")
    public String rooms(){
        return "/chat/room";
    }
    // chat - main
    // 모든 채팅방 목록 반환
    @GetMapping("/rooms")
    @ResponseBody
    public List<ChatRoom> room() {
        return chatService.findAllRoom();
    }
    // 채팅방 생성
    @PostMapping("/room")
    @ResponseBody
    public ChatRoom createRoom(@RequestParam String name) {
        ChatRoom chatRoom = chatService.createRoom(name);
        // 새 채팅방이 생성되면 모든 클라이언트에 알림
        messagingTemplate.convertAndSend("/topic/chat/roomCreated", chatRoom);
        return chatRoom;
    }
    // 채팅방 입장 화면
    @GetMapping("/room/enter/{roomId}")
    public String roomDetail(Model model, @PathVariable String roomId) {
        model.addAttribute("roomId", roomId);
        return "/chat/roomdetail";
    }
    // 특정 채팅방 조회
    @GetMapping("/room/{roomId}")
    @ResponseBody
    public ChatRoom roomInfo(@PathVariable String roomId) {
        return chatService.findById(roomId);
    }

    // 테스트 폼
    @GetMapping("/test")
    public String testForm(){
        return "/chat/chatHandlerTest";
    }

    // 1 대 1 채팅방 개설 요청
    @MessageMapping("/chat/subRequest")
    public void subscribeToChatRoom(SubscribeRequest request){
        String combinedId = request.getSenderId() + request.getReceiverId();
        log.info("SenderId 💡💡💡💡💡💡 : {}", request.getSenderId());
        log.info("ReceiverId 💡💡💡💡💡💡 : {}", request.getReceiverId());
        log.info("combinedId 💡💡💡💡💡💡: {}", combinedId);
        messagingTemplate.convertAndSend("/topic/chat/" + request.getSenderId(), combinedId);
        messagingTemplate.convertAndSend("/topic/chat/" + request.getReceiverId(), combinedId);
    }

    // 스프링 시큐리티 현재 접속 사용자 정보 테스트
    @GetMapping("/getId")
    public void getTest(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String username = userDetails.getUsername();
        log.info("username: {}", username);
    }
}



