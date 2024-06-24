package org.omsf.chatRoom.service;

import org.omsf.chatRoom.model.chat.ChatRoom;

import java.util.List;

/**
 * packageName    : org.omsf.chatRoom.service
 * fileName       : ChatService
 * author         : Yeong-Huns
 * date           : 2024-06-20
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-06-20        Yeong-Huns       최초 생성
 */
public interface ChatService {

    List<ChatRoom> findAllRoom();
    ChatRoom findById(String roomId);
    ChatRoom createRoom(String name);

}
